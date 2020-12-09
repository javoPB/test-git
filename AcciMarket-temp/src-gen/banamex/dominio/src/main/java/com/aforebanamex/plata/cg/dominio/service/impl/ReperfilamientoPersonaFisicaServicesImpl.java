package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.ReperfilamientoPersonaFisicaJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.ReperfilamientoPersonaFisicaServices;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;

@Service
public class ReperfilamientoPersonaFisicaServicesImpl extends BaseBusinessService implements ReperfilamientoPersonaFisicaServices{

	@Autowired
	private ReperfilamientoPersonaFisicaJDBCRepositories reperfilamientoPersonaFisicaJDBCRepositories;
	
	@Override
	public List<ReperfilamientoPersonaFisica> consultarCatalogoReperfilamientoPersonaFisica() {
		logger.debug("servicio catalogo ReperfilamientoPersonaFisica");
		return reperfilamientoPersonaFisicaJDBCRepositories.consultarCatalogoReperfilamientoPersonaFisica();
	}

	@Override
	public ReperfilamientoPersonaFisica buscaPorId(Long idReperfilamientoPersonaFisica) {
		logger.debug("servicio catalogo ReperfilamientoPersonaFisica por Id");
		return reperfilamientoPersonaFisicaJDBCRepositories.buscaPorId(idReperfilamientoPersonaFisica);
	}
}
