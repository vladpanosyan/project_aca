const URLToken = require('./../HELPERS/utils/JWT')
const AppError = require ('./../HELPERS/ErrorHandling/AppError')

class Portals { 
    constructor(portalDal, logger) {
        this.portalDal = portalDal
        this.logger    = logger;
    }
    async createPortal(data) {
        const token = new URLToken({id: data.userId, start: data.start}).createTokenForURL();
        data.token = token;
        let portal = await this.portalDal.createPortal(data)
        if (portal) {
            return portal
        } else {
            this.logger.info('portal not creted')
        } 
    }

    async startPortal(id, token) {
        const isStarted = await this.portalDal.startPortal(id, token);
        if (isStarted) {
            return isStarted;
        } else throw new AppError('action failed ,see cause', 'event has been started or ended or wrong credentials')
    }

    async getAll() {
        let portal = await this.portalDal.getAll();
        if (portal) {
            return portal 
        } else {
            throw new Error('PORTAL NOT EXIST')
        } 
    }

    async getUserPortals(userId) {
        let portal = await this.portalDal.getUserPortals(userId);
        if (portal) {
            return portal
        } else {
            throw new Error('PORTAL NOT EXIST')
        } 
    }

    async getActivePortal(userId) {
        const activePortal = await this.portalDal.getActivePortal(userId);
        if(activePortal) {
            return activePortal;
        } 
        return {
            message: 'Active Portal not exist'
        }
    }

    async getCurrentPortal(token) {
        const currPortal = await this.portalDal.getCurrentPortal(token);
        if (currPortal) {
            return currPortal[0];
        } else {
            throw new Error('portal not exist');
        }
    }

    async deleteById(id) {
        let deletedPortal = await this.portalDal.deletePortal(id)
        if(deletedPortal) {
            return deletedPortal
        } else {
            this.logger.info('portal not found for deleting')
        }
    }

    async checkToken(data) {
        const isValid = await this.portalDal.checkToken(data);
        if (isValid) {
            return {
                ok: 'exist',
                textContent: 'Right Token'
            };
        } else {
            return {
                ok: null, 
                textContent: 'Wrong Token'
            }
        }
    }

    async getPortalStatus(token) {
        let portalStatus = await this.portalDal.getPortalStatus(token);
        if (portalStatus) {
            return portalStatus;
        } else {
            throw new Error("No Portal Portal POrtal .........");
        }
    }

    async finishPortal(portalId) {
        const isFinished = await this.portalDal.finishPortal(portalId);
        return isFinished;
    }

    async addToOnline(portalId) {
        const isAdded = await this.portalDal.addToOnline(portalId);
        return isAdded;
    }

   async AddToOutline(portalId) {
        const isRemoved = await this.portalDal.AddToOutline(portalId);
        return isRemoved;
    }
    async getPortalIdFromToken(token) {
        const portalId = await this.portalDal.getPortalIdFromToken(token)
        if(portalId) {
            return portalId.id;
        }
        return;
    }
}

module.exports = Portals