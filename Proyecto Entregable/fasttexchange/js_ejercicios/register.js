
const btnLimpiarLabels = document.getElementById('limpiarLabels');
const btnEnviar = document.getElementById('enviarBtn');
const nombreUsuario = document.getElementById('name');   
const apellidoUsuario = document.getElementById('lastname');   
const correo = document.getElementById('email');
const edad = document.getElementById('age');
const contrasena = document.getElementById('password');
const confirmarContrasena = document.getElementById('password2');
const btnLimpiar = document.getElementById('limpiarFormulario');
const btnCargar = document.getElementById('cargarValores');
const btnCargarJson = document.getElementById('cargarValoresJson');
const btnValidarPassword = document.getElementById('validarPasswords');
let flagValidPass = false;
let flagLimpiarFormulario = false;

let nuevoLabelName ="";

/* FUNCIONES */

let pasarResultados = () => {
    
     nuevoLabelName = "Nombre Registrado: " + nombreUsuario.value;
    let nuevoLabelEmail = "Correo Registrado: " + correo.value;
    let nuevoLabelAge = "Edad Registrada: " + edad.value;
    let nuevoLabelPassword = "Contraseña Registrada: " + contrasena.value;
    let nuevoLabelPassword2 = "Confirmar Contraseña Registrada: " + confirmarContrasena.value;
    let nuevoLabelLastname = "Apellido Registrado: " + apellidoUsuario.value;

    document.getElementById('resultados'). innerHTML = nuevoLabelName  + '<p>' +  nuevoLabelLastname + '<p>' + nuevoLabelEmail + '<p>' + nuevoLabelAge + '<p>' + nuevoLabelPassword + '<p>' + nuevoLabelPassword2 + '<p>' ;
    guardarValores();
}

let limpiarFormulario = () => {
   
    nombreUsuario.value = '';
    apellidoUsuario.value = '';
    correo.value = '';
    contrasena.value = '';
    confirmarContrasena.value = '';
    edad.value = '';

    localStorage.removeItem('usuario')
    localStorage.clear()

}

let validarPass = () => {
   
    if(contrasena.value == confirmarContrasena.value)
    {
        alert('Las contraseñas coinciden');
        console.log('Las contraseñas coinciden');
        flagValidPass = true;
    }
    else
    {
        alert('Las contraseñas no coinciden');
        console.log('Las contraseñas no coinciden');
        flagValidPass = false;
    }

}

let limpiarLabels = () => {
    document.getElementById('resultados').innerHTML = '';
    console.log('Se borro los resultados');   
}

let guardarValores = () => {
    let usuario = {
        nombre: nombreUsuario.value,
        apellido: apellidoUsuario.value,
        correo: correo.value,
        edad:  edad.value,
        contrasena: contrasena.value,
        confirmarContrasena: confirmarContrasena.value
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(datosUsuario);

    const datosUsuarioJSON = JSON.stringify(datosUsuario);
    console.log("El objeto datoUsuario convertido a Json : " + datosUsuarioJSON);
    console.log("Tipo de dato: " + typeof(datosUsuarioJSON));
}

let obtenerValores = () => {
    let datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    console.log("nombre: " + datosUsuario.nombre + " apellido: " + datosUsuario.apellido + " correo: " + 
                             datosUsuario.correo + " edad: " + datosUsuario.edad + " contrasena: " + datosUsuario.contrasena + " confirmarContrasena: " + datosUsuario.confirmarContrasena);
    alert("nombre: " + datosUsuario.nombre + " apellido: " + datosUsuario.apellido + " correo: " + 
    datosUsuario.correo + " edad: " + datosUsuario.edad + " contrasena: " + datosUsuario.contrasena + " confirmarContrasena: " + datosUsuario.confirmarContrasena);;
}

let cargarUsuariosJSON = () => {
    document.querySelector('#botonJson').addEventListener('click0', traerDatosJson());
}

let traerDatosJson = () => {

    //AJAX
    const xhttp = new XMLHttpRequest();    

    xhttp.open('GET','usuarios.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200)
        {
            let datosUsuario = JSON.parse(xhttp.responseText);
            console.log(datosUsuario);
            
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for(let i = 0; i < datosUsuario.length; i++){
                
            }

            for(let item of datosUsuario)
            {
                res.innerHTML += `
                
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.edad}</td>
                            <td>${item.password1}</td>                                                                                           
                        </tr>               
                
                `;
            }


        }
    }
}

//Eventos sobre el titulo

const titulo = document.getElementById('tituloForm')

const clickEnTitulo1 = (evn) => {
    console.log(evn);
}

function clickEnTitulo2() {
    console.log('Se hizo click en el titulo - Metodo 2');


}



/*  EVENTOS  */

//Metodo 1
titulo.addEventListener('click', clickEnTitulo1);
//Metodo 2
titulo.onclick = clickEnTitulo2;

//Evento sobre el ContentLoader
document.addEventListener('DOMContentLoaded', () => {
    console.log('Listener: El DOM esta cargado');
}
);

//Evento sobre el formulario
const form = document.querySelector("#form_id");

const enviarFormulario = (evento)  => {
    evento.preventDefault();
    console.log(evento);    
};

form.addEventListener('submit', enviarFormulario);




btnLimpiarLabels.addEventListener('click', () => {
    let valores = prompt("Desea borrar los valores de las registrados (si/no)");
 
     if (valores == 'si') 
     {
        limpiarLabels();
     }
     else
     {
         alert('No se cargaron los valores')
     }
 
 });

btnValidarPassword.addEventListener('click', () => {
    validarPass();    
});

btnEnviar.addEventListener('click', () => {    
    
    if(nombreUsuario.value == '' || apellidoUsuario.value == '' || correo.value == '' || edad.value == '' || contrasena.value == '' || confirmarContrasena.value == '')
    {
        alert('Faltan datos por completar');
        console.log('Faltan datos por completar');
    }
    else 
    {
       
        if(flagValidPass == false)
        {
            validarPass();
            if(flagValidPass == true)
            {
                pasarResultados();
                alert('Generando nuevas labels con los datos ingresados en el formulario');
            }

        }
    }          
});

btnLimpiar.addEventListener('click', () => {

    let pregunta = "";

    if(flagLimpiarFormulario = true){
        pregunta = prompt('Desea limpiar el formulario y el storage');
        if(pregunta == 'si')
        {
            limpiarFormulario();
            alert('Se borraron los datos cargados en los campos del formulario')
            console.log('Se borraron los datos cargados en los campos del formulario')
        }
        else
        {
            alert('No se limpio el formulario')
        }
    }
    else
    {
        alert("el formulario ya esta limpio")
    }
    
});

btnCargar.addEventListener('click', () => {
    obtenerValores();
});

btnCargarJson.addEventListener('click', () => {

    cargarUsuariosJSON();

});
