package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;

public interface FirmaAutorizadaJDBCRepositories {

	List<FirmaAutorizada> consultarCatalogoFirmaAutorizada();

	FirmaAutorizada buscaPorId(Long idFirmaAutorizada);
	
}

