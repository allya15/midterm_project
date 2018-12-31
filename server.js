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

// Home page
app.get("/", (req, res) => {

  const everything = Promise.all([getUsers, getURLs, getTopics, getRatings, getComments])
    .then(function(result) {
      const templateVars = {
        users: result[0],
        urls: result[1],
        topics: result[2],
        ratings: result[3],
        comments: result[4]
      }
    res.render("index", templateVars)
    })

});

//Login page
//Does what it is says on the tin...
app.get("/login", (req, res) => {
  
  const everything = Promise.all([getUsers])
    .then(function(result) {
      const templateVars = {
        users: result[0],
        username: req.session.user_id
      }
    res.render("login", templateVars);
    })

});

app.post("/login", (req, res) => {
  
  const users = Promise.all([getUsers])
    .then(function(result) {
      for (var i in result) {
        console.log(result[i])
      }
    })


```
    if (result[i].email === req.body.email) {
     if (result[i].password === req.body.password) {
    ?@?@    req.session.user_id = result[i].id
       res.redirect('/')
    } else {
       res.redirect('/')
    }
    }
```

  res.render("/");
});

//Profile page
//update route to get :userid instead of profile



```
@@@knex branch@@@

app.get('/profile/:id', (req, res) => {

  const everything = Promise.all([getUsers, getURLs, getTopics, getRatings, getComments])
  .then(function(result) {
    const templateVars = {
      users: result[0],
      urls: result[1],
      topics: result[2],
      ratings: result[3],
      comments: result[4]
    }
  })
  res.render('profile')
})

```

app.get("/profile", (req, res) => {
  res.render("profile");
});


//Register page
//need to add post route to actually register
//fill out form for email, password, etc
app.get("/register", (req, res) => {
  res.render("register");
});


```
app.post('/register', (req, res) => {

  const users = Promise.all([getUsers])
    .then(function(result) {
      const templateVars = {
        users: result[0]
      }
    })




    for (var i in users) {
      if (req.body.email !== users[i].email) {
        //insert
      } else {
        res.send(
                  <!DOCTYPE HTML>
                  <HTML>
                    <head></head>
                    <body>
                      Email already exists
                      <a href='/register'>Back to registration</a>
                    </body>
                  </HTML>
          )
      }
    }

  res.render('register')
})


knex('users').insert({
  id: ,
  email: req.body.email, 
  pass: req.body.password,
  firstname: req.body.first, 
  lastname: req.body.last
})
  .then(function(result) {
    res.redirect('/')
  })
```


//Saved Resources Page
app.get("/saved", (req, res) => {

  const everything = Promise.all([getUsers, getURLs])
    .then(function(result) {
      const templateVars = {
        users: result[0],
        urls: result[1]
      }
      res.render("saved", templateVars);
    })

});

//Individual resource page
//update route to get :resourceid instead of individual
app.get("/individual", (req, res) => {

  const everything = Promise.all([getUsers, getURLs, getTopics, getRatings, getComments])
    .then(function(result) {
      const templateVars = {
        users: result[0],
        urls: result[1],
        topics: result[2],
        ratings: result[3],
        comments = result[4]
      }
      res.render("show", templateVars);
    })
});

//Add a new resource
//need to add route to POST to the home page with new url, as well as to your own profile page
app.get("/new", (req, res) => {

  res.render("new");
});

```
app.post('/new', (req, res) => {

  const urls = Promise.all([getURLs])
    .then(function(result) => {
      const templateVars = {
        urls: result[0]
      }

      for (var i in urls) {
        if (req.body.url !== urls[i].url) {
          //insert
        } else {
          res.send(
                    <!doctype html>
                    <html>
                      <head></head>
                      <body>
                        Page already exists
                        <a href='/new'>Back to Add New Page</a>
                      </body>
                    </html>
          )

        }
      }
    })


})




return knex('urls')
  .insert({
    id: ,
    url: req.body.url,
    user_id: req.session.user_id,     //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    description: req.body.description,
    dateAdded: Date.now(), //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  })
  .then(function(result) {
    res.redirect('individual')
  })



```










```

const topics = Promise.all([getTopics])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
  })


```


//Catergory Pages
//All Catergories

```
app.get("/", (req, res) => {

  const topics = Promise.all([getTopics])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("index", templateVars);
  })

});



//Math Page
app.get("/maths", (req, res) => {

  const getTopicMath = knex('topics').select('*').where(topic: 'math')
    .then(function(result) {
      return result
    })

  const topics = Promise.all([getTopicMath])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("maths", templateVars);
  })

});



//Science Page
app.get("/science", (req, res) => {

  const getTopicSci = knex('topics').select('*').where(topic: 'science')
    .then(function(result) {
      return result
    })

  const topics = Promise.all([getTopicSci])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("science");
  })
});



//Politics Page
app.get("/politics", (req, res) => {



  const topics = Promise.all([getTopicPol])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("politics");
  })
});



//History Page
app.get("/history", (req, res) => {



  const topics = Promise.all([getTopicHis])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("history");
  })
});



//Dog-Meme Page
app.get("/dog-memes", (req, res) => {



  const topics = Promise.all([getTopicDog])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("dog-memes");
  })
});



//Cat-Meme Page
app.get("/cat-memes", (req, res) => {


  
  const topics = Promise.all([getTopicCat])
  .then(function(result) {
    const templateVars = {
      topics: result[0]
    }
    res.render("cat-memes");
  })


});
```








app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
