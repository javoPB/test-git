package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.DistribucionInstruccionesJDBCRepositories;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;

@Repository
public class DistribucionInstruccionesJDBCRepositoriesImpl extends BaseRepository implements DistribucionInstruccionesJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<DistribucionInstrucciones> consultarCatalogoDistribucionInstrucciones() {
		List<DistribucionInstrucciones> listaDistribucionInstrucciones = new ArrayList<>();
		try {
			listaDistribucionInstrucciones= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.distribucioninstrucciones"),
					new BeanPropertyRowMapper(DistribucionInstrucciones.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("distribucioninstrucciones response {}", listaDistribucionInstrucciones.size());
		return listaDistribucionInstrucciones;
	}

	@Override
	public DistribucionInstrucciones buscaPorId(Long idDistribucionInstrucciones) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idDistribucionInstrucciones);
		DistribucionInstrucciones distribucionInstrucciones = null;
		try {

			mapaParametros.addValue("idDistribucionInstrucciones", idDistribucionInstrucciones);
			distribucionInstrucciones = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.distribucioninstrucciones.id"), mapaParametros,
					new BeanPropertyRowMapper<DistribucionInstrucciones>(DistribucionInstrucciones.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return distribucionInstrucciones;
	}	
	
}		
