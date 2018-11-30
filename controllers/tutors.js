const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    knex('tutors')
    .then(tutors => res.send(tutors))
  },

  showDetails: (req, res) => {
    knex('tutors')
      .select(
        'tutors.id AS id',
        'tutors.first_name',
        'tutors.last_name',
        'tutors.active',
        'courses.id AS course_id',
        'courses.course_code',
        'courses.course_name',
        'shifts.id AS shift_id',
        'shifts.day',
        'shifts.start_time',
        'shifts.end_time',
        'shifts.center'
      )
      .where('tutors.id', req.params.id)
      .leftJoin('tutor_courses', 'tutor_courses.tutor_id', 'tutors.id')
      .leftJoin('courses', 'courses.id', 'tutor_courses.course_id')
      .leftJoin('shifts', 'shifts.tutor_id', 'tutors.id')
      .orderBy('courses.id')
      .orderBy('shifts.id')
    .then(response => {
      const courses = []
      const shifts = []
      let i = 0
      while (i < response.length && (i === 0 || response[i].course_id === response[i - 1].course_id)) {
        shifts.push({
          id: response[i].shift_id,
          day: response[i].day,
          start_time: response[i].start_time,
          end_time: response[i].end_time,
          center: response[i].center
        })
        i++
      }
      const numShifts = i--
      while (i < response.length) {
        courses.push({
          id: response[i].course_id,
          course_code: response[i].course_code,
          course_name: response[i].course_name
        })
        i += numShifts
      }
      const tutor = {
        id: response[0].id,
        first_name: response[0].first_name,
        last_name: response[0].last_name,
        active: response[0].active,
        courses,
        shifts
      }
      res.send(tutor)
    })
  },

  create: (req, res) => {
    knex('tutors')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }, '*')
    .then(response => res.send(response[0]))
  },

  update: (req, res) => {
    knex('tutors')
      .where('id', req.params.id)
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      }, '*')
    .then(response => res.send(response[0]))
  },

  toggle: (req, res) => {
    knex.raw(`UPDATE tutors SET active = NOT active WHERE id = ${req.params.id}`)
    .then(() => knex('tutors')
        .where('id', req.params.id)
    )
    .then(response => res.send(response[0]))
  },

  delete: (req, res) => {
    knex('tutors')
      .where('id', req.params.id)
      .returning('*')
      .del()
    .then(response => res.send(response[0]))
  },

  addCourse: (req, res) => {
    knex('tutor_courses')
      .insert({
        tutor_id: req.params.id,
        course_id: req.body.course_id
      })
    .then(response => res.send(response[0]))
  },

  removeCourse: (req, res) => {
    knex('tutor_courses')
      .where({
        'tutor_id': req.params.id,
        'course_id': req.params.course_id
      })
      .del()
    .then(response => res.send(response[0]))
  }

}