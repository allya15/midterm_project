exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 1, email: 'ckapernick@nike.com', pass: '12', firstName: 'Colin', lastName: 'Kapernick'}),
        knex('users').insert({id: 2, email: 'getRockz@titan.com', pass: '12', firstName: 'Thanos', lastName: ''}),
        knex('users').insert({id: 3, email: 'TRUMP@TRUMP.com', pass: '12', firstName: 'Donald', lastName: 'Trump'}),
      ]);
    });
};
