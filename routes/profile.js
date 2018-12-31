"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {
    const referer = req.headers.referer.split('/');
    const user = referer[3].split('-');
    const firstName = user[0];
    const lastName = user[1].replace("?", "");
    knex
    .select('*')
    .from('users')
    .where('firstName', firstName)
    .andWhere('lastName', lastName)
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}
