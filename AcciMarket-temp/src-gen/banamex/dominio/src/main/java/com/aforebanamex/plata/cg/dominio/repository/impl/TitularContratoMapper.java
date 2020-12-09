package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.TitularContratoConstantesHelper;
import com.aforebanamex.plata.comunes.model.TitularContrato;

import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;
import com.aforebanamex.plata.comunes.model.NoSi;
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

public class TitularContratoMapper implements org.springframework.jdbc.core.RowMapper<TitularContrato> {

	@Override
	public TitularContrato mapRow(ResultSet rs, int arg1) throws SQLException {

		TitularContrato titularContrato = new TitularContrato();
		
		//titularContrato.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		titularContrato.setIdTitularContrato(rs.getLong(TitularContratoConstantesHelper.ID_TITULARCONTRATO));
    		titularContrato.setNombre(rs.getString(TitularContratoConstantesHelper.NOMBRE));
    		Dummy actividad = new Dummy();
    		actividad.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		actividad.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(actividad);
    		titularContrato.setNoClienteBanamex(rs.getString(TitularContratoConstantesHelper.NOCLIENTEBANAMEX));
    		Dummy inst = new Dummy();
    		inst.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		inst.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(inst);
    		titularContrato.setNoCta(rs.getString(TitularContratoConstantesHelper.NOCTA));
    		titularContrato.setSuc(rs.getString(TitularContratoConstantesHelper.SUC));
    		titularContrato.setClabe(rs.getString(TitularContratoConstantesHelper.CLABE));
    		titularContrato.setCalle(rs.getString(TitularContratoConstantesHelper.CALLE));
    		titularContrato.setNoExt(rs.getString(TitularContratoConstantesHelper.NOEXT));
    		titularContrato.setNoInterior(rs.getString(TitularContratoConstantesHelper.NOINTERIOR));
    		MexicoExtrajero mexExtr = new MexicoExtrajero();
    		mexExtr.setCveMexicoExtrajero(rs.getLong(TitularContratoConstantesHelper.CVE_MEXICO_EXTRAJERO));
    		mexExtr.setDescripcion(rs.getString(TitularContratoConstantesHelper.MEXICO_EXTRAJERO));
    		titularContrato.setMexicoExtrajero(mexExtr);
    		titularContrato.setCp(rs.getString(TitularContratoConstantesHelper.CP));
    		titularContrato.setEstado(rs.getString(TitularContratoConstantesHelper.ESTADO));
    		titularContrato.setDelMpo(rs.getString(TitularContratoConstantesHelper.DELMPO));
    		titularContrato.setCiudad(rs.getString(TitularContratoConstantesHelper.CIUDAD));
    		titularContrato.setColonia(rs.getString(TitularContratoConstantesHelper.COLONIA));
    		NoSi correspondencia = new NoSi();
    		correspondencia.setCveNoSi(rs.getLong(TitularContratoConstantesHelper.CVE_NO_SI));
    		correspondencia.setDescripcion(rs.getString(TitularContratoConstantesHelper.NO_SI));
    		titularContrato.setNoSi(correspondencia);
    		titularContrato.setRfc(rs.getString(TitularContratoConstantesHelper.RFC));
    		titularContrato.setCurp(rs.getString(TitularContratoConstantesHelper.CURP));
    		titularContrato.setFecNac(rs.getDate(TitularContratoConstantesHelper.FECNAC));
    		Dummy escolaridad = new Dummy();
    		escolaridad.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		escolaridad.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(escolaridad);
    		Dummy edoCivil = new Dummy();
    		edoCivil.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		edoCivil.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(edoCivil);
    		Dummy sexo = new Dummy();
    		sexo.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		sexo.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(sexo);
    		Dummy tipoVivienda = new Dummy();
    		tipoVivienda.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		tipoVivienda.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(tipoVivienda);
    		Dummy calidadMigratoria = new Dummy();
    		calidadMigratoria.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		calidadMigratoria.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(calidadMigratoria);
    		Dummy paisResidencia = new Dummy();
    		paisResidencia.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		paisResidencia.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(paisResidencia);
    		Dummy nacionalidad = new Dummy();
    		nacionalidad.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		nacionalidad.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(nacionalidad);
    		Dummy paisNac = new Dummy();
    		paisNac.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		paisNac.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(paisNac);
    		Dummy edoNac = new Dummy();
    		edoNac.setCveDummy(rs.getLong(TitularContratoConstantesHelper.CVE_DUMMY));
    		edoNac.setDescripcion(rs.getString(TitularContratoConstantesHelper.DUMMY));
    		titularContrato.setDummy(edoNac);
    		NoSi empleadoGroFinBanamex = new NoSi();
    		empleadoGroFinBanamex.setCveNoSi(rs.getLong(TitularContratoConstantesHelper.CVE_NO_SI));
    		empleadoGroFinBanamex.setDescripcion(rs.getString(TitularContratoConstantesHelper.NO_SI));
    		titularContrato.setNoSi(empleadoGroFinBanamex);
    		titularContrato.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return titularContrato;
	}

}	

