let read = require('./read');
let write = require("./write");
let async = require("async");
let Movie = require("../model").Movie;
let debug = require('debug')('reptile1:main');
let url = 'http://top.baidu.com/buzz?b=26';
async.waterfall([
        function (callback) {
            Movie.remove({}, callback);
        },
        function (data, callback) {
            read(url, callback)
        },
        function (data, callback) {
            write(data, callback);
        }
    ], function (err, result) {
        debug("over");
    }
)