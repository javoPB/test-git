package com.aforebanamex.plata.cg.dominio.service;

import com.aforebanamex.plata.cg.dominio.exception.EliminarReperfilamientoPersonaFisicaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ReperfilamientoPersonaFisicaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface ReperfilamientoPersonaFisicaService {
	void actualizar(ReperfilamientoPersonaFisica data) throws ReperfilamientoPersonaFisicaDuplicadoException;
	void eliminar(Long idReperfilamientoPersonaFisica) throws EliminarReperfilamientoPersonaFisicaInactivoException;
	void agregar(ReperfilamientoPersonaFisica req) throws ReperfilamientoPersonaFisicaDuplicadoException, PlantillaNoExisteException;
	
}
