package com.aforebanamex.plata.cg.dominio.repository;

import java.util.List;
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;

public interface MexicoExtrajeroJDBCRepositories {

	List<MexicoExtrajero> consultarCatalogoMexicoExtrajero();

	MexicoExtrajero buscaPorId(Long cveMexicoExtrajero);
	
}

