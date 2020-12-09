package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;

public interface NegativaPerfilamientoServices {
	
	List<NegativaPerfilamiento> consultarCatalogoNegativaPerfilamiento();

	NegativaPerfilamiento buscaPorId(Long idNegativaPerfilamiento);	

}
