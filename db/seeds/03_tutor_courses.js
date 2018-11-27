
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tutor_courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('tutor_courses').insert([
        {
          tutor_id: 1,
          course_id: 1
        },
        {
          tutor_id: 2,
          course_id: 1
        },
        {
          tutor_id: 3,
          course_id: 1
        },
        {
          tutor_id: 4,
          course_id: 2
        },
        {
          tutor_id: 6,
          course_id: 3
        },
        {
          tutor_id: 1,
          course_id: 4
        },
      ]);
    });
};
