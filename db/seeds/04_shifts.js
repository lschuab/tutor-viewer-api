const LocalTime = require('js-joda').LocalTime

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shifts').del()
    .then(function () {
      // Inserts seed entries
      return knex('shifts').insert([
        {
          day: "Tuesday",
          start_time: LocalTime.of(15, 30),
          end_time: LocalTime.of(19),
          center: 'E Building',
          tutor_id: 25
        },
        {
          day: "Thursday",
          start_time: LocalTime.of(15, 30),
          end_time: LocalTime.of(19),
          center: 'E Building',
          tutor_id: 25
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
