package com.aforebanamex.plata.cg.dominio.repository;

import com.aforebanamex.plata.cg.dominio.exception.FirmaAutorizadaDuplicadoException;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface FirmaAutorizadaJDBCRepository {
	
	
	
	void eliminar(Long idFirmaAutorizada);
	
}
