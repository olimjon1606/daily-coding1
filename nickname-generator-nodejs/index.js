const utils = require('./utils');

const data = {
  names: require('./names.json'),
  adjectives: require('./adjectives.json'),
};

let separator = ' ';

function setNames(names) {
  data.names = names;
}

function setAdjectives(adjectives) {
  data.adjectives = adjectives;
}

function setSeparator(newSeparator) {
  separator = newSeparator;
}

function generate({ isFirstLetterUpperCase = false } = {}) {
  const ran_a = Math.floor(Math.random() * data.names.length);
  const ran_b = Math.floor(Math.random() * data.adjectives.length);

  let first = data.adjectives[ran_b];
  let second = data.names[ran_a];

  if (isFirstLetterUpperCase) {
    first = utils.capitalizeFirstLetter(first);
    second = utils.capitalizeFirstLetter(second);
  }

  return `${first}${separator}${second}`;
}

module.exports = {
  setNames,
  setAdjectives,
  setSeparator,
  generate,
};
