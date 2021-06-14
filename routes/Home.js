const express = require('express')
const router = express.Router();
var app = require("../app.js");
var s = "s";

const request = require('request');


var month2 = "";
var num2 = "";
var year2 = "";
var alt2 = "";
var img2 = "";
var title2 = "";
var day2 = "";

var pageNum = "1";




const url = `https://xkcd.com/info.0.json`

router.get("/", (req, res) => {

    res.render("Home/home", {
        title: req.app.title, img: req.app.img, month: req.app.month,
        num: req.app.num, year: req.app.year
        , alt: req.app.alt, day: req.app.day
    });



});

router.post("/search", function (req, res) {

    pageNum = (parseInt(req.body.userInput)).toString();

    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`


    console.log(url);


    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day
        });
    })


});

router.post("/next", function (req, res) {

    pageNum = (parseInt(pageNum) + 1).toString();

    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`


    console.log(url);


    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day
        });
    })


});

router.post("/back", function (req, res) {

    pageNum = (parseInt(pageNum) - 1).toString();

    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`


    console.log(url);


    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day
        });
    })


});

router.post("/random", function (req, res) {
    pageNum = (randomInteger(1, 2475)).toString();

    // pageNum = (parseInt(pageNum) - 1).toString();

    console.log(pageNum);
    const url = `https://xkcd.com/${pageNum}/info.0.json`


    console.log(url);


    request(url, function (error, response, body) {
        const data = JSON.parse(body);
        console.log(data);


        res.render("Home/home", {
            title: data.title, img: data.img, month: data.month,
            num: data.num, year: data.year
            , alt: data.alt, day: data.day
        });
    })


});

function randomInteger(min, max) {
    var num = 0;
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (num == 404) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return num;
}
// router.post("/:id", (req, res) => {



//     // res.render("Home/home", {
//     //     title: "ddddd", img: req.app.img, month: req.app.month,
//     //     num: req.app.num, year: req.app.year
//     //     , alt: req.app.alt, day: req.app.day
//     // });




// });
// router.get("/:id", function (req, res) {
//     var id = req.params.id;
//     console.log(id);
//     const url = `https://xkcd.com/${id}/info.0.json`
//     console.log(url);

//     request(url, (error, response, body) => {
//         const data = JSON.parse(body);
//        month2 =  data.month;
//        num2 = data.num;
//         year2 = data.year;
//         alt2 = data.alt;
//         img2 = data.img;
//         title2 = data.title;
//         day2 = data.day

//     })
// console.log(title2,alt2);


//     res.render("Home/home", {
//         title: "ss", img: img2, month: month2,
//         num: num2, year: year2
//         , alt: alt2, day: day2
//     });

// });



module.exports = router;

