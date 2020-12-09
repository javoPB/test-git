package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.NoSiJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.NoSiServices;
import com.aforebanamex.plata.comunes.model.NoSi;

@Service
public class NoSiServicesImpl extends BaseBusinessService implements NoSiServices{

	@Autowired
	private NoSiJDBCRepositories noSiJDBCRepositories;
	
	@Override
	public List<NoSi> consultarCatalogoNoSi() {
		logger.debug("servicio catalogo NoSi");
		return noSiJDBCRepositories.consultarCatalogoNoSi();
	}

	@Override
	public NoSi buscaPorId(Long cveNoSi) {
		logger.debug("servicio catalogo NoSi por Cve");
		return noSiJDBCRepositories.buscaPorId(cveNoSi);
	}
}
