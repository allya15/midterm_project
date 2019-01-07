"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    knex
    .select('*')
    .from('urls')
    .orderBy('dateAdded', 'desc')
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}

/*
Table columns:
id
url
user_id
description
dateAdded
*/
