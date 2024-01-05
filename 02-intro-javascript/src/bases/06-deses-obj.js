//Desestrucuracion
//Asugnación desestructurante

const persona = {
  nombre: "Itzel",
  edad: 22,
  clave: "ert",
  rango: "Soldado",
};

// const {nombre, edad, clave} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, clave, edad, rango = "Sargento"}) => {
  //   console.log(nombre, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: {lat, lng},
  // eslint-disable-next-line react-hooks/rules-of-hooks
} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
