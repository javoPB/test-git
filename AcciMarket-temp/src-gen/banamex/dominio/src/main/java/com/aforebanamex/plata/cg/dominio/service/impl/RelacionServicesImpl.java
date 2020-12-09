package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.RelacionJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.RelacionServices;
import com.aforebanamex.plata.comunes.model.Relacion;

@Service
public class RelacionServicesImpl extends BaseBusinessService implements RelacionServices{

	@Autowired
	private RelacionJDBCRepositories relacionJDBCRepositories;
	
	@Override
	public List<Relacion> consultarCatalogoRelacion() {
		logger.debug("servicio catalogo Relacion");
		return relacionJDBCRepositories.consultarCatalogoRelacion();
	}

	@Override
	public Relacion buscaPorId(Long cveRelacion) {
		logger.debug("servicio catalogo Relacion por Cve");
		return relacionJDBCRepositories.buscaPorId(cveRelacion);
	}
}
