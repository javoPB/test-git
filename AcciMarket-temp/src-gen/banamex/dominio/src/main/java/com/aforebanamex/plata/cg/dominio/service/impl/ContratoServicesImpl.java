package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.ContratoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.ContratoServices;
import com.aforebanamex.plata.comunes.model.Contrato;

@Service
public class ContratoServicesImpl extends BaseBusinessService implements ContratoServices{

	@Autowired
	private ContratoJDBCRepositories contratoJDBCRepositories;
	
	@Override
	public List<Contrato> consultarCatalogoContrato() {
		logger.debug("servicio catalogo Contrato");
		return contratoJDBCRepositories.consultarCatalogoContrato();
	}

	@Override
	public Contrato buscaPorId(Long idContrato) {
		logger.debug("servicio catalogo Contrato por Id");
		return contratoJDBCRepositories.buscaPorId(idContrato);
	}
}
