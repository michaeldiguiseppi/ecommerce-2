var express   = require('express');
var router    = express.Router();
var queries   = require('../queries.js');

/*
  1. index  '/'                                           GET
  2. products  '/products'                                GET
  3. checkout  '/checkout'                                GET/POST
  4. log in  '/sign_in'                                   GET/POST
  5. sign-up  '/sign_up'                                  GET/POST
  6. user-account '/my_account'                           GET
  7. admin dashboard '/admin'                             GET
  8. add product '/products/add'                          GET/POST
  9. edit product '/products/:id/edit'                    GET/POST
  10. delete product '/products/:id/delete'               POST
  11. log out '/logout'                                   GET
*/

/*
  var user = {
    username: ,
    admin: t/f
  }

  function ensureLoggedIn (req, res, next) {
    if (!req.session.user) {
      return res.redirect('/login');
    } else {
      return next();
    }
  }

  function ensureAdmin (req, res, next) {
  if (!req.session.user.admin) {
    return res.redirect('/login');
  } else {
    return next();
  }
}

*/

router.get('/', function(req, res, next) {
  // render the index page with a few selected products from the DB.
  res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  // get all products to render the product page.
  res.render('products', {title: 'Products'});
});

router.post('/products/:id/add', function(req, res, next) {
  // not sure if necessary, adds the specified ID to the shopping cart.
  // possibly using session storage before inserting to the database?
  res.redirect('/products');
});

router.get('/checkout', function(req, res, next) {
  // render the checkout form.
  res.render('checkout', {title: 'Checkout'});
});

router.post('/checkout', function(req, res, next) {
  // submit the checkout form, query the stripe API, and redirect to home after success.
  res.redirect('/');
});

router.get('/sign_in', function(req, res, next) {
  // render the sign in page.
  res.render('login', {title: 'Sign In'});
});

router.post('/sign_in', function(req, res, next) {
  // sign the user in if their email exists in the DB and the password matches.
  res.redirect('/');
});

router.get('/sign_up', function(req, res, next) {
  // render the sign up page.
  res.render('signup', {title: 'Sign Up'});
});

router.post('/sign_up', function(req, res, next) {
  // add the user to the DB.
  res.redirect('/');
});

router.get('/my_account', function(req, res, next) {
  // render the my_account page to show users past orders.
  res.render('user_account', {title: 'Your Account'});
});

router.get('/admin', function(req, res, next) {
  // render the admin page in order to see all orders.
  res.render('admin', {title: 'Admin Dashboard'});
});

router.get('/products/add', function(req, res, next) {
  // render the add_edit page to add a new product. **ADMIN ONLY**
  res.render('add_edit', {title: 'Add New Product'});
});

router.post('/products/add', function(req, res, next) {
  // submit the add product page to add a new product to the DB. **ADMIN ONLY**
  res.redirect('/admin');
});

router.get('/products/:id/edit', function(req, res, next) {
  // render the add_edit page to edit a product. **ADMIN ONLY**
  res.render('add_edit', {title: 'Edit Product'});
});

router.post('/products/:id/edit', function(req, res, next) {
  // submit the edit form to update the product in the DB. **ADMIN ONLY**
  res.redirect('/admin');
});

router.post('/products/:id/delete', function(req, res, next) {
  // delete a product from the database. **ADMIN ONLY**
  res.redirect('/admin');
});

router.post('/logout', function(req, res, next) {
  // log out the user and redirect to the index page.  Possibly with log out connect-flash message.
  res.redirect('/');
});


module.exports = router;
