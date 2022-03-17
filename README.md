  <h1> Cotiza con BlueMoney </h1>

  <h3> Descripción</h3> 
  <p>
    La casa de cambios BlueMoney Spa está interesada en ofrecer una plataforma web por lo
    que solicitó contratar a un desarrollador para la creación de una aplicación que calcule los
    montos de las cotizaciones y registre las consultas en un archivo de texto usando el
    siguiente template:<br>
    A la fecha: Thu Sep 03 2020 18:41:00 GMT-0400 (GMT-04:00)<br>
    Fue realizada cotización con los siguientes datos:<br>
    Cantidad de pesos a convertir: 250000 pesos<br>
    Convertido a "dólar" da un total de:<br>
    $324,06<br>
    Deberás construir una aplicación en Node que reciba los datos para la cotización por la línea<br>
    de comandos, como argumentos y consulte la API mindicador para los cálculos<br>
    correspondientes.<br>
  </p>

  <ul>
    <li> 1. Recibir por la línea de comando los siguientes argumentos:</li>
    <li> a. Nombre del archivo que se creará.</li>
    <li> b. Extensión del archivo.</li>
    <li> c. Indicador económico que se desea convertir.</li>
    <li> d. Cantidad de pesos que se quiere cambiar.</li>
    <li>2. Consultar la API con el módulo https y almacenar la respuesta en una variable.</li>
    <li>3. Crear un archivo con el módulo fs cuyos datos están formados por los argumentos
      descripción.</li>
    <li> 4. Enviar por consola el contenido del archivo luego de que haya sido creado.</li>
    <li> 5. Ejecutar la aplicación desde un archivo externo con el módulo child_process
      enviando los argumentos correspondientes y devolviendo por consola el contenido
      del archivo luego de que haya sido creado.</li>
  </ul>

<br>
<h4> Una descargado / Clonado el Repo, en la consola ejecutar $  node child_process.js </h4>
