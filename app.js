var express = require("express");
const exphbs = require(`express-handlebars`);
var path = require("path");

const homeRoutes = require("./routes/Home");

var app = express();
app.use(express.static('public'));
app.use("/", homeRoutes);


//This tells Express to set Handlebars as its template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your web server is connected at ${PORT}`);

});
