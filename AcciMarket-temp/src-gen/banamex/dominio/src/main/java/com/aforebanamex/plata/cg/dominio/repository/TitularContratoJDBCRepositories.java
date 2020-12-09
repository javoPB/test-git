package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.TitularContrato;

public interface TitularContratoJDBCRepositories {

	List<TitularContrato> consultarCatalogoTitularContrato();

	TitularContrato buscaPorId(Long idTitularContrato);
	
}

