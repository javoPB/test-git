package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.DistribucionInstruccionesConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarDistribucionInstruccionesInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.DistribucionInstruccionesDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.DistribucionInstruccionesJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerDistribucionInstruccionesFSRepository;
import com.aforebanamex.plata.cg.dominio.service.DistribucionInstruccionesService;
//import com.aforebanamex.plata.comunes.enums.EstadosDistribucionInstrucciones;
//import com.aforebanamex.plata.comunes.model.EstadoDistribucionInstrucciones;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class DistribucionInstruccionesServiceImpl extends BaseBusinessService implements DistribucionInstruccionesService {

	@Autowired
	private DistribucionInstruccionesJDBCRepository distribucionInstruccionesJDBCRepository;

	//@Autowired
	//private VerDistribucionInstruccionesFSRepository verDistribucionInstruccionesFSRepository;






}	

