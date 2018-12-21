exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(() => {
      return Promise.all([
        knex('ratings').insert({id: 1, rated: 4, user_id: 1, url_id: 1}),
        knex('ratings').insert({id: 2, rated: 2.5, user_id: 2, url_id: 2}),
        knex('ratings').insert({id: 3, rated: 1, user_id: 3, url_id: 3}),
        knex('ratings').insert({id: 4, rated: 4, user_id: 1, url_id: 4}),
        knex('ratings').insert({id: 5, rated: 2.5, user_id: 2, url_id: 5}),
        knex('ratings').insert({id: 6, rated: 5, user_id: 3, url_id: 6}),
      ])
    })
}