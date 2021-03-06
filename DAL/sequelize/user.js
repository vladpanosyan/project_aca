const AppError = require('./../../HELPERS/ErrorHandling/AppError')

module.exports = class User { 
    constructor(model, models) {
        this.model = model;
        this.models = models;
    }

    async createData(data) {
        try {
            data.password = await this.models.Users.generateHash(data.password)
            let user = await this.model.create(data)
            user = user.get({plain: true})
            delete user['password'];
            delete user['email'];
            return user;
        } catch (error) {
            if(error.name === "SequelizeUniqueConstraintError") {
                throw new AppError(error.errors[0].message, error)
            } else {
                throw new AppError(error.message, error)
            }
        }
    }
    async getAll() {
        let users = await this.model.findAll();
        return users;
    }
    async getByUserId(id) {
        let user = await this.model.findByPk(id, {
            attributes: ['id', 'firstName', 'LastName', 'img', 'time']
        })
        return user;
    }

    async getUserByEmail(data) {
        let user = await this.model.findAll({
            raw: true,
            where: {
                email: data.username
            },
            attributes: ['id', 'firstName', 'LastName', 'img', 'time', 'password', 'activated']
        });
        
        if(user.length) {
            const isValid = await this.models.Users.validPassword(data.password, user[0].password);
            if(isValid) return user[0];
        }
        return;
    }

    async isExistUser(profile) {
        const { email, firstName, lastName, photoUrl } = profile;
        const user = await this.models.Users.findOrCreate({
            attributes: ['id', 'firstName', 'lastName', 'img', 'time', 'email'],
            raw: true,
            where: { email }, defaults: {
                firstName: firstName,
                lastName: lastName,
                img: photoUrl || process.env.USER_DEFAULT_IMAGE,
            }
        })
        return user[0]
    }

    async deleteUser(id) {
        let user = await this.model.destroy({where: {id: id}})
        return user
    }
    async updatedUser(id, data, fields = []) {
        let updatedUser = await this.model.update(
            data,
             {
                fields:fields.length ? field : null,
                where: {id}
            })
        return !!updatedUser[0]
    }

    async checkEmail(email) {
        const userData = await this.model.findAll({
            where: {
                email
            }
        })

        if(userData.length) {
            const activated = await this.model.update({
             activated: 1
            }, {
                where: {email}
            });
            return !!activated[0];
        } 
        return null;
    }
}