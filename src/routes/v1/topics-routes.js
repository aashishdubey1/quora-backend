const express = require('express');
const {topicController} = require('../../controller')

const router = express.Router();

router.post('/',topicController.addTopic)

router.get('/',topicController.getTopic)

router.delete('/:id',topicController.deleteTopic)

module.exports = router

