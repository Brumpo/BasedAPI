'use strict';
const express = require('express')
const app = express()
const bodyParSe = require('body-parser')
const port = process.env.PORT || 3001
const knex = require('./knex')
const routes = require('./routes/routes.js');

app.use(express.static('public'))

app.use(bodyParSe.json());
app.use(bodyParSe.urlencoded({ extended: true }))

app.use('/',routes)

app.listen(port,(req,res,next)=>{
  console.log(`you are now tunned to ${port} the bay's oldschool`);
})

module.exports = app
