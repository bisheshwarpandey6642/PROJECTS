const express = require("express");

const app = express();


const port = 5000;

const admin = (req, res) => {
    return res.send("hello");
};

app.get('/', admin);


app.get('/admin',(req,res) => {
    return res.send("this is admin")
}); 






app.listen(port, () => {
    console.log(`${port}`)
})
