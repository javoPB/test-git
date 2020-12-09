package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.TitularContratoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.TitularContrato;

@Repository
public class TitularContratoJDBCRepositoriesImpl extends BaseRepository implements TitularContratoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<TitularContrato> consultarCatalogoTitularContrato() {
		List<TitularContrato> listaTitularContrato = new ArrayList<>();
		try {
			listaTitularContrato= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.titularcontrato"),
					new BeanPropertyRowMapper(TitularContrato.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("titularcontrato response {}", listaTitularContrato.size());
		return listaTitularContrato;
	}

	@Override
	public TitularContrato buscaPorId(Long idTitularContrato) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idTitularContrato);
		TitularContrato titularContrato = null;
		try {

			mapaParametros.addValue("idTitularContrato", idTitularContrato);
			titularContrato = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.titularcontrato.id"), mapaParametros,
					new BeanPropertyRowMapper<TitularContrato>(TitularContrato.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return titularContrato;
	}	
	
}		
