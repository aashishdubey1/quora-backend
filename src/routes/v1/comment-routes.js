const express = require('express');

const router = express.Router();


router.get('/:id',()=>{/* get a specific comment */})

router.put('/:id',()=>{/* update a specific comment */})

router.delete('/:id',()=>{/*delete a specific comment */})


router.post('/:id/comments',()=>{/* add comment to specific comment */})

router.get('/:id/comments',()=>{/* get comments to specific comment */})

module.exports = router;