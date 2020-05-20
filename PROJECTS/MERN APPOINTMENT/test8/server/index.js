const express = require('express')
const connectDB = require('./config/db')
const app = express()



connectDB()
app.use(express.json({ extended: false }))


app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guests'))


app.use(express.json({ extended: true }))
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started at port ${PORT}`))