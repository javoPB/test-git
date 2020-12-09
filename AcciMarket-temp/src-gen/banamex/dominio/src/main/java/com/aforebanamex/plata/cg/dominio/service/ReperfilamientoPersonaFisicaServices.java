package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;

public interface ReperfilamientoPersonaFisicaServices {
	
	List<ReperfilamientoPersonaFisica> consultarCatalogoReperfilamientoPersonaFisica();

	ReperfilamientoPersonaFisica buscaPorId(Long idReperfilamientoPersonaFisica);	

}
