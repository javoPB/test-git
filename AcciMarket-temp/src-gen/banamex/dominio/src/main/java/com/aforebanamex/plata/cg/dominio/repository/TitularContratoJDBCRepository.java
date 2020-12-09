package com.aforebanamex.plata.cg.dominio.repository;

import com.aforebanamex.plata.cg.dominio.exception.TitularContratoDuplicadoException;
import com.aforebanamex.plata.comunes.model.TitularContrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface TitularContratoJDBCRepository {
	
	void registrar(TitularContrato data);	
	
	void actualizar(TitularContrato titularContrato);
	
	
}
