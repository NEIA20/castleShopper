const Castle = require('APP/db/models/castle')
const categoryRoute = require('express').Router()



categoryRoute.get('/descending',function(req,res,next) {
    Castle.findAll({
        order: [['price','DESC']]
    })
    .then(result => res.send(result))
})

categoryRoute.get('/ascending',function(req,res,next) {
    Castle.findAll({
        order: [['price','ASC']]
    })
    .then(result => res.send(result))
})

module.exports = categoryRoute