"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session');
var moment = require('moment');
moment().format();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');


// Seperated Routes for each Resource
const commentsRoutes = require("./routes/comments");
const profileRoutes = require("./routes/profile");
const viewProfileRoutes = require("./routes/userviewprofile");
const indexCardsRoutes = require("./routes/resourcesurls");
const showRoutes = require("./routes/show");
const topicPagesRoutes = require("./routes/topicpages");
const userResourcesRoutes = require("./routes/userresources");
const userLikesRoutes = require("./routes/userlikes");
const searchResults = require("./routes/search");



// const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// app.get(‘/favicon.ico’, (req, res) => res.status(204));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['userid'],
}))
//to use put/patch/delete
// app.use(methodOverride('_method'))

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));
app.use("/api/comments", commentsRoutes(knex));
app.use('/api/profile', profileRoutes(knex));
app.use('/api/userviewprofile', viewProfileRoutes(knex));
app.use('/api/resourcesurls', indexCardsRoutes(knex));
app.use('/api/show', showRoutes(knex));
app.use('/api/topicpages', topicPagesRoutes(knex));
app.use('/api/userresources', userResourcesRoutes(knex));
app.use('/api/userlikes', userLikesRoutes(knex));


// app.use('/users', usersRoutes(knex));

// app.get('/favicon.ico', (req, res) => res.status(204));


// Home page
app.get("/", (req, res) => {

  const getUsers = knex('users').select('*')
  .then(function(result) {
    return result
  })
  const getURLs = knex('urls').select('*')
  .then(function(result) {
    return result
  })
  const getTopics = knex('topics').select('*')
  .then(function(result) {
    return result
  })

  const getRatings = knex('ratings').select('*')
    .then(function(result) {
      return result
    })

  const getComments = knex('comments').select('*')
  .then(function(result) {
    return result
  })

  const getLikes = knex('likes').select('*')
  .then(function(result) {
    return result
  })

  const everything = Promise.all([getUsers, getURLs, getTopics, getRatings, getComments, getLikes])
    .then(function(result) {
      const templateVars = {
        users: result[0],
        urls: result[1],
        topics: result[2],
        ratings: result[3],
        comments: result[4],
        likes: result[5],
      }

      // console.log(templateVars)
      res.render("index", templateVars);
    })
});



function getUserId(email) {
  return knex.select("id").from("users").where('email', email)
  .then((users) => {
    if(users.length>0) {
      return Promise.resolve(users[0].id);
    } else {
      return Promise.resolve(0);
    }
  });
};

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  let result = getUserId(req.body.emailaddress);
  result.then((value) => {
    if (value > 0) {
      req.session.userid = value;
      res.redirect("/");
    } else {
      res.send("Invalid username");
    }
  })
});

app.get('/search', (req, res) => {
    // search
    let query = req.query.query;
    query = query.split(' ');
    resourceHelper.search(query, (err, results) => {
      if (err){
        req.flash('error', err.message);
      }
      res.render('resources', { allResources: results });
    })
  })

app.get("/profile/:username", (req, res) => {
  res.render("profile");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  knex("users")
    .insert({
      email: req.body.emailaddress,
      password: req.body.password,
      firstName: req.body.firstname,
      lastName: req.body.lastname
    })
    .then(() => {
      let result = getUserId(req.body.emailaddress);
      result.then((userid) => {
        console.log("We've got to here!");
        if (userid > 0) {
          req.session.userid = userid;
          res.redirect("/");
        } else {
          res.send("Sorry there were problems")
        }
      })
    })
})

app.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/login");
})

app.get("/new", (req, res) => {
  res.render("new");
});

app.post('/show', (req, res) => {
  knex('comments')
    .insert({
      comment: req.body.comment,
    })
    .then(() => {

    })
});

app.post('/new', (req, res) => {
  knex('urls')
    .insert({
      title: req.body.title,
      url: req.body.url,
      image: req.body.image,
      user_id: req.session.userid,
      description: req.body.description,
      dateAdded: Date.now(),
    })
    .then(() => {
      res.redirect('/')
    })
})

//Catergory Pages
//Math Page
app.get("/topic/:topic", (req, res) => {
  res.render("topics");
});

app.get("/:resource_id", (req, res) => {

  const getURLs = knex('urls').select('*').where('id', req.params.resource_id)
  .then(function(result) {
    return result
  })
  const getTopics = knex('topics').select('*').where('url_id', req.params.resource_id)
  .then(function(result) {
    return result
  })

  const getRatings = knex('ratings').select('*').where('url_id', req.params.resource_id)
    .then(function(result) {
      return result
    })

  const getComments = knex('comments').select('*').where('url_id', req.params.resource_id)
  .then(function(result) {
    return result
  })

  const getLikes = knex('likes').select('*').where('url_id', req.params.resource_id)
  .then(function(result) {
    return result
  })

  const everything = Promise.all([getURLs, getTopics, getRatings, getComments, getLikes])
  .then(function(result) {
    const templateVars = {
      urls: result[0],
      topics: result[1],
      ratings: result[2],
      comments: result[3],
      likes: result[4],
    }
    console.log('@@SHOW@@', templateVars, '@@SHOW@@')
    res.render("show", templateVars);
  })
});

app.post("/:resource_id/comments", (req, res) => {
  const userId = req.session.user_id;
  const comment = req.body.rcomment;
  const resourceid = req.params.resource_id;
    knex('comments')
    .insert({
      user_id: userId,
      resource_id: resource_id,
      comment: comment,
      dateAdded: 'date'
    })
    .then(() => {
      res.redirect('/' + resource_id);
    });
});

app.post("/:resource_id/like", (req, res) => {
  const userId = req.session.user_id;
  const resourceid = req.params.resource_id;
  knex('likes')
  .insert({
    user_id: userId,
    resource_id: resource_id,
    dateAdded: 'date'
  })
  .then(function() {
    res.redirect('/' + resource_id);
  })
})

app.post("/:resource_id/rate", (req, res) => {
  const userId = req.session.user_id;
  const resourceid = req.params.resource_id;
  const rate = req.body.rating;

  knex('ratings')
  .insert({
    user_id: userId,
    resource_id: resource_id,
    dateAdded: '2019-07-01',
    rating: rate
  })
  .then(() => {
    res.redirect('/' + resource_id);
  })
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
})
