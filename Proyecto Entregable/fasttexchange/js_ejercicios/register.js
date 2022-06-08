
const btnLimpiarLabels = document.getElementById('limpiarLabels');
const btnEnviar = document.getElementById('enviarBtn');
const nombreUsuario = document.getElementById('name');   
const apellidoUsuario = document.getElementById('lastname');   
const correo = document.getElementById('email');
const edad = document.getElementById('age');
const contrasena = document.getElementById('password');
const confirmarContrasena = document.getElementById('password2');
const btnLimpiar = document.getElementById('limpiarFormulario');
const btnValidarPassword = document.getElementById('validarPasswords');
let flagValidPass = false;

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
    limpiarFormulario();
    alert('Se borraron los datos cargados en los campos del formulario');
    console.log('Se borraron los datos cargados en los campos del formulario');
});





/* 

DONE 1 - Estaría bueno que le agregues verificación para que no te permita enviar el formulario si alguno de los campos está vacío. 
También, por ahí podrías unificar la lógica de verificar la contraseña ingresada y el envío del formulario, para que pase todo a la vez cuando se manda el formulario.

DONE 2 - La mayoría de variables en el archivo "register.js" nunca son redefinidas a lo largo del código, 
por lo que creo que sería mejor si las declararas como constantes con const, en vez de let, así se deja explicito que son constantes y nunca cambian.

DONE 3 - En la función "pasarResultados" vos estás tomando todos los valores del formulario, y los vas agregando 
uno a uno a div con ID "resultados". El texto que estás agregando es texto plano, que no está envuelto por ninguna etiqueta HTML.
Esto no es lo más recomendable, siempre nuestro texto en el HTML tiene que estar adentro de algún otro tag (En una etiqueta "p" por ejemplo).

DONE 4 - También, dentro de esta función, fijate que tuviste que usar varias veces "document.getElementById('resultados')" 
para obtener el div de resultados. En estos casos, donde se tienen que repetir muchas veces una misma línea de código, lo mejor es crear
 una constante aparte que obtenga ese div, y luego usarla donde la necesites.

DONE 5 - Por último, fijate que también estás buscando dos veces los inputs donde se ingresan los datos, al principio del archivo obtenés todos los inputs,
 y en el inicio de la función los volvés a obtener. En vez de volver a obtenerlos dentro de la función, podrías simplemente utilizar los que ya buscaste afuera,
  como haces en la función "limpiarFormulario".

DONE 6 - Fijate que al botón de limpiar labels le estás agregando dos eventos que hacen lo mismo. En las líneas 16 a 28 declaras un evento con ese botón,
 y en las líneas 110 a 114 declaras otro.

*/



