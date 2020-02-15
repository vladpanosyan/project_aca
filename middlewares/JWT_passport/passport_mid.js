module.exports = (passport) => (request, response, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err) {
            next(err)
        }
        if (info) {
            next(info)
        } else {
            next();
        }
    })(request, response, next)
}