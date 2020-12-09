package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

public interface SituacionFinancieraActualJDBCRepositories {

	List<SituacionFinancieraActual> consultarCatalogoSituacionFinancieraActual();

	SituacionFinancieraActual buscaPorId(Long cveSituacionFinancieraActual);
	
}

