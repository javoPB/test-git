package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.ElegibleJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.ElegibleServices;
import com.aforebanamex.plata.comunes.model.Elegible;

@Service
public class ElegibleServicesImpl extends BaseBusinessService implements ElegibleServices{

	@Autowired
	private ElegibleJDBCRepositories elegibleJDBCRepositories;
	
	@Override
	public List<Elegible> consultarCatalogoElegible() {
		logger.debug("servicio catalogo Elegible");
		return elegibleJDBCRepositories.consultarCatalogoElegible();
	}

	@Override
	public Elegible buscaPorId(Long cveElegible) {
		logger.debug("servicio catalogo Elegible por Cve");
		return elegibleJDBCRepositories.buscaPorId(cveElegible);
	}
}
