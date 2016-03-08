exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id');
    table.string('email');
    table.string('password');
    table.boolean('admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
