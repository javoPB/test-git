package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.FirmaAutorizadaConstantesHelper;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;


public class FirmaAutorizadaMapper implements org.springframework.jdbc.core.RowMapper<FirmaAutorizada> {

	@Override
	public FirmaAutorizada mapRow(ResultSet rs, int arg1) throws SQLException {

		FirmaAutorizada firmaAutorizada = new FirmaAutorizada();
		
		//firmaAutorizada.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		firmaAutorizada.setIdFirmaAutorizada(rs.getLong(FirmaAutorizadaConstantesHelper.ID_FIRMAAUTORIZADA));
    		firmaAutorizada.setNombre(rs.getString(FirmaAutorizadaConstantesHelper.NOMBRE));
    		firmaAutorizada.setApPaterno(rs.getString(FirmaAutorizadaConstantesHelper.APPATERNO));
    		firmaAutorizada.setApMaterno(rs.getString(FirmaAutorizadaConstantesHelper.APMATERNO));
    		firmaAutorizada.setNoEscr(rs.getString(FirmaAutorizadaConstantesHelper.NOESCR));
    		firmaAutorizada.setNoNot(rs.getString(FirmaAutorizadaConstantesHelper.NONOT));
    		firmaAutorizada.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return firmaAutorizada;
	}

}	

