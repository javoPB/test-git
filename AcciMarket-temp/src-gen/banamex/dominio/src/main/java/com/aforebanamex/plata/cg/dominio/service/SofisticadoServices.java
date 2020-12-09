package com.aforebanamex.plata.cg.dominio.service;

import java.util.List;

import com.aforebanamex.plata.comunes.model.Sofisticado;

public interface SofisticadoServices {
	
	List<Sofisticado> consultarCatalogoSofisticado();

	Sofisticado buscaPorId(Long cveSofisticado);	

}
