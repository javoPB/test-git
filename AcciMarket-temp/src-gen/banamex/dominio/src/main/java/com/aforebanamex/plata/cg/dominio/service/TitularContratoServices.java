package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.TitularContrato;

public interface TitularContratoServices {
	
	List<TitularContrato> consultarCatalogoTitularContrato();

	TitularContrato buscaPorId(Long idTitularContrato);	

}
