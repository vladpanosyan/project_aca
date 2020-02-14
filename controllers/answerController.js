class AnswerController {
    constructor(answerService) {
        this.answerService = answerService
    }
    // find
    async getAll(request, response) {
        try{
            const portalId = request.params.portalId;
            let answers = await this.answerService.getAllAnswers(portalId)
            response.json(answers)
        }
        catch(e) {
            this.logger.info(e.message); // amena lav error handlingi tex@
            this.logger.error(e.message); // amena lav error handlingi tex@
        }
    }

    //create 
    async createAnswer(request, response) {
        const answerId = await this.answerService.createUser()
        response.json(answerId)
    }

    // delete by id
    async deleteAnswer(request, response) {
        console.log(request.params.id)
        const answerId = await this.answerService.deleteById(request.params.id)
        if (answerId) {
            response.status(200).end(`answerId in id - ${answerId.id} has deleted`)
        } else {
            this.logger.info(e.message);
            this.logger.error('User not found for deleting')

        }
    }
}

module.exports = AnswerController
