
describe('Pruebas sobre el formulario de Registrarse', () => {

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