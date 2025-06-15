const NotImplementedError = require('../errors/not-implemented-error');

async function getComment(req,res,next) {
        try {
            throw new NotImplementedError("Get Comments")
        } catch (error) {
            next(error)
        }
}

async function updateComment(req,res,next) {
    try {
            throw new NotImplementedError("Update Comments")
        } catch (error) {
            next(error)
        }
}

async function deleteComment(req,res,next) {
    try {
            throw new NotImplementedError("Delete Comments")
        } catch (error) {
            next(error)
        }
}

async function addCommentToComment(req,res,next) {
    try {
            throw new NotImplementedError("Add comment to Comment")
        } catch (error) {
            next(error)
        }
}

async function getCommentsOnComment(req,res,next) {
    try {
            throw new NotImplementedError("Get comment on comment")
        } catch (error) {
            next(error)
        }
}

module.exports = {
    getComment,
    updateComment,
    deleteComment,
    addCommentToComment,
    getCommentsOnComment,
}