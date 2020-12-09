package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.DummyJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;

@Service
public class DummyServicesImpl extends BaseBusinessService implements DummyServices{

	@Autowired
	private DummyJDBCRepositories dummyJDBCRepositories;
	
	@Override
	public List<Dummy> consultarCatalogoDummy() {
		logger.debug("servicio catalogo Dummy");
		return dummyJDBCRepositories.consultarCatalogoDummy();
	}

	@Override
	public Dummy buscaPorId(Long cveDummy) {
		logger.debug("servicio catalogo Dummy por Cve");
		return dummyJDBCRepositories.buscaPorId(cveDummy);
	}
}
