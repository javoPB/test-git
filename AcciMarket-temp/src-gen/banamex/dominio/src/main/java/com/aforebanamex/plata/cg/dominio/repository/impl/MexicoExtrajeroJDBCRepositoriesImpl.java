package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.MexicoExtrajeroJDBCRepositories;
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;

@Repository
public class MexicoExtrajeroJDBCRepositoriesImpl extends BaseRepository implements MexicoExtrajeroJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<MexicoExtrajero> consultarCatalogoMexicoExtrajero() {
		List<MexicoExtrajero> listaMexicoExtrajero = new ArrayList<>();
		try {
			listaMexicoExtrajero= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.mexicoextrajero"),
					new BeanPropertyRowMapper(MexicoExtrajero.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("mexicoextrajero response {}", listaMexicoExtrajero.size());
		return listaMexicoExtrajero;
	}

	@Override
	public MexicoExtrajero buscaPorId(Long cveMexicoExtrajero) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveMexicoExtrajero);
		MexicoExtrajero mexicoExtrajero = null;
		try {

			mapaParametros.addValue("cveMexicoExtrajero", cveMexicoExtrajero);
			mexicoExtrajero = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.mexicoextrajero.cve"), mapaParametros,
					new BeanPropertyRowMapper<MexicoExtrajero>(MexicoExtrajero.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return mexicoExtrajero;
	}	
	
}		
