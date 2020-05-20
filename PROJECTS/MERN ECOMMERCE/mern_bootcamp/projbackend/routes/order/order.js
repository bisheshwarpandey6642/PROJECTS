const express = require('express')
const router = express.Router();

const {getUserById, getUser,pushOrderInPurchaseList, updateUser, userPurchasedList} = require('../../controllers/user/user')
const {isSignedIn,isAuthenticated, isAdmin} = require('../../controllers/authentication/auth')
const {updateStock}  = require("../../controllers/product/product")

const  { getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus } = require("../../controllers/order/order")



router.param("userId", getUserById)
router.param("orderId", getOrderById);

router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder);

router.get("order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllOrders)
router.get("/order", getAllOrders)
router.get("/order/status/:userId", isSignedIn, isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated,isAdmin, updateStatus)


module.exports = router;