"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex
    .select('*')
    .from('ratings')
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}


/*
Table columns:
id
rated
user_id
url_id
*/
