
const config = require('./config')

const App = function(win) {
    const $ = win.$;

    // Init
    $('.ui.dropdown').dropdown();
    $('.ui.button').on('click', function() {
        alert(config.name);
    })
}

module.exports = App;
