exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function() {
      return Promise.all([
        knex('urls').insert({id: 20000001, title: 'Lunges', url: 'https://www.wikihow.com/Do-Lunges', user_id: 10000001, description: 'pre game warmup', dateAdded: '1536067339266'}),
        knex('urls').insert({id: 20000002, title: 'Learn about Minerals', url: 'https://www.mineralogicalsocietyofdc.org/learn-about-minerals-mineralogy', user_id: 10000002, description:'several mineralogy sources', dateAdded: '1524812400000'}),
        knex('urls').insert({id: 20000003, title: 'Gaslighting', url: 'https://www.britannica.com/topic/gaslighting', user_id: 10000003, description: 'Gaslighting! Ridiculous!', dateAdded:''}),
        knex('urls').insert({id: 20000004, title: 'Hip Stretches', url: 'https://www.stack.com/a/4-hip-flexor-stretches-to-relieve-tight-hips', user_id: 10000001, description: 'stretches', dateAdded: '1536067342587'}),
        knex('urls').insert({id: 20000005, title: 'Malthusianism', url: 'https://en.wikipedia.org/wiki/Malthusianism', user_id: 10000002, description: 'production vs population', dateAdded: '1524476500000'}),
        knex('urls').insert({id: 20000006, title: 'Citizens Abducted!', url: 'https://www.destinationamerica.com/tv-shows/monsters-mysteries-in-america/videos/twins-abducted-by-aliens', user_id: 10000003, description: 'Illegal Aliens!', dateAdded:''}),
        knex('urls').insert({id: 20000007, title: '@@@', url: 'https://www.destinationamerica.com/tv-shows/monsters-mysteries-in-america/videos/twins-abducted-by-aliens', user_id: 10000003, description: '@@@@@@@', dateAdded:'@@'}),
      ])
    })
}