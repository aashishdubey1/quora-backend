const express = require('express');
const userRoutes = require('./user-routes')
const questionRoutes = require('./question-routes')
const answersRoutes = require("./answer-routes")
const commentRoutes = require('./comment-routes')
const topicRoutes = require('./topics-routes')
const likeRoutes = require('./common/like-route')


const router = express.Router()


router.use('/users',userRoutes)

router.use('/questions',questionRoutes)

router.use('/answers',answersRoutes)

router.use('/comments',commentRoutes)

router.use('/topics',topicRoutes)

router.use('/answer/:answerId/likes',likeRoutes)

router.use('/quesitons/:questionId/likes',likeRoutes)

router.use('/comments/:commentId/likes',likeRoutes)


module.exports = router;