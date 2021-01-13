
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// function bin2dec(num='100',base='2') {
//     //Split the string, convert it to array of numbers and reverse the order
//     var count = 0;
//     const digits = num.split('').map(Number).reverse();
//     let decimal = digits.forEach( (digit,index) => {
//         count = count + digit * base**index; 
//     });
    
//     return decimal
// };
// SI FUNCIONA, COUNT tiene el valor de la conversion correcto, pero no se porque no sirve el return de la funcion

// 2nd try Plagio del profe Mircha
// const bin2dec = (num = undefined, base = undefined) => {
//     if (num === undefined) return console.warn('No ingresaste nunero a convertir');
//     if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado No es un numero`);

//     if (base === undefined) return console.warn('No ingresaste base a convertir');
//     if (typeof base !== 'number') return console.error(`El valor "${base} ingresado No es un numero`);

//     if (base === 2) {
//         return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`);
//     };
// };

// bin2dec(100,2);
// bin2dec(101,2);
// bin2dec(110,2);
//El secreto esta en ocupar el casting de alguno métodos de js como el parseInt o el toString

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

//El descuento se ingresa como numero entero entre 0 a 100, como porcentaje pues.
// const priceWithDiscount = (price, discount = 0) => {
//     // Validations
//     if (price <= 0) return console.warn('Sin precio, no se puede aplicar descuento');
//     if (discount === undefined) return console.warn('No ingresaste descuento del producto');
//     if(typeof price !== 'number') return console.error('Ingresa numeros');
//     if(typeof discount !== 'number') return console.error('Ingresa numeros');

//     //Body 
//     return console.info(`Precio de $${price}.00 con ${discount}% off = $${price * (100-discount)/100}.00`);
// };

// priceWithDiscount(100,20);
// priceWithDiscount(100,30);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// const getYears = date => {
//     // Validations for date format
//     // let dateValidation = new RegExp('^[0-9]{4},[0-9]{2},[0-9]{2}$')
//     // if (!dateValidation.test(date)) return console.warn('formato de fecha no funciona trate  aaaa,mm,dd');
//     if (date === undefined) return console.warn ('No metiste fecha');
//     if (!(date instanceof Date) ) return console.error('El valor que ingresaste ni es una fecha válida');

//     // Body
//     let timePastInMS = Date.now() - date.getTime();
//     let yearsInMS = 1000*60*60*24*365;
//     let timePastInYears = Math.floor(timePastInMS/yearsInMS);
    
    
//     return (Math.sign(timePastInYears) === -1)
//         ? console.info(`Son ${Math.abs(timePastInYears)} años en el futuro`)
//         : (Math.sign(timePastInYears) === 1)
//           ? console.info(`Son ${Math.abs(timePastInYears)} años en el pasado`)
//           : console.info('Año actual')
// };

// getYears(new Date(2020,11,17));
// Esta bien loco ocupar el operador ternario para hacer bloques de if else porque el interprete lo lee como una sola línea de código