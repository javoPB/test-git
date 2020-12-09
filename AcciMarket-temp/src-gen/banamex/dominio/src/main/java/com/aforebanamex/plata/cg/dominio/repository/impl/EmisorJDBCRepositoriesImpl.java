package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.EmisorJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Emisor;

@Repository
public class EmisorJDBCRepositoriesImpl extends BaseRepository implements EmisorJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Emisor> consultarCatalogoEmisor() {
		List<Emisor> listaEmisor = new ArrayList<>();
		try {
			listaEmisor= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.emisor"),
					new BeanPropertyRowMapper(Emisor.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("emisor response {}", listaEmisor.size());
		return listaEmisor;
	}

	@Override
	public Emisor buscaPorId(Long idEmisor) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idEmisor);
		Emisor emisor = null;
		try {

			mapaParametros.addValue("idEmisor", idEmisor);
			emisor = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.emisor.id"), mapaParametros,
					new BeanPropertyRowMapper<Emisor>(Emisor.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return emisor;
	}	
	
}		
