package com.aforebanamex.plata.cg.dominio.service;

import com.aforebanamex.plata.cg.dominio.exception.EliminarFirmaAutorizadaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.FirmaAutorizadaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface FirmaAutorizadaService {
	void eliminar(Long idFirmaAutorizada) throws EliminarFirmaAutorizadaInactivoException;
	
}
