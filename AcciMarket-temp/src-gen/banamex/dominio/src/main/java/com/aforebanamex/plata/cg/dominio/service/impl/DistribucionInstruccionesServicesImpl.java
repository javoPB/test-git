package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.DistribucionInstruccionesJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.DistribucionInstruccionesServices;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;

@Service
public class DistribucionInstruccionesServicesImpl extends BaseBusinessService implements DistribucionInstruccionesServices{

	@Autowired
	private DistribucionInstruccionesJDBCRepositories distribucionInstruccionesJDBCRepositories;
	
	@Override
	public List<DistribucionInstrucciones> consultarCatalogoDistribucionInstrucciones() {
		logger.debug("servicio catalogo DistribucionInstrucciones");
		return distribucionInstruccionesJDBCRepositories.consultarCatalogoDistribucionInstrucciones();
	}

	@Override
	public DistribucionInstrucciones buscaPorId(Long idDistribucionInstrucciones) {
		logger.debug("servicio catalogo DistribucionInstrucciones por Id");
		return distribucionInstruccionesJDBCRepositories.buscaPorId(idDistribucionInstrucciones);
	}
}
