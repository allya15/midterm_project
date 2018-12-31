"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    const user = req.session.userid;
    knex
    .select('*')
    .from('users')
    .where('id', user)
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}
