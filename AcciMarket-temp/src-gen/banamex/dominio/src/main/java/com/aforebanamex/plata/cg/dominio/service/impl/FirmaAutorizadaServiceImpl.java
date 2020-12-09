package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.FirmaAutorizadaConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarFirmaAutorizadaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.FirmaAutorizadaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.FirmaAutorizadaJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerFirmaAutorizadaFSRepository;
import com.aforebanamex.plata.cg.dominio.service.FirmaAutorizadaService;
//import com.aforebanamex.plata.comunes.enums.EstadosFirmaAutorizada;
//import com.aforebanamex.plata.comunes.model.EstadoFirmaAutorizada;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class FirmaAutorizadaServiceImpl extends BaseBusinessService implements FirmaAutorizadaService {

	@Autowired
	private FirmaAutorizadaJDBCRepository firmaAutorizadaJDBCRepository;

	//@Autowired
	//private VerFirmaAutorizadaFSRepository verFirmaAutorizadaFSRepository;



	@Override
	public void eliminar(Long idFirmaAutorizada) throws EliminarFirmaAutorizadaInactivoException {
		firmaAutorizadaJDBCRepository.eliminar(idFirmaAutorizada);
	}



}	

