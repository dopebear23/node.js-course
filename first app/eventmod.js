const EventEmitter = require('events');



const Logger = require('./logger');
const logger = new Logger();

//Listening required 
logger.on('messageLogged', (arg) => { //can use arrow instead- emitter.on('messageLogged',(arg)=> {
    console.log('Listener Called', arg);

});

logger.log('message');