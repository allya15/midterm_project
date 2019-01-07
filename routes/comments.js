"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex('comments')
    .join('urls', 'comments.url_id', '=', 'urls.id')
    .select('*')
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
