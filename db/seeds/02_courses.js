
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
          course_code: "MAT140",
          course_name: "Practical Math"
        },
        {
          course_code: "MAT081",
          course_name: "Dev Math"
        },
        {
          course_code: "MAT231",
          course_name: "Calc 2"
        },
        {
          course_code: "MAT182",
          course_name: "Precalculus"
        },
        {
          course_code: "MAT187",
          course_name: "Trigonometry"
        },
        {
          course_code: "MAT082",
          course_name: "Dev Math"
        },
        {
          course_code: "MAT122",
          course_name: "College Algebra"
        },
        {
          course_code: "MAT121",
          course_name: "College Algebra"
        },
        {
          course_code: "MAT120",
          course_name: "College Algebra"
        },
        {
          course_code: "MAT092",
          course_name: "Dev Math 2"
        },
        {
          course_code: "MAT093",
          course_name: "Dev Math 2"
        },
        {
          course_code: "PHY220",
          course_name: "Physics 1"
        },
        {
          course_code: "PHY221",
          course_name: "Physics 2"
        },
        {
          course_code: "BIO201",
          course_name: "Anatomy 1"
        },
        {
          course_code: "ENG101",
          course_name: "Comp 1"
        },
      ]);
    });
};
