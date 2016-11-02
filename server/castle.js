const express = require('express');
const mime = require('mime');
const router = express.Router();
const models = require('../db/models');
const Castle = models.Castle;


router.get('/', function(req, res, next){
    Castle.findAll()
    .then(castles => {
        res.send(castles)
    })
});

router.get('/:castleId', function(req, res, next){
    Castle.findById(req.params.castleId)
    .then(castle => {
        res.send(castle)
    })
})




module.exports = router;