package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.EmisorJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.EmisorServices;
import com.aforebanamex.plata.comunes.model.Emisor;

@Service
public class EmisorServicesImpl extends BaseBusinessService implements EmisorServices{

	@Autowired
	private EmisorJDBCRepositories emisorJDBCRepositories;
	
	@Override
	public List<Emisor> consultarCatalogoEmisor() {
		logger.debug("servicio catalogo Emisor");
		return emisorJDBCRepositories.consultarCatalogoEmisor();
	}

	@Override
	public Emisor buscaPorId(Long idEmisor) {
		logger.debug("servicio catalogo Emisor por Id");
		return emisorJDBCRepositories.buscaPorId(idEmisor);
	}
}
