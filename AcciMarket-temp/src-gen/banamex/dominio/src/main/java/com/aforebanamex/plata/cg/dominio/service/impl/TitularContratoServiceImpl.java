package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.TitularContratoConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarTitularContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.TitularContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.TitularContratoJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerTitularContratoFSRepository;
import com.aforebanamex.plata.cg.dominio.service.TitularContratoService;
//import com.aforebanamex.plata.comunes.enums.EstadosTitularContrato;
//import com.aforebanamex.plata.comunes.model.EstadoTitularContrato;
import com.aforebanamex.plata.comunes.model.TitularContrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class TitularContratoServiceImpl extends BaseBusinessService implements TitularContratoService {

	@Autowired
	private TitularContratoJDBCRepository titularContratoJDBCRepository;

	//@Autowired
	//private VerTitularContratoFSRepository verTitularContratoFSRepository;


	@Override
	public void actualizar(TitularContrato data) throws TitularContratoDuplicadoException {
			titularContratoJDBCRepository.actualizar(data);
	}


	@Override
	public void agregar(TitularContrato data) throws TitularContratoDuplicadoException, PlantillaNoExisteException {
	
		if (!this.validarConfiguracionTitularContrato(data)) {
	
			// if
			// (verTitularContratoFSRepository.verificarExistenciaPlantilla(data.getNomPlantilla()))
			// {
			//EstadoInforme estadoInforme = new EstadoInforme();
			//estadoInforme.setCveEstado(InformeConstantesHelper.ESTADO_INFORME_CREADO);
			//estadoInforme.setDescripcion(InformeConstantesHelper.ESTADO_INFORME_CREADO_DESC);
			//data.setEstadoInforme(estadoInforme);
			titularContratoJDBCRepository.registrar(data);
			// }
		}
	}


}	

