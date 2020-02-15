const sequelize = global.sequelize;
module.exports = class Question {
    constructor(model, models) {
        this.models = models;
        this.model = model;
    }

    async createQuestion(data) {
        let question = await this.model.create(data)
        question = question.get({ plain: true });
        return question
    }

    async getAllQuestions(portalToken) {
        let portalId = await this.models.Portals.findOne({raw: true,attributes: ['id'], where: {token: portalToken}})
        let questions = await this.models.Questions.findAll({
            attributes: ['id', 'question', 'time'],
            required: true,
            where: {
                portalId: portalId.id
            },
            include: [{
                required: true,
                as: 'nickss',
                model: this.models.Nicknames
            }, {
                model: this.models.Nick_likes,
                as: 'questionManyLikes',
            }],
            order: [[sequelize.literal('Questions.time'), 'ASC']],
        })

        questions = questions.reduce((arr, question) => {
            const nickss = question.get('nickss', {plain: true});
            const questionManyLikes = question.get('questionManyLikes', {plain: true});
            const tmp = { 
                id: question.id,
                time: question.time,
                question: question.question,
                nickss,
                questionManyLikes: null
            };

            if(questionManyLikes.length) {
                const length = questionManyLikes.length;
                const questionLikers = [];
                questionManyLikes.forEach(item => {
                    questionLikers.push(item.nicknameId)
                })
                tmp.questionLikers = questionLikers;
                tmp.questionManyLikes = length
                arr.push(tmp)
                return arr
            } else {
                tmp.questionLikers = [];
                arr.push(tmp)
                return arr
            }
        }, [])
        return questions;
    }

    async getTop10(portalId) {
        const getTop10 = await this.model.findAll({
            attributes: [[sequelize.fn('count', sequelize.col(`questionManyLikes.questionId`)), 'likeTotal'], 'id', 'question'],
            required: true,
            where: {
                portalId
            },
            include: [{
                required: true,
                as: 'nickss',
                model: this.models.Nicknames
            }, {
                model: this.models.Nick_likes,
                as: 'questionManyLikes',
                attributes:[]
            }],
            group: ['Questions.id'],
            order: sequelize.literal('likeTotal DESC'),
            limit: 10,
            subQuery: false
        });
        return getTop10;
    }

    async deleteQuestion(id) {
        let question = await this.model.destroy({ where: { id: id } })
        return question;
    }
}