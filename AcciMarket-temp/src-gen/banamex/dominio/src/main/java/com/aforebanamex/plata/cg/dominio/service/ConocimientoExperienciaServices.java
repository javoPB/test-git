package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

public interface ConocimientoExperienciaServices {
	
	List<ConocimientoExperiencia> consultarCatalogoConocimientoExperiencia();

	ConocimientoExperiencia buscaPorId(Long cveConocimientoExperiencia);	

}
