package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Emisor;

public interface EmisorJDBCRepositories {

	List<Emisor> consultarCatalogoEmisor();

	Emisor buscaPorId(Long idEmisor);
	
}

