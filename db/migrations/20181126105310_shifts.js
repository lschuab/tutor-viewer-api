
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shifts', table => {
    table.increments()
    table.string('day')
    table.time('start_time')
    table.time('end_time')
    table.string('center')
    table.integer('tutor_id')
      .notNullable()
      .references('id')
      .inTable('tutors')
      .onDelete('CASCADE')
      .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shifts')
};
