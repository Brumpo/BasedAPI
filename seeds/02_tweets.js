exports.seed = function(knex, Promise) {
  return knex('tweets').insert([
    {id: 1, tweet:'TYBG - lil b',date:'12/14/2017',time:'3:21pm'},
    {id: 2, tweet:'I love you - lil b',date:'12/25/2017',time:'4:20pm'},
    {id: 3, tweet:'I love all humans - lil b',date:'12/5/2017',time:'6:28pm'},
    {id: 4, tweet:'if you say a bird is dumb, how smart are you? - lil b',date:'12/16/2017',time:'12:10pm'},
    {id: 5, tweet:'who is your favorite celebrity with mudd butt - lil b',date:'12/1/2017',time:'2:46pm'}
  ]).then(()=>knex.raw("SELECT setval('tweets_id_seq', (SELECT MAX(id) FROM tweets))"))
};
