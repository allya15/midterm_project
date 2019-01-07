"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    const referer = req.headers.referer.split('/');
    const userRaw = referer[4].split('?');
    const user = userRaw[0];
    knex
    .select('*')
    .from('users')
    .where('username', user)
    .then((user) => {
      knex
      .select('*')
      .from('likes')
      .where('likes.user_id', user[0].id)
      .join('urls', 'likes.url_id', 'urls.id')
      .then((results) =>{
        res.json(results);
      })
    })
  });

  return router;
}
