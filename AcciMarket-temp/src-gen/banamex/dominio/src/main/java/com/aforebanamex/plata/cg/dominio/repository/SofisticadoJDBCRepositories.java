package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Sofisticado;

public interface SofisticadoJDBCRepositories {

	List<Sofisticado> consultarCatalogoSofisticado();

	Sofisticado buscaPorId(Long cveSofisticado);
	
}

