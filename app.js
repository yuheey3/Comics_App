var express = require("express");
const exphbs = require(`express-handlebars`);
var path = require("path");
const bodyParser = require('body-parser');
const request = require("request")
const dotenv = require("dotenv").config()

const homeRoutes = require("./routes/Home");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/", homeRoutes);


//This tells Express to set Handlebars as its template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//const address = process.argv[2]
const url = `https://xkcd.com/info.0.json`
//const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${process.env.API_KEY}`

// if (!address) {
//   return console.log("Please enter the name of the city")
// }
var month = "";
request(url, (error, response, body) => {
    const data = JSON.parse(body);

    app.month = data.month;
    app.num = data.num;
    app.year = data.year;
    app.alt = data.alt;
    app.img = data.img;
    app.title = data.title;
    app.day = data.day
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your web server is connected at ${PORT}`);

});

module.exports = app;




