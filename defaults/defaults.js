const fs = require('fs');

var read = () => {
    try {
        var defaults = JSON.parse(fs.readFileSync('defaults.json'));
    } catch (err) {
        var defaults = {};
    }
    return defaults;
}
var write = (settings) => {
    fs.writeFileSync('defaults.json', JSON.stringify(settings));
};

module.exports = {
    read, 
    write
};