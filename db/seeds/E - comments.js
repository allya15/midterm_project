exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(() => {
      return Promise.all([
        knex('comments').insert({id: 50000001, comment: 'So interesting and informative, thank you', user_id: 10000001, url_id: 20000001, date:'20180114', author: 'LungeMaster3000'}),
        knex('comments').insert({id: 50000002, comment: 'What a strange confusing world we live in', user_id: 10000002, url_id: 20000002, date:'20180114', author: 'Tony Danza'}),
        knex('comments').insert({id: 50000003, comment: 'FAKE! I am often accused of gaslighting, but I have NEVER farted into an open flame!', user_id: 10000003, url_id: 20000003, date:'20180114', author: 'Donald Trump'}),
        knex('comments').insert({id: 50000004, comment: 'This just knocked my socks off!', user_id: 10000001, url_id: 20000004, date:'20180114', author: 'Betty White'}),
        knex('comments').insert({id: 50000005, comment: 'Fascinating read', user_id: 10000002, url_id: 20000005, date:'20180114', author: 'Curly Joe'}),
        knex('comments').insert({id: 50000006, comment: `Illegal aliens are abducting american citizens! We will build a giant dome over the U.S.A! It will be a fabulous dome,
        the most beautiful dome you\'ve ever seen, the best dome! And I can make the aliens pay for it! I make the greatest deals!`, user_id: 10000003, url_id: 20000006, date:'20180114', author: 'Donald Trump'}),
        knex('comments').insert({id: 50000007, comment: 'TWINS BASIL!', user_id: 10000003, url_id: 20000006, date:'20180114', author: 'Austin Powers'}),
        knex('comments').insert({id: 50000008, comment: 'Make america great again, amma right?', user_id: 10000003, url_id: 20000007, date: '20180114', author: 'Donny Tramp'}),
        knex('comments').insert({id: 50000009, comment: 'She is married to a human potatoe', user_id: 10000003, url_id: 20000008, date: '20180114', author: 'Hil Dawg'}),
        knex('comments').insert({id: 50000010, comment: 'Its magestical', user_id: 10000003, url_id: 20000009, date: '20180114', author: 'Uncle'}),
      ])
    })
}
