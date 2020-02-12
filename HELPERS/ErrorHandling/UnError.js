exports.UnhError = class UnhError extends Error {
    constructor(message, cause) {
        super(message)
        this.cause = cause;
        this.name = 'NotKnown'
    }
}