const express = require('express')
const router = express.Router();

const {getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUncat} = require('../../controllers/product/product')
const {getUserById, getUser, updateUser, userPurchasedList} = require('../../controllers/user/user')
const {isSignedIn,isAuthenticated, isAdmin} = require('../../controllers/authentication/auth')


router.param('userId', getUserById);
router.param('productId', getProductById);


router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct)

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

router.delete("/product/:productId/:userId", isSignedIn,isAuthenticated,isAdmin, deleteProduct);

router.put("/product/:productId/:userId", isSignedIn,isAuthenticated,isAdmin, updateProduct);

router.get('/products',getAllProducts)

router.get('/products/categories', getAllUncat)


module.exports = router;