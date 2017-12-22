
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites',(table)=>{
    table.increments()
    table.string('rating').notNullable().defaultsTo('3')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.integer('tweet_id').notNullable()
    table.foreign('tweet_id').references('id').inTable('tweets')
    table.timestamps(true,true)
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
};
