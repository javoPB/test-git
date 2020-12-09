package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Dummy;

public interface DummyJDBCRepositories {

	List<Dummy> consultarCatalogoDummy();

	Dummy buscaPorId(Long cveDummy);
	
}

