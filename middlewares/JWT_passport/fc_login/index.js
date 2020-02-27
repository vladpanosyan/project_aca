module.exports = (passport) => {
    return {
        facebookAuthCheck() {
           return passport.authenticate('facebook-token', {
                session: false
            })
        }
    }
}

