package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.LimitanteConstantesHelper;
import com.aforebanamex.plata.comunes.model.Limitante;


public class LimitanteMapper implements org.springframework.jdbc.core.RowMapper<Limitante> {

	@Override
	public Limitante mapRow(ResultSet rs, int arg1) throws SQLException {

		Limitante limitante = new Limitante();
		
		//limitante.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		limitante.setIdLimitante(rs.getLong(LimitanteConstantesHelper.ID_LIMITANTE));
    		limitante.setGrupoInstrumento(rs.getString(LimitanteConstantesHelper.GRUPOINSTRUMENTO));
    		limitante.setTipoValor(rs.getString(LimitanteConstantesHelper.TIPOVALOR));
    		limitante.setEmisoras(rs.getString(LimitanteConstantesHelper.EMISORAS));
    		limitante.setTipoValorEmisora(rs.getString(LimitanteConstantesHelper.TIPOVALOREMISORA));
    		limitante.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return limitante;
	}

}	

