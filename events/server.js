/**
 *     Node modules
 */
 /**
  ****@Core node modules
  */
const express= require('express');
const http = require('http');
const mysql = require('mysql');
const app = express();
const bodyParser= require('body-parser');
// parse all the data
app.use(bodyParser.urlencoded({extended: true}));
// Template Parsing
app.set('view engine', 'ejs');
//  Importing all related JS and CSS files for the app
app.use('/js',express.static(__dirname+'/node_modules/boostrap/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname+'/node_modules/boostrap/dist/css'));

  
// CONNECT TO SERVER
const server = app.listen(4000,function(){
    console.log("Server Started on 4000...");
});