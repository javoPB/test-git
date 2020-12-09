package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.NoSi;

public interface NoSiServices {
	
	List<NoSi> consultarCatalogoNoSi();

	NoSi buscaPorId(Long cveNoSi);	

}
