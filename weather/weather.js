const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/51ecadd7b8a7fcbb10a8eee460326465/${latitude},${longitude}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject('Unable to connect to DarkSky servers.');
            } else if (body.error) {
                reject(body.error);
            } else {
                resolve({
                    weather: body.currently.summary,
                    temperature: body.currently.temperature
                });
            }
        });
    });
};
// TODO: F to C: °C = (°F - 32) / 1.8
module.exports.getWeather = getWeather;