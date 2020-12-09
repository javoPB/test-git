package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.InstruccionEfectivoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.InstruccionEfectivoServices;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;

@Service
public class InstruccionEfectivoServicesImpl extends BaseBusinessService implements InstruccionEfectivoServices{

	@Autowired
	private InstruccionEfectivoJDBCRepositories instruccionEfectivoJDBCRepositories;
	
	@Override
	public List<InstruccionEfectivo> consultarCatalogoInstruccionEfectivo() {
		logger.debug("servicio catalogo InstruccionEfectivo");
		return instruccionEfectivoJDBCRepositories.consultarCatalogoInstruccionEfectivo();
	}

	@Override
	public InstruccionEfectivo buscaPorId(Long idInstruccionEfectivo) {
		logger.debug("servicio catalogo InstruccionEfectivo por Id");
		return instruccionEfectivoJDBCRepositories.buscaPorId(idInstruccionEfectivo);
	}
}
