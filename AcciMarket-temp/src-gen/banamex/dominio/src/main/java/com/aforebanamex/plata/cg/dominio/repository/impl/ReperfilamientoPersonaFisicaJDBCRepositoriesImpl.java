package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.ReperfilamientoPersonaFisicaJDBCRepositories;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;

@Repository
public class ReperfilamientoPersonaFisicaJDBCRepositoriesImpl extends BaseRepository implements ReperfilamientoPersonaFisicaJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<ReperfilamientoPersonaFisica> consultarCatalogoReperfilamientoPersonaFisica() {
		List<ReperfilamientoPersonaFisica> listaReperfilamientoPersonaFisica = new ArrayList<>();
		try {
			listaReperfilamientoPersonaFisica= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.reperfilamientopersonafisica"),
					new BeanPropertyRowMapper(ReperfilamientoPersonaFisica.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("reperfilamientopersonafisica response {}", listaReperfilamientoPersonaFisica.size());
		return listaReperfilamientoPersonaFisica;
	}

	@Override
	public ReperfilamientoPersonaFisica buscaPorId(Long idReperfilamientoPersonaFisica) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idReperfilamientoPersonaFisica);
		ReperfilamientoPersonaFisica reperfilamientoPersonaFisica = null;
		try {

			mapaParametros.addValue("idReperfilamientoPersonaFisica", idReperfilamientoPersonaFisica);
			reperfilamientoPersonaFisica = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.reperfilamientopersonafisica.id"), mapaParametros,
					new BeanPropertyRowMapper<ReperfilamientoPersonaFisica>(ReperfilamientoPersonaFisica.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return reperfilamientoPersonaFisica;
	}	
	
}		
