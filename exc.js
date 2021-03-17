// SOME MARKDOWN AND README
//TO FIND ANY EXCERCISE JUST USE CTRL + F AND LOOK FOR THE NUMBER OF THE PROBLEM 
// To UNCOMMET the block of code you need try selecting the whole block and then press CTRL + }


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

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// const charCounter = str => {
//     if (str === undefined) return console.warn ('No metiste una cadena');
//     if(typeof str !== 'string') return console.error('Ingresa una cadena de texto');
//     if( str == '') return console.error('Ingresaste una cadena vacía');

//     const vowelPattern = new RegExp("[aiueo]",'gi');
//     const consoPattern = new RegExp('[bcdfghjklmnpqrstvwxy]','gi');
//     vowelCounter = str.match(vowelPattern).length;
//     consoCounter = str.match(consoPattern).length;

//     return `La cadena ${str} tiene ${vowelCounter} vocales y ${consoCounter} consonantes`
// };
// console.log(charCounter('Hola Mundo'));
// console.log(charCounter(''));


// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


// const isValidName = name => {
//     if (name === undefined) return console.warn ('No metiste un nombre');
//     if(typeof name !== 'string') return console.error('Ingresa una cadena de texto');

//     const namePatter = /[A-Z,Ñ]\w{1,} ?([A-Z]\w{1,})?/;
//     return namePatter.test(name)
// };

// console.log (isValidName("Jonathan MirCha"));
// console.log (isValidName(ÑoÑo));
// console.log (isValidName("Avalos"));
// console.log (isValidName("Julieta Venegas"));


// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// const isValidMail = mail => {
//     const mailPatter = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//     return mailPatter.test(mail);
// }; 
// console.log(isValidMail('a2500@alumno.ipn.mx'));
// console.log(isValidMail('aldair.avalos@gamil.com'));
// console.log(isValidMail('ulises-man@gmail.com'));
// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// const sqNumArray = array => {
//     if (array === undefined) return console.warn ('No metiste un array');
//     if( !(array instanceof Array)) return console.error('Ingresa un array con numeros');
//     if (array.length === 0) return console.warn ('El array está vacío');
//     for (let num of array){
//         if (typeof num !== 'number') {
//             return console.error('El valor ${num} no es tipo number')};
//     };

//     return array.map(number => {
//         return number ** 2;
//     });
// };

// console.log(sqNumArray([1,2,3,4,5,6,7]));
// console.log(sqNumArray([]));
// console.log(sqNumArray(['a','b','c','d','e','f','g']));

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
// const minAndMax = array => {
    // if (array === undefined) return console.warn ('No metiste un array');
    // if( !(array instanceof Array)) return console.error('Ingresa un array con numeros');
    // if (array.length === 0) return console.warn ('El array está vacío');
    // for (let num of array){
    //     if (typeof num !== 'number') {
    //         return console.error('Los valores del array no son numeros')};
    // };

//     let min = Math.min(...array);
//     console.log(min);
//     let max = Math.max(...array);
//     console.log(max);
//     return [].push(max,min);
// };
// const minAndMax = array => {
//     let sortedArray = array.sort()
//     let min = sortedArray[0]
//     console.log(min);
//     let max = sortedArray[sortedArray.length-1];
//     console.log(max);
//     ans = [];
//     return [max,min];
// };

// console.log(minAndMax([1, 4, 5, 99, -60]));

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// const evenAndOdds = numbersArray => {
//     if (numbersArray === undefined) return console.warn ('No metiste un array');
//     if( !(numbersArray instanceof Array)) return console.error('Ingresa un array con numeros');
//     if (numbersArray.length === 0) return console.warn ('El array está vacío');
//     for (let num of numbersArray){
//         if (typeof num !== 'number') {
//             return console.error('Los valores del array no son numeros')};
//     };
//     let even = [];
//     let odd = [];
//     numbersArray.map(number => 
//         (number % 2 === 0)
//           ?  even.push(number)
//           :  odd.push(number) 
//     );
//     return {original: numbersArray,even,odd};
// };
// console.log(evenAndOdds([1,2,3,4,5,6,7,8,9,0]));
// Con .filter(callback) sale igual facilisimo

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
// const sortArray = array => {
//     if (array === undefined) return console.warn ('No metiste un array');
//     if( !(array instanceof Array)) return console.error('Ingresa un array con numeros');
//     if (array.length === 0) return console.warn ('El array está vacío');
//     for (let num of array){
//         if (typeof num !== 'number') {
//             return console.error(`El valor ${num} del array no es tipo number`)};
//     };

//     let asc = array.sort();
//     let des = asc.slice(0).reverse();
//     // des = [0.123]
//     return {asc,des};
// };
// console.log(sortArray([7, 5,7,8,6]));
// console.log(sortArray([7, 'a',7,8,6]));
// console.log(sortArray([]));

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

// const delDupli = array => new Set(array);
//     if (array === undefined) return console.warn ('No metiste un array');
//     if( !(array instanceof Array)) return console.error('Ingresa un array con numeros');
//     if (array.length === 0) return console.warn ('El array está vacío');
//     for (let num of array){
//         if (typeof num !== 'number') {
//             return console.error(`El valor ${num} del array no es tipo number`)};
//     };

// console.log(delDupli(["x", 10, "x", 2, "10", 10, true, true]));
// set1 = delDupli(["x", 10, "x", 2, "10", 10, true, true]);
// console.log(set1 instanceof Array);
// console.log(set1 instanceof Set);
// Deja de ser un objeto Array y pasa a ser un Set, pero podemos hacer casting para que el Set se haga Array de vuelta


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

// const mean = numbers => {
//         if (numbers === undefined) return console.warn ('No metiste un array');
//     if( !(numbers instanceof Array)) return console.error('Ingresa un array con numeros');
//     if (numbers.length === 0) return console.warn ('El array está vacío');
//     for (let num of numbers){
//         if (typeof num !== 'number') {
//             return console.error(`El valor ${num} en [${numbers.indexOf(num)}] del array no es tipo number`)};
//     };

//     let sum = 0;
//     for(let number of numbers){
//         sum += number;
//     };
//     return sum/(numbers.length);
// };    
// console.log(mean([9,8,7,6,5,4,3,2,1,0]));
// console.log(mean([9,8,7,6,'¡',4,3,2,1,0]));
// console.log(mean([]));
// console.log(mean([9,8,7,6,5,4,3,2,1,0,9]));


// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, title, director, año de year, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   😊- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   😊- Valida que el título no rebase los 100 caracteres.
//   😊- Valida que el director no rebase los 50 caracteres. ^\w{1,50}$
//   😊- Valida que el año de year sea un número entero de 4 dígitos.
//   😊- Valida que el país o countryes sea introducidos en forma de arreglo.
//   😊- Valida que los géneros sean introducidos en forma de arreglo.
//   😊🤔- Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   😊- Crea un método estático que devuelva los géneros aceptados*.
//   😊- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   😊- Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

//1st class i do, feels good men 😁
class Film {
    constructor({id, title, director, year,country,genres,rate}){
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.country = country;
        this.genres = genres;
        this.rate = rate;
        //this.acceptedGenres = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography','Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy',' Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV','Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'];
        // That is not posible since the info will be available only after an instance of Film is created, remember it was declared as part of the constructor
        // We'll implement what is called a static property using getter and setter methods to acces that info from the class itself

        //Métodos auto ejecutables de validaciones cuando se llama al constructor
        this.validIMDB(id);
        this.validTitle(title);
        this.validDirector(director);
        this.validYear(year);
        this.validCountry(country);
        this.validGenres(genres);
        this.validRate(rate);
        
    };
    
    // Static attribute
    static get listGenres(){
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography','Comedy', 'Crime', 'Documentary' ,'Drama', 'Family', 'Fantasy',' Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV','Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
    };
    
    //Static Method
    static getListGenres(){
        return console.log(`Allowed Genres: \n${Film.listGenres.join(', ')}`)
    }
    
    //Technical Data
    datasheet(){
        console.info(`
        Ficha técnica\n
        idIMDB: ${this.id}
        Título: ${this.title} 
        Director: ${this.director}
        Year of Release: ${this.year}
        Conutry: ${this.country}
        Genres: ${this.genres}
        iMDB Rating: ${this.rate}    
        `)
    };

    //Validations for class attributes
    validString(property, value, length = 0){
        if (!value) return console.warn(`${property}:${value} está vacio`);
        if(typeof value !== 'string') return console.error(`${property}:${value} no es string`);
        if (length !== 0){
            if(value.length > length+1) return console.error(`${property}:${value} too long, must be under ${length} characters`);
        };

        return true;
    };

    validArray(property, value){
        if (!value) return console.warn(`${property}:${value} array vacio`);
        if(!(value instanceof Array)) return console.error(`${property}:${value} is not Array`);
        if(value.length == 0) return console.warn(`${property}:${value} is empty`);
        for(let string of value){
            if(typeof string !== 'string') return console.error(`${property}:${string} element is not of type string`)
        };
    };

    validIMDB(id){
        if(this.validString('idIMDB', id)){
            if(!(/^([a-z]{2}[0-9]{7})$/.test(id))){
                return console.error(`id: ${id}, not valid, must begin with 2 letters and end with 7 numbers`);
            };
        };
    };

    validTitle(title){
        this.validString('Title', title,100)
    };

    validDirector(director){
        if(this.validString('Director', director,50)){    
        };
    };

    validYear(year){
        if (!year) return console.warn(`Year: ${year} está vacio`);
        if(typeof year !== 'number') return console.error(`Year:${year} no es number`);
        if(!(year > 1899 && year < 3000)) return console.error(`Year: ${year} no valido, debe tener 4 dígitos`)
    };
    
    validCountry(country){
        this.validArray('Country',country);
    };
    
    validGenres(genres){
        this.validArray('Genre',genres);
        
        let count = 0;
        for(let acceptedGenre of Film.listGenres){
            for(let genre of genres){
                if(genre == acceptedGenre){
                    count += 1
                };
            };
        };
        //I know nested for is O(n^2) this is provisional since this is a tremendous expensive solution
        
        (count === 0)
          ? console.error(`Genres: [${genres}] genre not allowed`)
          : (count === genres.length)
              ? true 
              : console.warn(`Genres: [${genres}] ${count} genre didnt pass\n\nAllowed Genres:\n${Film.listGenres}`);  
    };

    validRate(rate){
        
        if(typeof rate !== 'number') return console.error(`Rate: ${rate} is not a number`);
        if(rate < 0) return console.error(`Rate: ${rate} must be greatear than 0.0`);
        if(rate > 10) return console.error(`Rate:${rate}. Rate must be smaller than 10`)
        if(!(/^1?[0-9].?[0-9]$/.test(rate))) console.error(`Rate:${rate}. Rate must be in the form (#.#) with integers from 0 to 9. eg. 5.6`)
    };
};

const peliculas = [
    {
      id: 'tt1234567',
      title: "el title",
      director: "Manuel medarno",
      year: 2020,
      country: ["Mexico"],
      genres: ["Comedy", "Sport"],
      rate: 1.0,
    },
    {
      id: "tt1234567",
      title: "el title",
      director: "Manuel medarno",
      year: 2020,
      country: ["Mexico"],
      genres: ["Comedy", "Sport"],
      rate: 2.0,
    },
    {
      id: "tt1234567",
      title: "el title",
      director: "Manuel medarno",
      year: 2020,
      country: ["Mexico"],
      genres: ["Comedy", "Sport"],
      rate: 8.0,
    }
];

peliculas.forEach(peli => {
    new Film(peli).datasheet();
});



