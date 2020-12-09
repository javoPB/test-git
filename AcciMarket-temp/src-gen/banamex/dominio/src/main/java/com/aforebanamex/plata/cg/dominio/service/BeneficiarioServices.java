package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Beneficiario;

public interface BeneficiarioServices {
	
	List<Beneficiario> consultarCatalogoBeneficiario();

	Beneficiario buscaPorId(Long idBeneficiario);	

}
