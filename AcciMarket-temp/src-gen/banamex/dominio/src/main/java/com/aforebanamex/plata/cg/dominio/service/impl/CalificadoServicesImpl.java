package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.CalificadoJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.CalificadoServices;
import com.aforebanamex.plata.comunes.model.Calificado;

@Service
public class CalificadoServicesImpl extends BaseBusinessService implements CalificadoServices{

	@Autowired
	private CalificadoJDBCRepositories calificadoJDBCRepositories;
	
	@Override
	public List<Calificado> consultarCatalogoCalificado() {
		logger.debug("servicio catalogo Calificado");
		return calificadoJDBCRepositories.consultarCatalogoCalificado();
	}

	@Override
	public Calificado buscaPorId(Long cveCalificado) {
		logger.debug("servicio catalogo Calificado por Cve");
		return calificadoJDBCRepositories.buscaPorId(cveCalificado);
	}
}
