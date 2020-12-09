package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

public interface ConocimientoExperienciaJDBCRepositories {

	List<ConocimientoExperiencia> consultarCatalogoConocimientoExperiencia();

	ConocimientoExperiencia buscaPorId(Long cveConocimientoExperiencia);
	
}

