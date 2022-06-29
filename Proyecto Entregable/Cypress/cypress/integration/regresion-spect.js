describe('Módulo Registrarse', () => {

    beforeEach(() => {
        cy.Site();
    })

    it('Validar que el título diga Registrate', () => {
        cy.get('[cy-data="5"]').should('have.text', 'Registrate');
    });  

    it('Desde la barra de navegación ir a la seccion Registrarse', () => {
        cy.get('[href="#section-3"]').click();
        cy.wait(3000);
        cy.get('[href="#section-4"]').click();
        cy.get('[cy-data="5"]').should('have.text', 'Registrate');
    })

    it('Validar que la descripción no tenga mas de 300 caracteres', () => {

        let countOfElements = 0;
        cy.get('[cy-data="6"]').then($elements => {
            countOfElements > $elements.length;
        });
    });
    
    it('Completar el fomulario', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1234');        
    });

    it('Registrar un usuario', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1234');        
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-confirm swal2-styled"]').should('be.visible');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
    });
    
    it('Registrar un usuario pasando contraseñas diferentes', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1245');        
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-x-mark"]').should('be.visible');
        cy.get('[id="swal2-html-container"]').should('have.text', 'Las contraseñas NO coinciden');        
        cy.get('[class="swal2-confirm swal2-styled"]').click();
    });

    it('Validar que las labels HTML sean generadas', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1234');        
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-confirm swal2-styled"]').should('be.visible');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[id="resultados"]').should('be.visible');        
    });

    it('Validar que las labels HTML no se generen (fail)', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1235');        
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-confirm swal2-styled"]').should('be.visible');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[id="resultados"]').should('be.visible');        
    });

    it('Borrar las etiquetas generadas', () => {
        cy.get('[id="nombreTxt"]').type('Juan');
        cy.get('[id="emailTxt"]').type('juan@email.com');
        cy.get('[id="passwordTxt1"]').type('1234');
        cy.get('[id="passwordTxt2"]').type('1234');        
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-confirm swal2-styled"]').should('be.visible');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[id="resultados"]').should('be.visible');   

        cy.get('[cy-data="12"]').click();
        cy.get('[class="swal2-confirm swal2-styled"]').click();      

    });

    it('Validar que el localstorage esté cargado (fail)', () => {

        cy.get('[id="nombreTxt"]').type('Juan');
        let nombre = 'Juan';
        cy.get('[id="emailTxt"]').type('juan@email.com');
        let email = 'juan@email.com';
        cy.get('[id="passwordTxt1"]').type('1234');
        let password = '1234';
        cy.get('[id="passwordTxt2"]').type('1234');        
        let password2 = '1234';
        cy.get('[id="btnRegistrar"]').click();        
        cy.get('[class="swal2-confirm swal2-styled"]').should('be.visible');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[id="resultados"]').should('be.visible'); 

        cy.get('[cy-data="11"]').click().should(() => {
            expect(localStorage.getItem('usuario')).equal(JSON.stringify({nombre: nombre, email: email, password: password, password2: password2}));
            
          })


    });

    it('Ingresar a mi Linkedin', () => {
        cy.get('[cy-data="48"]').should('have.text', 'Presentación: { Alumno: Martín Ossés  } - { Curso: JavaScript } - { Comisión: 30350 } ');
        cy.get('h5 > a').click()
    
    });  

   

});

describe('Módulo Préstamos', () => {

    beforeEach(() => {
        cy.Site();
    })

    it('Desde la barra de navegación ir a la seccion Criptos', () => {
        cy.get('[href="#section-1"]').click();
        cy.get('[cy-data="36"]').should('have.text', 'Préstamos');
    })

    it('Validar que el título diga Registrate', () => {
        cy.get('[cy-data="36"]').should('have.text', 'Préstamo');
    });  

    it('No debe poder ingresar letras en el campo Monto', () => {
        cy.get('[id="monto"').type('ABCDS');
        cy.get('[id="monto"').should('have.text', '');
    });  

    it('El campo monto no puede ser igual a 0', () => {
        cy.get('[id="monto"').type('0');
        cy.get('[id="tiempo"').type('6');
        cy.get('[id="interes"').type('23');
        cy.get('[id="btnCalcular"]').click();
        cy.get('[id="swal2-html-container"]').should('have.text', 'No otorgamos préstamos mayores a 8 meses, ni prestamos en $0');
    });  

    it('No debe poder ingresar letras en el campo Cuotas', () => {
        cy.get('[id="tiempo"').type('ABCDS');
        cy.get('[id="tiempo"').should('have.text', '');
    });  

    it('No puede ingresar un valor mayor a 8 en cuotas', () => {
        cy.get('[id="tiempo"').type('9');
        cy.get('[id="btnCalcular"]').click();
        cy.get('[id="swal2-html-container"]').should('have.text', 'No otorgamos préstamos mayores a 8 meses, ni prestamos en $0');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[id="tiempo"').type('8');
        cy.get('[id="btnCalcular"]').click();
        cy.get('#lista-tabla > thead > tr').should('be.visible');

    });  
    
    it('Al quedar vacio el campo Interes se debe completar con 1', () => {
        cy.get('[id="monto"').type('15000');
        cy.get('[id="tiempo"').type('6');
        cy.get('[id="btnCalcular"]').click();
        cy.get('[id="interes"').should('have.value', '1');
        cy.get('[id="lista-tabla"]').should('be.visible');
    });  

    it('La tabla de préstamos debe ser visible', () => {
        cy.get('[id="monto"').type('15000');
        cy.get('[id="tiempo"').type('6');
        cy.get('[id="interes"').type('23');
        cy.get('[id="btnCalcular"]').click();        
        cy.get('[id="lista-tabla"]').should('be.visible');
    }); 


   

});

describe('Módulo Criptos', () => {

    beforeEach(() => {
        cy.Site();
    })

    it('Desde la barra de navegación ir a la seccion Criptos', () => {
        cy.get('[href="#section-3"]').click();
        cy.get('[data-cy="58"]').should('have.text', 'Cotizador de Criptomonedas');
    })


    it('Cotiza USD --> Bitcoin', () => {

        cy.get('[id="moneda"]').select('USD');
        cy.get('[id="criptomonedas"]').select('Bitcoin');
        cy.get('[value="Cotizar"]').click();
        cy.get('[id="swal2-html-container"]').should('have.text', 'Cotización de Crpto en el acto exitosa');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[class="main-price"]').should('be.visible');
    });

    it('Seleccion entre USD --> Bitcoint y luego Etherium', () => {

        cy.get('[id="moneda"]').select('USD');
        cy.get('[id="criptomonedas"]').select('Bitcoin');
        cy.get('[value="Cotizar"]').click();
        cy.get('[id="swal2-html-container"]').should('have.text', 'Cotización de Crpto en el acto exitosa');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[class="main-price"]').should('be.visible');
        cy.get('[id="criptomonedas"]').select('Ethereum');
        cy.get('[value="Cotizar"]').click();
        cy.get('[id="swal2-html-container"]').should('have.text', 'Cotización de Crpto en el acto exitosa');
        cy.get('[class="swal2-confirm swal2-styled"]').click();
        cy.get('[class="main-price"]').should('be.visible');
    });

   

});