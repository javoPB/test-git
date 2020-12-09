package com.aforebanamex.plata.cg.dominio.repository;

import com.aforebanamex.plata.cg.dominio.exception.ReperfilamientoPersonaFisicaDuplicadoException;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface ReperfilamientoPersonaFisicaJDBCRepository {
	
	void registrar(ReperfilamientoPersonaFisica data);	
	
	void actualizar(ReperfilamientoPersonaFisica reperfilamientoPersonaFisica);
	
	void eliminar(Long idReperfilamientoPersonaFisica);
	
}
