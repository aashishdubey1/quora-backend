const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/base-error");


function errorhandler(err,req,res,next){
    if(err instanceof BaseError){
        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            data:{},
            err:err.details,
        })
    }else if (err.name == "CastError" && err.kind == "ObjectId"){
        console.error(`[DATABASE ERROR] Duplicate Key/Unique Constraint Violation: ${err.message}`);
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            name:"BadRequestError",
            message:`Invalid ID format for ${err.path || 'resource'}: ${err.value}`,
            data:{},
            err: { field: err.path, value: err.value, expected: err.kind }
        })
    }else{
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            name:InternalServerError,
            message:"Something went wrong on our side",
            error:err,
            data:{}
        })
    }
}

module.exports = errorhandler