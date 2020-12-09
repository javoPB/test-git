package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.OpcDistrInstruccionesJDBCRepositories;
import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;

@Repository
public class OpcDistrInstruccionesJDBCRepositoriesImpl extends BaseRepository implements OpcDistrInstruccionesJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<OpcDistrInstrucciones> consultarCatalogoOpcDistrInstrucciones() {
		List<OpcDistrInstrucciones> listaOpcDistrInstrucciones = new ArrayList<>();
		try {
			listaOpcDistrInstrucciones= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.opcdistrinstrucciones"),
					new BeanPropertyRowMapper(OpcDistrInstrucciones.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("opcdistrinstrucciones response {}", listaOpcDistrInstrucciones.size());
		return listaOpcDistrInstrucciones;
	}

	@Override
	public OpcDistrInstrucciones buscaPorId(Long cveOpcDistrInstrucciones) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveOpcDistrInstrucciones);
		OpcDistrInstrucciones opcDistrInstrucciones = null;
		try {

			mapaParametros.addValue("cveOpcDistrInstrucciones", cveOpcDistrInstrucciones);
			opcDistrInstrucciones = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.opcdistrinstrucciones.cve"), mapaParametros,
					new BeanPropertyRowMapper<OpcDistrInstrucciones>(OpcDistrInstrucciones.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return opcDistrInstrucciones;
	}	
	
}		
