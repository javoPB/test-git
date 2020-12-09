package com.aforebanamex.plata.cg.dominio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aforebanamex.plata.base.helper.EmisorConstantesHelper;
import com.aforebanamex.plata.base.service.BaseBusinessService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarEmisorInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.EmisorDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.repository.EmisorJDBCRepository;
//import com.aforebanamex.plata.cg.dominio.repository.VerEmisorFSRepository;
import com.aforebanamex.plata.cg.dominio.service.EmisorService;
//import com.aforebanamex.plata.comunes.enums.EstadosEmisor;
//import com.aforebanamex.plata.comunes.model.EstadoEmisor;
import com.aforebanamex.plata.comunes.model.Emisor;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;

@Service
public class EmisorServiceImpl extends BaseBusinessService implements EmisorService {

	@Autowired
	private EmisorJDBCRepository emisorJDBCRepository;

	//@Autowired
	//private VerEmisorFSRepository verEmisorFSRepository;

	/*
	@Override
	public ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre) {
		return emisorJDBCRepository.consultarSubprocesosAutocomplete(nombre);
	}
	*/
	
	@Override
	public ResponsePlata<Emisor> consultarEmisorsParametros(RequestPlata<Emisor> data) {
	
		ResponsePlata<Emisor> response = null;
		// ConsultaSalidaInformacion informe = data.getPayload();
		try {
			// Long subproceso = informe.getIdSubproceso() == null ? 0L :
			// informe.getIdSubproceso();
			// String salida = informe.getNombreSalida() == null ? "" :
			// informe.getNombreSalida();
	
			// informe.setNombreSalida(salida);
			// informe.setIdSubproceso(subproceso);
	
			// if (subproceso != 0 && !salida.isEmpty()) {
			response = emisorJDBCRepository.consultarEmisorsTodosParametros(data);
			//
			// } else if (subproceso == 0 && !salida.isEmpty()) {
			// response = emisorJDBCRepository.consultarEmisorsParametroSalida(data);
			//
			// } else if (subproceso != 0 && salida.isEmpty()) {
			// response =
			// emisorJDBCRepository.consultarEmisorsParametroSubproceso(data);
			//
			// }
	
		} catch (Exception e) {
			logger.error("Error al consultar la salida de emisor ");
		}
	
		return response;
	}




	@Override
	public boolean validarConfiguracionEmisor(Emisor emisor) throws EmisorDuplicadoException {
		return emisorJDBCRepository.consultaEmisorExistente(emisor);
	}
	
	/*
	@Override
	public ResponsePlata<Emisor> consultarEmisorsActivos(RequestPlata<Emisor> data) {
		return emisorJDBCRepository.consultarEmisorsActivos(data);
	}
	*/

}	

