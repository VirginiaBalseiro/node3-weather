const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/5c20fdf5411aefb40af03f9c67911710/' + lat + ',' + long + '?units=si';
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, body.daily.data[0].summary +  ' It is currently ' + body.currently.temperature + ' degrees, and there is a ' + body.currently.precipProbability + ' % chance of rain. \nHigh: ' + body.daily.data[0].temperatureHigh + ' degrees.\nLow: ' + body.daily.data[0].temperatureLow + ' degrees.')
        }
    })

}

module.exports = forecast;