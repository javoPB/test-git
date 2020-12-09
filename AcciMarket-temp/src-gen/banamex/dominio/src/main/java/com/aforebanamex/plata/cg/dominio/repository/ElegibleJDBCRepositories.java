package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Elegible;

public interface ElegibleJDBCRepositories {

	List<Elegible> consultarCatalogoElegible();

	Elegible buscaPorId(Long cveElegible);
	
}

