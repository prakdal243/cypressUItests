/**
 * Created by daljeetsidhu on 30/11/2019.
 */

// describe('this is my 1st test using mocha suite function', function() {

//     it('mocha does not do much!', function () {
//         expect(true).to.eq(true)
//         cy.visit('https://example.cypress.io/')
//     })
// })

// describe('given I om the Cypress test example page', function() {

//     it('navigates to cypress example page', function () {
//         cy.visit('https://example.cypress.io/')
//         cy.contains('type').click()
//         cy.contains('tt').eq('tt')
//     })
// })

describe('eurostar home page - search', function(){
    it('enters search criteria', function(){
        cy.visit('https://www.eurostar.com')
        cy.contains('City or station').click({force: true})
        
        //enter and select location departure
        cy.get('.dCMqnF').first().click({force:true}).type('London St Pancras')
        cy.get('.isOpen').get('.iZpamR').trigger('mouseover').click()

        //enter and select destination
        cy.get('.dCMqnF').last().click({force:true}).type('Paris')
        cy.get('.isOpen').get('.iZpamR').trigger('mouseover').click()

        //open calender picker
        cy.get('.jFVgrL').last().click().get('time')

        //select outward date in calendar
       cy.get('#__next > div:nth-child(3) > div > div.sc-157ll5c-0.gbPncS > div > div > div > section > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div.lzjzlh-1.lzjzlh-2.kJGTZM > div > div.o61jve-4.eoPVEt > div:nth-child(8) > time').click()

       //select return date in calendar
       cy.get('#__next > div:nth-child(3) > div > div.sc-157ll5c-0.gbPncS > div > div > div > section > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div.lzjzlh-1.lzjzlh-3.bEQlmJ > div > div.o61jve-4.eoPVEt > div:nth-child(8) > time').click()
       
       //click the Search button
       cy.get('.SearchButton').click()

    })})

    // describe('My First Test', function() {
    //     it('Visits the Kitchen Sink', function() {
    //       cy.visit('https://example.cypress.io')
    //       cy.contains('type').click()
    //       cy.url().should('include', '/commands/actions')
    //       cy.get('.action-email').type('hh@ee.com')
    //     })
    //   })




