"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex('urls')
    .join('topics', 'urls.id', '=', 'topics.url_id')
    .select('*')
    .where({
      topic: 'biology',
    })
    .then((results) => {
      console.log(results)
      res.json(results);
    })
  })
  return router;
};