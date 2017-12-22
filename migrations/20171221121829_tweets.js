
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets',table=>{
    table.increments()
    table.string('tweet').notNullable()
    table.string('media')
    table.string('date').notNullable()
    table.string('time').notNullable()
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.droptable('tweets');
};
