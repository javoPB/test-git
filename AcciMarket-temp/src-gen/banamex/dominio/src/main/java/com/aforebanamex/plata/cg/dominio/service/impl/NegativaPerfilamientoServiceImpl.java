package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.NegativaPerfilamientoConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarNegativaPerfilamientoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.NegativaPerfilamientoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.NegativaPerfilamientoJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerNegativaPerfilamientoFSRepository;
import com.aforebanamex.plata.cg.dominio.service.NegativaPerfilamientoService;
//import com.aforebanamex.plata.comunes.enums.EstadosNegativaPerfilamiento;
//import com.aforebanamex.plata.comunes.model.EstadoNegativaPerfilamiento;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class NegativaPerfilamientoServiceImpl extends BaseBusinessService implements NegativaPerfilamientoService {

	@Autowired
	private NegativaPerfilamientoJDBCRepository negativaPerfilamientoJDBCRepository;

	//@Autowired
	//private VerNegativaPerfilamientoFSRepository verNegativaPerfilamientoFSRepository;






}	

