class NicknameController {
    constructor(nicknameService) {
        this.nicknameService = nicknameService
    }
    //create 
    async createNickname(request, response, next) {
        const data = request.body;
        try {
            const nickname = await this.nicknameService.createNickname(data);
            response.json(nickname)
            
        } catch (error) {
            this.logger.error(`${error.message} - ${error.stack}`);
        }
    }
    // find
    async showResult(request, response, next) {
        
        try{
            let nicknames = await this.nicknameService.getAllNicknames()
            response.json({ nicknames: nicknames })
        }
        catch(e) {
            this.logger.error(`${e.message} - ${e.stack}`);
            next(e.message)
        }
    }


    // delete by id
    async deleteNickname(request, response, next) {
        const nicknameId = await this.nicknameService.deleteById(request.params.id)
        if (nicknameId) {
            response.status(200).end(`nicknameId in id - ${nicknameId.id} has deleted`)
        } else next('Nickname not found for deleting')
    }

    //is LoggedIn for click in cover component
    async isLogged(request, response) {
        const { nickToken, portalId } = request.body;
        const data = await this.nicknameService.isLogged(nickToken, portalId);
        if (data) {
            response.json(data);
        } else {
            response.status(200).send(false);
        }
    }

    // canactivate for guards
    async canactivate(request, response) {
        const { portalToken, nickToken } = request.body;
        const data = await this.nicknameService.canactivate(portalToken, nickToken);

        if (data) {
            response.json(data);
        } else if (data === null) {
            response.json(null)
        }else {
            response.status(200).send(false);
        }
    }

    // update nick avatar
    async changeAvatar(request, response) {
        const io = request.app.get("io");   
        const changesData = request.body;
        const data = await this.nicknameService.changeAvatar(changesData);
        if (data) {
            response.json(data);
        } else {
            response.status(401).send("not updated")
        } 
    }
}

module.exports = NicknameController
