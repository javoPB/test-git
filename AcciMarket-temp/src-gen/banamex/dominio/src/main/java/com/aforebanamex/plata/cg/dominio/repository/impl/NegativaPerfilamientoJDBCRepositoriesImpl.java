package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.NegativaPerfilamientoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;

@Repository
public class NegativaPerfilamientoJDBCRepositoriesImpl extends BaseRepository implements NegativaPerfilamientoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<NegativaPerfilamiento> consultarCatalogoNegativaPerfilamiento() {
		List<NegativaPerfilamiento> listaNegativaPerfilamiento = new ArrayList<>();
		try {
			listaNegativaPerfilamiento= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.negativaperfilamiento"),
					new BeanPropertyRowMapper(NegativaPerfilamiento.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("negativaperfilamiento response {}", listaNegativaPerfilamiento.size());
		return listaNegativaPerfilamiento;
	}

	@Override
	public NegativaPerfilamiento buscaPorId(Long idNegativaPerfilamiento) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idNegativaPerfilamiento);
		NegativaPerfilamiento negativaPerfilamiento = null;
		try {

			mapaParametros.addValue("idNegativaPerfilamiento", idNegativaPerfilamiento);
			negativaPerfilamiento = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.negativaperfilamiento.id"), mapaParametros,
					new BeanPropertyRowMapper<NegativaPerfilamiento>(NegativaPerfilamiento.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return negativaPerfilamiento;
	}	
	
}		
