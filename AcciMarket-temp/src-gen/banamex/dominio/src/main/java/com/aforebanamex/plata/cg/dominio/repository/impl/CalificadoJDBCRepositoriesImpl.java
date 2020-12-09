package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.CalificadoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Calificado;

@Repository
public class CalificadoJDBCRepositoriesImpl extends BaseRepository implements CalificadoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Calificado> consultarCatalogoCalificado() {
		List<Calificado> listaCalificado = new ArrayList<>();
		try {
			listaCalificado= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.calificado"),
					new BeanPropertyRowMapper(Calificado.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("calificado response {}", listaCalificado.size());
		return listaCalificado;
	}

	@Override
	public Calificado buscaPorId(Long cveCalificado) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveCalificado);
		Calificado calificado = null;
		try {

			mapaParametros.addValue("cveCalificado", cveCalificado);
			calificado = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.calificado.cve"), mapaParametros,
					new BeanPropertyRowMapper<Calificado>(Calificado.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return calificado;
	}	
	
}		
