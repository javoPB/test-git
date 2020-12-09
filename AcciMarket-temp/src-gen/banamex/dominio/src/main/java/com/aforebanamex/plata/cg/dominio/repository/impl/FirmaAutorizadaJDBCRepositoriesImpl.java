package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.FirmaAutorizadaJDBCRepositories;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;

@Repository
public class FirmaAutorizadaJDBCRepositoriesImpl extends BaseRepository implements FirmaAutorizadaJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<FirmaAutorizada> consultarCatalogoFirmaAutorizada() {
		List<FirmaAutorizada> listaFirmaAutorizada = new ArrayList<>();
		try {
			listaFirmaAutorizada= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.firmaautorizada"),
					new BeanPropertyRowMapper(FirmaAutorizada.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("firmaautorizada response {}", listaFirmaAutorizada.size());
		return listaFirmaAutorizada;
	}

	@Override
	public FirmaAutorizada buscaPorId(Long idFirmaAutorizada) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idFirmaAutorizada);
		FirmaAutorizada firmaAutorizada = null;
		try {

			mapaParametros.addValue("idFirmaAutorizada", idFirmaAutorizada);
			firmaAutorizada = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.firmaautorizada.id"), mapaParametros,
					new BeanPropertyRowMapper<FirmaAutorizada>(FirmaAutorizada.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return firmaAutorizada;
	}	
	
}		
