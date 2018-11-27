
exports.up = function(knex, Promise) {
  return knex.schema.createTable('courses', table => {
    table.increments()
    table.string('course_code')
    table.string('course_name')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('courses')
};
