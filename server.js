"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
//to use put/patch/delete
// const methodOverride = require('method-override')

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
//to use put/patch/delete
// app.use(methodOverride('X-HTTP-Method-Override'))

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

//Login page
//Does what it is says on the tin...
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.render("/");
});

//Profile page
//update route to get :userid instead of profile
app.get("/profile", (req, res) => {
  res.render("profile");
});


//Register page
//need to add post route to actually register
//fill out form for email, password, etc
app.get("/register", (req, res) => {
  res.render("register");
});

//Saved Resources Page
app.get("/saved", (req, res) => {
  res.render("saved");
});

//Individual resource page
//update route to get :resourceid instead of individual
app.get("/individual", (req, res) => {
  res.render("show");
});

//Add a new resource
//need to add route to POST to the home page with new url, as well as to your own profile page
app.get("/new", (req, res) => {
  res.render("new");
});

//Catergory Pages
//All Catergories
app.get("/", (req, res) => {
  res.render("index");
});
//Math Page
app.get("/maths", (req, res) => {
  res.render("maths");
});
//Science Page
app.get("/science", (req, res) => {
  res.render("science");
});
//Politics Page
app.get("/politics", (req, res) => {
  res.render("politics");
});
//History Page
app.get("/history", (req, res) => {
  res.render("history");
});
//Dog-Meme Page
app.get("/dog-memes", (req, res) => {
  res.render("dog-memes");
});
//Cat-Meme Page
app.get("/cat-memes", (req, res) => {
  res.render("cat-memes");
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
