package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.ReperfilamientoPersonaFisicaConstantesHelper;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;

import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

public class ReperfilamientoPersonaFisicaMapper implements org.springframework.jdbc.core.RowMapper<ReperfilamientoPersonaFisica> {

	@Override
	public ReperfilamientoPersonaFisica mapRow(ResultSet rs, int arg1) throws SQLException {

		ReperfilamientoPersonaFisica reperfilamientoPersonaFisica = new ReperfilamientoPersonaFisica();
		
		//reperfilamientoPersonaFisica.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		reperfilamientoPersonaFisica.setIdReperfilamientoPersonaFisica(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.ID_REPERFILAMIENTOPERSONAFISICA));
    		Contrato contrato = new Contrato();
    		contrato.setIdContrato(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.ID_CONTRATO));
    		contrato.setNoContrato(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.CONTRATO));
    		reperfilamientoPersonaFisica.setContrato(contrato);
    				
    		reperfilamientoPersonaFisica.setNombre(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.NOMBRE));
    		reperfilamientoPersonaFisica.setPerfilActual(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PERFILACTUAL));
    		Dummy personaPerfilar = new Dummy();
    		personaPerfilar.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		personaPerfilar.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(personaPerfilar);
    		reperfilamientoPersonaFisica.setPorcentajeLiquidez(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PORCENTAJELIQUIDEZ));
    		reperfilamientoPersonaFisica.setMontoLiquidez(rs.getDate(ReperfilamientoPersonaFisicaConstantesHelper.MONTOLIQUIDEZ));
    		reperfilamientoPersonaFisica.setPorcentajeCortoPlazo(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PORCENTAJECORTOPLAZO));
    		reperfilamientoPersonaFisica.setMontoCortoPlazo(rs.getDouble(ReperfilamientoPersonaFisicaConstantesHelper.MONTOCORTOPLAZO));
    		reperfilamientoPersonaFisica.setPorcentajeLargoPlazo(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PORCENTAJELARGOPLAZO));
    		reperfilamientoPersonaFisica.setMontoLargoPlazo(rs.getDouble(ReperfilamientoPersonaFisicaConstantesHelper.MONTOLARGOPLAZO));
    		reperfilamientoPersonaFisica.setPorcentajePatrimonioLiquidoTotal(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PORCENTAJEPATRIMONIOLIQUIDOTOTAL));
    		reperfilamientoPersonaFisica.setMontoPatrimonioLiquidoTotal(rs.getDouble(ReperfilamientoPersonaFisicaConstantesHelper.MONTOPATRIMONIOLIQUIDOTOTAL));
    		Dummy intervaloEdad = new Dummy();
    		intervaloEdad.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		intervaloEdad.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(intervaloEdad);
    		Dummy nivelEstudios = new Dummy();
    		nivelEstudios.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		nivelEstudios.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(nivelEstudios);
    		Dummy ocupacion = new Dummy();
    		ocupacion.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		ocupacion.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(ocupacion);
    		Dummy actividadProfesionalAnterior = new Dummy();
    		actividadProfesionalAnterior.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		actividadProfesionalAnterior.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(actividadProfesionalAnterior);
    		Dummy actividadProfesionalActual = new Dummy();
    		actividadProfesionalActual.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		actividadProfesionalActual.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(actividadProfesionalActual);
    		NoSi actividadRelacionadaInversiones = new NoSi();
    		actividadRelacionadaInversiones.setCveNoSi(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_NO_SI));
    		actividadRelacionadaInversiones.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.NO_SI));
    		reperfilamientoPersonaFisica.setNoSi(actividadRelacionadaInversiones);
    		Dummy estrategiaCliente = new Dummy();
    		estrategiaCliente.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		estrategiaCliente.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(estrategiaCliente);
    		Dummy clienteAsesoria = new Dummy();
    		clienteAsesoria.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		clienteAsesoria.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(clienteAsesoria);
    		ConocimientoExperiencia experienciaDeudaGub = new ConocimientoExperiencia();
    		experienciaDeudaGub.setCveConocimientoExperiencia(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		experienciaDeudaGub.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		reperfilamientoPersonaFisica.setConocimientoExperiencia(experienciaDeudaGub);
    		Dummy frecuenciaDeudaGub = new Dummy();
    		frecuenciaDeudaGub.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		frecuenciaDeudaGub.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(frecuenciaDeudaGub);
    		Dummy plazoDeudaGub = new Dummy();
    		plazoDeudaGub.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		plazoDeudaGub.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(plazoDeudaGub);
    		Dummy volumenDeudaGub = new Dummy();
    		volumenDeudaGub.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		volumenDeudaGub.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(volumenDeudaGub);
    		ConocimientoExperiencia expDeudaCorp = new ConocimientoExperiencia();
    		expDeudaCorp.setCveConocimientoExperiencia(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_CONOCIMIENTO_EXPERIENCIA));
    		expDeudaCorp.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.CONOCIMIENTO_EXPERIENCIA));
    		reperfilamientoPersonaFisica.setConocimientoExperiencia(expDeudaCorp);
    		Dummy frecuenciaDeudaCorp = new Dummy();
    		frecuenciaDeudaCorp.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		frecuenciaDeudaCorp.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(frecuenciaDeudaCorp);
    		Dummy plazoDeudaCorp = new Dummy();
    		plazoDeudaCorp.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		plazoDeudaCorp.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(plazoDeudaCorp);
    		Dummy volumenDeudaCorp = new Dummy();
    		volumenDeudaCorp.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		volumenDeudaCorp.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(volumenDeudaCorp);
    		Dummy expSociedadesInv = new Dummy();
    		expSociedadesInv.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		expSociedadesInv.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(expSociedadesInv);
    		Dummy frecuenciaSociedadesInv = new Dummy();
    		frecuenciaSociedadesInv.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		frecuenciaSociedadesInv.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(frecuenciaSociedadesInv);
    		Dummy plazoSociedadesInv = new Dummy();
    		plazoSociedadesInv.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		plazoSociedadesInv.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(plazoSociedadesInv);
    		Dummy volumenSociedadesInv = new Dummy();
    		volumenSociedadesInv.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		volumenSociedadesInv.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(volumenSociedadesInv);
    		Dummy expValoresEst = new Dummy();
    		expValoresEst.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		expValoresEst.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(expValoresEst);
    		Dummy frecuenciaValoresEst = new Dummy();
    		frecuenciaValoresEst.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		frecuenciaValoresEst.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(frecuenciaValoresEst);
    		Dummy plazoValoresEst = new Dummy();
    		plazoValoresEst.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		plazoValoresEst.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(plazoValoresEst);
    		Dummy volumenValoresEst = new Dummy();
    		volumenValoresEst.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		volumenValoresEst.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(volumenValoresEst);
    		Dummy expCertificadosBur = new Dummy();
    		expCertificadosBur.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		expCertificadosBur.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(expCertificadosBur);
    		Dummy frecuenciaCertificadosBur = new Dummy();
    		frecuenciaCertificadosBur.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		frecuenciaCertificadosBur.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(frecuenciaCertificadosBur);
    		Dummy plazoCertificadosBur = new Dummy();
    		plazoCertificadosBur.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		plazoCertificadosBur.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(plazoCertificadosBur);
    		Dummy volumenCertificadosBur = new Dummy();
    		volumenCertificadosBur.setCveDummy(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_DUMMY));
    		volumenCertificadosBur.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.DUMMY));
    		reperfilamientoPersonaFisica.setDummy(volumenCertificadosBur);
    		NoSi tieneLimitante = new NoSi();
    		tieneLimitante.setCveNoSi(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_NO_SI));
    		tieneLimitante.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.NO_SI));
    		reperfilamientoPersonaFisica.setNoSi(tieneLimitante);
    		SituacionFinancieraActual porcentajeTotalPatrimonio = new SituacionFinancieraActual();
    		porcentajeTotalPatrimonio.setCveSituacionFinancieraActual(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_SITUACION_FINANCIERA_ACTUAL));
    		porcentajeTotalPatrimonio.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.SITUACION_FINANCIERA_ACTUAL));
    		reperfilamientoPersonaFisica.setSituacionFinancieraActual(porcentajeTotalPatrimonio);
    		SituacionFinancieraActual porcentajeIngresoAnual = new SituacionFinancieraActual();
    		porcentajeIngresoAnual.setCveSituacionFinancieraActual(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_SITUACION_FINANCIERA_ACTUAL));
    		porcentajeIngresoAnual.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.SITUACION_FINANCIERA_ACTUAL));
    		reperfilamientoPersonaFisica.setSituacionFinancieraActual(porcentajeIngresoAnual);
    		SituacionFinancieraActual porcentajeInversiones = new SituacionFinancieraActual();
    		porcentajeInversiones.setCveSituacionFinancieraActual(rs.getLong(ReperfilamientoPersonaFisicaConstantesHelper.CVE_SITUACION_FINANCIERA_ACTUAL));
    		porcentajeInversiones.setDescripcion(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.SITUACION_FINANCIERA_ACTUAL));
    		reperfilamientoPersonaFisica.setSituacionFinancieraActual(porcentajeInversiones);
    		reperfilamientoPersonaFisica.setPerfil(rs.getString(ReperfilamientoPersonaFisicaConstantesHelper.PERFIL));
    		reperfilamientoPersonaFisica.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return reperfilamientoPersonaFisica;
	}

}	

