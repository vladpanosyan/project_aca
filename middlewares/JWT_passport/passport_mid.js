module.exports = (passport) => (request, response, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        if(err) {
            console.log(err, 747474747747)
            next(err)
        }
        if (info) {
            console.log(info.message, 838183)
            next(info)
        } else {
            console.log('user found in db from route')
            next();
        }
    })(request, response, next)
}