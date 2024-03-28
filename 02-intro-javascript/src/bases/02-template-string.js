// template string

const nombre = 'Alberth';
const apellido = 'Condori';

const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola Mundo ${ nombre }`;
}

console.log(` Este es un texto: ${ getSaludo(`${nombre} ${apellido}`) }`);