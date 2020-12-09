package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;

public interface DistribucionInstruccionesServices {
	
	List<DistribucionInstrucciones> consultarCatalogoDistribucionInstrucciones();

	DistribucionInstrucciones buscaPorId(Long idDistribucionInstrucciones);	

}
