package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.stereotype.Repository;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.repository.BeneficiarioJDBCRepositories;
import com.aforebanamex.plata.comunes.model.Beneficiario;

@Repository
public class BeneficiarioJDBCRepositoriesImpl extends BaseRepository implements BeneficiarioJDBCRepositories{

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public List<Beneficiario> consultarCatalogoBeneficiario() {
		List<Beneficiario> listaBeneficiario = new ArrayList<>();
		try {
			listaBeneficiario= namedParameterJdbcTemplate.query(retrieveSentence("query.catalogo.beneficiario"),
					new BeanPropertyRowMapper(Beneficiario.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		logger.debug("beneficiario response {}", listaBeneficiario.size());
		return listaBeneficiario;
	}

	@Override
	public Beneficiario buscaPorId(Long idBeneficiario) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		logger.debug("Id de salida a buscar {}", idBeneficiario);
		Beneficiario beneficiario = null;
		try {

			mapaParametros.addValue("idBeneficiario", idBeneficiario);
			beneficiario = namedParameterJdbcTemplate.queryForObject(retrieveSentence("query.catalogo.beneficiario.id"), mapaParametros,
					new BeanPropertyRowMapper<Beneficiario>(Beneficiario.class));
		} catch (DataAccessException cgex) {
			logger.error(cgex.getMessage(), cgex);
		}

		return beneficiario;
	}	
	
}		
