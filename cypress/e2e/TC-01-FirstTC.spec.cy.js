describe('First Test Case',function(){
 
    it('Conduit Login',function(){
        //cy.visit('https://react-redux.realworld.io')
        cy.visit('https://react-redux.realworld11.io')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })
 
})