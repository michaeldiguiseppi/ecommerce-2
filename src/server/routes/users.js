require('dotenv').load();
var express   = require('express');
var router    = express.Router();
var queries   = require('../queries_m.js');

router.get('/:id', function(req, res, next) {
    queries.userDash(req.params.id)
    .then(function(data) {
        res.render('user_account', {
            title: 'User Dashboard',
            data: data
        });
    })
    .catch(function(err) {
        return next(err);
    });
});

//not totally solid on this post
router.post('/:id/cart', function(req, res, next) {
    queries.addProductToCart(req.params.id, req.body.id)
    .then(function() {
        res.redirect('/products');
    })
    .catch(function(err) {
        return next(err);
    });
});


router.get('/charge', function(req, res, next) {
    queries.checkout(req.cookies.id)
    .then(function(data) {
        res.render('checkout', {
            title: 'Checkout',
            data: data
        });
    })
    .catch(function(err) {
        return next(err);
    });
});

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  req.body.stripeAmount;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});


module.exports = router;
