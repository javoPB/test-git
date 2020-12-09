package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.ReperfilamientoPersonaFisicaConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarReperfilamientoPersonaFisicaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ReperfilamientoPersonaFisicaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.ReperfilamientoPersonaFisicaJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerReperfilamientoPersonaFisicaFSRepository;
import com.aforebanamex.plata.cg.dominio.service.ReperfilamientoPersonaFisicaService;
//import com.aforebanamex.plata.comunes.enums.EstadosReperfilamientoPersonaFisica;
//import com.aforebanamex.plata.comunes.model.EstadoReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class ReperfilamientoPersonaFisicaServiceImpl extends BaseBusinessService implements ReperfilamientoPersonaFisicaService {

	@Autowired
	private ReperfilamientoPersonaFisicaJDBCRepository reperfilamientoPersonaFisicaJDBCRepository;

	//@Autowired
	//private VerReperfilamientoPersonaFisicaFSRepository verReperfilamientoPersonaFisicaFSRepository;


	@Override
	public void actualizar(ReperfilamientoPersonaFisica data) throws ReperfilamientoPersonaFisicaDuplicadoException {
			reperfilamientoPersonaFisicaJDBCRepository.actualizar(data);
	}

	@Override
	public void eliminar(Long idReperfilamientoPersonaFisica) throws EliminarReperfilamientoPersonaFisicaInactivoException {
		reperfilamientoPersonaFisicaJDBCRepository.eliminar(idReperfilamientoPersonaFisica);
	}

	@Override
	public void agregar(ReperfilamientoPersonaFisica data) throws ReperfilamientoPersonaFisicaDuplicadoException, PlantillaNoExisteException {
	
		if (!this.validarConfiguracionReperfilamientoPersonaFisica(data)) {
	
			// if
			// (verReperfilamientoPersonaFisicaFSRepository.verificarExistenciaPlantilla(data.getNomPlantilla()))
			// {
			//EstadoInforme estadoInforme = new EstadoInforme();
			//estadoInforme.setCveEstado(InformeConstantesHelper.ESTADO_INFORME_CREADO);
			//estadoInforme.setDescripcion(InformeConstantesHelper.ESTADO_INFORME_CREADO_DESC);
			//data.setEstadoInforme(estadoInforme);
			reperfilamientoPersonaFisicaJDBCRepository.registrar(data);
			// }
		}
	}


}	

