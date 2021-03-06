class Answers {
    constructor(answerDal) {
        this.answerDal = answerDal;
    }
    async addAnswer(data) {
        let answer = await this.answerDal.createaAnswer(data);
        if (answer) {
            return answer;
        } else {
            this.logger.info('answer not creted');
        }
    }
    async getCurrentAnswer(answerId) {
        const answer = this.answerDal.getCurrentAnswer(answerId);
        if(answer) {
            return answer;
        } else {
            this.logger.info('answer not creted');
        }
    }

    async getAllAnswers(portalId) {
        let answer = await this.answerDal.getAllAnswers(portalId);
        if (answer) {
            return answer
        } else {
            throw new Error('answers NOT EXIST')
        }
    }
    async deleteById(id) {
        let deletedAnswer = await this.answerDal.deleteAnswer(id);
        if (deletedAnswer) {
            return deletedAnswer;
        } else {
            this.logger.info('answer not found for deleting')
        }
    }
}

module.exports = Answers