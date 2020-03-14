const AppError = require('./../HELPERS/ErrorHandling/AppError')
<<<<<<< HEAD
const {
    userValidation,
    userLoginValidation,
    userSendMailValidation
} = require('./../HELPERS/validation/userValidation');
=======
>>>>>>> google login
const axios = require('axios');
const {
  userValidation,
  userLoginValidation,
  userSendMailValidation
} = require('./../HELPERS/validation/userValidation');

class UserController {
<<<<<<< HEAD
    constructor(userService, logger) {
        this.userService = userService,
            this.logger = logger
    }

    //create 
    async createUser(request, response, next) {
        try {
            const user = request.body;
            const isValidUserData = userValidation(request.body)
            if (isValidUserData.error === null) {
                const userData = await this.userService.createUser(user)
                response.json(userData)
            } else {
                response.json({
                    userData: 'notvalid'
                })
            }

        } catch (error) {
            this.logger.error(`${error.message} - ${error.stack}`)
            response
                .status(501)
                .json({
                    userData: 'no_user_data'
                })
        }
    }

    async userLogin(request, response) {
        try {
            const loginData = request.body;
            const isValidLoginData = userLoginValidation(loginData);
            if (isValidLoginData.error === null) {
                const user = await this.userService.getUserByEmail(loginData);
                if (user) {
                    response.json(user);
                } else {
                    this.logger.info('user not found in db-> UserLogin(controller)');
                    response
                        .status(404)
                        .json({
                            loginData: 'incorrect email or password'
                        })
                }
            } else {
                this.logger.info('not valid user credentials');
                response
                    .status(401)
                    .json({
                        loginData: 'Not Valid'
                    })
            }
        } catch (error) {
            this.logger.error(`${error.message}`);
            response
                .status(501)
                .json({
                    userData: 'login data incorrect'
                })
        }
    }
=======
  constructor(userService, logger, ) {
    this.userService = userService,
      this.logger = logger
  }
>>>>>>> google login

  //create 
  async createUser(request, response, next) {
    try {
      const user = request.body;
      const isValidUserData = userValidation(request.body)
      if (isValidUserData.error === null) {
        const userData = await this.userService.createUser(user)
        response.json(userData)
      } else {
        response.json({
          userData: 'notvalid'
        })
      }

    } catch (error) {
      this.logger.error(`${error.message} - ${error.stack}`)
      response
        .status(501)
        .json({
          userData: 'no_user_data'
        })
    }
  }

  async userLogin(request, response) {
    try {
      const loginData = request.body;
      const isValidLoginData = userLoginValidation(loginData);
      if (isValidLoginData.error === null) {
        const user = await this.userService.getUserByEmail(loginData);
        if (user) {
          response.json(user);
        } else {
<<<<<<< HEAD
            this.logger.error('User not found by Id -> (userController)');
            response.status(404).send('User not found by Id');
        }

=======
          this.logger.info('user not found in db-> UserLogin(controller');
          response
            .status(404)
            .end('Not found user')
        }
      } else {
        this.logger.info('not valid user credentials');
        response
          .status(401)
          .json({
            loginData: 'Not Valid'
          })
      }
    } catch (error) {
      this.logger.error(`${error.message} -> JWT trown error; userLogin (userController)`)
      response
        .status(501)
        .json({
          userData: 'login data incorrect'
        })
>>>>>>> google login
    }
  }

<<<<<<< HEAD
    // check FC auth login
    async facebookAuthCheck(request, response, next) {
        if (!request.user) {
            response.status(404).send('user not found Bro');
        }
        const payload = {
            id: request.user.id,
            firstName: request.user.firstName,
            lastName: request.user.lastName
        }
        const access_token = this.userService.generateTokenForSocila(payload);
        request.user.access_token = access_token;
        response.json(request.user);
=======
  // check token 

  checkTokenValid(request, response) {
    const { accessToken } = request.body;
    const isValid = this.userService.checkTokenValid(accessToken);
    response.status(200).send(!!isValid);
  }

  async getUsersById(request, response, next) {
    const Id = request.params.id
    const user = await this.userService.getUserById(Id)
    if (user) {
      response.status(200).json(user)
    } else {
      this.logger.error('User not found by Id -> (userController)')
      response.status(404).send('User not found by Id')
>>>>>>> google login
    }

  }

  // check FC auth login
  async facebookAuthCheck(request, response, next) {
    if (!request.user) {
      response.status(404).send('user not found Bro')
    }
    const payload = {
      id: request.user.id,
      firstName: request.user.firstName,
      lastName: request.user.lastName
    }
    const access_token = this.userService.generateTokenForSocila(payload);
    request.user.access_token = access_token;
    response.json(request.user);
  }

  // google auth login
  async googleLogin(req, res) {
    const googleResponse = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.idToken}`)
    const user = await this.validateGoogleUser(req.body);
    if(googleResponse) {
      res.status(200).send(user)
    }
  }

  async validateGoogleUser(profile) {
  try {
      return this.userService.isExistUser(profile);

    } catch (error) {
      this.logger.error(error.message)
      this.logger.info(error.message)
    }
  }

<<<<<<< HEAD
    // send email to ...
    async sendMail(request, response) {
        const { email, url } = request.body;
        const isValidEmailadresse = userSendMailValidation(email);
        const notNullableValues = isValidEmailadresse.value.filter(item => item)
        const opts = {
            subject: 'Invite to Event',
            text: "You are invited to participate in event",
            html: `<a style="color:red" href='${url}/'>portalURL-${url}</a>`
        }

        if (!isValidEmailadresse.error) {
            const result = await this.userService.sendMail(email, url, opts);
            response.json({ result });
        } else if (isValidEmailadresse && notNullableValues.length) {
            const result = await this.userService.sendMail(notNullableValues, url, opts);
            response.json({ result, message: 'You have some false email Adress format' });
        } else {
            response.status(402).send({ sueccess: 'not valid email adresses' })
        }
=======
  // send email to ...
  async sendMail(request, response) {
    const { email, url } = request.body;
    const isValidEmailadresse = userSendMailValidation(email);
    const notNullableValues = isValidEmailadresse.value.filter(item => item)
    const opts = {
      subject: 'Invite to Event',
      text: "You are invited to participate in event",
      html: `<a style="color:red" href='${url}/'>portalURL-${url}</a>`
    }

    if (!isValidEmailadresse.error) {
      const result = await this.userService.sendMail(email, url, opts);
      response.json({ result });
    } else if (isValidEmailadresse && notNullableValues.length) {
      const result = await this.userService.sendMail(notNullableValues, url, opts);
      response.json({ result, message: 'You have some false email Adress format' });
    } else {
      response.status(402).send({ sueccess: 'not valid email adresses' })
>>>>>>> google login
    }
  }

  async checkEmail(request, response) {
    try {
      const { token } = request.body;
      const activated = await this.userService.checkEmail(token)
      if (activated) {
        response.send(activated);
      } else {
        response.status(401).send('invalid credentials')
      }
    } catch (error) {
      this.logger.error(error);
      response.status(401).send(error.message)
    }
  }
}

module.exports = UserController
