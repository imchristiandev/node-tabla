const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");

console.clear();

createFile(argv.base, argv.multiplo, argv.listar)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
