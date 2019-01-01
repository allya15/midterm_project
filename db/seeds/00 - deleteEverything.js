exports.seed = function(knex, Promise) {
  console.log('deleting')
  return Promise.all([
    knex('comments').del(),
    knex('ratings').del(),
    knex('topics').del(),
  ])
  .then(function() {
    return knex('urls').del()
  })
  .then(function() {
    return knex('users').del()
  })
  .catch(err => {
    console.log('err', err);
  })
};