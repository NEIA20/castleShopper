const debug = require('debug')('auth')
const passport = require('passport')
const Castle = require('APP/db/models/castle')
const db = require('APP/db')
const castlesRoute = require('express').Router()

castlesRoute.get('/:castleId',function(req,res,next) {

    Castle.findById(req.params.castleId)
            .then(foundCastleById => res.send(foundCastleById))
    
})

castlesRoute.get('/search/:searchByCategory',function(req,res,next) {
    Castle.findAll({
        where: {
            category: {
                $contains: [req.params.searchByCategory]
            }
        }
    })
        .then(result => res.send(result))


})



castlesRoute.get('/',function(req,res,next) {
    Castle.findAll({})
        .then(allCastles => res.send(allCastles))
        .catch(next);
})



module.exports = castlesRoute

