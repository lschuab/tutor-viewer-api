
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tutors').del()
    .then(function () {
      // Inserts seed entries
      return knex('tutors').insert([
        {
          first_name: "Zach",
          last_name: "Duzan"
        },
        {
          first_name: "Kevin",
          last_name: "Rosas-Hope"
        },
        {
          first_name: "Alan",
          last_name: "Schwartz"
        },
        {
          first_name: "Rishi",
          last_name: "Kapoor"
        },
        {
          first_name: "Jericho",
          last_name: "Wolf"
        },
        {
          first_name: "Starlight",
          last_name: "Tucker"
        },
      ]);
    });
};
