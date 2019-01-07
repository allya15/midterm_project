"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    const referer = req.headers.referer.split('/');
    const topicraw = referer[4].split('?');
    const topic = topicraw[0];
    knex('urls')
    .join('topics', 'urls.id', '=', 'topics.url_id')
    .select('*')
    .where({
      topic: topic,
    })
    .then((results) => {
      console.log(results)
      res.json(results);
    })
  })
  return router;
};
