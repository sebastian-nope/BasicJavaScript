var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas); //Llamar array

console.log(frutas.length); //Longitud de la array

console.log(frutas[0]); //Manzana

console.log(frutas[2]); //Cereza

var masFrutas = frutas.push("Uvas"); //Añadir un elemento de ultimo al array

var ultimo = frutas.pop("Uvas"); //Eliminar ultimo elemento

var nuevaLongitud = frutas.unshift("Pera"); //Añadir un elemento de primero al array

var borrarFruta = frutas.shift("Pera"); //Eliminar primer elemento

var posicion = frutas.indexOf("Cereza"); //Buscar un elemento