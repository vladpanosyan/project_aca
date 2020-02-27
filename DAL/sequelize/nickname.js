
module.exports = class Nickname {
    constructor(model, models) {
        this.model = model,
        this.models = models
    }

    async createData(data) {
        try {
            let nickname = await this.model.create({ name: data.nickName, portalId: data.portalId, image: data.image });
            nickname = nickname.get({ plain: true });
            return nickname
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                return {
                    ok: null,
                    textContent: error.errors[0].message
                }
            }
        }
    }

    async getAll() {

        let nicknames = await this.model.findAll({
            include: [{
                model: this.models.Portals,
                include: [{
                    model: this.models.Users,
                    where: {
                        firstName: 'bbbb'
                    }
                }]
            }]
        })
        return nicknames;
    }

    // get nick by id
    async getNickData(id) {
        return this.model.findByPk(id, {
            raw: true,
        });
    }

    //
    async getNickData1(nickId, portalId) {
        return this.model.findOne({
            required: true,
            where: {
                id: nickId,
                portalId
            },
            attributes: ['id', 'name', 'image', 'portalId', [sequelize.fn('count', sequelize.col(`Nicknames.portalId`)), 'questionsInPortal']],
            include: [{
                required: true,
                as: 'nickToPortal',
                model: this.models.Portals,
                include: [{
                    required: true,
                    model: this.models.Users,
                    as: "portalToUser",
                    attributes: ['firstName', 'img'] 
                }, {
                    as: 'portalManyQuestion',
                    model: this.models.Questions,
                    required: true,
                    attributes: []
                }]
            }]
        })
    }
    // get portalId using portalToken
    getPortalId(portalToken) {
        return this.models.Portals.findOne({
            raw: true,
            attributes: ['id'],
            where: {
                token: portalToken
            }
        });
    }

    async deleteUser(id) {
        let nickname = await this.model.destroy({ where: { id: id } })
        return nickname
    }

    async changeAvatar(data) {
        const isUpdated = await this.model.update({
            image: data.avatar
        },{
            where: {
            id: data.nickId, 
            portalId: data.portalId
            }
        })
        if (isUpdated[0]) return true;
        return;
    }

}