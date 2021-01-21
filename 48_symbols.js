let id = Symbol('id');
let id2 = Symbol('id2');

console.log(id === id2);
console.log(id,id2);
console.log(typeof id, typeof id2);
//Primero declaramos los Symbols con una pequeña descripción
const NOMBRE = Symbol('Nombre de Usuario');
const SALUDAR = Symbol('Msg de Bienvenida');

//Asignamos el valor de los Symbols en el objeto
const persona = {
    [NOMBRE]:'Wallace',
    edad:8,
};

persona.NOMBRE = 'AldaDev';
console.log(persona);

//Notacion de corchete para acceder a la 'propiedad' expresada con Symbol, la notacion de corchete se usa para desestructurar los objetos Los Symbols se ocupan para propiedades privadas
console.log(persona[NOMBRE]);

//Los Symbols pueden contener referencias a métodos, el método lo declaramos con notación de corchete y los ejecutamos igual.
persona[SALUDAR] = () => 'Hola Mundo';
// console.log(persona[SALUDAR]());

//Con esto nos damos cuenta que los Symbol no aparecen como propiedades del objeto exactamente, es decir, son privadas.
for (let prop in persona) {
    console.log(persona[prop])
}
//Para saber si existen Symbols, ocupas el metodo
console.log(Object.getOwnPropertySymbols(persona));
