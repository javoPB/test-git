package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.MexicoExtrajero;

public interface MexicoExtrajeroServices {
	
	List<MexicoExtrajero> consultarCatalogoMexicoExtrajero();

	MexicoExtrajero buscaPorId(Long cveMexicoExtrajero);	

}
