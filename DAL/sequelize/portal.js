module.exports = class Portal {
    constructor(model) {
        this.model = model
    }

    async createPortal(data) {
        let portal = await this.model.create(data)
        return portal
    }

    async startPortal(id, token) {
        let portalStarted = await this.model.update(
            {isStarted: 1},
            {where: {id, token}}
            )
            console.log(portalStarted, 523);
        if (portalStarted[0]) return true;
        return;
    }

    async getAll() {
        let portals = await this.model.findAll({
            where: {
                isFinished: 0
            }
        })
        return portals;
    }

    async getUserPortals(userId) {
        let portals = await this.model.findAll({
            where: {
                userId
            }
        })
        return portals;
    }

    async getActivePortal(userId) { // ste usumnasiri te vorna active portal
        console.log(userId, 5555555555)
        const activePortal = await this.model.findAll({
            raw: true,
            where: {
                isStarted: 1,
                isFinished: 0,
                userId
            }
        });
        // console.log(t, 636363)
        return activePortal;
    }

    async checkToken(data) {
        const isValid = await this.model.findAll({
            raw: true,
            where: {
                id: data.portalId,
                token: data.token
            }
        });
        console.log(isValid, 7777777)
        if (isValid.length) {
            return true;
        }
        return;
    }

    async deletePortal(id) {
        let portal = await this.model.destroy({ where: { id: id } })
        return portal;
    }
    //
    async getPortalStatus(token) {
        let portalData = await this.model.findAll({
            raw: true,
            attributes: ["id", "token", "private"],
            where: {
                token: token,
                isFinished: 0,
                isStarted: 1
            }
        })
        if (portalData.length) {
            return portalData[0]
        }
        return;
        // console.log(portalStatus, 8888888888);
    }

    async finishPortal(portalId) {
        const isFInished = await this.model.update(
        {isFinished: 1},
        { where: {id: portalId}}
        );
        return isFInished[0];
    }
}