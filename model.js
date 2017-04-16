let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/reptile');
exports.Movie = mongoose.model("Movie",new mongoose.Schema({
    name: String,
    url: String
}));
