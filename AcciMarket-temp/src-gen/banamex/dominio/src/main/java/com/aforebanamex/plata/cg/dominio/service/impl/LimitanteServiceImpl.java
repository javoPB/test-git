package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.LimitanteConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarLimitanteInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.LimitanteDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.LimitanteJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerLimitanteFSRepository;
import com.aforebanamex.plata.cg.dominio.service.LimitanteService;
//import com.aforebanamex.plata.comunes.enums.EstadosLimitante;
//import com.aforebanamex.plata.comunes.model.EstadoLimitante;
import com.aforebanamex.plata.comunes.model.Limitante;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class LimitanteServiceImpl extends BaseBusinessService implements LimitanteService {

	@Autowired
	private LimitanteJDBCRepository limitanteJDBCRepository;

	//@Autowired
	//private VerLimitanteFSRepository verLimitanteFSRepository;






}	

