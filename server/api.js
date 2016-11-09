'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/castles',require('./castles'))
  .use('/bids', require('./bid'))
  .use('/reviews', require('./review'))
  .use('/signup', require('./signup'))
  .use('/category',require('./category'))
// Send along any errors

api.use((err, req, res, next) => {
  res.status(500).send(err)
  console.error(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())