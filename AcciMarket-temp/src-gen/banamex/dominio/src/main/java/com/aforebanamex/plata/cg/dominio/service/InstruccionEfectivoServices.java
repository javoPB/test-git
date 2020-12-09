package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;

public interface InstruccionEfectivoServices {
	
	List<InstruccionEfectivo> consultarCatalogoInstruccionEfectivo();

	InstruccionEfectivo buscaPorId(Long idInstruccionEfectivo);	

}
