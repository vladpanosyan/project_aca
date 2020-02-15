const AppError = require('./../HELPERS/ErrorHandling/AppError');
const JWT = require('./../HELPERS/utils/JWT');
const sendMailer = require('./../HELPERS/utils/sendmailer');

class Users {
    constructor(userDal, logger) {
        this.userDal = userDal;
        this.logger  = logger;
    }
    async createUser(data) {
        try {
            data.img = process.env.USER_DEFAULT_IMAGE;
            let user = await this.userDal.createData(data)
            if (user) {
                const payload = {};
                ({id: payload.id, firstName: payload.firstName, lastName: payload.lastName} = user);
                const tokenObj = new JWT(payload, {expiresIn: 60 * 60});
                const token = tokenObj.createToken();
                user.access_token = token;
                return user
            } else {
                this.logger.error(`${user} -> inside createUser(Service) `)
            }
            
        } catch (error) {   
            this.logger(`${error.message} from-> userService`)
            throw new AppError(error.message, error)
        }
    }
    
    async getUserById(id) {
        let user = await this.userDal.getByUserId(id)
        return user;
    }

    // login
    async getUserByEmail(data) {
        let user = await this.userDal.getUserByEmail(data)
        if(user) {
            const payload = {};
            ({id: payload.id, firstName: payload.firstName, lastName: payload.lastName} = user);
            const tokenObj = new JWT(payload, {expiresIn: 60 * 60});
            const token = tokenObj.createToken();
            user.access_token = token;
            delete user.password;
            return user;
        }
        return;
    }

    // check token for authorization or authentication
    checkTokenValid(access_token) {
        try {
            const tokenObj = new JWT();
            return tokenObj.verifyToken(access_token);zz
        } catch (error) {
            return;
        }
    }

    // Other
    generateTokenForSocila(payload) {
        const tokenObj = new JWT(payload, {expiresIn: 60 * 60});
        const token = tokenObj.createToken(); 
        return token;
    }

    // send Email to ...
    async sendMail(emailArr, portalURL) {
        try {
            const info = await sendMailer(emailArr, portalURL);
            return info;
        } catch (error) {
            this.logger.error(error);
           return error.message; 
        }
    }

}

module.exports = Users