package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.ElegibleJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Elegible;

@Repository
public class ElegibleJDBCRepositoriesImpl extends BaseRepository implements ElegibleJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Elegible> consultarCatalogoElegible() {
		List<Elegible> listaElegible = new ArrayList<>();
		try {
			listaElegible= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.elegible"),
					new BeanPropertyRowMapper(Elegible.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("elegible response {}", listaElegible.size());
		return listaElegible;
	}

	@Override
	public Elegible buscaPorId(Long cveElegible) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveElegible);
		Elegible elegible = null;
		try {

			mapaParametros.addValue("cveElegible", cveElegible);
			elegible = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.elegible.cve"), mapaParametros,
					new BeanPropertyRowMapper<Elegible>(Elegible.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return elegible;
	}	
	
}		
