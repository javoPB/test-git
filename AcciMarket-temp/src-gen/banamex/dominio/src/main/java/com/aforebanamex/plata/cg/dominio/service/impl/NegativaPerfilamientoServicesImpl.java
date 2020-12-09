package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.NegativaPerfilamientoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.NegativaPerfilamientoServices;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;

@Service
public class NegativaPerfilamientoServicesImpl extends BaseBusinessService implements NegativaPerfilamientoServices{

	@Autowired
	private NegativaPerfilamientoJDBCRepositories negativaPerfilamientoJDBCRepositories;
	
	@Override
	public List<NegativaPerfilamiento> consultarCatalogoNegativaPerfilamiento() {
		logger.debug("servicio catalogo NegativaPerfilamiento");
		return negativaPerfilamientoJDBCRepositories.consultarCatalogoNegativaPerfilamiento();
	}

	@Override
	public NegativaPerfilamiento buscaPorId(Long idNegativaPerfilamiento) {
		logger.debug("servicio catalogo NegativaPerfilamiento por Id");
		return negativaPerfilamientoJDBCRepositories.buscaPorId(idNegativaPerfilamiento);
	}
}
