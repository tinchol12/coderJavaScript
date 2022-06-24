const nombre = document.getElementById('nombreTxt');
const email = document.getElementById('emailTxt');
const password = document.getElementById('passwordTxt1');
const repetirPassword = document.getElementById('passwordTxt2');
const btnRegistrarse = document.getElementById('btnRegistrar');
const btnLimpiar = document.getElementById('btnLimpiar');

let flagValidPass = false;


let guardarValoresLocalStrorage = () => {
    let usuario = {
        nombre: nombre.value,        
        correo: email.value,
        contrasena: password.value,
        confirmarContrasena: repetirPassword.value
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(datosUsuario);

    const datosUsuarioJSON = JSON.stringify(datosUsuario);
    console.log("El objeto datoUsuario convertido a Json : " + datosUsuarioJSON);
}

let pasarResultados = () => {
    

   let nuevoLabelName = "Nombre Registrado: " + nombre.value;
   let nuevoLabelEmail = "Correo Registrado: " + email.value;
   let nuevoLabelPassword = "Contraseña Registrada: " + password.value;
   let nuevoLabelPassword2 = "Confirmar Contraseña Registrada: " + repetirPassword.value;

   document.getElementById('resultados'). innerHTML =   '      <p>' + nuevoLabelName  + '<p>' +  nuevoLabelEmail + '<p>' + nuevoLabelPassword + '<p>' + nuevoLabelPassword2 + '<p>' ;   
}

let mostrarValoresEnAlert = () => {
    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    
    Swal.fire({
        icon: 'success',
        title: 'OK!',
        text:"Se ha registrado de manera exitosa el usuario: " +  datosUsuario.correo + " . Por favor revise su correo. "            
      })    
}

let limpiarLabels = () => {
    document.getElementById('resultados').innerHTML = '';
    console.log('Se borro los resultados');   

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Los resultados han sido borrados',
        showConfirmButton: false,
        timer: 1500
      })
}

letLimpiarFormulario = () => {

    nombre.value = '';
    email.value = '';
    password.value = '';
    repetirPassword.value = '';
    console.log('al registrar un usuario, se limpia el formulario');
}

let validarPasswordsIguales = () => {
   
    if(password.value == repetirPassword.value){         
        Swal.fire({
            icon: 'success',
            title: 'OK!',
            text: 'Las contraseñas coinciden',
        })        
        console.log('Las contraseñas coinciden');
        flagValidPass = true;
    }
    else
    {
        Swal.fire({
            icon: 'error',
            title: 'FAIL!',
            text: 'Las contraseñas NO coinciden',
        })
        console.log('Las contraseñas no coinciden');
        flagValidPass = false;
    }

}

btnRegistrarse.addEventListener('click', () => {    
    validarPasswordsIguales();

    if(flagValidPass == true) {

        mostrarValoresEnAlert();
        guardarValoresLocalStrorage();
        pasarResultados();
        letLimpiarFormulario();
    }    
    
});

btnLimpiar.addEventListener('click', () => {
   
    Swal.fire({
        title: 'Desea borrar los datos registrados?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('OK!', 'Se borraron los datos las labels', 'success')
          limpiarLabels();
          console.log('Se borraron los HTML generados')
        } else if (result.isDenied) {
          Swal.fire('OK!', 'No se borraron los valores', 'info')
        }
      })
 });