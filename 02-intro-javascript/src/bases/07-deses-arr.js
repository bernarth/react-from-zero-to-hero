// Desestructuracion de arreglos

const personajes = ['Alberth', 'Bernarth', 'Luis'];

const [ , p2 ] = personajes;

console.log(p2);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea

const useeState = ( valor ) => {
  return [ valor, () => { console.log('Hola Mundo'); } ];
}

const [ nombre, setNombre ] = useeState('Alberth');

console.log(nombre);
setNombre();
