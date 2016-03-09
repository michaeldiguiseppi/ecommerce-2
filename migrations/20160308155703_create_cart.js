exports.up = function(knex, Promise) {
  return knex.schema.createTable('carts', function(table){
    table.increments('id');
    table.integer('user_id');
    table.integer('batch_id');
    table.integer('product_id');
    table.foreign('user_id').references('users(id)');
    table.foreign('product_id').references('products(id)');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('carts');
};
