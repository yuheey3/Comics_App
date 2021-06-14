var express = require("express");
const exphbs = require(`express-handlebars`);
var path = require("path");
const bodyParser = require('body-parser');
const request = require("request")
const dotenv = require("dotenv").config()
const https = require('https')

const homeRoutes = require("./routes/Home");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", homeRoutes);


app.use("/", (req, res) => {
    res.render("Home/404");
});

//This tells Express to set Handlebars as its template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const url = `https://xkcd.com/1/info.0.json`

request(url, (error, response, body) => {
    const data = JSON.parse(body);

    app.month = data.month;
    app.num = data.num;
    app.year = data.year;
    app.alt = data.alt;
    app.img = data.img;
    app.title = data.title;
    app.day = data.day
    app.transcript = data.transcript;

})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your web server is connected at ${PORT}`);

});

module.exports = app;




