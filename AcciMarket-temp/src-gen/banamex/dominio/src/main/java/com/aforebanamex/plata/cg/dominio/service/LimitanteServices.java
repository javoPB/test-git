package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Limitante;

public interface LimitanteServices {
	
	List<Limitante> consultarCatalogoLimitante();

	Limitante buscaPorId(Long idLimitante);	

}
