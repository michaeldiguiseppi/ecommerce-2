exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments('id');
    table.string('design');
    table.string('img');
    table.string('color');
    table.integer('price');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};