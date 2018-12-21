exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function() {
      return Promise.all([
        knex('urls').insert({id: 20000001, url: 'https://www.wikihow.com/Do-Lunges', user_id: 10000001, description: 'pre game warmup', dateAdded: '1536067339266'}),
        knex('urls').insert({id: 20000002, url: 'https://www.mineralogicalsocietyofdc.org/learn-about-minerals-mineralogy', user_id: 10000002, description:'several mineralogy sources', dateAdded: '1524812400000'}),
        knex('urls').insert({id: 20000003, url: 'https://www.britannica.com/topic/gaslighting', user_id: 10000003, description: 'Gaslighting! Ridiculous!', dateAdded:''}),
        knex('urls').insert({id: 20000004, url: 'https://www.stack.com/a/4-hip-flexor-stretches-to-relieve-tight-hips', user_id: 10000001, description: 'stretches', dateAdded: '1536067342587'}),
        knex('urls').insert({id: 20000005, url: 'https://en.wikipedia.org/wiki/Malthusianism', user_id: 10000002, description: 'production vs population', dateAdded: '1524476500000'}),
        knex('urls').insert({id: 20000006, url: 'https://www.destinationamerica.com/tv-shows/monsters-mysteries-in-america/videos/twins-abducted-by-aliens', user_id: 10000003, description: 'Illegal Aliens!', dateAdded:''}),
      ])
    })
}