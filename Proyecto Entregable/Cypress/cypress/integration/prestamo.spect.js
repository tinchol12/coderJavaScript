
describe('Pruebas sobre el simulador de Préstamos', () => {

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