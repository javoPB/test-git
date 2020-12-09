describe('Screenshot Tester', function() {
	it('Take screenshots from URLS', function() {
		//This turn off uncaught errors 
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
		
		var URLS = [
{page: 'http://localhost:1337/#!/contrato-admin/', title: 'Contrato-Admin'},
{page: 'http://localhost:1337/#!/contrato-add/', title: 'Contrato-Add'},
{page: 'http://localhost:1337/#!/contrato-edit/', title: 'Contrato-Edit'},
{page: 'http://localhost:1337/#!/contrato-delete/', title: 'Contrato-Delete'},
{page: 'http://localhost:1337/#!/titularcontrato-admin/', title: 'TitularContrato-Admin'},
{page: 'http://localhost:1337/#!/titularcontrato-add/', title: 'TitularContrato-Add'},
{page: 'http://localhost:1337/#!/titularcontrato-edit/', title: 'TitularContrato-Edit'},
{page: 'http://localhost:1337/#!/titularcontrato-delete/', title: 'TitularContrato-Delete'},
{page: 'http://localhost:1337/#!/beneficiario-admin/', title: 'Beneficiario-Admin'},
{page: 'http://localhost:1337/#!/beneficiario-add/', title: 'Beneficiario-Add'},
{page: 'http://localhost:1337/#!/beneficiario-edit/', title: 'Beneficiario-Edit'},
{page: 'http://localhost:1337/#!/beneficiario-delete/', title: 'Beneficiario-Delete'},
{page: 'http://localhost:1337/#!/limitante-admin/', title: 'Limitante-Admin'},
{page: 'http://localhost:1337/#!/limitante-add/', title: 'Limitante-Add'},
{page: 'http://localhost:1337/#!/limitante-edit/', title: 'Limitante-Edit'},
{page: 'http://localhost:1337/#!/limitante-delete/', title: 'Limitante-Delete'},
{page: 'http://localhost:1337/#!/emisor-admin/', title: 'Emisor-Admin'},
{page: 'http://localhost:1337/#!/emisor-add/', title: 'Emisor-Add'},
{page: 'http://localhost:1337/#!/emisor-edit/', title: 'Emisor-Edit'},
{page: 'http://localhost:1337/#!/emisor-delete/', title: 'Emisor-Delete'},
{page: 'http://localhost:1337/#!/firmaautorizada-admin/', title: 'FirmaAutorizada-Admin'},
{page: 'http://localhost:1337/#!/firmaautorizada-add/', title: 'FirmaAutorizada-Add'},
{page: 'http://localhost:1337/#!/firmaautorizada-edit/', title: 'FirmaAutorizada-Edit'},
{page: 'http://localhost:1337/#!/firmaautorizada-delete/', title: 'FirmaAutorizada-Delete'},
{page: 'http://localhost:1337/#!/instruccionefectivo-admin/', title: 'InstruccionEfectivo-Admin'},
{page: 'http://localhost:1337/#!/instruccionefectivo-add/', title: 'InstruccionEfectivo-Add'},
{page: 'http://localhost:1337/#!/instruccionefectivo-edit/', title: 'InstruccionEfectivo-Edit'},
{page: 'http://localhost:1337/#!/instruccionefectivo-delete/', title: 'InstruccionEfectivo-Delete'},
{page: 'http://localhost:1337/#!/distribucioninstrucciones-admin/', title: 'DistribucionInstrucciones-Admin'},
{page: 'http://localhost:1337/#!/distribucioninstrucciones-add/', title: 'DistribucionInstrucciones-Add'},
{page: 'http://localhost:1337/#!/distribucioninstrucciones-edit/', title: 'DistribucionInstrucciones-Edit'},
{page: 'http://localhost:1337/#!/distribucioninstrucciones-delete/', title: 'DistribucionInstrucciones-Delete'},
{page: 'http://localhost:1337/#!/reperfilamientopersonafisica-admin/', title: 'ReperfilamientoPersonaFisica-Admin'},
{page: 'http://localhost:1337/#!/reperfilamientopersonafisica-add/', title: 'ReperfilamientoPersonaFisica-Add'},
{page: 'http://localhost:1337/#!/reperfilamientopersonafisica-edit/', title: 'ReperfilamientoPersonaFisica-Edit'},
{page: 'http://localhost:1337/#!/reperfilamientopersonafisica-delete/', title: 'ReperfilamientoPersonaFisica-Delete'},
{page: 'http://localhost:1337/#!/negativaperfilamiento-admin/', title: 'NegativaPerfilamiento-Admin'},
{page: 'http://localhost:1337/#!/negativaperfilamiento-add/', title: 'NegativaPerfilamiento-Add'},
{page: 'http://localhost:1337/#!/negativaperfilamiento-edit/', title: 'NegativaPerfilamiento-Edit'},
{page: 'http://localhost:1337/#!/negativaperfilamiento-delete/', title: 'NegativaPerfilamiento-Delete'},
		];
		URLS.forEach(function(element) {
			cy.visit(element.page)
			cy.reload()
			cy.screenshot(element.title)
		});
	})
})
