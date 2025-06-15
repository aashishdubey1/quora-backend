const NotImplementedError = require('../errors/not-implemented-error');


async function getAnser(req,res,next) {
    try {
        throw new NotImplementedError("Get Answer")
    } catch (error) {
        next(error)
    }    
}

async function updateAnswer(req,res,next) {
    try {
        throw new NotImplementedError("Update Answer")
    } catch (error) {
        next(error)
    } 
}

async function deleteAnswer(req,res,next) {
    try {
        throw new NotImplementedError("Delete Answer")
    } catch (error) {
        next(error)
    } 
}

async function addCommentToAnswer(req,res,next) {
    try {
        throw new NotImplementedError("Adding Comments")
    } catch (error) {
        next(error)
    } 
}

async function getCommnets(req,res,next) {
    try {
        throw new NotImplementedError("Get Comments")
    } catch (error) {
        next(error)
    } 
}

module.exports = {
    getAnser,
    updateAnswer,
    deleteAnswer,
    addCommentToAnswer,
    getCommnets,
}