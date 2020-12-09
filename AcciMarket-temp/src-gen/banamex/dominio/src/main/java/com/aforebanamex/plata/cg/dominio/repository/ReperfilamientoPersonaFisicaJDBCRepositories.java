package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;

public interface ReperfilamientoPersonaFisicaJDBCRepositories {

	List<ReperfilamientoPersonaFisica> consultarCatalogoReperfilamientoPersonaFisica();

	ReperfilamientoPersonaFisica buscaPorId(Long idReperfilamientoPersonaFisica);
	
}

