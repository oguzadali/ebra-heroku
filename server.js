const express = require('express')
const path = require('path');//used for connect html in express
const favicon = require('serve-favicon'); //used for fav.ico

const morgan = require('morgan')

// const routes = require("./routes/index-route");
const app = express()

const port = process.env.PORT | 8000;




app.use(express.static("public"))
app.use(favicon(path.join(__dirname, "./public/favicon.ico")))
app.use(morgan('tiny'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/main.html'));
})
app.get('/article', function (req, res) {
    res.sendFile(path.join(__dirname + '/article.html'));
})
// app.use("/", routes)

app.listen(port, () => {
    console.log(`Blog app listening at \x1b[31mhttp://localhost:${port}\x1b[0m`)
})