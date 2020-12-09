package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Limitante;

public interface LimitanteJDBCRepositories {

	List<Limitante> consultarCatalogoLimitante();

	Limitante buscaPorId(Long idLimitante);
	
}

