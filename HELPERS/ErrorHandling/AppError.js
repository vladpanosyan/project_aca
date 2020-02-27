class AppError extends Error{
    constructor(message, cause) {
        super(message)
        this.cause = cause;
        this.name = 'AppError';
        this.stack = cause.stack;
    }
}

module.exports = AppError