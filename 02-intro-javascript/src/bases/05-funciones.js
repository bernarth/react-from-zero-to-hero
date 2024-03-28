// functiones

// function saludar(nombre) {
//   return `Hola, ${ nombre }`;
// }

// saludar = 30;
// crear funciones de esa forma podriamos reasingar saludar y crear un simple warning

const saludar = function(nombre) {
  return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = nombre => `Hola, ${ nombre }`;

console.log(saludar('Alberth'));
console.log(saludar2('Alberth'));
console.log(saludar3('Alberth'))