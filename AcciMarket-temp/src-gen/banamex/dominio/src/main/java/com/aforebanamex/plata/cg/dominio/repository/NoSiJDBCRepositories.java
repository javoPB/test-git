package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.NoSi;

public interface NoSiJDBCRepositories {

	List<NoSi> consultarCatalogoNoSi();

	NoSi buscaPorId(Long cveNoSi);
	
}

