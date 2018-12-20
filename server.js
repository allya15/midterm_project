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

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
