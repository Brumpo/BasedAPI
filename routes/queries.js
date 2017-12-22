const express = require('express');
const knex = require('../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const getTweets = (req,res,next)=>{
  knex('tweets')
  .then((tweets)=>{
    res.status(200).send(tweets)
  })
  .catch((err)=>{
    next(err)
  })
}
const getTweetId = (req,res,next)=>{
  knex('tweets').where({id: req.params.id}).first()
  .then((tweet)=>{
    res.status(200).send(tweet)
  })
}
const postUser = (req,res,next)=>{
  console.log('bodyParSe',req.body);
  knex('users').where({email: req.body.email}).first()
  .then((user)=>{
    bcrypt.compare(req.body.password, user.password, function(err, ver) {
        ver ? res.status(200).send({id:user.id}): res.sendStatus(401)
    })
  })
}
const postUsers = (req,res,next)=>{
  var salt = bcrypt.genSaltSync(6)
  var hash = bcrypt.hashSync(req.body.password, salt);
  console.log('hash',hash);
  knex('users').insert({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:hash
  },'*')
  .then(user=>{
    res.status(204).send({id:user[0].id})
  })
}
module.exports = {
  getTweets,
  getTweetId,
  postUser,
  postUsers
}
