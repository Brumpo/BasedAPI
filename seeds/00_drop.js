
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(() => knex('tweets').del())
    .then(() => knex('users').del())
}
