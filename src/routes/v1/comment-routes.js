const express = require('express');
const {commentController} = require('../../controller')

const router = express.Router();


router.get('/:id',commentController.getComment)

router.put('/:id',commentController.updateComment)

router.delete('/:id',commentController.deleteComment)


router.post('/:id/comments',commentController.addCommentToComment)

router.get('/:id/comments',commentController.getCommentsOnComment)

module.exports = router;