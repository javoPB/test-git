package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Dummy;

public interface DummyServices {
	
	List<Dummy> consultarCatalogoDummy();

	Dummy buscaPorId(Long cveDummy);	

}
