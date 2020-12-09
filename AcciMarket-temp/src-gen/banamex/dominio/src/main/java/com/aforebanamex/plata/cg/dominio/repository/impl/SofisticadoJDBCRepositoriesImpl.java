package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.SofisticadoJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Sofisticado;

@Repository
public class SofisticadoJDBCRepositoriesImpl extends BaseRepository implements SofisticadoJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Sofisticado> consultarCatalogoSofisticado() {
		List<Sofisticado> listaSofisticado = new ArrayList<>();
		try {
			listaSofisticado= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.sofisticado"),
					new BeanPropertyRowMapper(Sofisticado.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("sofisticado response {}", listaSofisticado.size());
		return listaSofisticado;
	}

	@Override
	public Sofisticado buscaPorId(Long cveSofisticado) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveSofisticado);
		Sofisticado sofisticado = null;
		try {

			mapaParametros.addValue("cveSofisticado", cveSofisticado);
			sofisticado = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.sofisticado.cve"), mapaParametros,
					new BeanPropertyRowMapper<Sofisticado>(Sofisticado.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return sofisticado;
	}	
	
}		
