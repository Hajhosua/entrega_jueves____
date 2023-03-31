// index.js
//importacion de clases y el objeto
import { nombre, edad } from "./modulo1.js";
import { Perro, objeto1 } from "./modulo2.js";

const perro = new Perro("Fido", 3, "Labrador");
perro.presentarse(); // Hola, me llamo Fido y tengo 3 años
perro.ladrar(); // ¡Guau guau!


//función tipo flecha que realice el uso  de la clase  y objeto importados
const funcionFlecha = () => {
  console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
  console.log(objeto1.propiedad2.subpropiedad1);
};

funcionFlecha(); // Mi nombre es Juan y tengo 25 años / subvalor1
