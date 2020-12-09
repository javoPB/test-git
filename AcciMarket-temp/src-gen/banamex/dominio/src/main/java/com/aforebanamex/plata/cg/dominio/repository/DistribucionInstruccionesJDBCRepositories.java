package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;

public interface DistribucionInstruccionesJDBCRepositories {

	List<DistribucionInstrucciones> consultarCatalogoDistribucionInstrucciones();

	DistribucionInstrucciones buscaPorId(Long idDistribucionInstrucciones);
	
}

