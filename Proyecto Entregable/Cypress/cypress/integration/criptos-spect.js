describe('Pruebas sobre la sección Criptos', () => {

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