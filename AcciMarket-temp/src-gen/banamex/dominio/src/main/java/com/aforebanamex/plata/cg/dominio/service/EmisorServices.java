package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Emisor;

public interface EmisorServices {
	
	List<Emisor> consultarCatalogoEmisor();

	Emisor buscaPorId(Long idEmisor);	

}
