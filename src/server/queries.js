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
  getAllProducts: function() {
    // get all the products from the DB.
  },
  getOneProduct: function(id) {
    // get one product from the DB, specified by ID.
  },
  addProductToOrder: function(id) {
    // add product to order.  potentially session storage?
  },
  insertProduct: function(id) {
    // insert new product to DB.
  },
  updateProduct: function(id) {
    // update product in DB.
  },
  deleteProduct: function(id) {
    // delete a product from the DB.
  },
  getUser: function(body) {
    // get user based on email address, and compare password.
  },
  addUser: function(body) {
    // insert a new user into the DB.
  },
  getOrdersByUser: function(id) {
    // get all orders, based on the user ID, for populating the user account page.
  }
};
