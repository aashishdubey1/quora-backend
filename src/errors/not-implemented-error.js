const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");

class NotImplementedError extends BaseError {
    constructor(feature){
        super("NotImplementedError",StatusCodes.NOT_IMPLEMENTED,`The requestion Feature ${feature} is not implemented yet`,{})
    }
}

module.exports = NotImplementedError;