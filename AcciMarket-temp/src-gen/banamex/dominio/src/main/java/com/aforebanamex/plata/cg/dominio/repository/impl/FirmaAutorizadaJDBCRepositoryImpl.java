package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import com.aforebanamex.plata.base.exception.InsfraestructuraException;
import com.aforebanamex.plata.base.helper.FirmaAutorizadaConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.FirmaAutorizadaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.FirmaAutorizadaJDBCRepository;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class FirmaAutorizadaJDBCRepositoryImpl extends BaseRepository implements FirmaAutorizadaJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	



	@Override
	public void eliminar(Long idFirmaAutorizada) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		try {
		
			mapaParametros.addValue(FirmaAutorizadaConstantesHelper.MAP_ID_FIRMAAUTORIZADA, idFirmaAutorizada);
		
			logger.info(FirmaAutorizadaConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("firmaautorizada.cancela.salida.informacion"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Error al tratar de eliminar firmaAutorizada: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}



}	
