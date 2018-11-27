
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutors', table => {
    table.increments();
    table.string('first_name')
    table.string('last_name')
    table.boolean('active').defaultTo(true)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutors')
};
