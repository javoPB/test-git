package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.MexicoExtrajeroJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.MexicoExtrajeroServices;
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;

@Service
public class MexicoExtrajeroServicesImpl extends BaseBusinessService implements MexicoExtrajeroServices{

	@Autowired
	private MexicoExtrajeroJDBCRepositories mexicoExtrajeroJDBCRepositories;
	
	@Override
	public List<MexicoExtrajero> consultarCatalogoMexicoExtrajero() {
		logger.debug("servicio catalogo MexicoExtrajero");
		return mexicoExtrajeroJDBCRepositories.consultarCatalogoMexicoExtrajero();
	}

	@Override
	public MexicoExtrajero buscaPorId(Long cveMexicoExtrajero) {
		logger.debug("servicio catalogo MexicoExtrajero por Cve");
		return mexicoExtrajeroJDBCRepositories.buscaPorId(cveMexicoExtrajero);
	}
}
