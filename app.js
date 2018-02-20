// const yargs = require('yargs')

// const geocode = require('./geocode/geocode')

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// })

// https://api.darksky.net/forecast/7c8cb4019a393e56f48271abad0a0a00/37.8267,-122.4233

const request = require('request')

request({
    url: `https://api.darksky.net/forecast/7c8cb4019a393e56f48271abad0a0a00/37.8267,-122.4233`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2))
})