
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {
          course_code: "MAT221",
          course_name: "Calculus 1"
        },
        {
          course_code: "BIO201",
          course_name: "Anatomy 1"
        },
        {
          course_code: "ENG101",
          course_name: "Comp 1"
        },
        {
          course_code: "MAT140",
          course_name: "Practical Math"
        },
      ]);
    });
};
