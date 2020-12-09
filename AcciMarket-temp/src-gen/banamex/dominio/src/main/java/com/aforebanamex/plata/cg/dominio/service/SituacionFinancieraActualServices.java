package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

public interface SituacionFinancieraActualServices {
	
	List<SituacionFinancieraActual> consultarCatalogoSituacionFinancieraActual();

	SituacionFinancieraActual buscaPorId(Long cveSituacionFinancieraActual);	

}
