package com.aforebanamex.plata.cg.dominio.service;

import com.aforebanamex.plata.cg.dominio.exception.EliminarTitularContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.TitularContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.TitularContrato;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;

public interface TitularContratoService {
	void actualizar(TitularContrato data) throws TitularContratoDuplicadoException;
	void agregar(TitularContrato req) throws TitularContratoDuplicadoException, PlantillaNoExisteException;
	
}
