"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {


    const referer = req.headers.referer.split('/');
    const resourceId = referer[3].split('?');
    const myId = resourceId[0];

    knex
    .select('*')
    .from('urls')
    .where('id', myId)
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}
