exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function() {
      return Promise.all([
        knex('urls').insert({id: 20000001, title: 'Lunges', url: 'https://www.wikihow.com/Do-Lunges', user_id: 10000001, description: 'pre game warmup', dateAdded: '1536067339266', image: 'https://www.wikihow.com/images/thumb/d/dd/Do-Lunges-Step-8-Version-5.jpg/aid2787766-v4-900px-Do-Lunges-Step-8-Version-5.jpg'}),
        knex('urls').insert({id: 20000002, title: 'Learn about Minerals', url: 'https://www.mineralogicalsocietyofdc.org/learn-about-minerals-mineralogy', user_id: 10000002, description:'several mineralogy sources', dateAdded: '1524812400000', image: 'https://www.mineralogicalsocietyofdc.org/sites/default/files/styles/gallery_thumbnail/public/photo-album-images/2016-08/IMG_1869.JPG?itok=vD45FApj'}),
        knex('urls').insert({id: 20000003, title: 'Gaslighting', url: 'https://www.britannica.com/topic/gaslighting', user_id: 10000003, description: 'Gaslighting! Ridiculous!', dateAdded:'', image: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/532258_496933760321458_759171237_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=0e9c6da4b2df1f67779f31b61ff06e30&oe=5C91AB68'}),
        knex('urls').insert({id: 20000004, title: 'Hip Stretches', url: 'https://www.stack.com/a/4-hip-flexor-stretches-to-relieve-tight-hips', user_id: 10000001, description: 'stretches', dateAdded: '1536067342587', image: 'http://upl.stack.com/wp-content/uploads/2015/11/02170901/Spiderman-Stretch-STACK.png'}),
        knex('urls').insert({id: 20000005, title: 'Malthusianism', url: 'https://en.wikipedia.org/wiki/Malthusianism', user_id: 10000002, description: 'production vs population', dateAdded: '1524476500000', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Malthus_PL_en.svg/2560px-Malthus_PL_en.svg.png'}),
        knex('urls').insert({id: 20000006, title: 'Citizens Abducted!', url: 'https://www.destinationamerica.com/tv-shows/monsters-mysteries-in-america/videos/twins-abducted-by-aliens', user_id: 10000003, description: 'Illegal Aliens!', dateAdded:'', image: 'http://greatdreams.com/ufos/ht_audrey_17_090814_mn.jpg'}),
      ])
    })
}
