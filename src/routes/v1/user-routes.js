const express = require('express');
const {userController} = require('../../controller/index')

const router = express.Router();


router.post('/',userController.createUser);

router.get('/:id',userController.getUser);

router.put('/:id',userController.updateUser);

router.post('/:id/follow/:targetUserId',userController.followUser);

router.delete('/:id/follow/:targetUserId',userController.unfollowUser);

router.get('/:id/followers',userController.getFollowers)

router.get('/:id/following',userController.getFollowing)


module.exports = router;