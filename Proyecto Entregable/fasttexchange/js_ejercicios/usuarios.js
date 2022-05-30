
let usuario, password, opcion, prestamos, montoPrestamo, buscar;
let salir = false;


class Usuario{
    constructor(user, password, prestamos, montoPrestamo){
        this.user = user;
        this.password = password;
        this.prestamos = prestamos;
        this.montoPrestamo = montoPrestamo;        
    } 

    saludoLogin(){
        alert("Bienvenido: " + this.user);
    }

    mostrarPrestamo(){
        alert("Monto de prestamo: $" + this.montoPrestamo + ". Gracias por confiar en nosotros.");
    }

}

const Usuarios = [];

//Crear un usuario, validando que el userName tenga al menos 5 caracteres
function validarString(){
    if(!usuario.match("[A-Za-z]{3,10}")){
        do{
            alert("No ingreso un usuario valido!!");
            usuario = prompt("Ingrese nuevamente un usuario de 3 caracteres minimo:");
        }while(!usuario.match("[A-Za-z]{3,10}"));
        return true;
    } else {
        return true;
    }
}

//validacion si el usuario existe dentro del array
function validarUser(usuario){
    if (Usuarios.some(username => username.user === usuario)){
        return true;
    } else {
        return false;
    }
}

//validacion de password de mas de 8 caracteres
function validarPassword(){
    if(password.length < 8){
        do{
            alert("No ingreso una contraseña valida!!");
            password = prompt("Ingrese nuevamente la contraseña de 8 caracteres minimo: ");
        }while(password.length < 8);
        return true;
    } else {
        return true;
    }
}

function validarPrestamos(){      
       
    if(prestamos === 'si' ){
        montoPrestamo = +prompt("Monto del préstamo asociado: $ ");
    } else if (prestamos === 'no'){
        montoPrestamo = 0;
    }   
    else {
        do{
            alert("Por favor ingrese una respuesta válida")
            prestamos = prompt("El usuario tiene un prestamo asociado? (si,no): ");           
        } while(prestamos != 'si' && prestamos != 'no');                  

    }
 
}

do{
    //Menu
    opcion = prompt("Ingrese una opción para continuar: \n 1 - Registrarse  \n 2 - Login \n 3 - Listar \n 4 - Buscar \n 5 - Ordenar \n 6 - Salir");
    switch(opcion){
        case '1':
            usuario = prompt("Usuario: ");
            validarString();
            password = prompt("Contraseña: ");
            validarPassword();
            prestamos = prompt("El usuario tiene un prestamo cargado?: (si/no) ");
            validarPrestamos();        

            //Validar que esta creando, no exista en la base de datos
            if(validarString() && validarPassword()){
                if(!validarUser(usuario)) {
                    Usuarios.push(new Usuario(usuario,password,prestamos, montoPrestamo));
                    alert("El usuario se registro correctamente!");
                } else {
                    do{
                        alert("El ususario ya existe!");
                        usuario = prompt("ingrese su usuario: ");
                        validarString();
                    }while(validarUser(usuario));

                    Usuarios.push(new Usuario(usuario,password, prestamos,montoPrestamo));
                    alert("El usuario se registro correctamente!");
                    
                }
               
            }

            break;
        
        case '2':
            usuario = prompt("ingrese su usuario: ");
            validarString();
            validarUser(usuario);
            password = prompt("ingrese su contraseña: ");
            validarPassword();

            if(validarUser(usuario) && validarPassword()){
                for(const _Usuario of Usuarios){
                    if(usuario === _Usuario.user){
                        _Usuario.saludoLogin();                       

                        if(_Usuario.prestamos === 'si'){                        
                            let preg = prompt("El usuario tiene un préstamo asociado, desea ver el monto? (si/no)");
                            if(preg === 'si'){
                            _Usuario.mostrarPrestamo();}
                            else if(preg === 'no'){
                                alert("Gracias por su visita!");
                            }
                        }
                        break;
                    }
                }
            } else {
                alert("El usuario ingresado no existe!");
            }

            break;
        
        case '3':
            console.table(Usuarios);
            alert("Tabla generada por consola");            
            break;

        case '4':                       
        buscar = prompt("Ingrese el usuario a buscar: ");        
        console.table(Usuarios.find(usuario => usuario.user.includes(buscar)))
        break;  
        
        case '5':                       
        
        Usuarios.sort(function(a, b){
            if(a.user > b.user){
                return 1;
            }
            if(a.user < b.user){
                return -1;
            }
            return 0;
        });
        console.table(Usuarios);
        alert("Tabla ordenada por usuario");
        
        break;              


        case '6':
            salir = true;
            alert("Gracias por utilizar nuestro servicio!");
            break;
        default:
            alert("ingrese una opcion valida!");
    }
}while(salir == false);

