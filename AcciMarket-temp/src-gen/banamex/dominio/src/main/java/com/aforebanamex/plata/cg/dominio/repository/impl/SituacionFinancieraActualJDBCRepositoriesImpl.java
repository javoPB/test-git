package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.SituacionFinancieraActualJDBCRepositories;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

@Repository
public class SituacionFinancieraActualJDBCRepositoriesImpl extends BaseRepository implements SituacionFinancieraActualJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<SituacionFinancieraActual> consultarCatalogoSituacionFinancieraActual() {
		List<SituacionFinancieraActual> listaSituacionFinancieraActual = new ArrayList<>();
		try {
			listaSituacionFinancieraActual= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.situacionfinancieraactual"),
					new BeanPropertyRowMapper(SituacionFinancieraActual.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("situacionfinancieraactual response {}", listaSituacionFinancieraActual.size());
		return listaSituacionFinancieraActual;
	}

	@Override
	public SituacionFinancieraActual buscaPorId(Long cveSituacionFinancieraActual) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveSituacionFinancieraActual);
		SituacionFinancieraActual situacionFinancieraActual = null;
		try {

			mapaParametros.addValue("cveSituacionFinancieraActual", cveSituacionFinancieraActual);
			situacionFinancieraActual = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.situacionfinancieraactual.cve"), mapaParametros,
					new BeanPropertyRowMapper<SituacionFinancieraActual>(SituacionFinancieraActual.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return situacionFinancieraActual;
	}	
	
}		
