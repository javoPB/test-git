package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.RelacionJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Relacion;

@Repository
public class RelacionJDBCRepositoriesImpl extends BaseRepository implements RelacionJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Relacion> consultarCatalogoRelacion() {
		List<Relacion> listaRelacion = new ArrayList<>();
		try {
			listaRelacion= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.relacion"),
					new BeanPropertyRowMapper(Relacion.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("relacion response {}", listaRelacion.size());
		return listaRelacion;
	}

	@Override
	public Relacion buscaPorId(Long cveRelacion) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveRelacion);
		Relacion relacion = null;
		try {

			mapaParametros.addValue("cveRelacion", cveRelacion);
			relacion = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.relacion.cve"), mapaParametros,
					new BeanPropertyRowMapper<Relacion>(Relacion.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return relacion;
	}	
	
}		
