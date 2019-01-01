exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(() => {
      return Promise.all([
        knex('ratings').insert({id: 40000001, rated: 4, user_id: 10000001, url_id: 20000001}),
        knex('ratings').insert({id: 40000002, rated: 2.5, user_id: 10000002, url_id: 20000002}),
        knex('ratings').insert({id: 40000003, rated: 1, user_id: 10000003, url_id: 20000003}),
        knex('ratings').insert({id: 40000004, rated: 4, user_id: 10000001, url_id: 20000004}),
        knex('ratings').insert({id: 40000005, rated: 2.5, user_id: 10000002, url_id: 20000005}),
        knex('ratings').insert({id: 40000006, rated: 5, user_id: 10000003, url_id: 20000006}),
      ])
    })
}