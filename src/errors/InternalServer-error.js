const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class InternalServerError extends BaseError {
    constructor(){
        super("InternalServerError",StatusCodes.INTERNAL_SERVER_ERROR,"Something went wrong on our side",{})
    }
}

module.exports = InternalServerError