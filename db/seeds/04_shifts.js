const LocalTime = require('js-joda').LocalTime

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {
          day: "Monday",
          start_time: LocalTime.of(8, 30),
          end_time: LocalTime.of(14),
          center: 'E Building',
          tutor_id: 1
        },
        {
          day: "Tuedsay",
          start_time: LocalTime.of(12, 00),
          end_time: LocalTime.of(18),
          center: 'E Building',
          tutor_id: 1
        },
        {
          day: "Wednesday",
          start_time: LocalTime.of(15),
          end_time: LocalTime.of(19),
          center: 'E Building',
          tutor_id: 3
        },
      ]);
    });
};
