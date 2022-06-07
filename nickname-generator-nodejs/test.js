const assert = require('assert');

const { generate } = require('./');

generate();
generate({ isFirstLetterUpperCase: true });
