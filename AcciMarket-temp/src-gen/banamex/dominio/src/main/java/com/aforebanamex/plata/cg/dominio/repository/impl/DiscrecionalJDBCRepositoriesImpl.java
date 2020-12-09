package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.DiscrecionalJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Discrecional;

@Repository
public class DiscrecionalJDBCRepositoriesImpl extends BaseRepository implements DiscrecionalJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Discrecional> consultarCatalogoDiscrecional() {
		List<Discrecional> listaDiscrecional = new ArrayList<>();
		try {
			listaDiscrecional= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.discrecional"),
					new BeanPropertyRowMapper(Discrecional.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("discrecional response {}", listaDiscrecional.size());
		return listaDiscrecional;
	}

	@Override
	public Discrecional buscaPorId(Long cveDiscrecional) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", cveDiscrecional);
		Discrecional discrecional = null;
		try {

			mapaParametros.addValue("cveDiscrecional", cveDiscrecional);
			discrecional = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.discrecional.cve"), mapaParametros,
					new BeanPropertyRowMapper<Discrecional>(Discrecional.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return discrecional;
	}	
	
}		
