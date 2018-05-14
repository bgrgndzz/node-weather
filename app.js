const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const defaults = require('./defaults/defaults');

const argv = yargs
    .command('default', 'Create default address', {
        address: {
            alias: 'a',
            describe: 'Default ddress to fetch weather for',
            string: true
        },
        celsius: {
            alias: 'c',
            describe: 'Set default temperature unit to celsius'
        },
        fahrenheit: {
            alias: 'f',
            describe: 'Set default temperature unit to fahrenheit'
        }
    })
    .options({
        address: {
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        },
        celsius: {
            alias: 'c',
            describe: 'Get temperature in celsius'
        },
        fahrenheit: {
            alias: 'f',
            describe: 'Get temperature in fahrenheit'
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
var command = argv._[0];
var settings = defaults.read();

if (command === 'default') {
    if (argv.address) {
        settings.address = argv.address;
    }
    if (argv.celsius) {
        settings.unit = 'celsius';
    } else if (argv.fahrenheit) {
        settings.unit = 'fahrenheit';
    }
    defaults.write(settings);
} else {
    var address = argv.address || settings.address || '';
    if (address) {
        if (argv.celsius) {
            var unit = 'celsius';
        } else if (argv.fahrenheit) {
            var unit = 'fahrenheit';
        } else if (settings.unit) {
            var unit = settings.unit;
        } else {
            var unit = 'fahrenheit';
        }
        geocode.getAddress(address).then((location) => {
            console.log(location.address);
            return weather.getWeather(location.latitude, location.longitude);
        }).then((weatherres) => {
            if (unit === 'celsius'){
                var temperature = Math.round((weatherres.temperature - 32) / 1.8);
                console.log(`The temperature is ${temperature}°C and the weather is ${weatherres.weather}`);
            } else if (unit === 'fahrenheit') {
                console.log(`The temperature is ${weatherres.temperature}°F and the weather is ${weatherres.weather}`);
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}