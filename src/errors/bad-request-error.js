const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");



class BadRequestError extends BaseError {
    constructor(propertyName){
        super("BadRequestError",StatusCodes.BAD_REQUEST,`Invalid Structure for ${propertyName} Provided`,{})
    }
}