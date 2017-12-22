
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',table=>{
    table.increments()
    table.string('email').notNullable().unique()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.specificType('password','char(60)').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
