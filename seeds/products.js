
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('products').del(),

    // Inserts seed entries
    knex('products').insert({
        design: 'Rad People',
        img: '../../image/radPeopleBlu.png',
        color: 'Navy',
        price: 20
    }),
    knex('products').insert({
        design: 'Rad People',
        img: '../../image/radPeopleGray.png',
        color: 'Space Gray',
        price: 20
    }),
    knex('products').insert({
        design: 'Rad People',
        img: '../../image/radPeopleRed.png',
        color: 'Red',
        price: 20
    }),
    knex('products').insert({
        design: 'G19',
        img: '../../image/g19Blu.png',
        color: 'Navy',
        price: 20
    }),
    knex('products').insert({
        design: 'G19',
        img: '../../image/g19Gray.png',
        color: 'Space Gray',
        price: 20
    }),
    knex('products').insert({
        design: 'G19',
        img: '../../image/g19Red.png',
        color: 'Red',
        price: 20
    })
  );
};
