package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.InstruccionEfectivoConstantesHelper;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;

import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;

public class InstruccionEfectivoMapper implements org.springframework.jdbc.core.RowMapper<InstruccionEfectivo> {

	@Override
	public InstruccionEfectivo mapRow(ResultSet rs, int arg1) throws SQLException {

		InstruccionEfectivo instruccionEfectivo = new InstruccionEfectivo();
		
		//instruccionEfectivo.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		instruccionEfectivo.setIdInstruccionEfectivo(rs.getLong(InstruccionEfectivoConstantesHelper.ID_INSTRUCCIONEFECTIVO));
    		Dummy sucursal = new Dummy();
    		sucursal.setCveDummy(rs.getLong(InstruccionEfectivoConstantesHelper.CVE_DUMMY));
    		sucursal.setDescripcion(rs.getString(InstruccionEfectivoConstantesHelper.DUMMY));
    		instruccionEfectivo.setDummy(sucursal);
    		Dummy operacion = new Dummy();
    		operacion.setCveDummy(rs.getLong(InstruccionEfectivoConstantesHelper.CVE_DUMMY));
    		operacion.setDescripcion(rs.getString(InstruccionEfectivoConstantesHelper.DUMMY));
    		instruccionEfectivo.setDummy(operacion);
    		Dummy tipo = new Dummy();
    		tipo.setCveDummy(rs.getLong(InstruccionEfectivoConstantesHelper.CVE_DUMMY));
    		tipo.setDescripcion(rs.getString(InstruccionEfectivoConstantesHelper.DUMMY));
    		instruccionEfectivo.setDummy(tipo);
    		Dummy medLiq = new Dummy();
    		medLiq.setCveDummy(rs.getLong(InstruccionEfectivoConstantesHelper.CVE_DUMMY));
    		medLiq.setDescripcion(rs.getString(InstruccionEfectivoConstantesHelper.DUMMY));
    		instruccionEfectivo.setDummy(medLiq);
    		instruccionEfectivo.setContrato(rs.getString(InstruccionEfectivoConstantesHelper.CONTRATO));
    		instruccionEfectivo.setSubtipoPortafolio(rs.getString(InstruccionEfectivoConstantesHelper.SUBTIPOPORTAFOLIO));
    		instruccionEfectivo.setDigito(rs.getString(InstruccionEfectivoConstantesHelper.DIGITO));
    		instruccionEfectivo.setTitular(rs.getString(InstruccionEfectivoConstantesHelper.TITULAR));
    		instruccionEfectivo.setSaldo(rs.getDouble(InstruccionEfectivoConstantesHelper.SALDO));
    		instruccionEfectivo.setContratoEgreso(rs.getString(InstruccionEfectivoConstantesHelper.CONTRATOEGRESO));
    		instruccionEfectivo.setDigitoEgreso(rs.getString(InstruccionEfectivoConstantesHelper.DIGITOEGRESO));
    		instruccionEfectivo.setSaldoInicialEgreso(rs.getDouble(InstruccionEfectivoConstantesHelper.SALDOINICIALEGRESO));
    		instruccionEfectivo.setSaldoCalculadoEgreso(rs.getDouble(InstruccionEfectivoConstantesHelper.SALDOCALCULADOEGRESO));
    		instruccionEfectivo.setContratoIngreso(rs.getString(InstruccionEfectivoConstantesHelper.CONTRATOINGRESO));
    		instruccionEfectivo.setDigitoIngreso(rs.getString(InstruccionEfectivoConstantesHelper.DIGITOINGRESO));
    		instruccionEfectivo.setSaldoInicialIngreso(rs.getDouble(InstruccionEfectivoConstantesHelper.SALDOINICIALINGRESO));
    		instruccionEfectivo.setSaldoCalculadoIngreso(rs.getDouble(InstruccionEfectivoConstantesHelper.SALDOCALCULADOINGRESO));
    		instruccionEfectivo.setImporteIngreso(rs.getDouble(InstruccionEfectivoConstantesHelper.IMPORTEINGRESO));
    		instruccionEfectivo.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return instruccionEfectivo;
	}

}	

