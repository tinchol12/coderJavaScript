/* Variables globales  */

const hardPassword = "1234";
let saldoDisponible = 1000;
const ualaFci = 0.3825;
const ualaMeli = 0.3945;
const ualaBalanz = 0.44;
let formulaRendimiento = 0;
let opcionPrincipal = 0
let counter = 5;

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
    
    opcionPrincipal = prompt("Ingrese la opción que desea realizar: \n 1. Consulta Saldo \n 2. Operaciones \n 3. Contactar a Soporte \n 4. Salir");

    switch (opcionPrincipal) {

        case '1':
            consultaSaldo(saldoDisponible);
            break;
        case '2':
            openMenuOperaciones();
            break;
        case '3':
            contacto();
            break;
        case '4':
            salir();
            break;
        default:
            alert("Ha ingresado una opción inválida");            
            break;
    }    
}

function openMenuOperaciones() {
    
    restartOperationsFci();

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
}

function restartOperationsFci(){
    opcionSeleccion = prompt("Ingrese la opción que desea realizar: \n 1. Invertir en FCI \n 2. Comprar de Cripto \n 3. Salir");
}

function invertirFCI(saldoDisponible) {
    let seleccionarFondo = +prompt("Seleccione el fondo en el cual va a invertir: \n 1. UALA (38.25 %) \n 2. MELI (39.45 %) \n 3. BALANZ (44 %) \n 4. VER TODOS LOS RENDIMIENTOS \n 5. Volver atras");
    let CantidadDias = 0;
    let rendimiento = 0;
      
    if(seleccionarFondo === 1){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");
        formulaRendimiento = (ualaFci / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
        
    }
    else if(seleccionarFondo === 2){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");

        formulaRendimiento = (ualaMeli / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
    }
    else if(seleccionarFondo === 3){
        CantidadDias = prompt("Ingrese la cantidad de dias que desea invertir: ");

        formulaRendimiento = (ualaBalanz / 365) + 1;
        rendimiento = Number(CantidadDias) * ((Number(formulaRendimiento)) * Number(saldoDisponible) - Number(saldoDisponible));
        alert("Obtiene: $" + rendimiento.toFixed(2) + " invirtiendo $" + saldoDisponible + " durante " + CantidadDias + " dias.");
        console.log(`seleccionarFondo ${seleccionarFondo}, formulaRendimiento ${formulaRendimiento}`);
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
    }
    else {
        openMenuOperaciones();
    }
    
    opcionSeleccion = 0;
    openMenuOperaciones();

    
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
