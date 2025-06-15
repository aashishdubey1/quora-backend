const express = require('express');
const {answerController} = require('../../controller')

const router = express.Router();



router.get('/:id',answerController.getAnser)

router.put('/:id',answerController.updateAnswer)

router.delete('/:id',answerController.deleteAnswer)

router.post('/:id/comments',answerController.addCommentToAnswer)

router.get('/:id/comments',answerController.getCommnets)

module.exports = router;