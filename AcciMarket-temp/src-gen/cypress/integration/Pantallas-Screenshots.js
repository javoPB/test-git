describe('Screenshot Tester', function() {
	it('Take screenshots from URLS', function() {
		//This turn off uncaught errors 
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
		
		var URLS = [
		];
		URLS.forEach(function(element) {
			cy.visit(element.page)
			cy.reload()
			cy.screenshot(element.title)
		});
	})
})
