const express = require('express')
const connectDB = require('./config/db')
const app = express()
const bodyParser =require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require('./routes/authentication/auth')
const userRoutes = require('./routes/user/user')
const categoryRoutes = require('./routes/category/category')
const productRoutes = require('./routes/product/product')
const orderRoutes = require('./routes/order/order')
// const stripeRoutes = require("./routes/stripepayment");
const paymentBRoutes = require("./routes/paymentBRoutes");
////            MY DATABASE and MIDDLEWARES /////////
connectDB()
//app.use(express.json({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());


////            MY ROUTERS           /////

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use("/api", paymentBRoutes);
// app.use("/api", stripeRoutes);




////            MY SERVER   ///////////
app.use(express.json({ extended: true }))
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started at port ${PORT}`))