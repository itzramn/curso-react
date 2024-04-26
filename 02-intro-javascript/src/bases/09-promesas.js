import {getHeroesById} from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       // console.log("2 segundos despues");
//       const heroe = getHeroesById(2);
//       resolve(heroe);
//       // reject("No se pudo encontrar el heroe");
//    }, 2000);
// });

// promesa
//    .then((heroe) => {
//       console.log(heroe, "heroe");
//    })
//    .catch((err) => console.warn(err));

const getHeroesByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         // console.log("2 segundos despues");
         const heroe = getHeroesById(id);
         if (heroe) {
            resolve(heroe);
         } else {
            reject("No se pudo encontrar el heroe");
         }
      }, 2000);
   });
};

getHeroesByIdAsync(1).then(console.log).catch(console.warn);
