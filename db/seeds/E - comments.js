exports.seed = function(knex, Promise) {
  return knex('comments').del()
    .then(() => {
      return Promise.all([
        knex('comments').insert({id: 50000001, comment: 'Vlad Approves', user_id: 10000001, url_id: 20000001, date:'20190107', author: 'V-Putin'}),

        knex('comments').insert({id: 50000002, comment: 'Еа яуо виси витае мелиоре.', user_id: 10000001, url_id: 20000001, date:'20190107', author: 'BringBackUSSR1989'}),

        knex('comments').insert({id: 50000003, comment: 'Цу сит феугиат цетерос!!!!1 :):):):)', user_id: 10000001, url_id: 20000001, date:'20190107', author: 'SovietBlaster'}),


        knex('comments').insert({id: 50000004, comment: 'Awful read', user_id: 10000001, url_id: 20000002, date:'20190106', author: 'BlahBlah1999123'}),

        knex('comments').insert({id: 50000005, comment: 'Great spech technqices', user_id: 10000001, url_id: 20000002, date:'20190106', author: 'GreatSpeeker-AwfulRighter'}),

        knex('comments').insert({id: 50000006, comment: 'Should have learnt to stop your teeth falling out first LOLOLOLOLOLOLOL', user_id: 10000001, url_id: 20000003, date:'20190106', author: 'MegaTroll69420'}),

        knex('comments').insert({id: 50000007, comment: 'Are you having a stroke, Mr. President?', user_id: 10000001, url_id: 20000004, date:'20190103', author: 'Trump4Lyf'}),

        knex('comments').insert({id: 50000008, comment: 'He is always having a stroke because you know Melania is not going to touch him.... You know what I mean?', user_id: 10000001, url_id: 20000004, date:'20190104', author: 'Sassy-Biden'}),

        knex('comments').insert({id: 50000009, comment: 'Love you Donald! You ever need the spotlight on you again, just hit me up! You are my best friend!', user_id: 10000001, url_id: 20000004, date:'20190105', author: 'KanyeWest'}),

        knex('comments').insert({id: 50000010, comment: 'Unreal!', user_id: 10000001, url_id: 20000005, date:'20190104', author: 'Maddie855'}),

        knex('comments').insert({id: 50000011, comment: 'At least he does not do what David Cameron does around livestock...', user_id: 10000001, url_id: 20000005, date:'20190104', author: 'JCorbyn'}),

        knex('comments').insert({id: 50000012, comment: 'F*cking LOOOOOL', user_id: 10000001, url_id: 20000006, date:'20190103', author: 'The-Real-EU'}),

        knex('comments').insert({id: 50000013, comment: 'ALL ABOARD THE 2019 HYPE TRAIN! WOOOOOOO!', user_id: 10000001, url_id: 20000007, date:'20190102', author: 'TRUMP4EVA!!!1'}),

        knex('comments').insert({id: 50000014, comment: 'Oh God! We are absolutely f*cked!', user_id: 10000001, url_id: 20000007, date:'20190102', author: 'Another-Normal-Person'}),

        knex('comments').insert({id: 50000015, comment: 'Wake me up in 2021...', user_id: 10000001, url_id: 20000007, date:'20190101', author: 'Normal-Person'}),


        knex('comments').insert({id: 500000020, comment: 'So interesting and informative, thank you', user_id: 10000001, url_id: 20000020, date:'20180114', author: 'LungeMaster3000'}),

        knex('comments').insert({id: 50000021, comment: 'What a strange confusing world we live in', user_id: 10000002, url_id: 20000021, date:'20180114', author: 'Tony Danza'}),

        knex('comments').insert({id: 50000022, comment: 'FAKE! I am often accused of gaslighting, but I have NEVER farted into an open flame!', user_id: 10000003, url_id: 20000023, date:'20180114', author: 'Donald Trump'}),

        knex('comments').insert({id: 50000023, comment: 'This just knocked my socks off!', user_id: 10000001, url_id: 20000024, date:'20180114', author: 'Betty White'}),

        knex('comments').insert({id: 50000024, comment: 'Fascinating read', user_id: 10000002, url_id: 20000024, date:'20180114', author: 'Curly Joe'}),

        knex('comments').insert({id: 50000025, comment: `Illegal aliens are abducting american citizens! We will build a giant dome over the U.S.A! It will be a fabulous dome,
        the most beautiful dome you\'ve ever seen, the best dome! And I can make the aliens pay for it! I make the greatest deals!`, user_id: 10000003, url_id: 20000025, date:'20180114', author: 'Donald Trump'}),

        knex('comments').insert({id: 50000026, comment: 'TWINS BASIL!', user_id: 10000003, url_id: 20000025, date:'20180114', author: 'Austin Powers'}),

        knex('comments').insert({id: 50000027, comment: 'Make america great again, amma right?', user_id: 10000003, url_id: 20000026, date: '20180114', author: 'Donny Tramp'}),

        knex('comments').insert({id: 50000028, comment: 'She is married to a human potatoe', user_id: 10000003, url_id: 20000027, date: '20180114', author: 'Hil Dawg'}),

        knex('comments').insert({id: 50000029, comment: 'Its magestical', user_id: 10000003, url_id: 20000028, date: '20180114', author: 'Uncle'}),
      ])
    })
}
