// - - - welcome message - - -
const welcome = require('../src/welcome_msg.js');
console.info(welcome.welcome_msg());

// - - - weahter app module - - -
const weather = require('../src/weather.js');
const go_weather = weather.weather_api();

// - - - coin gecko module - - -
const gecko = require('../src/coin_gecko.js');
const go_gecko = gecko.gecko_api();

