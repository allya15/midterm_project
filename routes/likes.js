"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex
    .select('*')
    .from('likes')
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}


/*
Table columns:
id
liked
user_id
url_id
*/
