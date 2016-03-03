var webpack = require('webpack');

var config = require('./src/webpack.config.js');

if(!config.output) config.output = {};
if(!config.output.path) config.output.path= __dirname + '/build';
if(!config.output.filename) config.output.filename = "bundle.js";

if(!config.entry) config.entry = [];
config.entry.push("./src/index.html");
config.entry.push("./src/css/main.css");
config.entry.push("./src/js/main.js");
//IDK IF I NEED THIS
//config.entry.push("webpack-dev-server/client?http://localhost:44888");

if(!config.module) config.module = {};

if(!config.module.preLoaders) config.module.preLoaders = [];
config.module.preLoaders.push({
   test: /\.json$/, loader: 'json'
//  test: /\.js$/, // include .js files
//  exclude: /node_modules/, // exclude any and all files in the node_modules folder
//  loader: "jshint-loader"
});

if(!config.module.loaders) config.module.loaders = [];
config.module.loaders.push({
    test: /\.html$/,
    loader: "file?name=[name].[ext]",
});
config.module.loaders.push({
  test: /\.css$/,
  loader: "style!css"
});
config.module.loaders.push({
    test: /\.js?$/,
    exclude: /node_modules/,
    loaders: ["react-hot", "babel"],
});
config.module.loaders.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ["react-hot", "babel"],
});


if(!config.plugins) config.plugins = [];
config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.OldWatchingPlugin());

module.exports = config;
