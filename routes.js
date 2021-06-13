var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("Hi");
   // res,render("index");

});


module.exports = router;
