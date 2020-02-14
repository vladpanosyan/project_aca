class QuestionController {
    constructor(questionService) {
        this.questionService = questionService
    }
    // find
    async getAll(request, response) {
        try{
            const portalToken = request.params.token
            let questions = await this.questionService.getAllQuestions(portalToken)
            response.json( questions )
        }
        catch(e) {
            this.loger(`${e} - ${e.message}`) /// amena lav error handlingi tex@
            response.status(400).send({
                success: "fail",
                message: "questions not found, false portal adress"
            })
        }
    }

    //create 
    async createQuestion(request, response) {
        const questionId = await this.questionService.createUser()
        response.json(questionId)
    }

    // delete by id
    async deleteQuestion(request, response) {
        console.log(request.params.id)
        const questionId = await this.questionService.deleteById(request.params.id)
        if (questionId) {
            response.status(200).end(`questionId in id - ${questionId.id} has deleted`)
        } else {
            this.logger.info('User not found for deleting')
        }
    }

    async getTop10(request, response) {
        try {
            const portalId = request.params.portalID;
            const top10 = await this.questionService.getTop10(portalId);
            response.json(top10);
        } catch (error) {
            this.logger.error(`${error.message} - ${error.stack}`);
        }
    }
}
module.exports = QuestionController