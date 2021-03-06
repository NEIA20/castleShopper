const review = require('express').Router();
const Review = require('../db/models/review');

review.route('/')
	.get((req, res, next) => {
		Review
			.findAll()
			.then(reviews => reviews.json())
			.then(reviews => res.status(200).send(reviews))
			.catch(next);
	});

review.route('/:castleId')
	.get((req, res, next) => {
		Review
			.findAll({
				where: {
					castle_id: req.params.castleId
				}
			})
			.then(reviews => res.status(200).send(reviews))
			.catch(console.error);
	})
	.post((req, res, next) => {
		req.body.castle_id = req.params.castleId;
		Review
			.create(req.body)
			.then(review => res.status(201).send(review))
			.catch(next);
	});

review.route('/:userId')
	.get((req, res, next) => {
		Review
			.findAll({
				where: {
					userId: req.params.userId
				}
			})
			.then(reviews => reivews.json())
			.then(reviews => res.status(200).send(reviews))
			.catch(next);
	});


module.exports = review;