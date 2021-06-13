var express = require("express");
var path = require("path");

var routes = require("./routes");

var app = express();

const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Your web server is connected at ${PORT}`);

});
