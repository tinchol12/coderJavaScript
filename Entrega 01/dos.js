
/* Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. */

let texto1 = "";

do(
   texto1 = prompt("Ingrese un texto: "),
   alert(
       "La palabra ingresada fue: " + texto1,  
       console.log(texto1))       
       )
   while(texto1 != "ESC");
