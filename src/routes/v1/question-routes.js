const express = require('express');

const router = express.Router();

router.post('/',()=>{/* create a question*/})

router.get('/:id',()=>{/* get a specific question */})

router.put('/:id',()=>{/* update a specific question */})

router.delete('/:id',()=>{/* delete a specific question */})

router.get('/search',()=>{/* Search question based on tag and test */})

router.post('/:id/answers',()=>{/* Post and answer to the question */})

router.get('/:id/answers',()=>{/* Post and answer to the question */})


module.exports = router;