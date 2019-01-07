exports.seed = function(knex, Promise) {
  return knex('urls').del()
    .then(function() {
      return Promise.all([
        knex('urls').insert({id: 20000001, title: 'Лорем ипсум долор сит амет, но еум бруте аппеллантур.', url: 'https://russian.rt.com/', user_id: 10000001, description: 'Вих ут долоре фацете регионе, меи цу дебет вулпутате адверсариум, вис не елит пондерум. Еа яуо виси витае мелиоре. Вим но ребум инани харум, еам харум долор фабеллас ет. Цу сит феугиат цетерос.', dateAdded: '20190106', image: 'https://e3.365dm.com/18/03/992x558/skynews-putin-russia_4256840.jpg?20180317234911', rating: '⭐⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000002, title: 'How to Improve Your Speeches With Hand Gestures.', url: 'http://wittcom.com/how-to-give-a-speech/', user_id: 10000001, description: 'Dramatically improve your public speaking skills today!.', dateAdded: '20190105', image: 'https://www.gannett-cdn.com/-mm-/c5c6d4d0a08e848718c206357f6989c03d058758/c=0-18-557-333/local/-/media/2016/03/08/USATODAY/USATODAY/635930370849909037-hands.png?width=3200&height=1680&fit=crop', rating: '⭐⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000003, title: 'How to Stop Your Dentures Falling Out.', url: 'https://barryjonesdds.com/blog/denture-care-tips-new-dentures-vista-dentist/', user_id: 10000001, description: 'Ever had your dentures fall out whilst addressing the United States of America? This article is for you!.', dateAdded: '20190104', image: 'https://barryjonesdds.com/wp-content/uploads/dentures201610a.jpg', rating: '⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000004, title: 'Covfefe', url: 'https://www.theguardian.com/us-news/2017/may/31/what-is-covfefe-donald-trump-baffles-twitter-post', user_id: 10000001, description: 'Despite the constant negative press covfefe', dateAdded: '20190102', image: 'https://www.deseretnews.com/images/article/hires/1846295/1846295.jpg', rating: '⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000005, title: 'Trump Respects Turkeys More Than He Does Women', url: 'https://twitter.com/feministabulous/status/933704661021937664', user_id: 10000001, description: 'Does Donald Trump respect turkeys more than women? This picture proves it!', dateAdded: '20190102', image: 'https://pbs.twimg.com/media/DPUvcA6X4AEGySv.jpg', rating: '⭐'}),

        knex('urls').insert({id: 20000006, title: 'Theresa May Seeks Strong UK-US relations', url: 'https://www.theguardian.com/commentisfree/2018/dec/04/post-brexit-free-trade-deal-us-rightwing-thinktanks', user_id: 10000001, description: 'United Kingdom seeks stronger relationships with the United States post-Brexit', dateAdded: '20190102', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkwlwv9Sp4B2R2qq6jSfdrTXrdzyaJFwzbRO6nFxdYTTxfPxl8w', rating: '⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000007, title: 'HAPPY NEW YEAR TO EVERYONE, INCLUDING THE HATERS AND THE FAKE NEWS MEDIA!', url: 'https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1080088373451206656&ref_url=https%3A%2F%2Fwww.cbsnews.com%2Fnews%2Fpresident-trump-new-years-tweet-tells-haters-to-calm-down-enjoy-the-ride-today-2019-01-01%2F', user_id: 10000001, description: '2019 WILL BE A FANTASTIC YEAR FOR THOSE NOT SUFFERING FROM TRUMP DERANGEMENT SYNDROME. JUST CALM DOWN AND ENJOY THE RIDE, GREAT THINGS ARE HAPPENING FOR OUR COUNTRY!', dateAdded: '20190101', image: 'https://freetoursbyfoot.com/wp-content/uploads/2013/12/London-New-Years-Eve.jpg', rating: '⭐⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000020, title: 'Lunges', url: 'https://www.wikihow.com/Do-Lunges', user_id: 10000001, description: 'pre game warmup', dateAdded: '20180114', image: 'https://www.wikihow.com/images/thumb/d/dd/Do-Lunges-Step-8-Version-5.jpg/aid2787766-v4-900px-Do-Lunges-Step-8-Version-5.jpg', rating: '⭐⭐⭐'}),

        knex('urls').insert({id: 20000021, title: 'Learn about Minerals', url: 'https://www.mineralogicalsocietyofdc.org/learn-about-minerals-mineralogy', user_id: 10000002, description:'several mineralogy sources', dateAdded: '20180711', image: 'https://www.mineralogicalsocietyofdc.org/sites/default/files/styles/gallery_thumbnail/public/photo-album-images/2016-08/IMG_1869.JPG?itok=vD45FApj', rating: '⭐⭐'}),

        knex('urls').insert({id: 20000023, title: 'Gaslighting', url: 'https://www.britannica.com/topic/gaslighting', user_id: 10000003, description: 'Gaslighting! Ridiculous!', dateAdded:'20181212', image: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/532258_496933760321458_759171237_n.jpg?_nc_cat=103&_nc_ht=scontent-sjc3-1.xx&oh=0e9c6da4b2df1f67779f31b61ff06e30&oe=5C91AB68', rating: '⭐'}),

        knex('urls').insert({id: 20000024, title: 'Hip Stretches', url: 'https://www.stack.com/a/4-hip-flexor-stretches-to-relieve-tight-hips', user_id: 10000001, description: 'stretches', dateAdded: '20181017', image: 'http://upl.stack.com/wp-content/uploads/2015/11/02170901/Spiderman-Stretch-STACK.png', rating: '⭐⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000025, title: 'Malthusianism', url: 'https://en.wikipedia.org/wiki/Malthusianism', user_id: 10000002, description: 'production vs population', dateAdded: '20180126', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Malthus_PL_en.svg/2560px-Malthus_PL_en.svg.png', rating: '⭐⭐'}),

        knex('urls').insert({id: 20000026, title: 'Citizens Abducted!', url: 'https://www.destinationamerica.com/tv-shows/monsters-mysteries-in-america/videos/twins-abducted-by-aliens', user_id: 10000003, description: 'Illegal Aliens!', dateAdded:'20181225', image: 'http://greatdreams.com/ufos/ht_audrey_17_090814_mn.jpg', rating: '⭐⭐⭐'}),

        knex('urls').insert({id: 20000027, title: 'How to Build a Wall', url: 'https://www.diynetwork.com/how-to/rooms-and-spaces/walls-and-ceilings/everything-you-need-to-know-about-walls', user_id: 10000003, description: 'Step by step wall instructions!', dateAdded: '20180917', image: 'https://static01.nyt.com/images/2019/01/06/us/politics/06dc-trumpwall1/merlin_148699890_21b5c3a1-973b-4b7e-8195-1cde3eec49a1-superJumbo.jpg?quality=90&auto=webp', rating: '⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000028, title: 'Ivanka Trump', url: 'https://en.wikipedia.org/wiki/Ivanka_Trump', user_id: 10000002, description: 'Keep up with my family!', dateAdded: '20181227', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Ivanka_Trump_official_photo.png', rating: '⭐⭐⭐⭐'}),

        knex('urls').insert({id: 20000029, title: 'Keepin up with the Putins', url: 'https://en.wikipedia.org/wiki/Vladimir_Putin', user_id: 10000001, description: 'So glad thers you, Vlad', dateAdded: '20181231', image: 'https://amp.businessinsider.com/images/5134d70a69bedd2d1f00003b-1334-1000.jpg', rating: '⭐'}),
      ])
    })
}
