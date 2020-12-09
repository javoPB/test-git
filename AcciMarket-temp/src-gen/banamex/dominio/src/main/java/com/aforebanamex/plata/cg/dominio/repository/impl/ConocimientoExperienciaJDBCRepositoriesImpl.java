package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.ConocimientoExperienciaJDBCRepositories;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

@Repository
public class ConocimientoExperienciaJDBCRepositoriesImpl extends BaseRepository implements ConocimientoExperienciaJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<ConocimientoExperiencia> consultarCatalogoConocimientoExperiencia() {
		List<ConocimientoExperiencia> listaConocimientoExperiencia = new ArrayList<>();
		try {
			listaConocimientoExperiencia= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.conocimientoexperiencia"),
					new BeanPropertyRowMapper(ConocimientoExperiencia.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("conocimientoexperiencia response {}", listaConocimientoExperiencia.size());
		return listaConocimientoExperiencia;
	}

	@Override
	public ConocimientoExperiencia buscaPorId(Long cveConocimientoExperiencia) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveConocimientoExperiencia);
		ConocimientoExperiencia conocimientoExperiencia = null;
		try {

			mapaParametros.addValue("cveConocimientoExperiencia", cveConocimientoExperiencia);
			conocimientoExperiencia = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.conocimientoexperiencia.cve"), mapaParametros,
					new BeanPropertyRowMapper<ConocimientoExperiencia>(ConocimientoExperiencia.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return conocimientoExperiencia;
	}	
	
}		
