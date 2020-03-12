const AppError = require('./../HELPERS/ErrorHandling/AppError')
const {
    userValidation,
    userLoginValidation,
    userSendMailValidation
} = require('./../HELPERS/validation/userValidation');
const axios = require('axios');

class UserController {
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
            this.logger.error('User not found by Id -> (userController)');
            response.status(404).send('User not found by Id');
        }

    }

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
    }

    // google auth login
  async googleLogin(req, res) {
    console.log(req);
    await this.validateGoogleUser(req);
  }

  async validateGoogleUser(profile) {
    const user = await this.userService.getUserByEmail(profile.email);
    try {
      if(user) {
        return user;
      }else {
        const { email, first_name, last_name } = profile._json;
        let user = await Users.findOrCreate({
          attributes: ['id', 'firstName', 'lastName', 'img', 'time', 'email'],
          where: { email }, defaults: {
              firstName: first_name,
              lastName: last_name,
              img: profile._json.picture.data.url || process.env.USER_DEFAULT_IMAGE,
          }
      });
      user = user[0].get({ plain: true });
      user.access_token = accessToken
      done(null, user);
      }  
  } catch (error) {
      done(error, false, error.message)
  }

  // googleResponse(token): Observable<AxiosResponse<any>> {
  //   return axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`).pipe(
  //       map(
  //           response => response.data,
  //       )
  //   )
  // } 
        // async loginFbGoogle(req, token: any) {
        //     const user = await this.findUserByEmail(req.body.email || req.user.email);
        //     if(token) {
        //         return {
        //             fullName: user.fullName,
        //             email: user.email,
        //             roles: user.roles,
        //             _id: user._id,
        //             accessToken: await this.authService.createAccessToken(user._id),
        //             refreshToken: await this.authService.createRefreshToken(req, user._id),
        //         };
        //     }else {
        //         throw new BadRequestException('User login failure.');
        //     }

      
    }

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
