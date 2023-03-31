
//modulo2
class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    presentarse() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
  }
  // clase que herede de otra
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
      super(nombre, edad);
      this.raza = raza;
    }
  
    ladrar() {
      console.log("¡Guau guau!");
    }
  }
  
  //objeto  que dentro de sus propiedades  tenga otro objeto
  const objeto1 = {
    propiedad1: "valor1",
    propiedad2: {
      subpropiedad1: "subvalor1",
      subpropiedad2: "subvalor2",
    },
  };
  
  export { Animal, Perro, objeto1 };