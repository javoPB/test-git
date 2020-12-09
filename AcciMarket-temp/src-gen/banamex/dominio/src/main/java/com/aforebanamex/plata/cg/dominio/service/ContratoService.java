package com.aforebanamex.plata.cg.dominio.service;

import com.aforebanamex.plata.cg.dominio.exception.EliminarContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface ContratoService {
	void actualizar(Contrato data) throws ContratoDuplicadoException;
	void eliminar(Long idContrato) throws EliminarContratoInactivoException;
	void agregar(Contrato req) throws ContratoDuplicadoException, PlantillaNoExisteException;
	ResponsePlata<Contrato> consultarContratosParametros(RequestPlata<Contrato> data);
	
	//ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre);
	
	boolean validarConfiguracionContrato(Contrato informe) throws ContratoDuplicadoException;
	
	//ResponsePlata<Contrato> consultarContratosActivos(RequestPlata<Contrato> data);
	
}
