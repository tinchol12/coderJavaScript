
  /* Pedir número mediante prompt y sumarle otro número en cada repetición, realizando una salida por cada resultado */

  let valor1 = +prompt("Ingrese un valor: ");
  let valor2 = +prompt("Cantidad sumas a aplicar: ");
  let valor3 = +prompt("Valor a sumar: ")
  let resultado;

  for(let i=1; i<=valor2; i++){
        valor1 = valor1 + valor3;
        console.log(`El resultado de la suma ${i} es: ${valor1}`);        
  }