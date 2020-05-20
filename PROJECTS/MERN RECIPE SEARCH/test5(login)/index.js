const express = require("express");
 const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
 const keys = require('./config/keys');
const cookieSession = require('cookie-session')
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000
require('./models/User')
require('./services/passport')
const tr = require('./routes/rrouter')
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true  }, () =>{
    console.log("connect db");
})


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
)


app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", require("./routes/rrouter")); 


require('./routes/authRoute')(app)

//client id : 1068709557372-2in05q00pn02nkrm9jjt152kv70hiqhg.apps.googleusercontent.com;
//client secret : ofmAVt4_-kn_TEc6s1bmDUPM


// passport.use(new GoogleStrategy({
//     clientID: keys.googleClientID,
//     clientSecret: keys.googleClientSecret,
//    // scope: 'profile',
//     callbackURL:"/auth/google/callback"


// },
// (accessToken, refreshToken, profile, done) => {
//     console.log("access token", accessToken)
//     console.log("refresh",refreshToken)
//     console.log("profile",profile)
//     console.log("done",done)
// })
// )

// app.get('/auth/google', passport.authenticate('google',{
//     scope:['profile','email']
// }))

// app.get("/auth/google/callback" ,passport.authenticate('google'))













app.listen(PORT, () => {
   
    console.log("server running on "  + PORT)


} );