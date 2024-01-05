// const saludar = function(nombre) {
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Ramon`;

console.log(saludar2("Itzel"));
console.log(saludar3("Aixa"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "itzramn",
  };
};

const getUser2 = () => ({
  uid: "ABC123",
  username: "itzramn",
});

const user = getUser();
console.log(user);

//Tarea
// 1. Transformen a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC123",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Itzel");
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
  uid: "ABC123",
  username: "itzramn",
});

const usuarioActivo2 = getUsuarioActivo2("Aixa");
console.log(usuarioActivo2);
