const nombre = 'Itzel';
const apellido = 'Ramon';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);

function getSaludo(nombreCompleto) {
    return 'Hola ' + nombreCompleto;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);
