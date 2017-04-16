let Movie = require("./model").Movie;
let express = require("express");
let path = require("path");
let app = express();
app.use(express.static(path.resolve('node_modules')));
app.set("view engine", 'html');
app.engine("html", require("ejs").__express);
app.get("/", function (req, res) {
    Movie.find({}, function (err, result) {
        res.render('index', {result})
    })
});
app.listen(9090);