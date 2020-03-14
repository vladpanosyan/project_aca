const logger = require('./../logger/ErrorLog')
module.exports = async (socketIo) => {
    const { SERVICES } = await require('../../app_init/dal_service_init')();
    socketIo.on('connection', socket => {
        try { 
            // socket.on('disconnect', (r) => console.log(r))

            socket.on('connected', async (nickData) => {
                const { Portals } = SERVICES;
                const isAdded = await Portals.addToOnline(nickData.portalId);
                if (isAdded) {
                    socketIo.emit('add_to_online', nickData.portalId)
                }
            })
    
            socket.on('disconected', async (nickData) => {
                const { Portals } = SERVICES;
                const isRemoved = await Portals.AddToOutline(nickData.portalId);
                if (isRemoved) {
                    socket.leave(nickData.portalId)
                    socketIo.emit('remove_to_online', nickData.portalId)  
                }
            })
    
            socket.on('joinRoom', room => {
                socket.join(room);
            })

            socket.on('send_message', async (nickData) => { 
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
                socketIo.to(nickData.portalId).emit('message', nickResponseMessage)
    
            })
    
            socket.on('send_question', async ({portalId, ...message}) => {
                const { Answers } = SERVICES;
                const answer = await Answers.addAnswer(message);
                const id = answer.id;
                const fullAnswer = await Answers.getCurrentAnswer(id);
                socketIo.to(portalId).emit('answ_message', fullAnswer);
            })
    
            socket.on("get_likes_count", (data, action) => {
                socketIo.to(data.portalId).emit("sendLikesCount", data);
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
            
        } catch (error) {
            logger.error(error.message)
            logger.info(error.message)
        }
    })
}