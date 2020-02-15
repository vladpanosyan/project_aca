const Users = global.UserModel;
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const FacebookTokenStrategy = require('passport-facebook-token');

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET_KEY;

module.exports = (passport) => (app) => {
    app.use(passport.initialize());
    // JWT strategy
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        try {
            Users.findOne({
                where: {
                    id: jwt_payload.id
                }
            }).then((user) => {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            })
        } catch (error) {
            done(error)
        }
    }))
    passport.use(new FacebookTokenStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        profileFields: ['id', 'displayName', 'picture.type(large)', 'email', 'first_name', 'last_name']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
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
        } catch (error) {
            done(error, false, error.message)
        }
    }))
}


