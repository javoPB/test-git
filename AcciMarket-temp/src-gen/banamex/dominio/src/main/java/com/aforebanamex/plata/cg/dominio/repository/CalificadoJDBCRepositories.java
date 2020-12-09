package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Calificado;

public interface CalificadoJDBCRepositories {

	List<Calificado> consultarCatalogoCalificado();

	Calificado buscaPorId(Long cveCalificado);
	
}

