const knex = require("../db/knex.js");

module.exports = {
  create: (req, res) => {
    knex('shifts')
      .insert({
        day: req.body.day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        tutor_id: req.body.tutor_id,
        center: req.body.center,
      }, '*')
    .then(response => res.send(response))
  },

  update: (req, res) => {
    knex('shifts')
      .where('id', req.params.id)
      .update({
        day: req.body.day,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        tutor_id: req.body.tutor_id,
        center: req.body.center,
      }, '*')
    .then(response => res.send(response))
  },

  delete: (req, res) => {
    knex('shifts')
      .where('id', req.params.id)
      .del()
    .then(response => res.send(response))
  }
}