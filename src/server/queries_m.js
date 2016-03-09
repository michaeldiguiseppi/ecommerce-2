var knex = require('../../db/knex');

function Products () {
  return knex('products');
}

function Users () {
  return knex('users');
}

function Orders () {
  return knex('orders');
}

module.exports = {
  getFeaturedProducts: function() {
    return Products().select().limit(3).then(function(data) {
      return data;
    });
  },
  getAllProducts: function() {
    // get all the products from the DB.
    return Products().select().then(function(data) {
      return data;
    });
  },
  //ADMIN QUERIES
  adminDash: function() {
    return Products().innerJoin('orders', 'products.id', 'orders.product_id');
  },
  insertProduct: function(body) {
    return Products().insert({design: body.design, img: body.img, color: body.color, price: body.price});
  },
  updateProduct: function(id, body) {
    return Products().where('id', id).update({design: body.design, img: body.img, color: body.color, price: body.price});
  },
  deleteProduct: function(id) {
    return Products().where('id', id).del();
  },
  //USER QUERIES
  addProductToCart: function(userId, productId) {
    return Carts().insert({user_id: userId, product_id: productId});
  },
  checkout: function(id) {
    return Carts().where('user_id', id);
  },
  userDash: function(id) {
    return Users().where('id', id).innerJoin('orders', 'users.id', 'orders.user_id');
  },
  addUser: function(body) {
    return Users().insert({email: body.email, password: body.email});
  }
};
