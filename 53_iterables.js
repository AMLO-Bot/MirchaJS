// Just like python js recognizes certain types of objects that could be used as an indexable list of data. e.g. NodeList, Array(strings), Object

// // Access iterable iterator
// const iterable = 'Wabbalaba';
// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);
// console.log(iterador);
// console.log(!iterador.next().done);

// let next = iterador.next();

// while (!next.done) {
//   next = iterador.next();
//   console.log(next.value);
  


const myChair = {
  price: 25,
  heigth: 1,
  width: .3,
  color: 'black',
  materials: ['wood', 'plastic', 'leather'],

};

console.log(myChair)
myChair['price'] = 26;
console.log(myChair)

let myPrices = [myChair['price']*.8,28,25*.9];
console.log(myPrices)

