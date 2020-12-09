package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.NoSiJDBCRepositories;
import com.aforebanamex.plata.comunes.model.NoSi;

@Repository
public class NoSiJDBCRepositoriesImpl extends BaseRepository implements NoSiJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<NoSi> consultarCatalogoNoSi() {
		List<NoSi> listaNoSi = new ArrayList<>();
		try {
			listaNoSi= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.nosi"),
					new BeanPropertyRowMapper(NoSi.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("nosi response {}", listaNoSi.size());
		return listaNoSi;
	}

	@Override
	public NoSi buscaPorId(Long cveNoSi) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveNoSi);
		NoSi noSi = null;
		try {

			mapaParametros.addValue("cveNoSi", cveNoSi);
			noSi = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.nosi.cve"), mapaParametros,
					new BeanPropertyRowMapper<NoSi>(NoSi.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return noSi;
	}	
	
}		
