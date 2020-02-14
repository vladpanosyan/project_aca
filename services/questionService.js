class Questions {
    constructor(questionDal) {
        this.questionDal = questionDal
    }
    async createQuestion(data) {
        let question = await this.questionDal.createQuestion(data)
        if (question) {
            return question
        } else {
            this.logger.info('question not creted')
        } 
    }

    async getAllQuestions(portalToken) {
        let questions = await this.questionDal.getAllQuestions(portalToken);
        if (questions) {
            return questions
        } else {
            throw new Error('PORTAL NOT EXIST')
        } 
    }
    async deleteById(id) {
        let deletedQuestion = await this.questionDal.deleteQuestion(id)
        if(deletedQuestion) {
            return deletedQuestion
        } else {
            this.loger.info('question not found for deleting')
        }
    }

    async getTop10(portalId) {
        const getTop10 = await this.questionDal.getTop10(portalId);
        return getTop10;
    }
}

module.exports = Questions