var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=c35b2a8d0a4d860edd1352f31759c9cf';

var kelvinToF = function(kelvin) {
	return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

module.exports = function (latitude, longitude) {
	// template strings
	var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;
	console.log(url);
	return fetch(url)
		.then(function(response){
			return response.json()
		})
		.then(function(json){
			return {
				city: json.name,
				temperature: kelvinToF(json.main.temp),
				description: json.weather[0].description
			}
		});
}