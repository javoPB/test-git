package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.Beneficiario;

public interface BeneficiarioJDBCRepositories {

	List<Beneficiario> consultarCatalogoBeneficiario();

	Beneficiario buscaPorId(Long idBeneficiario);
	
}

