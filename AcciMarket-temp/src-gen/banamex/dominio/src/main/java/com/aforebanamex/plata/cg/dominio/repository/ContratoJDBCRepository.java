package com.aforebanamex.plata.cg.dominio.repository;

import com.aforebanamex.plata.cg.dominio.exception.ContratoDuplicadoException;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface ContratoJDBCRepository {
	
	void registrar(Contrato data);	
	
	void actualizar(Contrato contrato);
	
	void eliminar(Long idContrato);
	
	ResponsePlata<Contrato> consultarContratosTodosParametros(RequestPlata<Contrato> data);
	
	//ResponsePlata<Contrato> consultarContratosParametroSubproceso(RequestPlata<Contrato> data);
	
	//ResponsePlata<Contrato> consultarContratosParametroSalida(RequestPlata<Contrato> data);
	
	//ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre);
	
	ResponsePlata<Contrato> obtener(Long idContrato);
	
	boolean consultaContratoExistente(Contrato informe) throws ContratoDuplicadoException;
	
	ResponsePlata<Contrato> consultarContratosActivos(RequestPlata<Contrato> data);	
}
