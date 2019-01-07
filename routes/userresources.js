"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    const referer = req.headers.referer.split('/');
    const userRaw = referer[4].split('?');
    const user = userRaw[0];
    knex
    .select('urls.title', 'urls.description', 'urls.id', 'urls.image', 'urls.dateAdded')
    .from('urls')
    .join('users', 'urls.user_id', 'users.id')
    .where('users.username', user)
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}
