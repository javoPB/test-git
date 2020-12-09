package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Relacion;

public interface RelacionServices {
	
	List<Relacion> consultarCatalogoRelacion();

	Relacion buscaPorId(Long cveRelacion);	

}
