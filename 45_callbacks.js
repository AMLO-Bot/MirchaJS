/*El callback es el primer mecanismo para administrar la asincronia, 
en el callback no se ejecuta el siguiente nivel si no se ha teminado el siguiente
Se debe validar los errores en cada paso del callback,not very scalable and maintanable, etc.
Thats why promises and asyn await was introduced in ES 6 
*/
function squareCallback(value, callback){
    setTimeout(() => {
        callback(value, value ** 3);
    }, 0|Math.random()*1000);
};

squareCallback(4, (value,result) => {
    console.log('Inicia Callback');
    console.log(`Callback ${value}: ${result}`);
    squareCallback(1,(value,result) => {
        console.log(`Callback ${value}: ${result}`)
        squareCallback(5,(value,result) => {
            console.log(`Callback ${value}: ${result}`)
        });
    });
});

/*For more info visit callbackhell.com*/