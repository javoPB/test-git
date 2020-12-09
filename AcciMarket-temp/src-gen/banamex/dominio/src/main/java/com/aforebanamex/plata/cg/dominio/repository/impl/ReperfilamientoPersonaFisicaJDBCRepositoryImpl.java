package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import com.aforebanamex.plata.base.exception.InsfraestructuraException;
import com.aforebanamex.plata.base.helper.ReperfilamientoPersonaFisicaConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.ReperfilamientoPersonaFisicaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.ReperfilamientoPersonaFisicaJDBCRepository;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class ReperfilamientoPersonaFisicaJDBCRepositoryImpl extends BaseRepository implements ReperfilamientoPersonaFisicaJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	


	@Override
	public void actualizar(ReperfilamientoPersonaFisica reperfilamientoPersonaFisica) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ID_REPERFILAMIENTOPERSONAFISICA, reperfilamientoPersonaFisica.getIdReperfilamientoPersonaFisica());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ID_CONTRATO, reperfilamientoPersonaFisica.getContrato().getIdContrato());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_NOMBRE, reperfilamientoPersonaFisica.getNombre());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PERFILACTUAL, reperfilamientoPersonaFisica.getPerfilActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJELIQUIDEZ, reperfilamientoPersonaFisica.getPorcentajeLiquidez());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOLIQUIDEZ, (reperfilamientoPersonaFisica.getMontoLiquidez() != null) ? fechasHelper.formatDate(reperfilamientoPersonaFisica.getMontoLiquidez()) : null);	
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJECORTOPLAZO, reperfilamientoPersonaFisica.getPorcentajeCortoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOCORTOPLAZO, reperfilamientoPersonaFisica.getMontoCortoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJELARGOPLAZO, reperfilamientoPersonaFisica.getPorcentajeLargoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOLARGOPLAZO, reperfilamientoPersonaFisica.getMontoLargoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJEPATRIMONIOLIQUIDOTOTAL, reperfilamientoPersonaFisica.getPorcentajePatrimonioLiquidoTotal());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOPATRIMONIOLIQUIDOTOTAL, reperfilamientoPersonaFisica.getMontoPatrimonioLiquidoTotal());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_NO_SI, reperfilamientoPersonaFisica.getNoSi().getCveNoSi());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, reperfilamientoPersonaFisica.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, reperfilamientoPersonaFisica.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_NO_SI, reperfilamientoPersonaFisica.getNoSi().getCveNoSi());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PERFIL, reperfilamientoPersonaFisica.getPerfil());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ESTADO_LOGICO, 1);
		
			logger.info(ReperfilamientoPersonaFisicaConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("reperfilamientopersonafisica.update"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al actualizar reperfilamientoPersonaFisica: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public void eliminar(Long idReperfilamientoPersonaFisica) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		try {
		
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ID_REPERFILAMIENTOPERSONAFISICA, idReperfilamientoPersonaFisica);
		
			logger.info(ReperfilamientoPersonaFisicaConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("reperfilamientopersonafisica.cancela.salida.informacion"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Error al tratar de eliminar reperfilamientoPersonaFisica: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public void registrar(ReperfilamientoPersonaFisica reperfilamientoPersonaFisica) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ID_CONTRATO, reperfilamientoPersonaFisica.getContrato().getIdContrato());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_NOMBRE, reperfilamientoPersonaFisica.getNombre());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PERFILACTUAL, reperfilamientoPersonaFisica.getPerfilActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJELIQUIDEZ, reperfilamientoPersonaFisica.getPorcentajeLiquidez());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOLIQUIDEZ, (reperfilamientoPersonaFisica.getMontoLiquidez() != null) ? fechasHelper.formatDate(reperfilamientoPersonaFisica.getMontoLiquidez()) : null);	
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJECORTOPLAZO, reperfilamientoPersonaFisica.getPorcentajeCortoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOCORTOPLAZO, reperfilamientoPersonaFisica.getMontoCortoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJELARGOPLAZO, reperfilamientoPersonaFisica.getPorcentajeLargoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOLARGOPLAZO, reperfilamientoPersonaFisica.getMontoLargoPlazo());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PORCENTAJEPATRIMONIOLIQUIDOTOTAL, reperfilamientoPersonaFisica.getPorcentajePatrimonioLiquidoTotal());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_MONTOPATRIMONIOLIQUIDOTOTAL, reperfilamientoPersonaFisica.getMontoPatrimonioLiquidoTotal());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_NO_SI, reperfilamientoPersonaFisica.getNoSi().getCveNoSi());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, reperfilamientoPersonaFisica.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, reperfilamientoPersonaFisica.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_DUMMY, reperfilamientoPersonaFisica.getDummy().getCveDummy());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_NO_SI, reperfilamientoPersonaFisica.getNoSi().getCveNoSi());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_CVE_SITUACION_FINANCIERA_ACTUAL, reperfilamientoPersonaFisica.getSituacionFinancieraActual().getCveSituacionFinancieraActual());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_PERFIL, reperfilamientoPersonaFisica.getPerfil());
			mapaParametros.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ESTADO_LOGICO, 1);
			GeneratedKeyHolder holder = new GeneratedKeyHolder();
		
			logger.info("Params:");
			mapaParametros.getValues().entrySet().stream().forEach(e -> logger.info((e.getKey() + ":" + e.getValue())));
		
			namedParameterJdbcTemplate.update(retrieveSentence("reperfilamientopersonafisica.insert"), mapaParametros, holder,
					new String[] { ReperfilamientoPersonaFisicaConstantesHelper.ID_REPERFILAMIENTOPERSONAFISICA });
			long generatedEventId = holder.getKey().longValue();
		//			long idSubproceso = reperfilamientoPersonaFisica.getIdSubproceso();
			if (generatedEventId != 0L) {
		//				MapSqlParameterSource mapaParametrosRelacion = new MapSqlParameterSource();
		//				mapaParametrosRelacion.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_IDSUBPROCESO, idSubproceso);
		//				mapaParametrosRelacion.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ID_INFORME, generatedEventId);
		//				mapaParametrosRelacion.addValue(ReperfilamientoPersonaFisicaConstantesHelper.MAP_ESTADO_INDICADPOR, 1);
		//
		//				logger.info(ReperfilamientoPersonaFisicaConstantesHelper.OUT_PARAMS, mapaParametrosRelacion);
		//
		//				namedParameterJdbcTemplate.update(retrieveSentence("reperfilamientopersonafisica.insert.tabla.relacion.proceso.reperfilamientoPersonaFisica"),
		//						mapaParametrosRelacion);
		//
			}
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al registrar el reperfilamientoPersonaFisica: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		
		}
	}


}	
