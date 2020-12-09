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
import com.aforebanamex.plata.base.helper.EmisorConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.EmisorDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.EmisorJDBCRepository;
import com.aforebanamex.plata.comunes.model.Emisor;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class EmisorJDBCRepositoryImpl extends BaseRepository implements EmisorJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	

	@Override
	public ResponsePlata<Emisor> consultarEmisorsTodosParametros(RequestPlata<Emisor> data) {
		Emisor emisor = data.getPayload();
		List<Emisor> listaEmisor = null;
		ResponsePlata<Emisor> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());
			
			mapaParametros.addValue(EmisorConstantesHelper.MAP_VAL_MIN, paginado.getValorMinimo());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_VAL_MAX, paginado.getValorMaximo());

			logger.info(EmisorConstantesHelper.OUT_PARAMS, mapaParametros);

			listaEmisor = namedParameterJdbcTemplate.query(
					retrieveSentence("emisor.consulta.emisor.por.parametros"), mapaParametros,
					new EmisorMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			mapCount.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapCount.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());
			
			//mapCount.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			
			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("emisor.consulta.por.parametros.count"), mapCount, Integer.class));

			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaEmisor.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(EmisorConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron emisors por subproceso");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar emisors por subproceso");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaEmisor);
		responsePlata.setPaginado(paginado);
		return responsePlata;
		
		
	}

	@Override
	public ResponsePlata<Emisor> consultarEmisorsActivos(RequestPlata<Emisor> data) {
		List<Emisor> listaEmisor = new ArrayList<>();
		Paginado paginado = data.getPaginado();
		try {

			listaEmisor = namedParameterJdbcTemplate.query(retrieveSentence("emisor.consulta.informacion.activos"),
					new EmisorMapper());

			paginado.setTotalRegistros(listaEmisor.size());
			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

		} catch (DataAccessException e) {

			logger.error(e.getMessage(), e);
		}
		return new ResponsePlata<>(paginado, listaEmisor, new Message(200, null));

	}

	/*
	@Override
	public ResponsePlata<Emisor> consultarEmisorsParametroSubproceso(RequestPlata<Emisor> data) {
		Emisor emisor = data.getPayload();
		List<Emisor> listaEmisor = null;
		ResponsePlata<Emisor> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());

			logger.info(EmisorConstantesHelper.OUT_PARAMS, mapaParametros);

			listaEmisor = namedParameterJdbcTemplate.query(
					retrieveSentence("emisor.consulta.emisor.por.parametros"), mapaParametros,
					new EmisorMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			//mapCount.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			mapCount.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapCount.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());
			
			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("emisor.consulta.por.parametros.count"), mapCount, Integer.class));

			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaEmisor.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(EmisorConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron emisors por subproceso");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar emisors por subproceso");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaEmisor);
		responsePlata.setPaginado(paginado);
		return responsePlata;
	}
	*/

	/*
	@Override
	public ResponsePlata<Emisor> consultarEmisorsParametroSalida(RequestPlata<Emisor> data) {
		Emisor emisor = data.getPayload();
		List<Emisor> listaEmisor = null;
		ResponsePlata<Emisor> responsePlata = new ResponsePlata<>();
		Paginado paginado = data.getPaginado();
		Message message = new Message();
		try {
			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			//mapaParametros.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_VAL_MIN, paginado.getValorMinimo());
			mapaParametros.addValue(EmisorConstantesHelper.MAP_VAL_MAX, paginado.getValorMaximo());					

			logger.info(EmisorConstantesHelper.OUT_PARAMS, mapaParametros);

			listaEmisor = namedParameterJdbcTemplate.query(
					retrieveSentence("emisor.consulta.emisor.por.nombre"), mapaParametros,
					new EmisorMapper());

			MapSqlParameterSource mapCount = new MapSqlParameterSource();
			//mapCount.addValue(EmisorConstantesHelper.MAP_IDSUBPROCESO, emisor.getIdSubproceso());
			mapCount.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			mapCount.addValue(EmisorConstantesHelper.MAP_CVE_RELACION, emisor.getRelacion().getCveRelacion());

			paginado.setTotalRegistros(namedParameterJdbcTemplate
					.queryForObject(retrieveSentence("emisor.consulta.nombre.count"), mapCount, Integer.class));
			
			paginado.setTotalPaginas(paginado.getTotalRegistros() / paginado.getRegistrosMostrados()
					+ ((paginado.getTotalRegistros() % paginado.getRegistrosMostrados()) == 0 ? 0 : 1));

			if (listaEmisor.isEmpty()) {
				message.setCodigoEstatus(404);
				message.setMensaje(EmisorConstantesHelper.SIN_REGISTROS);
			} else {
				message.setCodigoEstatus(200);
				message.setMensaje("Se consultaron emisors por nombre de salida");
			}

		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar emisors por nombre");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayloades(listaEmisor);
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
			//mapaParametros.addValue(EmisorConstantesHelper.NOMBRE_SUBPROCESO, nombre);

			logger.info(EmisorConstantesHelper.OUT_PARAMS, mapaParametros);

			logger.info("consulta: {}", retrieveSentence("emisor.autocompletar.subproceso"));
			lista = namedParameterJdbcTemplate.query(retrieveSentence("emisor.autocompletar.subproceso"),
					mapaParametros, new SubprocesoConsultaMapper());
			if (lista.isEmpty()) {
				message.setMensaje(EmisorConstantesHelper.SIN_REGISTROS);
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
	public ResponsePlata<Emisor> obtener(Long idEmisor) {
		logger.debug("Llamamos al repository para obtener el historico del emisor {}", idEmisor);
		ResponsePlata<Emisor> responsePlata = new ResponsePlata<>();
		Message message = new Message();
		MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
		Emisor historico = null;
		try {
			message.setCodigoEstatus(200);
			mapaParametros.addValue(EmisorConstantesHelper.MAP_ID_EMISOR, idEmisor);

			logger.info(EmisorConstantesHelper.OUT_PARAMS, mapaParametros);

			historico = namedParameterJdbcTemplate.queryForObject(retrieveSentence("emisor.consulta.reporte.detalle"),
					mapaParametros, new EmisorMapper());
			if (historico == null) {
				message.setMensaje(EmisorConstantesHelper.SIN_REGISTROS);
			}
			message.setMensaje("Se obtener historico");
		} catch (DataAccessException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Error al consultar emisors");
			logger.error(e.getMessage(), e);
		}
		responsePlata.setMensaje(message);
		responsePlata.setPayload(historico);
		return responsePlata;
	}




	@Override
	public boolean consultaEmisorExistente(Emisor emisor) throws EmisorDuplicadoException {

		Integer exist = null;
		boolean existeConfiguracion;
		try {

			MapSqlParameterSource mapaParametros = new MapSqlParameterSource();
			mapaParametros.addValue(EmisorConstantesHelper.MAP_EMISOR, emisor.getEmisor());
			
			logger.info("Params:");
			mapaParametros.getValues().entrySet().stream().forEach(e -> logger.info((e.getKey() + ":" + e.getValue())));

			exist = namedParameterJdbcTemplate.queryForObject(retrieveSentence("emisor.consulta.existe.configuracion"),
					mapaParametros, Integer.class);

			existeConfiguracion = exist != null && exist > 0;

			if (existeConfiguracion) {
				logger.error("Ya existe una configuracion con los mismos datos");
				throw new EmisorDuplicadoException();
			}

		} catch (EmptyResultDataAccessException e) {
			return false;
		}
		return existeConfiguracion;
	}

}	
