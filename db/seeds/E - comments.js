exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(() => {
      return Promise.all([
        knex('comments').insert({id: 50000001, comment: 'comment1', user_id: 10000001, url_id: 20000001, date:''}),
        knex('comments').insert({id: 50000002, comment: 'comment2', user_id: 10000002, url_id: 20000002, date:''}),
        knex('comments').insert({id: 50000003, comment: 'FAKE! I am often accused of gaslighting, but I have NEVER farted into an open flame!', user_id: 10000003, url_id: 20000003, date:''}),
        knex('comments').insert({id: 50000004, comment: 'comment3', user_id: 10000001, url_id: 20000004, date:''}),
        knex('comments').insert({id: 50000005, comment: 'comment4', user_id: 10000002, url_id: 20000005, date:''}),
        knex('comments').insert({id: 50000006, comment: `Illegal aliens are abducting american citizens! We will build a giant dome over the U.S.A! It will be a fabulous dome, 
        the most beautiful dome you\'ve ever seen, the best dome! And I can make the aliens pay for it! I make the greatest deals!`, user_id: 10000003, url_id: 20000006, date:''}),
      ])
    })
}