package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Calificado;

public interface CalificadoServices {
	
	List<Calificado> consultarCatalogoCalificado();

	Calificado buscaPorId(Long cveCalificado);	

}
