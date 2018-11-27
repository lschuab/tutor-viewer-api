
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tutor_courses', table => {
    table.increments()
    table.integer('tutor_id')
      .notNullable()
      .references('id')
      .inTable('tutors')
      .onDelete('CASCADE')
      .index()
    table.integer('course_id')
      .notNullable()
      .references('id')
      .inTable('courses')
      .onDelete('CASCADE')
      .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tutor_courses')
};
