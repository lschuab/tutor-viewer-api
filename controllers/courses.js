const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('courses')
    .then(response => res.send(response))
  },

  show: (req, res) => {
    knex('shifts')
      .select('shifts.*', 'tutors.first_name', 'tutors.id AS tutor_id')
      .join('tutors', 'tutors.id', 'shifts.tutor_id')
      .join('tutor_courses', 'tutors.id', 'tutor_courses.tutor_id')
      .where('tutor_courses.course_id', req.params.id)
    .then(response => res.send({shifts: response}))
  },

  create: (req, res) => {
    knex('courses')
      .insert({
        course_code: req.body.course_code,
        course_name: req.body.course_name
      }, '*')
    .then(response => res.send(response))
  },

  delete: (req, res) => {
    knex('courses')
      .where('id', req.params.id)
      .del()
    .then(response => res.send(response))
  }
}