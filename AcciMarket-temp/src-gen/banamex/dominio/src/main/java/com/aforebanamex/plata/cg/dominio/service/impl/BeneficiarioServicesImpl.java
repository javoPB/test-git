package com.aforebanamex.plata.cg.dominio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.repository.BeneficiarioJDBCRepositories;
import com.aforebanamex.plata.cg.dominio.service.BeneficiarioServices;
import com.aforebanamex.plata.comunes.model.Beneficiario;

@Service
public class BeneficiarioServicesImpl extends BaseBusinessService implements BeneficiarioServices{

	@Autowired
	private BeneficiarioJDBCRepositories beneficiarioJDBCRepositories;
	
	@Override
	public List<Beneficiario> consultarCatalogoBeneficiario() {
		logger.debug("servicio catalogo Beneficiario");
		return beneficiarioJDBCRepositories.consultarCatalogoBeneficiario();
	}

	@Override
	public Beneficiario buscaPorId(Long idBeneficiario) {
		logger.debug("servicio catalogo Beneficiario por Id");
		return beneficiarioJDBCRepositories.buscaPorId(idBeneficiario);
	}
}
