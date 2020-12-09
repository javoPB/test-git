package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.FirmaAutorizada;

public interface FirmaAutorizadaServices {
	
	List<FirmaAutorizada> consultarCatalogoFirmaAutorizada();

	FirmaAutorizada buscaPorId(Long idFirmaAutorizada);	

}
