package com.aforebanamex.plata.cg.dominio.service;

import com.aforebanamex.plata.cg.dominio.exception.EliminarEmisorInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.EmisorDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.Emisor;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface EmisorService {
	ResponsePlata<Emisor> consultarEmisorsParametros(RequestPlata<Emisor> data);
	
	//ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre);
	
	boolean validarConfiguracionEmisor(Emisor informe) throws EmisorDuplicadoException;
	
	//ResponsePlata<Emisor> consultarEmisorsActivos(RequestPlata<Emisor> data);
	
}
