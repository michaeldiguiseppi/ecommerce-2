var express   = require('express');
var router    = express.Router();
var queries   = require('../queries_v.js');

function ensureAdmin (req, res, next) {
  if (!req.session.user.admin) {
    return res.redirect('/login');
  } else {
    return next();
  }
}

router.use(ensureAdmin);

router.get('/', function(req, res, next) {
    queries.adminDash()
    .then(function(data) {
        res.render('admin', {
            title: "Admin Dashboard",
            data: data
        });
    })
    .catch(function(err) {
        return next(err);
    });
});

router.get('/add-product', function(req, res, next) {
    res.render('add_edit', {
        title: "Add Product",
        link: '/add-product'
    });
});


router.get('/update-product/:id', function(req, res, next) {
    queries.getOneProduct(req.params.id)
    .then(function(data) {
        res.render('add_edit', {
            title: "Update Product",
            link: '/update-product/'+req.params.id,
            data: data
        });
    })
    .catch(function(err) {
        return next(err);
    });
});

router.post('/delete/:id', function(req, res, next) {
    queries.deleteProduct(req.params.id)
    .then(function() {
        res.redirect('/admin');
    })
    .catch(function(err) {
        return next(err);
    });
});

router.post('/add-product', function(req, res, next) {
    queries.insertProduct(req.body)
    .then(function() {
        res.redirect('/admin');
    })
    .catch(function(err) {
        return next(err);
    });
});

router.post('/update-product/:id', function(req, res, next) {
    queries.updateProduct(req.params.id, req.body)
    .then(function() {
        res.redirect('/admin');
    })
    .catch(function(err) {
        return next(err);
    });
});

module.exports = router;
