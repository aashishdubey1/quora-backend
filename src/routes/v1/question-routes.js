const express = require('express');
const {questionController} = require('../../controller')

const router = express.Router();

router.post('/',questionController.createQuestion)

router.get('/:id',questionController.getQuestion)

router.put('/:id',questionController.updateQuestion)

router.delete('/:id',questionController.deleteQuestion)

router.get('/search',questionController.searchQuestion)

router.post('/:id/answers',questionController.addAnswer)

router.get('/:id/answers',questionController.getAnswer)


module.exports = router;