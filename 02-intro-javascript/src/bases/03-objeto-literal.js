const persona = {
    nombre: 'Itzel',
    apellido: 'Ramon',
    edad: 22,
    direcion: {
        ciudad: 'Cancún',
        zip: 123456,
        lat: 14.3232,
        lng: 34.92
    }
};

console.log(persona);

const persona2 = { ...persona};
persona2.nombre = 'Aixa';

console.log(persona2);