package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.ConocimientoExperienciaJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

@Service
public class ConocimientoExperienciaServicesImpl extends BaseBusinessService implements ConocimientoExperienciaServices{

	@Autowired
	private ConocimientoExperienciaJDBCRepositories conocimientoExperienciaJDBCRepositories;
	
	@Override
	public List<ConocimientoExperiencia> consultarCatalogoConocimientoExperiencia() {
		logger.debug("servicio catalogo ConocimientoExperiencia");
		return conocimientoExperienciaJDBCRepositories.consultarCatalogoConocimientoExperiencia();
	}

	@Override
	public ConocimientoExperiencia buscaPorId(Long cveConocimientoExperiencia) {
		logger.debug("servicio catalogo ConocimientoExperiencia por Cve");
		return conocimientoExperienciaJDBCRepositories.buscaPorId(cveConocimientoExperiencia);
	}
}
