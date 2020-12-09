package com.aforebanamex.plata.cg.dominio.repository;

import com.aforebanamex.plata.cg.dominio.exception.EmisorDuplicadoException;
import com.aforebanamex.plata.comunes.model.Emisor;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface EmisorJDBCRepository {
	
	
	
	
	ResponsePlata<Emisor> consultarEmisorsTodosParametros(RequestPlata<Emisor> data);
	
	//ResponsePlata<Emisor> consultarEmisorsParametroSubproceso(RequestPlata<Emisor> data);
	
	//ResponsePlata<Emisor> consultarEmisorsParametroSalida(RequestPlata<Emisor> data);
	
	//ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre);
	
	ResponsePlata<Emisor> obtener(Long idEmisor);
	
	boolean consultaEmisorExistente(Emisor informe) throws EmisorDuplicadoException;
	
	ResponsePlata<Emisor> consultarEmisorsActivos(RequestPlata<Emisor> data);	
}
