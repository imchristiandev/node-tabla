require("colors");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("m", {
    alias: "multiplo",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "Es el múltiplo de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número".red;
    } else if (isNaN(argv.m)) {
      throw "El múltiplo debe ser un número".red;
    } else {
      return true;
    }
  }).argv;

module.exports = argv;
