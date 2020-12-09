package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.LimitanteJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.LimitanteServices;
import com.aforebanamex.plata.comunes.model.Limitante;

@Service
public class LimitanteServicesImpl extends BaseBusinessService implements LimitanteServices{

	@Autowired
	private LimitanteJDBCRepositories limitanteJDBCRepositories;
	
	@Override
	public List<Limitante> consultarCatalogoLimitante() {
		logger.debug("servicio catalogo Limitante");
		return limitanteJDBCRepositories.consultarCatalogoLimitante();
	}

	@Override
	public Limitante buscaPorId(Long idLimitante) {
		logger.debug("servicio catalogo Limitante por Id");
		return limitanteJDBCRepositories.buscaPorId(idLimitante);
	}
}
