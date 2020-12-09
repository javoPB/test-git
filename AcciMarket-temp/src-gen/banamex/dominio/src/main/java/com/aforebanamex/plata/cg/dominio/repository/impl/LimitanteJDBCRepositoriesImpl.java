package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.LimitanteJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Limitante;

@Repository
public class LimitanteJDBCRepositoriesImpl extends BaseRepository implements LimitanteJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Limitante> consultarCatalogoLimitante() {
		List<Limitante> listaLimitante = new ArrayList<>();
		try {
			listaLimitante= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.limitante"),
					new BeanPropertyRowMapper(Limitante.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("limitante response {}", listaLimitante.size());
		return listaLimitante;
	}

	@Override
	public Limitante buscaPorId(Long idLimitante) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idLimitante);
		Limitante limitante = null;
		try {

			mapaParametros.addValue("idLimitante", idLimitante);
			limitante = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.limitante.id"), mapaParametros,
					new BeanPropertyRowMapper<Limitante>(Limitante.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return limitante;
	}	
	
}		
