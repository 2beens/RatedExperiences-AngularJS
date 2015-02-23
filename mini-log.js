var colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'white',
    error: 'red'
});

function info(msg) {
    log('info', msg);
}

function debug(msg) {
    log('debug', msg);   
}

function error(msg) {
    log('error', msg);   
}

function data(msg) {
    log('data', msg);   
}

function warn(msg) {
    log('warn', msg);   
}

function log(logLvl, msg) {
    var msgToLog = '[' + displayTime() + '] [' + logLvl + ']: ' + msg;
    
    if(logLvl === 'info')
        msgToLog = msgToLog.info.bold;
    else if(logLvl === 'debug')
        msgToLog = msgToLog.debug.bold;
    else if(logLvl === 'error')
        msgToLog = msgToLog.error.bold;
    else if(logLvl === 'data')
        msgToLog = msgToLog.data.bold;
    else if(logLvl === 'warn')
        msgToLog = msgToLog.warn.bold;

    console.log(msgToLog);
}

function displayTime() {
    var str = "";

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var miliSeconds = currentTime.getMilliseconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    str += hours + ":" + minutes + ":" + seconds + ":" + miliSeconds + " ";
    
    if(hours > 11){
        str += "PM";
    } else {
        str += "AM";
    }
    
    return str;
}

exports.info = info;
exports.debug = debug;
exports.error = error;
exports.data = data;
exports.warn = warn;
exports.log = log;
