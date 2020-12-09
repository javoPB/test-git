package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.FirmaAutorizadaJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.FirmaAutorizadaServices;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;

@Service
public class FirmaAutorizadaServicesImpl extends BaseBusinessService implements FirmaAutorizadaServices{

	@Autowired
	private FirmaAutorizadaJDBCRepositories firmaAutorizadaJDBCRepositories;
	
	@Override
	public List<FirmaAutorizada> consultarCatalogoFirmaAutorizada() {
		logger.debug("servicio catalogo FirmaAutorizada");
		return firmaAutorizadaJDBCRepositories.consultarCatalogoFirmaAutorizada();
	}

	@Override
	public FirmaAutorizada buscaPorId(Long idFirmaAutorizada) {
		logger.debug("servicio catalogo FirmaAutorizada por Id");
		return firmaAutorizadaJDBCRepositories.buscaPorId(idFirmaAutorizada);
	}
}
