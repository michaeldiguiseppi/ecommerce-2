var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

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

module.exports = router;
