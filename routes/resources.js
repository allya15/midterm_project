"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //HOME page - knex gets all data for home page
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("urls") //KENNY - im assuming you called the table resources, change if not
      .then((results) => {
        res.json(results);
    });
  });

  //ADD A NEW RESOURCE
  router.post("/new", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const url = req.body.url;
    const urlimage = req.body.urlimage;
    const user_id = req.body.user_id;
    knex("resources")
      .insert({
        title: title,
        description: description,
        url: url,
        urlimage: urlimage
        // user_id: user_id,
      })
      .then((results) => {
        res.redirect("/");
      });
  });

  return router;
}
