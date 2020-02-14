exports.DbError = class DbError extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause;
        this.name = 'dbError'
    }
}
