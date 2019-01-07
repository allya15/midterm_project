exports.seed = function(knex, Promise) {
  return knex('topics').del()
    .then(() => {
      return Promise.all([
        knex('topics').insert({id: 30000001, topic: 'politics', url_id: 20000001}),
        knex('topics').insert({id: 30000002, topic: 'philosophy', url_id: 20000002}),
        knex('topics').insert({id: 30000003, topic: 'anatomy', url_id: 20000003}),
        knex('topics').insert({id: 30000004, topic: 'politics', url_id: 20000004}),
        knex('topics').insert({id: 30000005, topic: 'politics', url_id: 20000005}),
        knex('topics').insert({id: 30000006, topic: 'politics', url_id: 20000006}),
        knex('topics').insert({id: 30000007, topic: 'philosophy', url_id: 20000007}),
        knex('topics').insert({id: 30000008, topic: 'biology', url_id: 20000020}),
        knex('topics').insert({id: 30000009, topic: 'geology', url_id: 20000021}),
        knex('topics').insert({id: 30000010, topic: 'philosophy', url_id: 20000023}),
        knex('topics').insert({id: 30000011, topic: 'biology', url_id: 20000024}),
        knex('topics').insert({id: 30000012, topic: 'economics', url_id: 20000025}),
        knex('topics').insert({id: 30000013, topic: 'politics', url_id: 20000026}),
        knex('topics').insert({id: 30000014, topic: 'economics', url_id: 20000027}),
        knex('topics').insert({id: 30000015, topic: 'philosophy', url_id: 20000028}),
        knex('topics').insert({id: 30000016, topic: 'philosophy', url_id: 20000029}),
      ])
    })
}
