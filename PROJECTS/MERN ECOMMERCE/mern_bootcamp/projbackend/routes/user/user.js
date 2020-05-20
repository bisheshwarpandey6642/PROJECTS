//const User = require('../../models/user');
const express = require('express')
const router = express.Router()
const {isSignedIn,isAuthenticated, isAdmin} = require('../../controllers/authentication/auth')
const {getUserById, getUser, updateUser, userPurchasedList} = require('../../controllers/user/user')


router.param("userId", getUserById)

router.get('/user/:userId', isSignedIn, isAuthenticated, getUser);
router.put('/user/:userId', isSignedIn, isAuthenticated, updateUser);
router.get('/orders/user/:userId', isSignedIn, isAuthenticated, userPurchasedList);




module.exports = router
