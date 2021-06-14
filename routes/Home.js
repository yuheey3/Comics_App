const express = require('express')
const router = express.Router();
var app = require("../app.js");
const request = require('request');
const bcrypt = require("bcryptjs");

var pageNum = "1";
var string = "";

const url = `https://xkcd.com/info.0.json`;

router.get("/", (req, res) => {

    string = (req.app.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');
    res.render("Home/home", {
        title: req.app.title, img: req.app.img, month: req.app.month,
        num: req.app.num, year: req.app.year
        , alt: req.app.alt, day: req.app.day, transcript: string
    });

});


//when search button clicked
router.post("/search", function (req, res) {
    var errors = "";
    String.prototype.isNumber = function () { return /^\d+$/.test(this); }
   
    pageNum = (parseInt(req.body.userInput)).toString();
    if (!pageNum.isNumber()) {
        pageNum = 1;
        console.log(errors);
        res.render("Home/404", {
            msgerror: "Please enter the number"
    })
}
// number should be 1 to 2475
if (1 > parseInt(pageNum)|| parseInt(pageNum) > 2475) {
    pageNum = 1;
    console.log(errors);
    res.render("Home/404", {
        msgerror: "Please enter the number between 1 and 2475"
})
}
    var url = `https://xkcd.com/${pageNum}/info.0.json`;

    console.log(url);

    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        string = (data.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');

        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day, transcript: string
        });
    })

});


//when next button clicked
router.post("/next", function (req, res) {

    pageNum = (parseInt(pageNum) + 1).toString();
    if(pageNum == 2476){
        pageNum = 1;
        
        res.render("Home/404", {
            msgerror: "You are in the last page"
    })
    }
    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`

    console.log(url);

    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        string = (data.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');

        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day, transcript: string
        });
    })

});


//when back button clicked
router.post("/back", function (req, res) {

    pageNum = (parseInt(pageNum) - 1).toString();

if(pageNum == 0){
    pageNum = 1;

    res.render("Home/404", {
        msgerror: "You are in the first page"
})
}
    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`

    console.log(url);

    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);

        string = (data.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');

        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day, transcript: string
        });
    })

});


//when back button in the 404error page clicked
router.post("/backMain", function (req, res) {


    const url = `https://xkcd.com/1/info.0.json`

    console.log(url);

    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        string = (data.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');

        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day, transcript: string
        });
    })


});


//when random button clicked
router.post("/random", function (req, res) {
    pageNum = (randomInteger(1, 2475)).toString();

    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`

    console.log(url);

    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);

        string = (data.transcript).replace(/[\])}[{(]/g, '').replace(/[\])}[{(]/g, '');

        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day, transcript: string
        });
    })


});

//get random number
function randomInteger(min, max) {
    var num = 0;
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num == 404) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return num;
}


module.exports = router;

