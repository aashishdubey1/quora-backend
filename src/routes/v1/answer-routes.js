const express = require('express');

const router = express.Router();

router.get('/:id',()=>{/* Get a specific answer*/})

router.put('/:id',()=>{/* update a specific answer*/})

router.delete('/:id',()=>{/* delete a specific answer */})

router.post('/:id/comments',()=>{/*add a comments to specific answer */})

router.get('/:id/commnets',()=>{/*get comments for a answer */})

module.exports = router;