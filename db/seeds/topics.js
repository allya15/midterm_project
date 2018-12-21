exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return Promise.all([
        knex('topics').insert({id: 1, topic: '', url_id: 1}),
        knex('topics').insert({id: 2, topic: '', url_id: 2}),
        knex('topics').insert({id: 3, topic: '', url_id: 3}),
        knex('topics').insert({id: 4, topic: '', url_id: 4}),
        knex('topics').insert({id: 5, topic: '', url_id: 5}),
        knex('topics').insert({id: 6, topic: '', url_id: 6}),
      ])
    })
}