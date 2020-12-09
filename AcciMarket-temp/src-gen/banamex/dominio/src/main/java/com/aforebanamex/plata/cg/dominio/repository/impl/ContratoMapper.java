package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.ContratoConstantesHelper;
import com.aforebanamex.plata.comunes.model.Contrato;

import com.aforebanamex.plata.comunes.model.Sofisticado;
import com.aforebanamex.plata.comunes.model.Elegible;
import com.aforebanamex.plata.comunes.model.Calificado;
import com.aforebanamex.plata.comunes.model.Discrecional;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

public class ContratoMapper implements org.springframework.jdbc.core.RowMapper<Contrato> {

	@Override
	public Contrato mapRow(ResultSet rs, int arg1) throws SQLException {

		Contrato contrato = new Contrato();
		
		//contrato.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		contrato.setIdContrato(rs.getLong(ContratoConstantesHelper.ID_CONTRATO));
    		contrato.setNoContrato(rs.getString(ContratoConstantesHelper.NOCONTRATO));
    		contrato.setDigito(rs.getString(ContratoConstantesHelper.DIGITO));
    		contrato.setDv(rs.getString(ContratoConstantesHelper.DV));
    		contrato.setEstatus(rs.getString(ContratoConstantesHelper.ESTATUS));
    		contrato.setPerfil(rs.getString(ContratoConstantesHelper.PERFIL));
    		contrato.setPortafolio(rs.getString(ContratoConstantesHelper.PORTAFOLIO));
    		contrato.setCLABE(rs.getString(ContratoConstantesHelper.CLABE));
    		contrato.setSTipoPort(rs.getString(ContratoConstantesHelper.STIPOPORT));
    		contrato.setLibro(rs.getString(ContratoConstantesHelper.LIBRO));
    		contrato.setAsesorInversion(rs.getString(ContratoConstantesHelper.ASESORINVERSION));
    		contrato.setTipoManifiesto(rs.getString(ContratoConstantesHelper.TIPOMANIFIESTO));
    		contrato.setServicioInversion(rs.getString(ContratoConstantesHelper.SERVICIOINVERSION));
    		contrato.setCartaEjecucion1(rs.getString(ContratoConstantesHelper.CARTAEJECUCION1));
    		contrato.setFechaCartaEjecucion1(rs.getString(ContratoConstantesHelper.FECHACARTAEJECUCION1));
    		contrato.setCartaEjecucion2(rs.getString(ContratoConstantesHelper.CARTAEJECUCION2));
    		contrato.setFechaCartaEjecucion2(rs.getString(ContratoConstantesHelper.FECHACARTAEJECUCION2));
    		contrato.setJustificacionInstitucional(rs.getString(ContratoConstantesHelper.JUSTIFICACIONINSTITUCIONAL));
    		contrato.setFechaInstitucional(rs.getString(ContratoConstantesHelper.FECHAINSTITUCIONAL));
    		Sofisticado sofisticado = new Sofisticado();
    		sofisticado.setCveSofisticado(rs.getLong(ContratoConstantesHelper.CVE_SOFISTICADO));
    		sofisticado.setDescripcion(rs.getString(ContratoConstantesHelper.SOFISTICADO));
    		contrato.setSofisticado(sofisticado);
    		contrato.setJustificacionSofisticado(rs.getString(ContratoConstantesHelper.JUSTIFICACIONSOFISTICADO));
    		contrato.setFechaSofisticado(rs.getString(ContratoConstantesHelper.FECHASOFISTICADO));
    		Elegible elegible = new Elegible();
    		elegible.setCveElegible(rs.getLong(ContratoConstantesHelper.CVE_ELEGIBLE));
    		elegible.setDescripcion(rs.getString(ContratoConstantesHelper.ELEGIBLE));
    		contrato.setElegible(elegible);
    		contrato.setJustificacionElegible(rs.getString(ContratoConstantesHelper.JUSTIFICACIONELEGIBLE));
    		contrato.setFechaElegible(rs.getString(ContratoConstantesHelper.FECHAELEGIBLE));
    		Calificado calificado = new Calificado();
    		calificado.setCveCalificado(rs.getLong(ContratoConstantesHelper.CVE_CALIFICADO));
    		calificado.setDescripcion(rs.getString(ContratoConstantesHelper.CALIFICADO));
    		contrato.setCalificado(calificado);
    		contrato.setJustificacionCalificado(rs.getString(ContratoConstantesHelper.JUSTIFICACIONCALIFICADO));
    		contrato.setFechaCalificado(rs.getString(ContratoConstantesHelper.FECHACALIFICADO));
    		Discrecional discrecional = new Discrecional();
    		discrecional.setCveDiscrecional(rs.getLong(ContratoConstantesHelper.CVE_DISCRECIONAL));
    		discrecional.setDescripcion(rs.getString(ContratoConstantesHelper.DISCRECIONAL));
    		contrato.setDiscrecional(discrecional);
    		contrato.setJustificacionDiscrecional(rs.getString(ContratoConstantesHelper.JUSTIFICACIONDISCRECIONAL));
    		contrato.setFechaDiscrecional(rs.getString(ContratoConstantesHelper.FECHADISCRECIONAL));
    		ConocimientoExperiencia instrDeudaGub = new ConocimientoExperiencia();
    		instrDeudaGub.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		instrDeudaGub.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(instrDeudaGub);
    		ConocimientoExperiencia instrDeudaCorp = new ConocimientoExperiencia();
    		instrDeudaCorp.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		instrDeudaCorp.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(instrDeudaCorp);
    		ConocimientoExperiencia sociedadesInver = new ConocimientoExperiencia();
    		sociedadesInver.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		sociedadesInver.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(sociedadesInver);
    		ConocimientoExperiencia valoresEstruc = new ConocimientoExperiencia();
    		valoresEstruc.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		valoresEstruc.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(valoresEstruc);
    		ConocimientoExperiencia certBurFideicomisos = new ConocimientoExperiencia();
    		certBurFideicomisos.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		certBurFideicomisos.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(certBurFideicomisos);
    		ConocimientoExperiencia titulosOpcionales = new ConocimientoExperiencia();
    		titulosOpcionales.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		titulosOpcionales.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(titulosOpcionales);
    		ConocimientoExperiencia acciones = new ConocimientoExperiencia();
    		acciones.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		acciones.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(acciones);
    		ConocimientoExperiencia valoresExtr = new ConocimientoExperiencia();
    		valoresExtr.setCveConocimientoExperiencia(rs.getLong(ContratoConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		valoresExtr.setDescripcion(rs.getString(ContratoConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		contrato.setConocimientoExperiencia(valoresExtr);
    		contrato.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return contrato;
	}

}	

