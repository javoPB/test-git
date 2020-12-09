package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.TitularContratoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.TitularContratoServices;
import com.aforebanamex.plata.comunes.model.TitularContrato;

@Service
public class TitularContratoServicesImpl extends BaseBusinessService implements TitularContratoServices{

	@Autowired
	private TitularContratoJDBCRepositories titularContratoJDBCRepositories;
	
	@Override
	public List<TitularContrato> consultarCatalogoTitularContrato() {
		logger.debug("servicio catalogo TitularContrato");
		return titularContratoJDBCRepositories.consultarCatalogoTitularContrato();
	}

	@Override
	public TitularContrato buscaPorId(Long idTitularContrato) {
		logger.debug("servicio catalogo TitularContrato por Id");
		return titularContratoJDBCRepositories.buscaPorId(idTitularContrato);
	}
}
