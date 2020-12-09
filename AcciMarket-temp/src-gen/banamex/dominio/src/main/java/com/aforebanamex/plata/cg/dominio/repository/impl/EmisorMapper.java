package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.EmisorConstantesHelper;
import com.aforebanamex.plata.comunes.model.Emisor;

import com.aforebanamex.plata.comunes.model.Relacion;

public class EmisorMapper implements org.springframework.jdbc.core.RowMapper<Emisor> {

	@Override
	public Emisor mapRow(ResultSet rs, int arg1) throws SQLException {

		Emisor emisor = new Emisor();
		
		//emisor.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		emisor.setIdEmisor(rs.getLong(EmisorConstantesHelper.ID_EMISOR));
    		emisor.setEmisor(rs.getString(EmisorConstantesHelper.EMISOR));
    		Relacion relacion = new Relacion();
    		relacion.setCveRelacion(rs.getLong(EmisorConstantesHelper.CVE_RELACION));
    		relacion.setDescripcion(rs.getString(EmisorConstantesHelper.RELACION));
    		emisor.setRelacion(relacion);
    		emisor.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return emisor;
	}

}	

