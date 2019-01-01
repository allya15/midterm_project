exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 10000001, email: 'ckapernick@nike.com', password: '12', firstName: 'Colin', lastName: 'Kapernick'}),
        knex('users').insert({id: 10000002, email: 'getRockz@titan.com', password: '12', firstName: 'Thanos', lastName: ''}),
        knex('users').insert({id: 10000003, email: 'TRUMP@TRUMP.com', password: '12', firstName: 'Donald', lastName: 'Trump'}),
      ]);
    });

};
