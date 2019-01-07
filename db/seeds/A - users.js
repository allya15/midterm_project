exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 10000001, username: 'ckapernick', email: 'ckapernick@nike.com', password: '12', firstName: 'Colin', lastName: 'Kapernick'}),
        knex('users').insert({id: 10000002, username: 'madtitan', email: 'getRockz@titan.com', password: '12', firstName: 'Thanos', lastName: ''}),
        knex('users').insert({id: 10000003, username: 'trump', email: 'TRUMP@TRUMP.com', password: '12', firstName: 'Donald', lastName: 'Trump'}),
        knex('users').insert({id: 10000004, username: 'AllyGator', email: 'ally@gator.com', password: '12', firstName: 'Ally', lastName: 'Gator'}),
      ]);
    });

};
