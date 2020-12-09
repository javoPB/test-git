package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.SofisticadoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.SofisticadoServices;
import com.aforebanamex.plata.comunes.model.Sofisticado;

@Service
public class SofisticadoServicesImpl extends BaseBusinessService implements SofisticadoServices{

	@Autowired
	private SofisticadoJDBCRepositories sofisticadoJDBCRepositories;
	
	@Override
	public List<Sofisticado> consultarCatalogoSofisticado() {
		logger.debug("servicio catalogo Sofisticado");
		return sofisticadoJDBCRepositories.consultarCatalogoSofisticado();
	}

	@Override
	public Sofisticado buscaPorId(Long cveSofisticado) {
		logger.debug("servicio catalogo Sofisticado por Cve");
		return sofisticadoJDBCRepositories.buscaPorId(cveSofisticado);
	}
}
