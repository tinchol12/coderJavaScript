       #####################################################################################################################################

 Entrega final:
  Para la entrega final usé todo lo que vimos en clases que fui aplicando en los entregables y ademas cosas útiles que salieron de videos
  recomendados. Mi proposito al hacer el curso era aprender mas sobre JavaScript y poder aplicarlo en pruebas automatizadas, por lo tanto integre Nodejs y Cypress.io para poder hacer unas pruebas a modo de ejemplo. Incluyo un reporte que se genera integrando la libreria de Mochawasome junto a cypress.
  
  Es una aplicación muy simple, en donde se puede:
   - Simular un registro de usuario (completar un formulario)
   - Simular un préstamo
   - Consultar cotizaciones de criptos
   
   Para revisar el proyecto, ejecutar el archivo main.html
     
  - Registrarse
    - Funciones, validaciones, librerias
  - Préstamo
    - Funciones, Eventos sobre el HTML, Crear componentes del HTML, Iteraciones (for, while), Eventos
  - Criptos
    - Usando Fetch para consumir datos de una API, foreach para presentar diferentes cotizaciones.
    
    ![image](https://user-images.githubusercontent.com/50757354/175971682-b2f14435-d5ff-4629-8ad2-89014de7fd4c.png)

  - Para poder ver y ejecutar las pruebas automatizadas:
    - Instalar Cypress
      - 1. Instalar nodejs --> desde https://nodejs.org/es/ descargar la version recomendada para la mayoría
      - 2. Una vez que este abierto el proyecto, ejecutar el package.json para que se instale cypress 9.7.0 
    - Como ejecutar las pruebas
      - Correr el main.html con Live Server desde visual studio. tomar nota del puerto a donde se corre el liveserver. En mi caso, el 5001.
      - En la carpeta de Cypress --> support --> commands.js verificar que en la URL esté el mismo puerto que corre liveserver.
      - Ejecutar npx cypress open
      
      Hay dos formas de ejecutar las pruebas de cypress y ver sus resultados. Ejecutando cypress y ver las ejecuciones en vivo, o ejecutar por consola y generar un reporte con sus resultados:

      1. Pruebas en vivo (npx cypress open):

      ![vivo](https://user-images.githubusercontent.com/50757354/175971276-159e9875-3b22-4e93-a71f-b764ea8ef6c3.png)

      2. Pruebas por consola (npm run reporte):
      Al finalizar la ejecución se puede ver un reporte por consola.

      ![consola](https://user-images.githubusercontent.com/50757354/175971329-14c8c889-4bc2-47cd-84ad-0c91851ba2a2.png)

      Y también se genera un HTML (usando la libreria de mochawesome) que lo hace mas amigable, y es facil de presentar a un equipo.

      ![reporte](https://user-images.githubusercontent.com/50757354/175971387-96afe61e-c6b6-4d40-b4a3-ea6effb005cf.png)
      
      
      #####################################################################################################################################




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
 - Para poder ejecutar las pruebas, se recomienda continuar los siguientes paso:
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






      
 
  
  
 
 
 
 
 
