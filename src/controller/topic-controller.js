const NotImplementedError = require('../errors/not-implemented-error');


async function addTopic(req,res,next) {
    try {
        throw new NotImplementedError("Add Topic")
    } catch (error) {
        next(error)
    }    
}

async function getTopic(req,res,next) {
    try {
        throw new NotImplementedError("Get Topic")
    } catch (error) {
        next(error)
    }    
}

async function deleteTopic(req,res,next) {
    try {
        throw new NotImplementedError("Delete Topic")
    } catch (error) {
        next(error)
    }    
}

module.exports = {
    addTopic,
    getTopic,
    deleteTopic,
}