package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Contrato;

public interface ContratoJDBCRepositories {

	List<Contrato> consultarCatalogoContrato();

	Contrato buscaPorId(Long idContrato);
	
}

