let e1= 'aldair.avalos1.2000@gmail.com';
let e2= 'aldair.avalos2.2000@gmail.com';
let e3= 'aldair.avalos3.2000@gmail.com';
let e4= 'aldair.avalos4.2000@gmail.com';
let e5= 'aldair.avalos1.2000@gmail.com';
//RECUERDA e5 tiene el mismo string que e1

//Nos damos cuenta que al intentar añadir e5 no nos deja porque ya existe un elemento con el valor de e5.
let emails = new Set([e1,e2,e3,e4]);
console.log(emails,emails instanceof Set)
emails.add(e5)
console.log(emails,emails instanceof Set)

//Podemos cambiar de Set a Array y visceversa
emails = Array.from(emails);
console.log(emails,emails instanceof Array);
emails = new Set(emails);
console.log(emails, emails instanceof Set);

//Propiedades y métodos
console.log(`Set de tamaño ${emails.size}`);
emails.add({prefix:'aldair.avl',sufix:'gamil',domain:'WTF'});
console.log(`Set de tamaño ${emails.size}`);
console.log(emails);

//Verificamos la existencia de un elemento, lo eliminamos y volvemos  a checar si existe. 
console.log(emails.has('aldair.avalos1.2000@gmail.com'))
console.log(emails.delete('aldair.avalos1.2000@gmail.com'))
console.log(emails.has('aldair.avalos1.2000@gmail.com'))

//Para reinicializar un Set
emails.clear();
console.log(emails);

