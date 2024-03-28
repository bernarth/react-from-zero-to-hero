// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'IronMan',
  rango: 'Soldado'
};

const { nombre:nombre2, edad, clave } = persona;

console.log( nombre2, edad, clave );

const useeContext = ( { nombre, edad, clave, rango = 'Capitan' } ) => {
  // console.log(edad, clave, nombre, rango)

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const {nombreClave, anios, latlng: { lat, lng }} = useeContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);