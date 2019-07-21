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
app.use('/js',express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/tether/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
//Global site title and base URL
const siteTitle = "Simple CRUD application";
const baseURL = "http://localhost:3000/";
//Create Database Connection

const mysqlconnect = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "inventory"
});
  
// Select the value of the table when at the baseURL
app.get('/',function(req,res){
    mysqlconnect.query("SELECT * FROM items",function(err,result){ 
        res.render('pages/index',{
            siteTitle: siteTitle,
            pageTitle: "Simple Crud Application",
            items: result           
        });
    });
});



// CONNECT TO SERVER
const server = app.listen(3000,function(){
    console.log("Server Started on 3000...");
});