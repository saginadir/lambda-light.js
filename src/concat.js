const curry = require('./curry');

module.exports = curry((a, b) => b.concat(a));