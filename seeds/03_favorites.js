exports.seed = function(knex, Promise) {
  return knex('favorites').insert([
    {id: 1, user_id: 1, tweet_id: 5},
    {id: 2, user_id: 1, tweet_id: 4},
    {id: 3, user_id: 2, tweet_id: 1},
    {id: 4, user_id: 3, tweet_id: 1},
    {id: 5, user_id: 4, tweet_id: 5},
    {id: 6, user_id: 3, tweet_id: 3},
    {id: 7, user_id: 3, tweet_id: 4}
  ]).then(()=>knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))"))
};
