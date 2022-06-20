# Entregas

Desafio Complementario 01: 18/05/2022 
 - Dentro del index.html, cambiar el href a "uno.js", "dos.js", o "tres.js" para ejecutar cada uno de los ejercicios.

Desafio: Simulador interactivo. 24/05/2022
 - HTML y CSS incorporados. Primera etapa del proyecto.
 - Para poder en uso el algoritmo solicitado, debe ejecutar el archivo entregable.html.
   No requiere de cambiar de script para ejecutar los diferentes casos en donde se aplicaron los temas dados para este examen.

   Lo primero que debe hacer es intentar logearse. No hay un username cargado, por lo tanto cualquiera es valido. La clave para ingresar es 1234. En caso de fallar 5 veces, se cierra la app.

   Una vez cargado el algoritmo, se presentan diferentes opciones. No todas estan desarrolladas, por lo cual se indica como proceder para poder probar aquellas que ya estan funcionales. 
 
        1. Consulta saldo           
        2. Operaciones
            1. Invertir en FCI                
            2. Compra de Criptos (Proximamente)                
            3. Volver al menu anterior
        3. Prestamos
            1. Simular un prestamo 
            2. Pagar Cuota (Proximamente)                
            3. Mis prestamos (Proximamente)                
            4. Volver atras
        4. Salir    

 - Simular inversiones FCI:
    1. 
    Puede seleccionar cada entidad y ver el rendimiento que puede obtener sobre el saldo que tiene cargado durante una X cantidad de dias que pase por parametro. Básicamente se puede calcular aproximadamente, cuanto dinero puedo ganar invirtiendo mi saldo durante X cantidad de días.
    2.
    Puede los resultados viendo todas las entidades juntas para valorar la diferencia de tasas.

 - Simular Prestamos:
   1. 
   Ingresar el monto a simular y la cantidad de cuotas.
   2.
   Se presenta el detalle del prestamo por consola y un resumen en una alerta.

Desafio 6 y 7. Incoorporar Arryas y Higher order functions 31/05/2022 - 02/06/2022
 - En esta entrega, se comienza a desarrollar algunas funcionalidades relacionadas al usuario. Se puede registrar, logera, listar, y buscar un usuario.
 - HTML a ejecutar: 
  - Se puede ejecutar el index.html y luego hacer click in "login"
  - Se puede ejecutar directamente el archivo login.html
 - Para poder ejecutar las pruebas, se recomienda continuar los siguientes pasoso:
   1. registrar al menos 3 usuarios (opción 1):
      - User: usuario7; Pass: 12312322 (8 caracteres o mas), Tiene prestamo (si/no): si; Valor de prestamo: 14999;
      - User: usuario3; Pass: 12312322 (8 caracteres o mas), Tiene prestamo (si/no): no; 
      - User: usuario4; Pass: 12312322 (8 caracteres o mas), Tiene prestamo (si/no): si; Valor de prestamo: 7500;
   2. Listar los usuarios (opción 3)
   3. Logear un usuario (opción 2)
   4. Buscar un usuario registrado (opción 4)
   5. Order el array de usuarios (opción 6)

Desafio 8 - Manejo del DOM 07/06/2022
   Ejecutar el archivo register.html y:
 - 1. Completar el formulario
 - 2. Enviar el formulario --> Crea labels en el DOM
 - 3. Click en Validar Passwords --> Valida que las contraseñas sean iguales o no
 - 4. Click en Limpiar Labels --> Elimina los labels generados
 - 5. Click en Limpiar Formulario --> Elimina los valores cargados en el formulario

 Desafio 9 - Eventos del DOM 09/06/2022
   Se adaparon los cambios sugeridos por el tutor.
   Se agrega un evento onclick en el titulo del form
   Se agrega el uso del evento DOMContentLoaded para validar que el DOM se haya cargado (mensaje por consola)
   Se agrega el preventDefault para el formulario    
   Ejecutar el archivo register.html y:   
 - 1. Completar el formulario
 - 2. Enviar el formulario --> Crea labels en el DOM
 - 3. Click en Validar Passwords --> Valida que las contraseñas sean iguales o no
 - 4. Click en Limpiar Labels --> Elimina los labels generados
 - 5. Click en Limpiar Formulario --> Elimina los valores cargados en el formulario
 

 Desafio 10 - JSON y LocalStrorage 16/06/2022
   Ejecutar el archivo register.html y:
 - 1. Completar el formulario
 - 2. Enviar el formulario --> Almacena los valores del formulario en el local storage
 - 3. Click en el boton "Ver los valores del storage" para ver en en consola y en un alert los datos cargados previamente
 - 4. Al hacer click en limpiar formulario, ahora tambien limpia el storage. Se agrega mas lógica para que el usuario decida si borra o no el formulario y el storage.
 - 5. Boton "Cargar Valores JSON": Carga los datos de un archivo.json (con AJAX) en una tabla en el HTML.

 Desafio 12 - Librerias
   Ejecutar el archivo register.html y:
 - 1. Se integra la libreria Sweetalert2 reemplazando los promt y los alerts
 
 
 
 
 