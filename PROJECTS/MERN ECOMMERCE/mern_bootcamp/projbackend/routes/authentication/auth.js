const express = require('express')
const router = express.Router()
const { check, validationResult} = require('express-validator')
const {signout, signup, signin ,isSignedIn} = require('../../controllers/authentication/auth')




router.post('/signup',[
    check("name", "name 3 charshould be atleast ").isLength({ min:3}),
   // check("email", "email 3 charshould be atleast ").isEmail(),
    check("password", "password 3 charshould be atleast ").isLength({ min:3})
], signup)

router.post('/signin',[
    //check("email", "email 3 charshould be atleast ").isEmail(),
    check("password", "password fiels are req.. ").isLength({ min:3})
], signin)


router.get('/signout', signout);

// router.get('/testroute', isSignedIn, (req,res) => {
//     res.json(req.auth);  
// })








module.exports = router;