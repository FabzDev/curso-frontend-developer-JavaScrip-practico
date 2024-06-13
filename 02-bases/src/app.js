const { uuid, getAge } = require("./plugins")

const promiseGetPoke = require("./js-foundation/06-promises");

promiseGetPoke(2)
.then( pokemon => console.log(pokemon.name))
.catch( error => console.log("Intenta de nuevo"))
.finally(() => console.log('Finalizado'))