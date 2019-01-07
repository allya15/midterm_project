"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 3000;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const cookieSession = require('cookie-session');
//to use put/patch/delete
// const methodOverride = require('method-override')

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const commentsRoutes = require("./routes/comments");
// const urlsRoutes = require("./routes/resources");
// const profileRoutes = require("./routes/profile");
// const viewProfileRoutes = require("./routes/userviewprofile");
const indexCardsRoutes = require("./routes/resourcesurls");
const showRoutes = require("./routes/show");
const bioCards = require("./routes/biourls")


// const usersRoutes = require("./routes/users");

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
app.use(cookieSession({
  name: 'session',
  keys: ['userid'],
}))
//to use put/patch/delete
// app.use(methodOverride('_method'))

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));
app.use("/api/comments", commentsRoutes(knex));
// // app.use('/urls', urlsRoutes(knex));
// app.use('/api/profile', profileRoutes(knex));
// app.use('/api/userviewprofile', viewProfileRoutes(knex));
app.use('/api/resourcesurls', indexCardsRoutes(knex));
app.use('/api/show', showRoutes(knex));
app.use('/api/biourls', bioCards(knex));

// app.use('/users', usersRoutes(knex));

app.get('/favicon.ico', (req, res) => res.status(204));


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


//Catergory Pages
//Math Page
app.get("/biology", (req, res) => {
  res.render("biology");
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
app.get("/fake-news", (req, res) => {
  res.render("fake-news");
});
//Cat-Meme Page
app.get("/cat-memes", (req, res) => {
  res.render("cat-memes");
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

app.get("/:firstname-:lastname", (req, res) => {
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

app.post('/new', (req, res) => {
  knex('urls')
    .insert({
      title: req.body.title,
      url: req.body.url,
      user_id: req.session.userid,
      description: req.body.description,
      dateAdded: Date.now(),
    })
    .then(() => {
      res.redirect('/')
    })
})

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


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
})
