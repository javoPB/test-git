package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.InstruccionEfectivoConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarInstruccionEfectivoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.InstruccionEfectivoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.InstruccionEfectivoJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerInstruccionEfectivoFSRepository;
import com.aforebanamex.plata.cg.dominio.service.InstruccionEfectivoService;
//import com.aforebanamex.plata.comunes.enums.EstadosInstruccionEfectivo;
//import com.aforebanamex.plata.comunes.model.EstadoInstruccionEfectivo;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class InstruccionEfectivoServiceImpl extends BaseBusinessService implements InstruccionEfectivoService {

	@Autowired
	private InstruccionEfectivoJDBCRepository instruccionEfectivoJDBCRepository;

	//@Autowired
	//private VerInstruccionEfectivoFSRepository verInstruccionEfectivoFSRepository;






}	

