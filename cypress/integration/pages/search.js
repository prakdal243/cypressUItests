

export default class search{
    constructor() {
    this.enterLocationinDeparture = cy.get('.dCMqnF').first().click({force:true}).type('London St Pancras');
    this.clickEnterLocationField = cy.get('.isOpen').get('.iZpamR').trigger('mouseover').click()
   
    this.enterToDestination = cy.get('.dCMqnF').last().click({force:true}).type('Paris');
    this.clickToDestinationField = cy.get('.isOpen').get('.iZpamR').trigger('mouseover').click()
    

    }
}