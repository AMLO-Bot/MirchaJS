
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

async function squareAsync() {
    try {
        let obj = await squarePromise(4);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(3);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(2);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(1);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(0);
        console.log(`Promise ${obj.value}, ${obj.result}`);

    } catch (error) {
        console.log(error);
    }
    
}

/*If we execute squareAsync we will find that theres an error, 
we are trying to print the result of squarePromise but that 
function hasn't returned the object that it is supposed to return 
(remember the timeout inside the promise/function), in order to 
wait for the result we use the keyword await before invoking the 
promise/funtion in asyn block*/ 
squareAsync();

/*As you could see, asyn await is just sugar syntax for promises,   
eliminates the .then concatenation and instead uses simple variables
to do the work making it more readable, scalable, and mantainable */

const xprssedAsync = async () => {
    try {
        let obj = await squarePromise(9);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(8);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(7);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(6);
        console.log(`Promise ${obj.value}, ${obj.result}`);

        obj = await squarePromise(5);
        console.log(`Promise ${obj.value}, ${obj.result}`);

    } catch (error) {
        console.log(error);
    };
};

xprssedAsync();



