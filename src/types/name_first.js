const _ = require('lodash');

const names = [
  "Velma",
  "Gabriel",
  "Precious",
  "Isis",
  "Mable",
  "Courtney",
  "Merle",
  "Regina",
  "Tomoko",
  "Joaquin",
  "Freida",
  "Ollie",
  "Ardath",
  "Keira",
  "Fermina",
  "Leonia",
  "Valrie",
  "Freeda",
  "Verdell",
  "Eufemia",
  "Phylis",
  "Anamaria",
  "Trudy",
  "Brett",
  "Barbara",
  "Wilmer",
  "Dalene",
  "Tamesha",
  "Maisha",
  "Ramona",
  "Nancy",
  "Laurine",
  "Angelita",
  "Preston",
  "Delila",
  "Retta",
  "Stephan",
  "Isabell",
  "Toccara",
  "Glynda",
  "Keisha",
  "Todd",
  "Marci",
  "Ivey",
  "Louis",
  "Lavonia",
  "Aleida",
  "Izetta",
  "Georgene",
  "Anika"
];

module.exports = function () {
  let idx = _.random(0, names.length - 1);
  return names[idx];
};