// Promesas
import { getHeroeById } from './08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 2000);
// });

// promesa.then(() => {
//   const heroe = getHeroeById(2);
//   console.log( heroe );
// });

const getHeroeByIdAsync = ( id ) => {
  return new Promise( (resolve, reject ) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);

      if (p1) {
        resolve(p1);
      }
      else {
        reject('No se pudo encontrar el heroe')
      }
    }, 2000);
  })
};

getHeroeByIdAsync(2)
  //.then( heroe => console.log('Heroe', heroe))
  .then(console.log)
  .catch(console.warn);