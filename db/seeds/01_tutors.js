
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tutors').del()
    .then(function () {
      // Inserts seed entries
      return knex('tutors').insert([
        {
          first_name: "Judy",
          last_name: "Valko"
        },
        {
          first_name: "Alberto",
          last_name: "Carazo Diaz"
        },
        {
          first_name: "James",
          last_name: "Gallimore"
        },
        {
          first_name: "JoAnn",
          last_name: "Gibbs"
        },
        {
          first_name: "Jericho",
          last_name: "Wolf"
        },
        {
          first_name: "Ali",
          last_name: "Al Abboodi"
        },
        {
          first_name: "Rishi",
          last_name: "Kapoor"
        },
        {
          first_name: "Caitlyn",
          last_name: "Miller"
        },
        {
          first_name: "Melika",
          last_name: "Sarkandi"
        },
        {
          first_name: "Elizabeth",
          last_name: "Stuff"
        },
        {
          first_name: "Bill",
          last_name: "Hamilton"
        },
        {
          first_name: "Bob",
          last_name: "Bureker"
        },
        {
          first_name: "Harold",
          last_name: "Levin"
        },
        {
          first_name: "Zach",
          last_name: "Duzan"
        },
        {
          first_name: "Patrick",
          last_name: "McKenna"
        },
        {
          first_name: "Hildegard",
          last_name: "Koester"
        },
        {
          first_name: "Simran",
          last_name: "Bhalla"
        },
        {
          first_name: "Chris",
          last_name: "Dahm"
        },
        {
          first_name: "Rob",
          last_name: "Forrest"
        },
        {
          first_name: "Bill",
          last_name: "Johns"
        },
        {
          first_name: "Jeffrey",
          last_name: "Gettinger"
        },
        {
          first_name: "John",
          last_name: "Meggesin"
        },
        {
          first_name: "Allan",
          last_name: "Ratihn"
        },
        {
          first_name: "Kevin",
          last_name: "Rosas Hope"
        },
        {
          first_name: "Alan",
          last_name: "Schwartz"
        },
        {
          first_name: "Palak",
          last_name: "Verma"
        },
        {
          first_name: "Brock",
          last_name: "Weidauer"
        },
        {
          first_name: "Amanda",
          last_name: "Wiggins"
        },
        {
          first_name: "Peter",
          last_name: "Yip"
        },
        {
          first_name: "David",
          last_name: "Peterson"
        },
        {
          first_name: "Erica",
          last_name: "Niemoth"
        },
        {
          first_name: "Brenda",
          last_name: "Hitesman"
        },
        {
          first_name: "Cynthia",
          last_name: "Cooper"
        },
        {
          first_name: "Linda",
          last_name: "Maley"
        },
        {
          first_name: "Starlight",
          last_name: "Tucker"
        },
        {
          first_name: "Sylvia",
          last_name: "Smith"
        },
      ]);
    });
};
