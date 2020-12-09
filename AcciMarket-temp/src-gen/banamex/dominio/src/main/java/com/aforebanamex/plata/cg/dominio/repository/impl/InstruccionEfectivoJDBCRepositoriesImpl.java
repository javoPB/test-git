package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.InstruccionEfectivoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;

@Repository
public class InstruccionEfectivoJDBCRepositoriesImpl extends BaseRepository implements InstruccionEfectivoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<InstruccionEfectivo> consultarCatalogoInstruccionEfectivo() {
		List<InstruccionEfectivo> listaInstruccionEfectivo = new ArrayList<>();
		try {
			listaInstruccionEfectivo= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.instruccionefectivo"),
					new BeanPropertyRowMapper(InstruccionEfectivo.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("instruccionefectivo response {}", listaInstruccionEfectivo.size());
		return listaInstruccionEfectivo;
	}

	@Override
	public InstruccionEfectivo buscaPorId(Long idInstruccionEfectivo) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idInstruccionEfectivo);
		InstruccionEfectivo instruccionEfectivo = null;
		try {

			mapaParametros.addValue("idInstruccionEfectivo", idInstruccionEfectivo);
			instruccionEfectivo = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.instruccionefectivo.id"), mapaParametros,
					new BeanPropertyRowMapper<InstruccionEfectivo>(InstruccionEfectivo.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return instruccionEfectivo;
	}	
	
}		
