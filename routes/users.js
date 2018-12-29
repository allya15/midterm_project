"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //register new user
  router.post("/register", (req, res) => {
    const username = req.body.username; //from tinyapp
    const password = req.body.password;

    knex("users")
      .insert({
        name: username,
        password: password
      })
      .then((results) => {
        res.cookie("username", username).redirect("/"); //i am assuming we will use cookies, but you have not set that up at all yet
      })
  });

  return router;
}
