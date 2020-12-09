package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;

public interface NegativaPerfilamientoJDBCRepositories {

	List<NegativaPerfilamiento> consultarCatalogoNegativaPerfilamiento();

	NegativaPerfilamiento buscaPorId(Long idNegativaPerfilamiento);
	
}

