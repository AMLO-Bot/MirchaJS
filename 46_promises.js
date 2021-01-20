function squarePromise(value) {
    //Validations   
    if(typeof value !== 'number'){
        return Promise.reject(`${value} is not a number`);
    };
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value ** 2
            });
        }, 0|Math.random()*1000);
    });   
};


/*Donde las promesas brillan es cuando tenemos 
muchas peticiones concatenadas, podemos canalizar 
los errores al catch, si solo tienes una 
o dos es mejor aplicarlo con callback, a menos
que tengas en mente una solución escalable*/
squarePromise('0')
    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return squarePromise(2);
    })

    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return squarePromise(3);
    })

    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return squarePromise(4);
    })

    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return squarePromise(5);
    })

    .then(obj => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        
    })
    
    .catch(error => {
        console.error(error);
    });
    