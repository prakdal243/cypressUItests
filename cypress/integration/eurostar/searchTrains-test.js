/**
 * Created by daljeetsidhu on 30/11/2019.
 */
import search from '../pages/search'



describe('eurostar home page - search', function(){
    it('enters search criteria', function(){
      
        cy.visit('https://www.eurostar.com')
        cy.contains('City or station').click({force: true})
        
        //enter and select location departure
        const sea = new search();
        sea.enterLocationinDeparture;
        sea.clickEnterLocationField;
   
        //enter and select destination
        sea.enterToDestination;
        sea.clickToDestinationField;

        //open calender picker
        cy.get('.jFVgrL').last().click().get('time')

        //select outward date in calendar
        cy.get('#__next > div:nth-child(3) > div > div.sc-157ll5c-0.gbPncS > div > div > div > section > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div.lzjzlh-1.lzjzlh-2.kJGTZM > div > div.o61jve-4.eoPVEt > div:nth-child(16)').click()
       //cy.wait(1000)
       //select return date in calendar
       cy.get('#__next > div:nth-child(3) > div > div.sc-157ll5c-0.gbPncS > div > div > div > section > div > div:nth-child(3) > div > div > div:nth-child(3) > div > div > div.lzjzlh-1.lzjzlh-3.bEQlmJ > div > div.o61jve-4.eoPVEt > div:nth-child(10) > time').click()
       //click the Search button
       cy.get('.SearchButton').click()

    })})




