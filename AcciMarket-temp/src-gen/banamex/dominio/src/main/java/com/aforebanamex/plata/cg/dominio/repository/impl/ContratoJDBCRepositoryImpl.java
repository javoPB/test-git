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
import com.aforebanamex.plata.base.helper.ContratoConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.ContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.ContratoJDBCRepository;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class ContratoJDBCRepositoryImpl extends BaseRepository implements ContratoJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	

	@Override
	public ResponsePlata<Contrato> consultarContratosTodosParametros(RequestPlata<Contrato> data) {
		Contrato contrato = data.getPayload();
		List<Contrato> listaContrato = null;
		ResponsePlata<Contrato> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			
			mapaParametros.addValue(ContratoConstantesHelper.MAP_VAL_MIN, paginado.getValorMinimo());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_VAL_MAX, paginado.getValorMaximo());

			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);

			listaContrato = namedParameterJdbcTemplate.query(
					retrieveSentence("contrato.consulta.contrato.por.parametros"), mapaParametros,
					new ContratoMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			mapCount.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapCount.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapCount.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapCount.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapCount.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapCount.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapCount.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapCount.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapCount.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapCount.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapCount.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			
			//mapCount.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			
			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("contrato.consulta.por.parametros.count"), mapCount, Integer.class));

			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaContrato.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(ContratoConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron contratos por subproceso");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar contratos por subproceso");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaContrato);
		responsePlata.setPaginado(paginado);
		return responsePlata;
		
		
	}

	@Override
	public ResponsePlata<Contrato> consultarContratosActivos(RequestPlata<Contrato> data) {
		List<Contrato> listaContrato = new ArrayList<>();
		Paginado paginado = data.getPaginado();
		try {

			listaContrato = namedParameterJdbcTemplate.query(retrieveSentence("contrato.consulta.informacion.activos"),
					new ContratoMapper());

			paginado.setTotalRegistros(listaContrato.size());
			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

		} catch (DataAccessException e) {

			logger.error(e.getMessage(), e);
		}
		return new ResponsePlata<>(paginado, listaContrato, new Message(200, null));

	}

	/*
	@Override
	public ResponsePlata<Contrato> consultarContratosParametroSubproceso(RequestPlata<Contrato> data) {
		Contrato contrato = data.getPayload();
		List<Contrato> listaContrato = null;
		ResponsePlata<Contrato> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());

			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);

			listaContrato = namedParameterJdbcTemplate.query(
					retrieveSentence("contrato.consulta.contrato.por.parametros"), mapaParametros,
					new ContratoMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			//mapCount.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			mapCount.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapCount.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapCount.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapCount.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapCount.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapCount.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapCount.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapCount.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapCount.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapCount.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapCount.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			
			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("contrato.consulta.por.parametros.count"), mapCount, Integer.class));

			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaContrato.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(ContratoConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron contratos por subproceso");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar contratos por subproceso");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaContrato);
		responsePlata.setPaginado(paginado);
		return responsePlata;
	}
	*/

	/*
	@Override
	public ResponsePlata<Contrato> consultarContratosParametroSalida(RequestPlata<Contrato> data) {
		Contrato contrato = data.getPayload();
		List<Contrato> listaContrato = null;
		ResponsePlata<Contrato> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_VAL_MIN, paginado.getValorMinimo());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_VAL_MAX, paginado.getValorMaximo());					

			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);

			listaContrato = namedParameterJdbcTemplate.query(
					retrieveSentence("contrato.consulta.contrato.por.nombre"), mapaParametros,
					new ContratoMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			//mapCount.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, contrato.getIdSubproceso());
			mapCount.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapCount.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapCount.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapCount.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapCount.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapCount.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapCount.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapCount.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapCount.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapCount.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapCount.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapCount.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapCount.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());

			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("contrato.consulta.nombre.count"), mapCount, Integer.class));
			
			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaContrato.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(ContratoConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron contratos por nombre de salida");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar contratos por nombre");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaContrato);
		responsePlata.setPaginado(paginado);
		return responsePlata;
	}
	*/

	/*
	@Override
	public ResponsePlata<SubprocesoConsulta> consultarSubprocesosAutocomplete(String nombre) {
		List<SubprocesoConsulta> lista = null;
		ResponsePlata<SubprocesoConsulta> responsePlata = new ResponsePlata<>();
		Message message = new Message();
		try {
			message.setCodigoEstatus(200);
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(ContratoConstantesHelper.NOMBRE_SUBPROCESO, nombre);

			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);

			logger.info("consulta: {}", retrieveSentence("contrato.autocompletar.subproceso"));
			lista = namedParameterJdbcTemplate.query(retrieveSentence("contrato.autocompletar.subproceso"),
					mapaParametros, new SubprocesoConsultaMapper());
			if (lista.isEmpty()) {
				message.setMensaje(ContratoConstantesHelper.SIN_REGISTROS);
			}
			message.setMensaje("Se consultarSubprocesosAutocomplete");
		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar subprocesos");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(lista);
		return responsePlata;
	}
	*/

	@Override
	public ResponsePlata<Contrato> obtener(Long idContrato) {
		logger.debug("Llamamos al repository para obtener el historico del contrato {}", idContrato);
		ResponsePlata<Contrato> responsePlata = new ResponsePlata<>();
		Message message = new Message();
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		Contrato historico = null;
		try {
			message.setCodigoEstatus(200);
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ID_CONTRATO, idContrato);

			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);

			historico = namedParameterJdbcTemplate.queryForObject(retrieveSentence("contrato.consulta.reporte.detalle"),
					mapaParametros, new ContratoMapper());
			if (historico == null) {
				message.setMensaje(ContratoConstantesHelper.SIN_REGISTROS);
			}
			message.setMensaje("Se obtener historico");
		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar contratos");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayload(historico);
		return responsePlata;
	}

	@Override
	public void actualizar(Contrato contrato) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ID_CONTRATO, contrato.getIdContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTADO_LOGICO, 1);
		
			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("contrato.update"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al actualizar contrato: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public void eliminar(Long idContrato) {
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		try {
		
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ID_CONTRATO, idContrato);
		
			logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametros);
		
			namedParameterJdbcTemplate.update(retrieveSentence("contrato.cancela.salida.informacion"), mapaParametros);
		
		} catch (DataAccessException e) {
			logger.error("Error al tratar de eliminar contrato: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		}
	}

	@Override
	public void registrar(Contrato contrato) {
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DIGITO, contrato.getDigito());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_DV, contrato.getDv());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTATUS, contrato.getEstatus());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PERFIL, contrato.getPerfil());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_PORTAFOLIO, contrato.getPortafolio());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CLABE, contrato.getCLABE());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_STIPOPORT, contrato.getSTipoPort());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_LIBRO, contrato.getLibro());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ASESORINVERSION, contrato.getAsesorInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_TIPOMANIFIESTO, contrato.getTipoManifiesto());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_SERVICIOINVERSION, contrato.getServicioInversion());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION1, contrato.getCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION1, contrato.getFechaCartaEjecucion1());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CARTAEJECUCION2, contrato.getCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACARTAEJECUCION2, contrato.getFechaCartaEjecucion2());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONINSTITUCIONAL, contrato.getJustificacionInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAINSTITUCIONAL, contrato.getFechaInstitucional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_SOFISTICADO, contrato.getSofisticado().getCveSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONSOFISTICADO, contrato.getJustificacionSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHASOFISTICADO, contrato.getFechaSofisticado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_ELEGIBLE, contrato.getElegible().getCveElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONELEGIBLE, contrato.getJustificacionElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHAELEGIBLE, contrato.getFechaElegible());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CALIFICADO, contrato.getCalificado().getCveCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONCALIFICADO, contrato.getJustificacionCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHACALIFICADO, contrato.getFechaCalificado());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_DISCRECIONAL, contrato.getDiscrecional().getCveDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_JUSTIFICACIONDISCRECIONAL, contrato.getJustificacionDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_FECHADISCRECIONAL, contrato.getFechaDiscrecional());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_CVE_CONOCIMIENTO_EXPERIENCIA, contrato.getConocimientoExperiencia().getCveConocimientoExperiencia());
			mapaParametros.addValue(ContratoConstantesHelper.MAP_ESTADO_LOGICO, 1);
			GeneratedKeyHolder holder = new GeneratedKeyHolder();
		
			logger.info("Params:");
			mapaParametros.getValues().entrySet().stream().forEach(e -> logger.info((e.getKey() + ":" + e.getValue())));
		
			namedParameterJdbcTemplate.update(retrieveSentence("contrato.insert"), mapaParametros, holder,
					new String[] { ContratoConstantesHelper.ID_CONTRATO });
			long generatedEventId = holder.getKey().longValue();
		//			long idSubproceso = contrato.getIdSubproceso();
			if (generatedEventId != 0L) {
		//				MapSqlParameterSource mapaParametrosRelacion = new MapSqlParameterSource();
		//				mapaParametrosRelacion.addValue(ContratoConstantesHelper.MAP_IDSUBPROCESO, idSubproceso);
		//				mapaParametrosRelacion.addValue(ContratoConstantesHelper.MAP_ID_INFORME, generatedEventId);
		//				mapaParametrosRelacion.addValue(ContratoConstantesHelper.MAP_ESTADO_INDICADPOR, 1);
		//
		//				logger.info(ContratoConstantesHelper.OUT_PARAMS, mapaParametrosRelacion);
		//
		//				namedParameterJdbcTemplate.update(retrieveSentence("contrato.insert.tabla.relacion.proceso.contrato"),
		//						mapaParametrosRelacion);
		//
			}
		
		} catch (DataAccessException e) {
			logger.error("Ocurrio un error al registrar el contrato: ", e);
			throw new InsfraestructuraException(e.getMessage(), e.getCause());
		
		}
	}

	@Override
	public boolean consultaContratoExistente(Contrato contrato) throws ContratoDuplicadoException {

		Integer exist = null;
		boolean existeConfiguracion;
		try {

			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(ContratoConstantesHelper.MAP_NOCONTRATO, contrato.getNoContrato());
			
			logger.info("Params:");
			mapaParametros.getValues().entrySet().stream().forEach(e -> logger.info((e.getKey() + ":" + e.getValue())));

			exist = namedParameterJdbcTemplate.queryForObject(retrieveSentence("contrato.consulta.existe.configuracion"),
					mapaParametros, Integer.class);

			existeConfiguracion = exist != null && exist > 0;

			if (existeConfiguracion) {
				logger.error("Ya existe una configuracion con los mismos datos");
				throw new ContratoDuplicadoException();
			}

		} catch (EmptyResultDataAccessException e) {
			return false;
		}
		return existeConfiguracion;
	}

}	
