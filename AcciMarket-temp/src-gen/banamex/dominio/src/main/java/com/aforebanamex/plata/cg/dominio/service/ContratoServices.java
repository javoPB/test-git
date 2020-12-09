package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Contrato;

public interface ContratoServices {
	
	List<Contrato> consultarCatalogoContrato();

	Contrato buscaPorId(Long idContrato);	

}
