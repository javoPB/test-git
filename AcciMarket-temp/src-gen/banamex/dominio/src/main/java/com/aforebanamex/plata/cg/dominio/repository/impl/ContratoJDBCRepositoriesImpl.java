package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.ContratoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Contrato;

@Repository
public class ContratoJDBCRepositoriesImpl extends BaseRepository implements ContratoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Contrato> consultarCatalogoContrato() {
		List<Contrato> listaContrato = new ArrayList<>();
		try {
			listaContrato= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.contrato"),
					new BeanPropertyRowMapper(Contrato.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("contrato response {}", listaContrato.size());
		return listaContrato;
	}

	@Override
	public Contrato buscaPorId(Long idContrato) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idContrato);
		Contrato contrato = null;
		try {

			mapaParametros.addValue("idContrato", idContrato);
			contrato = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.contrato.id"), mapaParametros,
					new BeanPropertyRowMapper<Contrato>(Contrato.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return contrato;
	}	
	
}		
