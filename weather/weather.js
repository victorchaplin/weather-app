const request = require('request')

const darkskyApiKey = '7c8cb4019a393e56f48271abad0a0a00'

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Darksky servers.')
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.')
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
    })
}

module.exports = {
    getWeather
}