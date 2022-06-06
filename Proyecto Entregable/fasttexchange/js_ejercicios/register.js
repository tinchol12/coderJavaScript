
let btnLimpiarLabels = document.getElementById('limpiarLabels');
let btnEnviar = document.getElementById('enviarBtn');
let nombreUsuario = document.getElementById('name');   
let apellidoUsuario = document.getElementById('lastname');   
let correo = document.getElementById('email');
let edad = document.getElementById('age');
let contrasena = document.getElementById('password');
let confirmarContrasena = document.getElementById('password2');
let btnLimpiar = document.getElementById('limpiarFormulario');
let btnValidarPassword = document.getElementById('validarPasswords');

let nuevoLabelName ="";


btnLimpiarLabels.addEventListener('click', () => {
    let valores = prompt("Desea borrar los valores de las registrados (si/no)");
 
     if (valores == 's') 
     {
        limpiarLabels();
     }
     else
     {
         alert('No se cargaron los valores')
     }
 
 });



let pasarResultados = () => {
    let nameText = document.getElementById('name').value;
    let emailText = document.getElementById('email').value;
    let ageText = document.getElementById('age').value;
    let passwordText = document.getElementById('password').value;
    let password2Text = document.getElementById('password2').value;
    let lastnameText = document.getElementById('lastname').value;


    nuevoLabelName = "Nombre Registrado: " + nameText;
    let nuevoLabelEmail = "Correo Registrado: " + emailText;
    let nuevoLabelAge = "Edad Registrada: " + ageText;
    let nuevoLabelPassword = "Contraseña Registrada: " + passwordText;
    let nuevoLabelPassword2 = "Confirmar Contraseña Registrada: " + password2Text;
    let nuevoLabelLastname = "Apellido Registrado: " + lastnameText;
    
    document.getElementById('resultados').append(nuevoLabelName);
    document.getElementById('resultados').append(nuevoLabelEmail);
    document.getElementById('resultados').append(nuevoLabelAge);
    document.getElementById('resultados').append(nuevoLabelPassword);
    document.getElementById('resultados').append(nuevoLabelPassword2);
    document.getElementById('resultados').append(nuevoLabelLastname);

    
    console.log(nuevoLabelName);
    
}


let limpiarFormulario = () => {
   
    nombreUsuario.value = '';
    apellidoUsuario.value = '';
    correo.value = '';
    contrasena.value = '';
    confirmarContrasena.value = '';
    edad.value = '';

}

let validarPass = () => {
   
    if(contrasena.value == confirmarContrasena.value)
    {
        alert('Las contraseñas coinciden');
        console.log('Las contraseñas coinciden');
    }
    else
    {
        alert('Las contraseñas no coinciden');
        console.log('Las contraseñas no coinciden');
    }

}

let limpiarLabels = () => {
    document.getElementById('resultados').innerHTML = '';

    console.log('Se borro los resultados');
}

btnLimpiar.addEventListener('click', () => {
    limpiarFormulario();
    alert('Se borraron los datos cargados en los campos del formulario');
    console.log('Se borraron los datos cargados en los campos del formulario');
});

btnValidarPassword.addEventListener('click', () => {
    validarPass();    
});


btnEnviar.addEventListener('click', () => {
    pasarResultados();
    alert('Generando nuevas labels con los datos ingresados en el formulario');

});

btnLimpiarLabels.addEventListener('click', () => {
    limpiarLabels();
    alert('Se borraron las labels generadas');

});



