package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.OpcDistrInstruccionesJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.OpcDistrInstruccionesServices;
import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;

@Service
public class OpcDistrInstruccionesServicesImpl extends BaseBusinessService implements OpcDistrInstruccionesServices{

	@Autowired
	private OpcDistrInstruccionesJDBCRepositories opcDistrInstruccionesJDBCRepositories;
	
	@Override
	public List<OpcDistrInstrucciones> consultarCatalogoOpcDistrInstrucciones() {
		logger.debug("servicio catalogo OpcDistrInstrucciones");
		return opcDistrInstruccionesJDBCRepositories.consultarCatalogoOpcDistrInstrucciones();
	}

	@Override
	public OpcDistrInstrucciones buscaPorId(Long cveOpcDistrInstrucciones) {
		logger.debug("servicio catalogo OpcDistrInstrucciones por Cve");
		return opcDistrInstruccionesJDBCRepositories.buscaPorId(cveOpcDistrInstrucciones);
	}
}
