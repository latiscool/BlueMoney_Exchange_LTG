// 5. Ejecutar la aplicación desde un archivo externo con el módulo child_process
// enviando los argumentos correspondientes y devolviendo por consola el contenido
// del archivo luego de que haya sido creado

//  Importar el módulo “child_process” en una constante con el mismo nombre.
const child_process = require('child_process');

//emulamos la consola para ejecutar el archivo .js que la miniApp que llama a la Api y convetir CLP USD
// ademas de pasar por consola los argumentos y que lo capture la miniApp.
child_process.exec(
  `node index.js ExchangeMonkey txt dolar 250000`,
  (err, result) => {
    console.log(result);
  }
);
