package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Discrecional;

public interface DiscrecionalServices {
	
	List<Discrecional> consultarCatalogoDiscrecional();

	Discrecional buscaPorId(Long cveDiscrecional);	

}
