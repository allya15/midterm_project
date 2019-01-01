
// 'liked' value: 0 = none, 1 = like, 2 = dislike

exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(() => {
      return Promise.all([
        knex('likes').insert({liked: 1, user_id: 10000001, url_id: 20000001}),
        knex('likes').insert({liked: 1, user_id: 10000002, url_id: 20000002}),
        knex('likes').insert({liked: 2, user_id: 10000003, url_id: 20000003}),
        knex('likes').insert({liked: 1, user_id: 10000001, url_id: 20000004}),
        knex('likes').insert({liked: 1, user_id: 10000002, url_id: 20000005}),
        knex('likes').insert({liked: 1, user_id: 10000003, url_id: 20000006})
      ])
    })

}