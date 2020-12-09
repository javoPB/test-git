package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.ContratoConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.ContratoJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerContratoFSRepository;
import com.aforebanamex.plata.cg.dominio.service.ContratoService;
//import com.aforebanamex.plata.comunes.enums.EstadosContrato;
//import com.aforebanamex.plata.comunes.model.EstadoContrato;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class ContratoServiceImpl extends BaseBusinessService implements ContratoService {

	@Autowired
	private ContratoJDBCRepository contratoJDBCRepository;

	//@Autowired
	//private VerContratoFSRepository verContratoFSRepository;

	/*
	@Override
	public ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre) {
		return contratoJDBCRepository.consultarSubprocesosAutocomplete(nombre);
	}
	*/
	
	@Override
	public ResponsePlata<Contrato> consultarContratosParametros(RequestPlata<Contrato> data) {
	
		ResponsePlata<Contrato> response = null;
		// ConsultaSalidaInformacion informe = data.getPayload();
		try {
			// Long subproceso = informe.getIdSubproceso() == null ? 0L :
			// informe.getIdSubproceso();
			// String salida = informe.getNombreSalida() == null ? "" :
			// informe.getNombreSalida();
	
			// informe.setNombreSalida(salida);
			// informe.setIdSubproceso(subproceso);
	
			// if (subproceso != 0 && !salida.isEmpty()) {
			response = contratoJDBCRepository.consultarContratosTodosParametros(data);
			//
			// } else if (subproceso == 0 && !salida.isEmpty()) {
			// response = contratoJDBCRepository.consultarContratosParametroSalida(data);
			//
			// } else if (subproceso != 0 && salida.isEmpty()) {
			// response =
			// contratoJDBCRepository.consultarContratosParametroSubproceso(data);
			//
			// }
	
		} catch (Exception e) {
			logger.error("Error al consultar la salida de contrato ");
		}
	
		return response;
	}

	@Override
	public void actualizar(Contrato data) throws ContratoDuplicadoException {
			contratoJDBCRepository.actualizar(data);
	}

	@Override
	public void eliminar(Long idContrato) throws EliminarContratoInactivoException {
		contratoJDBCRepository.eliminar(idContrato);
	}

	@Override
	public void agregar(Contrato data) throws ContratoDuplicadoException, PlantillaNoExisteException {
	
		if (!this.validarConfiguracionContrato(data)) {
	
			// if
			// (verContratoFSRepository.verificarExistenciaPlantilla(data.getNomPlantilla()))
			// {
			//EstadoInforme estadoInforme = new EstadoInforme();
			//estadoInforme.setCveEstado(InformeConstantesHelper.ESTADO_INFORME_CREADO);
			//estadoInforme.setDescripcion(InformeConstantesHelper.ESTADO_INFORME_CREADO_DESC);
			//data.setEstadoInforme(estadoInforme);
			contratoJDBCRepository.registrar(data);
			// }
		}
	}

	@Override
	public boolean validarConfiguracionContrato(Contrato contrato) throws ContratoDuplicadoException {
		return contratoJDBCRepository.consultaContratoExistente(contrato);
	}
	
	/*
	@Override
	public ResponsePlata<Contrato> consultarContratosActivos(RequestPlata<Contrato> data) {
		return contratoJDBCRepository.consultarContratosActivos(data);
	}
	*/

}	

