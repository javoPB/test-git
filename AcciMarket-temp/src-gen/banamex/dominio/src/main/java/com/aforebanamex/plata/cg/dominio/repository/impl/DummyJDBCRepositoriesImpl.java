package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.DummyJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Dummy;

@Repository
public class DummyJDBCRepositoriesImpl extends BaseRepository implements DummyJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Dummy> consultarCatalogoDummy() {
		List<Dummy> listaDummy = new ArrayList<>();
		try {
			listaDummy= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.dummy"),
					new BeanPropertyRowMapper(Dummy.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("dummy response {}", listaDummy.size());
		return listaDummy;
	}

	@Override
	public Dummy buscaPorId(Long cveDummy) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveDummy);
		Dummy dummy = null;
		try {

			mapaParametros.addValue("cveDummy", cveDummy);
			dummy = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.dummy.cve"), mapaParametros,
					new BeanPropertyRowMapper<Dummy>(Dummy.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return dummy;
	}	
	
}		
