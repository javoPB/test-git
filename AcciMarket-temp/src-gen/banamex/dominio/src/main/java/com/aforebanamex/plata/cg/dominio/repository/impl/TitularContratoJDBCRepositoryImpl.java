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
import com.aforebanamex.plata.base.helper.TitularContratoConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.TitularContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.TitularContratoJDBCRepository;
import com.aforebanamex.plata.comunes.model.TitularContrato;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class TitularContratoJDBCRepositoryImpl extends BaseRepository implements TitularContratoJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	


	@Override
	public void actualizar(TitularContrato titularContrato) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_ID_TITULARCONTRATO, titularContrato.getIdTitularContrato());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOMBRE, titularContrato.getNombre());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOCLIENTEBANAMEX, titularContrato.getNoClienteBanamex());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOCTA, titularContrato.getNoCta());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_SUC, titularContrato.getSuc());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CLABE, titularContrato.getClabe());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CALLE, titularContrato.getCalle());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOEXT, titularContrato.getNoExt());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOINTERIOR, titularContrato.getNoInterior());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_MEXICO_EXTRAJERO, titularContrato.getMexicoExtrajero().getCveMexicoExtrajero());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CP, titularContrato.getCp());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_ESTADO, titularContrato.getEstado());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_DELMPO, titularContrato.getDelMpo());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CIUDAD, titularContrato.getCiudad());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_COLONIA, titularContrato.getColonia());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_NO_SI, titularContrato.getNoSi().getCveNoSi());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_RFC, titularContrato.getRfc());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CURP, titularContrato.getCurp());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_FECNAC, (titularContrato.getFecNac() != null) ? fechasHelper.formatDate(titularContrato.getFecNac()) : null);	
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_NO_SI, titularContrato.getNoSi().getCveNoSi());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_ESTADO_LOGICO, 1);
		
			logger.info(TitularContratoConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("titularcontrato.update"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al actualizar titularContrato: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}


	@Override
	public void registrar(TitularContrato titularContrato) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOMBRE, titularContrato.getNombre());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOCLIENTEBANAMEX, titularContrato.getNoClienteBanamex());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOCTA, titularContrato.getNoCta());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_SUC, titularContrato.getSuc());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CLABE, titularContrato.getClabe());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CALLE, titularContrato.getCalle());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOEXT, titularContrato.getNoExt());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_NOINTERIOR, titularContrato.getNoInterior());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_MEXICO_EXTRAJERO, titularContrato.getMexicoExtrajero().getCveMexicoExtrajero());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CP, titularContrato.getCp());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_ESTADO, titularContrato.getEstado());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_DELMPO, titularContrato.getDelMpo());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CIUDAD, titularContrato.getCiudad());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_COLONIA, titularContrato.getColonia());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_NO_SI, titularContrato.getNoSi().getCveNoSi());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_RFC, titularContrato.getRfc());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CURP, titularContrato.getCurp());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_FECNAC, (titularContrato.getFecNac() != null) ? fechasHelper.formatDate(titularContrato.getFecNac()) : null);	
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_DUMMY, titularContrato.getDummy().getCveDummy());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_CVE_NO_SI, titularContrato.getNoSi().getCveNoSi());
			mapaParametros.addValue(TitularContratoConstantesHelper.MAP_ESTADO_LOGICO, 1);
			GeneratedKeyHolder holder = new GeneratedKeyHolder();
		
			logger.info("Params:");
			mapaParametros.getValues().entrySet().stream().forEach(e -> logger.info((e.getKey() + ":" + e.getValue())));
		
			namedParameterJdbcTemplate.update(retrieveSentence("titularcontrato.insert"), mapaParametros, holder,
					new String[] { TitularContratoConstantesHelper.ID_TITULARCONTRATO });
			long generatedEventId = holder.getKey().longValue();
		//			long idSubproceso = titularContrato.getIdSubproceso();
			if (generatedEventId != 0L) {
		//				MapSqlParameterSource mapaParametrosRelacion = new MapSqlParameterSource();
		//				mapaParametrosRelacion.addValue(TitularContratoConstantesHelper.MAP_IDSUBPROCESO, idSubproceso);
		//				mapaParametrosRelacion.addValue(TitularContratoConstantesHelper.MAP_ID_INFORME, generatedEventId);
		//				mapaParametrosRelacion.addValue(TitularContratoConstantesHelper.MAP_ESTADO_INDICADPOR, 1);
		//
		//				logger.info(TitularContratoConstantesHelper.OUT_PARAMS, mapaParametrosRelacion);
		//
		//				namedParameterJdbcTemplate.update(retrieveSentence("titularcontrato.insert.tabla.relacion.proceso.titularContrato"),
		//						mapaParametrosRelacion);
		//
			}
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al registrar el titularContrato: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		
		}
	}


}	
