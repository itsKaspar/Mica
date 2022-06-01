// Maths
const Ox = require('./js/Ox.js');

const modules = {
  Ox
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
