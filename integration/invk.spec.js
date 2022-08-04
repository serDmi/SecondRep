import { AutoSearchTextAndBtn } from "../helpers/spacetest";
describe('access ui test', () => {
    const secondFotoSchool = new AutoSearchTextAndBtn()
    it('Test Second', () => {
        cy.visit("")
        secondFotoSchool.searchText.should('contain', 'PHOTO SCHOOL F 5,6')
        
    })
})