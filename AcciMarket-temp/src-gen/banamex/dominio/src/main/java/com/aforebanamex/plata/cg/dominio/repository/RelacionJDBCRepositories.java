package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Relacion;

public interface RelacionJDBCRepositories {

	List<Relacion> consultarCatalogoRelacion();

	Relacion buscaPorId(Long cveRelacion);
	
}

