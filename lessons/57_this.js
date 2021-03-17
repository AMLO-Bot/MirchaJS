// Recordemos que la palabra clave this, apunta a el scope actual, asi empezando 
// this -> window que es el objeto de todo el browser
console.log(this);
console.log(window);
console.log(this === window)
console.log(typeof window)
window['newProp'] = 'Nueva propiedad, infectado el objeto window';
console.log(window);
window['name'] = 'Global scope'


//Las arrow function toman el contexto del padre donde fueron ejecutadas
const obj = {
  name:'Obj Scope',
  print:() => {console.log(this.name)}
};

const obj2 = {
  name:'Obj2 Scope',
  print:function() {console.log(this.name)}
};

obj.print();
obj2.print();

//Esta bien jodido eso de las closure, 

