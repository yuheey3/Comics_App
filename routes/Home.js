const express = require('express')
const router = express.Router();
var app = require("../app.js");
var s = "s";

const url = `https://xkcd.com/info.0.json`

router.get("/", (req, res) => {

    res.render("Home/home", {
        title: req.app.title, img: req.app.img, month: req.app.month,
        num: req.app.num, year: req.app.year
        , alt: req.app.alt, day: req.app.day
    });



});

module.exports = router;

