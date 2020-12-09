package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.SituacionFinancieraActualJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.SituacionFinancieraActualServices;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

@Service
public class SituacionFinancieraActualServicesImpl extends BaseBusinessService implements SituacionFinancieraActualServices{

	@Autowired
	private SituacionFinancieraActualJDBCRepositories situacionFinancieraActualJDBCRepositories;
	
	@Override
	public List<SituacionFinancieraActual> consultarCatalogoSituacionFinancieraActual() {
		logger.debug("servicio catalogo SituacionFinancieraActual");
		return situacionFinancieraActualJDBCRepositories.consultarCatalogoSituacionFinancieraActual();
	}

	@Override
	public SituacionFinancieraActual buscaPorId(Long cveSituacionFinancieraActual) {
		logger.debug("servicio catalogo SituacionFinancieraActual por Cve");
		return situacionFinancieraActualJDBCRepositories.buscaPorId(cveSituacionFinancieraActual);
	}
}
