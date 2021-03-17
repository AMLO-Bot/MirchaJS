console.log('Start');
//Timeout
setTimeout(() => {
    console.log(`Ejecutando un setTimeout esto se ejecuta una sola vez`);
}, 3000);
//Interval
let interval = setInterval(() => {
    console.log('Ejecutando setInterval, se ejecuta indefinidamente cada que pase el tiempo que se indique');
}, 1000);

//In order to stop the interval we could use the clearTimeOut() method, the setInterval must be located in a variable.
let clock = setInterval(() => {
    console.log(new Date().toTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(clock);    
}, 5000);
setTimeout(() => {
    clearInterval(interval);    
}, 7000);
    