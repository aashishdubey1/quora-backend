const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base-error");


class NotFoundError extends BaseError {
    constructor(resourceName,resourceVal){
        super("NotFoundError",StatusCodes.NOT_FOUND,`Can't find ${resourceName} with value ${resourceVal}`,{})
    }
}

module.exports = NotFoundError