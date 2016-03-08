
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
        email: 'radmin@gmail.com',
        password: 'magic',
        admin: true
    }),
    knex('users').insert({
        email: 'fakeuser@gmail.com',
        password: 'shirts',
        admin: false
    })
  );
};
