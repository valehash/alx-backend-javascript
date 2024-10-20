const tty = require('node:tty');
function displayMessage(message) {
	process.stdout.write(message);

}

module.exports = displayMessage;
