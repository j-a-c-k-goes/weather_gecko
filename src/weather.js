// - - - variable environment - - -
const dotenv = require('dotenv').config();
const API = dotenv.parsed.API_TOKEN;

// - - - superagent module in place of requests module - - -
const superagent = require('superagent');

// - - - weather api endpoints - - -
const weather_endpoint = `https://api.weatherapi.com/v1/current.json?key=${API}&q=atlanta&aqi=no`;
const forecast_endpoint = `https://api.weatherapi.com/v1/forecast.json?${API}&q=30316&days=1&aqi=yes&alerts=yes`;

// - - - make api call the weather api - - -
const weather_api = () => {
	superagent
	.post(weather_endpoint)
	.set('accept', 'json')
	.end((error, response) => { 
		const current = response._body.current;
		const location = response._body.location;
		const header = response.header;
		// console.log(JSON.stringify(response, null, 4));
		// console.log(JSON.stringify(response.body, null, 2));
		console.info(`
			Errors
			--------------------------------------------------------
			errors: ${error}

			Server Information
			--------------------------------------------------------
			server: ${header.server}
			response type: ${response.type}
			status code: ${response.statusCode}
			request url: ${response.request.url}
			request method: ${response.request.method}

			Weather for ${location.name}, ${location.region}
			--------------------------------------------------------
			date and time: ${location.localtime}
			current condition and code: ${current.condition.text} (${current.condition.code})
			latitude: ${location.lat}
			longitude: ${location.lon}
			temperature (celsius): ${current.temp_c}
			temperature (fahrenheit): ${current.temp_f}
			humidity: ${current.humidity}
			wind conditions: ${current.wind_mph} mph ${current.wind_dir}
			visibility (miles): ${current.vis_miles}
			`);
	});
};

module.exports = { weather_api };
// const go_weather = weather_api();