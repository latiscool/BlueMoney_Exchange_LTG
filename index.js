// ●Importar el módulo https.
const https = require('https');
const urlBase = 'https://mindicador.cl/api';
const fs = require('fs');

//usando el método slice para recortar el arreglo, omitiendo los primeros 2, porque no se utilizaran.
const arg = process.argv.slice(2);

// 1. Recibir por la línea de comando los siguientes argumentos:
// a. Nombre del archivo que se creará.
// b. Extensión del archivo.
// c. Indicador económico que se desea convertir.
// d. Cantidad de pesos que se quiere cambiar.

//Argumentos que sera capturados por la consola
//       slice(2)          [0]      [1]  [2]   [3]
//   --------------  -------------  --  ----  ------
// // $node index.js ExchangeMonkey txt dolar 250000

let fileName = String(arg[0]);
let fileExtension = String(arg[1]);
let indicatorType = String(arg[2]);
let amountChange = Number(arg[3]);

https
  // ●  Usar el método get del módulo https para consultar la API.
  .get(urlBase, (resp) => {
    //Usar el método “on” del parámetro recibido en el callback del método get
    // especificando el evento “data” e imprimiendo la data -LTG- obtenida de la API formateada a JSON.
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      // 2. Consultar la ​API​ con el módulo https y almacenar la respuesta en una variable
      let apiArray = JSON.parse(data);
      let indicatorValue = apiArray[`${indicatorType}`].valor;
      let coinConverter = (amountChange / indicatorValue).toFixed(2); //Cambia Pesos a Dolar

      //       3. Crear un archivo con el módulo fs cuyos datos están formados por los argumentos
      // recibidos por línea de  comando y su contenido basado en el -LTG- template de la  descripción
      fs.writeFileSync(
        `${fileName}.${fileExtension}`,
        `       A la fecha: ${Date()}\n
        Fue realizada cotizacion con los siguientes datos:\n
        Cantidad de pesos a convertir: ${amountChange} da un total de:\n
        ${coinConverter}`,
        'utf-8',
        () => {
          console.log(`Archvio ${fileName}.${fileExtension} se ha creado`);
        }
      );

      // 4. Enviar por consola el contenido del archivo luego de que haya sido creado.
      fs.readFile(`${fileName}.${fileExtension}`, 'utf-8', (err, data) => {
        console.log(`Contenido del archivo :\n`, data);
      });
    });
  })
  //Usar el método “on” del callback del método get especificando el evento
  // “error” para imprimir por consola en su callback el posible error generado por la
  // consulta.
  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
