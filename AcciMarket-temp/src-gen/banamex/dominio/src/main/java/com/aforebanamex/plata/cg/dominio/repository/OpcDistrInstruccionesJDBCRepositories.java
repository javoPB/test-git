package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;

public interface OpcDistrInstruccionesJDBCRepositories {

	List<OpcDistrInstrucciones> consultarCatalogoOpcDistrInstrucciones();

	OpcDistrInstrucciones buscaPorId(Long cveOpcDistrInstrucciones);
	
}

