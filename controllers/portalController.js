    class PortalController {
    constructor(portalService, logger) {
        this.portalService = portalService;
        this.logger = logger;
    }
    // find
    async getAll(request, response) {
        try{
            let portals = await this.portalService.getAll();
            response.json(portals);
        }
        catch(e) {
            this.logger.error(`${e.message} - ${e.stack}`);
            next(e.message);
        }
    }

    // get specificc user portals
    async getUserPortals(request, response) {
        try{
            const { userId } = request.body;
            let portals = await this.portalService.getUserPortals(userId);
            response.json(portals);
        }
        catch(e) {
            this.logger.info(e.message);
            this.logger.error(e.message);
            next(e.message);
        } 
    }

    //create 
    async createPortal(request, response) {
        const io = request.app.get("io");       
        const portalData = request.body;
        const portal = await this.portalService.createPortal(portalData);
        response.json(portal);
        io.emit('showPortals')
    }

    // delete by id
    async deletePortal(request, response) {
        const portalId = await this.portalService.deleteById(request.params.id)
        if (portalId) {
            response.status(200).end(`portalId in id - ${portalId.id} has deleted`)
        } else {
            this.logger.error('User not found for deleting')
            response.status(404).end('User not found for deleting')
        }
    }

    // start
    async startPortal(request, response) {
        try {
            const token = request.params.token;
            const portalId = request.body.id;
            const isStarted = await this.portalService.startPortal(portalId, token);
            response.json({success: 'ok', isStarted})
            
        } catch (error) {
            this.logger.error(error.message);
            this.logger.info(error.message);
            response.status(500).send({error: error.message})
        }
    }
    // active
    async getActivePortal(request, response) {
        try {
            const userId = request.params.userId;
            const activePortal = await this.portalService.getActivePortal(userId);
            response.json(activePortal)
        } catch (error) {
            this.logger.error(error.message);
            this.logger.info(error.message);
            response.status(500).json({error: error.message})
        }
    }

    async getCurrentPortal(request, response) {
        try {
            const currentPortal = await this.portalService.getCurrentPortal(request.params.token);
            response.json(currentPortal)
        } catch (error) {
            this.logger.error(error.message);
            this.logger.info(error.message);
            response.status(500).send({error: error.message})
        }
    }

    // check subscribers permision 
    async checkToken(request, response) {
        try {
            const data = request.body;
            const isValid = await this.portalService.checkToken(data);
            response.json(isValid)
            
        } catch (error) {
            this.logger.error(error.message);
            this.logger.info(error.message);
            response.status(501).json({error: error.message})
        }
    } 
    // get portal status for guards
    async getPortalStatus(request, response, next) {
        const { token } = request.body;
        try {
            const status = await this.portalService.getPortalStatus(token);
            response.json(status);

        } catch (error) {
            this.logger.error(error.message);
            this.logger.info(error.message);
            next(error)
        }
    }
    async getPortalId(request, response) {
        const token = request.params.token;
        try {
            const portalId = await this.portalService.getPortalIdFromToken(token);
            return portalId;
        } catch (error) {
            this.logger.info(error.message);
            this.logger.error(error.message);
            next(error)
        }
    }
}

module.exports = PortalController
