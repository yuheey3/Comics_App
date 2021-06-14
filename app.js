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



// app.get('/', (req, res) => {
//     res.render('/Home/home', {data: ''});
//   })
  
// //   app.post('/', (req, res) => {
//    // const location = req.body.location ? req.body.location : "Purnia";
//     const appId = "Your_API_Key_Here";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + appId + "&units=metric";
//     https.get(url, (response) => {
//       if (response.statusCode === 200) {
//         response.on("data", (data) => {
//           const weatherData = JSON.parse(data);
//           res.render('index', {data: weatherData});
//         })
//       } else {
//         res.render('index', {data: "0"})
//       }
//     })
//   })



// app.get("/:id", function(req, res) {
//     var id = req.params.id;
//     const url = `https://xkcd.com/${id}/info.0.json`


//     request(url, (error, response, body) => {
//         const data = JSON.parse(body);
    
//         app.month = data.month;
//         app.num = data.num;
//         app.year = data.year;
//         app.alt = data.alt;
//         app.img = data.img;
//         app.title = data.title;
//         app.day = data.day
//         response.redirect(request.get('/'));
//     })

  
// });

// app.post("/next", function(req, res) {
//     var num = "2";
//     const url = `https://xkcd.com/${num}/info.0.json`

//     console.log(url);


//     request(url, function (error, response, body) {
//         const data = JSON.parse(body);

//         app.month = data.month;
//         app.num = data.num;
//         app.year = data.year;
//         app.alt = data.alt;
//         app.img = data.img;
//         app.title = data.title;
//         app.day = data.day
      
        
//         res.render("Home/home", {
//             title: app.title, img: app.img, month: app.month,
//             num: app.num, year: app.year
//             , alt: app.alt, day: app.day
//         });
//     })

  
// });

//This tells Express to set Handlebars as its template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//const address = process.argv[2]
const url = `https://xkcd.com/1/info.0.json`
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




