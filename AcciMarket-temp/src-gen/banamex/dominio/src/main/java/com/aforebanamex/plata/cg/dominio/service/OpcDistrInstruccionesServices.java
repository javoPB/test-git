package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;

public interface OpcDistrInstruccionesServices {
	
	List<OpcDistrInstrucciones> consultarCatalogoOpcDistrInstrucciones();

	OpcDistrInstrucciones buscaPorId(Long cveOpcDistrInstrucciones);	

}
