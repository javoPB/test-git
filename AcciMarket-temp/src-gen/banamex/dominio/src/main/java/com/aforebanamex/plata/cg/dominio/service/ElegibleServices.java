package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Elegible;

public interface ElegibleServices {
	
	List<Elegible> consultarCatalogoElegible();

	Elegible buscaPorId(Long cveElegible);	

}
