module.exports = async (socketIo) => {
    const { SERVICES } = await require('../../app_init/dal_service_init')();
    socketIo.on('connection', socket => {
        socket.on('connected', async (nickData) => {
            const { Portals } = SERVICES;
            console.log(nickData.portalId, 1231223132)
            const isAdded = await Portals.addToOnline(nickData.portalId);
            if (isAdded) {
                socketIo.emit('add_to_online', nickData.portalId)
            }
        })

        socket.on('disconected', async (nickData) => {
            const { Portals } = SERVICES;
            const isRemoved = await Portals.AddToOutline(nickData.portalId);
            if (isRemoved) {
                socketIo.emit('remove_to_online', nickData.portalId)
            }
        })

        socket.on('curr_nick', (nickName) => {
            console.log(nickName, 88888888)
        })


        socket.on('send_message', async (nickData) => { 
            console.log(nickData, 777777777)
            const { Questions } = SERVICES;
            const questionData = {
                question: nickData.message,
                time: nickData.time,
                nicknameId: nickData.id,
                portalId: nickData.portalId
            }
            const questionResponseData = await Questions.createQuestion(questionData);
            delete nickData['message'];
            delete nickData['time'];
            delete questionResponseData['portalId'];
            delete questionResponseData['nicknameId'];
            const nickResponseMessage = { ...questionResponseData, nickss: nickData }
            socketIo.emit('message', nickResponseMessage)

        })

        socket.on('send_question', async (message) => {
            // console.log(message, 774411)
            const { Answers } = SERVICES;
            const answer = await Answers.addAnswer(message);
            const id = answer.id;
            const fullAnswer = await Answers.getCurrentAnswer(id);
            socketIo.emit('answ_message', fullAnswer);
        })

        //get likes count
        socket.on("get_likes_count", (data, action) => {
            console.log(data, action, 5555555)
            socketIo.emit("sendLikesCount", data);
            const { Nick_likes } = SERVICES;
            if (action === "plus") {
                Nick_likes.addLike(data.nicknameId, data.questionId)
            } else {
                Nick_likes.deleteLike(data.nicknameId, data.questionId)
            }
        })

        socket.on("fin_portal", async portalId => {
            const { Portals } = SERVICES;
            const isFinished = await Portals.finishPortal(portalId);
            if (isFinished) {
                socketIo.emit("portal_end", { isFinished, portalId })
            }
        })

        socket.on('apdateAvatars', data => {
            socket.broadcast.emit('upadateAvatar', data)
        })

        socket.on('refreshStartedPortal', portalId => {
            socket.broadcast.emit('startedCurrentPortal', portalId)
        })
    })
}