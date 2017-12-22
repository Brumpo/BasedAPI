const express = require('express')
const router = express.Router()
const knex = require('../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const queries = require('./queries.js')

router.get('/tweets',queries.getTweets)

router.get('/tweets/:id',queries.getTweetId)

router.post('/user/',queries.postUser)

router.post('/users/',queries.postUsers)



module.exports = router
