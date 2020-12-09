package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.BeneficiarioConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarBeneficiarioInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.BeneficiarioDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.BeneficiarioJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerBeneficiarioFSRepository;
import com.aforebanamex.plata.cg.dominio.service.BeneficiarioService;
//import com.aforebanamex.plata.comunes.enums.EstadosBeneficiario;
//import com.aforebanamex.plata.comunes.model.EstadoBeneficiario;
import com.aforebanamex.plata.comunes.model.Beneficiario;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class BeneficiarioServiceImpl extends BaseBusinessService implements BeneficiarioService {

	@Autowired
	private BeneficiarioJDBCRepository beneficiarioJDBCRepository;

	//@Autowired
	//private VerBeneficiarioFSRepository verBeneficiarioFSRepository;






}	

