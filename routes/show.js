"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
  router.get("/", (req,res) => {


    const myID = req.headers.referer.split('/');
    const myID2 = myID[4]

    console.log('id', myID)
    console.log(myID2)


    knex
    .select('*')
    .from('urls')
    .where('id', myID2)
    .then((results) =>{
      res.json(results);
    })
  });

  return router;
}
