const EventEmitter = require('events');

console.log(__dirname);
console.log(__filename);

var url='http://mylogger.io/log';
class Logger extends EventEmitter{
	log(message) {
		//Send an HTTP Request
		console.log(message);
	
		//Signalling that an event is raised
		this.emit('messageLogged', {id : 1, url: 'http://'}); 
	}
}

module.exports = Logger;
