package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.DiscrecionalJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.DiscrecionalServices;
import com.aforebanamex.plata.comunes.model.Discrecional;

@Service
public class DiscrecionalServicesImpl extends BaseBusinessService implements DiscrecionalServices{

	@Autowired
	private DiscrecionalJDBCRepositories discrecionalJDBCRepositories;
	
	@Override
	public List<Discrecional> consultarCatalogoDiscrecional() {
		logger.debug("servicio catalogo Discrecional");
		return discrecionalJDBCRepositories.consultarCatalogoDiscrecional();
	}

	@Override
	public Discrecional buscaPorId(Long cveDiscrecional) {
		logger.debug("servicio catalogo Discrecional por Cve");
		return discrecionalJDBCRepositories.buscaPorId(cveDiscrecional);
	}
}
