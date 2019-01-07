"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
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
// const commentsRoutes = require("./routes/comments");
const urlsRoutes = require("./routes/resources");
const profileRoutes = require("./routes/profile");
const viewProfileRoutes = require("./routes/userviewprofile");
const indexCardsRoutes = require("./routes/resourcesurls");
const showRoutes = require("./routes/show");

// const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.get(‘/favicon.ico’, (req, res) => res.status(204));

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
// app.use("/comments", commentsRoutes(knex));
app.use('/urls', urlsRoutes(knex));
app.use('/api/profile', profileRoutes(knex));
app.use('/api/userviewprofile', viewProfileRoutes(knex));
app.use('/api/resourcesurls', indexCardsRoutes(knex));
app.use('/api/show', showRoutes(knex));

// app.use('/users', usersRoutes(knex));


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

      console.log(templateVars)
      res.render("index", templateVars);
    })
});


//Catergory Pages
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
app.get("/fake-news", (req, res) => {
  res.render("fake-news");
});
//Cat-Meme Page
app.get("/cat-memes", (req, res) => {
  res.render("cat-memes");
});


//These routes are not located in the routes folder, and required above. Only home page is actually rendered here

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

//Login page
//Does what it is says on the tin...
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

//Profile page
//update route to get :userid instead of profile
app.get("/:firstname-:lastname", (req, res) => {
  res.render("profile");
});

// Register page
// need to add post route to actually register
// fill out form for email, password, etc
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

//Individual resource page
//update route to get :resourceid instead of individual
app.get("/show/:id", (req, res) => {

  const getURLs = knex('urls').select('*')
    .then(function(result) {
      return result
    })

  const everything = Promise.all([getURLs])
    .then(function(result) {
      const templateVars = {
        urls: result[0]
      }
      console.log('CONSOLE', templateVars)
      JSON.stringify(templateVars);
      res.render("show", templateVars);
    })


});

//Add a new resource
//need to add route to POST to the home page with new url, as well as to your own profile page
app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/:resource_id", (req, res) => {


  res.render("show");
  // let resource_id = req.params.resource_id;
  // let templateVars = {};
  //
  // // Getting the resource detail from database
  // knex('resources')
  //   .join('users', 'users.id', '=', 'resources.user_id')
  //   .where('resources.id', resource_id)
  //   .select('resources.id', 'resources.URL', 'resources.title', 'resources.description', 'users.user_name', 'users.id as user_id', 'users.avatar_URL')
  //   .then((results) => {
  //     templateVars.resource_details = results[0];
  //     knex('categories')
  //       .select()
  //       .then((categories) => {
  //         templateVars.categories = categories;
  //         res.render("resource_detail.ejs", templateVars);
  //       })
  //   })
  //   .catch(function(error) {
  //     console.error(error);
  //   });

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
