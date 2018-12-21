exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return Promise.all([
        knex('topics').insert({id: 1, topic: ['Biology', 'Anatomy', 'Exercise'], url_id: 1}),
        knex('topics').insert({id: 2, topic: ['Earth Science', 'Geology', 'Mineralogy'], url_id: 2}),
        knex('topics').insert({id: 3, topic: ['FAKE NEWS'], url_id: 3}),
        knex('topics').insert({id: 4, topic: ['Biology', 'Anatomy', 'Exercise'], url_id: 4}),
        knex('topics').insert({id: 5, topic: ['Philosophy', 'Economics'], url_id: 5}),
        knex('topics').insert({id: 6, topic: ['Politics'], url_id: 6}),
      ])
    })
}