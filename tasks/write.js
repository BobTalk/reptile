let Movie = require("../model").Movie;
let async =  require("async");
module.exports = function (movies, callback) {
  /*  async.forEach(movies,function (movie,cb) {
        Movie.create(movie,cb);
    },callback);*/
    Movie.create(movies,callback);
}