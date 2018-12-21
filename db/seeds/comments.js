exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(() => {
      return Promise.all([
        knex('comments').insert({id: 1, comment: '', user_id: 1, url_id: 1, date:''}),
        knex('comments').insert({id: 2, comment: '', user_id: 2, url_id: 2, date:''}),
        knex('comments').insert({id: 3, comment: 'FAKE! I am often accused of gaslighting, but I have NEVER farted into an open flame!', user_id: 3, url_id: 3, date:''}),
        knex('comments').insert({id: 4, comment: '', user_id: 1, url_id: 4, date:''}),
        knex('comments').insert({id: 5, comment: '', user_id: 2, url_id: 5, date:''}),
        knex('comments').insert({id: 6, comment: `Illegal aliens are abducting american citizens! We will build a giant dome over the U.S.A! It will be a fabulous dome, 
        the most beautiful dome you\'ve ever seen, the best dome! And I can make the aliens pay for it! I make the greatest deals!`, user_id: 3, url_id: 6, date:''}),

      ])
    })
}