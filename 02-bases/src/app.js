const factoryFuntion = require("./js-foundation/05-factory-functions");

const buildPerson = factoryFuntion.buildPerson;

const fabio = { name: "Fabio", birthday: "04-04-1990" }
console.log(buildPerson(fabio)); 

