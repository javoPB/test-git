package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Discrecional;

public interface DiscrecionalJDBCRepositories {

	List<Discrecional> consultarCatalogoDiscrecional();

	Discrecional buscaPorId(Long cveDiscrecional);
	
}

