const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 1, multiplo = 10, listar = false) => {
  let salida = "";
  let consola = "";

  console.log(colors.bgGreen(`Tabla del ${base}`.white));

  for (let i = 1; i <= multiplo; i++) {
    salida += `${base} x ${i} = ${base * i} \n`;
    consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i} \n`;
  }
  if (listar) {
    console.log(consola);
  }
  try {
    fs.writeFileSync(`./files/tabla-${base}-${multiplo}.txt`, salida);
    return `tabla-${base}-${multiplo}.txt creada`.green;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
