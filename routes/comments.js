"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex
    .select('*')
    .from('comments')
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}


/*
Table headings:
id
comment
user_id
url_id
date
*/
