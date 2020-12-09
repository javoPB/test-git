package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;

public interface InstruccionEfectivoJDBCRepositories {

	List<InstruccionEfectivo> consultarCatalogoInstruccionEfectivo();

	InstruccionEfectivo buscaPorId(Long idInstruccionEfectivo);
	
}

