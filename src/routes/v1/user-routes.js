const express = require('express');

const router = express.Router();


router.post('/',()=>{});

router.get('/:id',()=>{});

router.put('/:id',()=>{});

router.post('/:id/follow/:targetUserId',()=>{});

router.delete('/:id/follow/:targetUserId',()=>{});

router.get('/:id/followers',()=>{})

router.get('/:id/following',()=>{})


module.exports = router;