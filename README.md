# Node Weather

Weather CLI with Node.js, Google Maps API and DarkSky API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machines.

### Installing

Install the dependencies and you are good to go.
```
npm install
```

## Usage

There are two arguments for this program. You can specify an address and your preferred unit. The default unit is fahrenheit.
```
node app --address="mountain view ca" --celsius
```
You can also use the short form for these arguments.
```
node app -a="mountain view ca" -c
```
---
You can also set your default address and unit.
```
node app default -a="mountain view ca" -f
```
The defaults are saved to a file called `defaults.json`. The next time you are running the app you can just run it without arguments.
```
node app
```
## Built With

* [DarkSky API](https://darksky.net/dev) - Fetching weather information
* [Google Maps API](https://cloud.google.com/maps-platform/) - Fetching latitude and longitude from address
* [Yargs](http://yargs.js.org/) - Fetching commands from command line

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Andrew Mead's [The Complete Node.js Developer Course (2nd Edition)](https://www.udemy.com/the-complete-nodejs-developer-course-2/)
