exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return Promise.all([
        knex('topics').insert({id: 30000001, topic: 'biology', url_id: 20000001}),
        knex('topics').insert({id: 30000002, topic: 'anatomy', url_id: 20000001}),
        knex('topics').insert({id: 30000003, topic: 'exercise', url_id: 20000001}),
        knex('topics').insert({id: 30000004, topic: 'earth science', url_id: 20000002}),
        knex('topics').insert({id: 30000005, topic: 'geology', url_id: 20000002}),
        knex('topics').insert({id: 30000006, topic: 'mineralogy', url_id: 20000002}),
        knex('topics').insert({id: 30000007, topic: 'fake news', url_id: 20000003}),
        knex('topics').insert({id: 30000008, topic: 'biology', url_id: 20000004}),
        knex('topics').insert({id: 30000009, topic: 'anatomy', url_id: 20000004}),
        knex('topics').insert({id: 30000010, topic: 'exercise', url_id: 20000004}),
        knex('topics').insert({id: 30000011, topic: 'philosophy', url_id: 20000005}),
        knex('topics').insert({id: 30000012, topic: 'economics', url_id: 20000005}),
        knex('topics').insert({id: 30000013, topic: 'politics', url_id: 20000006}),
      ])
    })
}