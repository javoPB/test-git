package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.BeneficiarioConstantesHelper;
import com.aforebanamex.plata.comunes.model.Beneficiario;


public class BeneficiarioMapper implements org.springframework.jdbc.core.RowMapper<Beneficiario> {

	@Override
	public Beneficiario mapRow(ResultSet rs, int arg1) throws SQLException {

		Beneficiario beneficiario = new Beneficiario();
		
		//beneficiario.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		beneficiario.setIdBeneficiario(rs.getLong(BeneficiarioConstantesHelper.ID_BENEFICIARIO));
    		beneficiario.setNombre(rs.getString(BeneficiarioConstantesHelper.NOMBRE));
    		beneficiario.setApPaterno(rs.getString(BeneficiarioConstantesHelper.APPATERNO));
    		beneficiario.setApMaterno(rs.getString(BeneficiarioConstantesHelper.APMATERNO));
    		beneficiario.setPorcentaje(rs.getInt(BeneficiarioConstantesHelper.PORCENTAJE));
    		beneficiario.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return beneficiario;
	}

}	

