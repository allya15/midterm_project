exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return Promise.all([
        knex('topics').insert({id: 30000001, topic: 'Biology', url_id: 20000001}),
        knex('topics').insert({id: 30000002, topic: 'Anatomy', url_id: 20000001}),
        knex('topics').insert({id: 30000003, topic: 'Exercise', url_id: 20000001}),
        knex('topics').insert({id: 30000004, topic: 'Earth Science', url_id: 20000002}),
        knex('topics').insert({id: 30000005, topic: 'Geology', url_id: 20000002}),
        knex('topics').insert({id: 30000006, topic: 'Mineralogy', url_id: 20000002}),
        knex('topics').insert({id: 30000007, topic: 'FAKE NEWS', url_id: 20000003}),
        knex('topics').insert({id: 30000008, topic: 'Biology', url_id: 20000004}),
        knex('topics').insert({id: 30000009, topic: 'Anatomy', url_id: 20000004}),
        knex('topics').insert({id: 30000010, topic: 'Exercise', url_id: 20000004}),
        knex('topics').insert({id: 30000011, topic: 'Philosophy', url_id: 20000005}),
        knex('topics').insert({id: 30000012, topic: 'Economics', url_id: 20000005}),
        knex('topics').insert({id: 30000013, topic: 'Politics', url_id: 20000006}),
      ])
    })
}