const { get } = require('mongoose');
const NotImplementedError = require('../errors/not-implemented-error');

async function createQuestion(req,res,next) {

    try {
        throw new NotImplementedError("create Question")
    } catch (error) {
        next(error)
    }
}

async function getQuestion(req,res,next) {

    try {
        throw new NotImplementedError("get Question")
    } catch (error) {
        next(error)
    }
}

async function updateQuestion(req,res,next) {

    try {
        throw new NotImplementedError("update Question")
    } catch (error) {
        next(error)
    }

}

async function deleteQuestion(req,res,next) {

    try {
        throw new NotImplementedError("delete Question")
    } catch (error) {
        next(error)
    }
}

async function searchQuestion(req,res,next) {
    
    try {
        throw new NotImplementedError("search Question")
    } catch (error) {
        next(error)
    }
}

async function addAnswer(req,res,next) {
    
    try {
        throw new NotImplementedError("add answer")
    } catch (error) {
        next(error)
    }
}

async function getAnswer(req,res,next) {
    try {
        throw new NotImplementedError("get answer")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createQuestion,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    searchQuestion,
    addAnswer,
    getAnswer
}