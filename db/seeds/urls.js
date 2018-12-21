exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function() {
      return Promise.all([
        knex('urls').insert({id: 1, url:'https://www.wikihow.com/Do-Lunges', user_id: 1, description: 'pre game workout', dateAdded: '1536067339266'}),
        knex('urls').insert({id: 2, url:'https://www.mineralogicalsocietyofdc.org/learn-about-minerals-mineralogy', user_id: 2, description:'several mineralogy sources', dateAdded:'1524812400000'}),
        knex('urls').insert({id: 3, url:'', user_id: 3, description:'', dateAdded:''}),
        knex('urls').insert({id: 4, url:'https://www.stack.com/a/4-hip-flexor-stretches-to-relieve-tight-hips', user_id: 1, description: 'stretches', dateAdded:'1536067342587'}),
        knex('urls').insert({id: 5, url:'', user_id: 2, description:'', dateAdded:''}),
        knex('urls').insert({id: 6, url:'', user_id: 3, description:'', dateAdded:''}),
      ])
    })
}