// Maths
const Mica = require('./js/Mica.js');

const modules = {
  Mica
}

if(typeof window !== 'undefined') window.base = modules; // would change Q to the name of the library
else module.exports = modules; // in node would create a context
