/* Variables globales  */

const hardPassword = "1234";
let saldoDisponible = 10000;
const ualaFci = 0.3825;
const ualaMeli = 0.3945;
const ualaBalanz = 0.44;
let formulaRendimiento = 0;
let opcionPrincipal = 0
let counter = 4;
let montoPrestamoSimular = 0;

/* Run  */ 

const nombreUsuario = prompt("Usuario: ");
let password = prompt("Password: ");

do  {
    if (password == hardPassword) {
        alert('Bienvenido ' + nombreUsuario);
        openMenuPrincipal();
        break;        
    } else {
        alert('Usuario o contraseña incorrectos. Recuerde que tiene ' + counter + ' intentos disponibles');
        password = prompt("Password: ");
        counter--;
    }
} while (counter != 0); 
if(counter == 0) {
    alert('Usted ha agotado los intentos disponibles. Por favor, intente mas tarde');
}


/* Funciones  */



function openMenuPrincipal() {
    

    do  { opcionPrincipal = prompt("Ingrese la opción que desea realizar: \n 1. Consulta Saldo \n 2. Operaciones \n 3. Prestamos \n 4. Salir")
    switch (opcionPrincipal) {

        case '1':
            consultaSaldo(saldoDisponible);
            break;
        case '2':
            openMenuOperaciones();
            break;
        case '3':
            menuPrestamos(montoPrestamoSimular);
            break;
        case '4':
            salir();
            break;
        default:
            alert("Ha ingresado una opción inválida");             
            break;
    }
    } while (opcionPrincipal != 4);    
}

function openMenuOperaciones() {
    
    do  {  opcionSeleccion = prompt("Ingrese la opción que desea realizar: \n 1. Invertir en FCI \n 2. Comprar de Cripto \n 3. Salir");
    switch (opcionSeleccion) {

        case '1':
            invertirFCI(saldoDisponible);
            break;
        case '2':
            comprarCripto(saldoDisponible);
            openMenuPrincipal();
            break;
        case '3':
            openMenuPrincipal();
            break;
        default:
            alert("Ha ingresado una opción inválida"); 
            openMenuPrincipal();           
            break;
    }    
    } while (opcionSeleccion != 3);
}

function invertirFCI(saldoDisponible) {
   
    let seleccionarFondo = 0;
    
    do  {
    seleccionarFondo = +prompt("Seleccione el fondo en el cual va a invertir: \n 1. UALA (38.25 %) \n 2. MELI (39.45 %) \n 3. BALANZ (44 %) \n 4. VER TODOS LOS RENDIMIENTOS \n 5. Volver atras");
    } while (seleccionarFondo >= 6);

    let CantidadDias = 0;
    let rendimiento = 0;
      
    if(seleccionarFondo === 1){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");
        formulaRendimiento = (ualaFci / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
        opcionSeleccion = 0;
        openMenuOperaciones();
    }
    else if(seleccionarFondo === 2){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");

        formulaRendimiento = (ualaMeli / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
        opcionSeleccion = 0;
        openMenuOperaciones();
    }
    else if(seleccionarFondo === 3){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");

        formulaRendimiento = (ualaBalanz / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
        opcionSeleccion = 0;
        openMenuOperaciones();
    }
    else if(seleccionarFondo === 4){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");

        formulaRendimiento = (ualaFci / 365) + 1;
        let rendimientoUala = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        formulaRendimiento = (ualaMeli / 365) + 1;
        let rendimientoMeli = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        formulaRendimiento = (ualaBalanz / 365) + 1;
        let rendimientoBalanz = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));

        alert("Rendimientos para una inversión de: $" + saldoDisponible + " durante " + CantidadDias + " dias: \n 1. UALA $"+ rendimientoUala.toFixed(2) + " \n 2. MELI $"+ rendimientoMeli.toFixed(2) + " \n 3. BALANZ $"+ rendimientoBalanz.toFixed(2) + "");
        opcionSeleccion = 0;
        openMenuOperaciones();
    }
    else if(seleccionarFondo === 5){ 
        opcionSeleccion = 0;
        openMenuOperaciones();
    }
    else {
        alert('No ha ingresado una opción válida');
    }      
   
    
}

function consultaSaldo(saldoDisponible) {
    alert("Su saldo disponible es de: " + saldoDisponible);
    openMenuPrincipal();
}

function salir() {
    alert("Gracias por utilizar nuestros servicios");
}

function comprarCripto() {
    alert("Proximamente");
}

function menuPrestamos() {

    do  {
    opcionSeleccionPrestamos = prompt("Seleccione una opci{on}: \n 1. Simular prestamo \n 2. Pagar Cuota \n 3. Mis prestamos \n 4. Volver atras");


    switch (opcionSeleccionPrestamos) {

        case '1':
            simularPrestamo();
            break;
        case '2':
            pagarCuota();
            break;
        case '3':
            misPrestamos();
            break;
        case '4':
            openMenuOperaciones();
            break;
        default:
            alert("Ha ingresado una opción inválida");            
            break;
    }   
    } while (opcionSeleccionPrestamos != 4);
}

function simularPrestamo() {
    
    let interesPrestamo = 0;
    let montoTotalDevolver = 0;
    let cantidadCuotas = 0;

    let montoPrestamo = +prompt("Ingrese el monto del prestamo: ");
     cantidadCuotas = +prompt("Ingrese la cantidad de cuotas deseadas: ");

    if(cantidadCuotas === 0){
        alert("Al ingresar 0, no se le puede otorgar el prestamo ya que indica no querer pagarlo"); 
        console.log(`------------------------------------------------`);
        console.log(`------------- DETALLE DEL PRESTAMO -------------`);
        console.log(`------------------------------------------------`);
        console.log(`------------------------------------------------`);
        console.log(`---------------- NO HAY PRESTAMO ---------------`);
        console.log(`------------------------------------------------`);   
    }else if(cantidadCuotas <= 6){
        interesPrestamo = 0.12;
    }else if(cantidadCuotas >= 6 && cantidadCuotas <= 9){
        interesPrestamo = 0.24;
    }else if(cantidadCuotas > 9){
        interesPrestamo = 0.37;} 

    let valorCuota = (montoPrestamo / cantidadCuotas) + ((montoPrestamo / cantidadCuotas) * interesPrestamo);
     
    if(cantidadCuotas > 0){
        
        console.log(`------------------------------------------------`);
        console.log(`------------- DETALLE DEL PRESTAMO -------------`);
        console.log(`------------------------------------------------`);
        console.log(`Monto SOLICITADO: $ ${montoPrestamo.toFixed(2)}`);
        console.log(`Cantidad de CUOTAS: $ ${cantidadCuotas}`);

        for(let i = 1; i<=cantidadCuotas; i++)
        {
            montoTotalDevolver = valorCuota + montoTotalDevolver
            console.log(`Cuota número ${i}: ${valorCuota.toFixed(2)}`);
        }
        console.log(`------------------------------------------------`);    
        console.log(`Monto total a devolver ${montoTotalDevolver.toFixed(2)}`);
        
        alert("El valor de la cuota es de: $" + valorCuota.toFixed(2) + " y el valor total del prestamo es de: $" + montoTotalDevolver.toFixed(2));
    }

    menuPrestamos();
}
