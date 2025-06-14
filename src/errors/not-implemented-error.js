const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");

class NotImplementedError extends BaseError {
    constructor(feature){
        super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`The Requesting Feature ${feature} is not Implemented Yet`,{})
    }
}

module.exports = NotImplementedError;