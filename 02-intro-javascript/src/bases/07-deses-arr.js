/* eslint-disable react-hooks/rules-of-hooks */
const personajes = ["Goku", "Vegeta", "Trunks"];

console.log(personajes);

const [, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const arr = useState("Goku");
console.log(arr);

const [nombre, setNombre] = useState("Goku");
setNombre();
