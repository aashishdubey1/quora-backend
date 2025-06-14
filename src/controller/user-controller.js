
const NotImplementedError = require('../errors/not-implemented-error')


async function createUser(req,res,next){
    try {
        throw new NotImplementedError("Create User")
    } catch (error) {
        next(error)
    }

}


async function getUser(req,res,next){
    try {
        throw new NotImplementedError("get user")
    } catch (error) {
        next(error)
    }
}

async function updateUser(req,res,next) {
    try {
        throw new NotImplementedError("updating User")
    } catch (error) {
        next(error)
    }
}

async function followUser(req,res,next) {
    try {
        throw new NotImplementedError("follow user")
    } catch (error) {
        next(error)
    }
}

async function unfollowUser(req,res,next) {
    try {
        throw new NotImplementedError("unfollow user")
    } catch (error) {
        next(error)
    }
}

async function getFollowers(req,res,next) {
    try {
        throw new NotImplementedError("get followers")
    } catch (error) {
        next(error)
    }
}

async function getFollowing(req,res,next) {
    try {
        throw new NotImplementedError("get following")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    followUser,
    unfollowUser,
    getFollowers,
    getFollowing
}