const express = require('express')
const router = express.Router();


router.get("/", (req, res) => {

    res.render("Home/home");

});

module.exports=router;