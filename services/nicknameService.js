const JWT = require('./../HELPERS/utils/JWT');

class Nicknames {
    constructor(nicknameDal, logger) {
        this.nicknameDal = nicknameDal;
        this.logger      = logger;
    }
    async createNickname(data) { // ste hnaravora token.verify hamar vercvi try catch mej, ete frontic hankarc sxal nicktoken ga
        data.image = process.env.NICK_USER_DEFAULT_IMAGE;
        let nickname = await this.nicknameDal.createData(data);

        if (nickname) {
            if (data.nickToken) {
                const payload = new JWT().verifyToken(data.nickToken);
                payload.datas[nickname.portalId] = nickname.id;
                const newToken = new JWT(payload).createToken();
                nickname.token = newToken;
                return nickname;
            } else {
                const { id, name } = nickname;
                const datas = {};
                datas[nickname['portalId']] = id;
                console.log(datas, 333111);
                let payload = { id, name, datas };
                const tokenObj = new JWT(payload);
                const token = tokenObj.createToken();
                nickname.token = token;
                return nickname;
            }
        } else {
            this.logger.info('nickname not creted');
        }
    }
    async getAllNicknames() {
        let nickname = await this.nicknameDal.getAll();
        if (nickname) {
            return nickname;
        } else {
            throw new Error('USER NOT EXIST')
        }
    }
    async deleteById(id) {
        let deletedNickname = await this.nicknameDal.deleteUser(id);
        if (deletedNickname) {
            return deletedNickname;
        } else {
            this.logger.info('nickname not found for deleting')
        }
    }

    // check if subscriber anytime accessed to any portal
    async isLogged(token, portalId) {
        try {
            const tokenObj = new JWT();
            const nickObj = tokenObj.verifyToken(token);
            const currentNicId = nickObj.datas[portalId];
            if ( !currentNicId ) {
                return {
                    currentNicId: false
                }
            } else {
                const nickData = await this.nicknameDal.getNickData(currentNicId);
                nickData.currentNicId = !!currentNicId;
                return nickData;
            }
        } catch (error) {
            this.logger.error(`${error.message} - ${error.stack}`);
            return;
        }
    } 
    // used for nick guard
    async canactivate(portalToken, nickToken) {
        try {
            const payload = new JWT().verifyToken(nickToken);
            const portalId = await this.nicknameDal.getPortalId(portalToken);
            const nickId = payload.datas[portalId.id];
            if (nickId) {
                const nickData = await this.nicknameDal.getNickData1(nickId, portalId.id); 
                return nickData;
            } else {
                return Promise.resolve(null);
            }
        } catch (error) {
            this.logger.error(`${error.message} - ${error.stack}`);
            return;
        }
    }
    async changeAvatar(data) {
        const updatedData = await this.nicknameDal.changeAvatar(data);
        return updatedData;
    }
}

module.exports = Nicknames