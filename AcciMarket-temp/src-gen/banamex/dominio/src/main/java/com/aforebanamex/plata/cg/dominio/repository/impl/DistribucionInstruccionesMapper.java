package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.aforebanamex.plata.base.helper.DistribucionInstruccionesConstantesHelper;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;

import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;
import com.aforebanamex.plata.comunes.model.Dummy;

public class DistribucionInstruccionesMapper implements org.springframework.jdbc.core.RowMapper<DistribucionInstrucciones> {

	@Override
	public DistribucionInstrucciones mapRow(ResultSet rs, int arg1) throws SQLException {

		DistribucionInstrucciones distribucionInstrucciones = new DistribucionInstrucciones();
		
		//distribucionInstrucciones.setIdSubproceso(rs.getLong(InformeConstantesHelper.CVE_SUBPROCESO_ID));
		distribucionInstrucciones.setIdDistribucionInstrucciones(rs.getLong(DistribucionInstruccionesConstantesHelper.ID_DISTRIBUCIONINSTRUCCIONES));
    		OpcDistrInstrucciones opcDistrInstrucciones = new OpcDistrInstrucciones();
    		opcDistrInstrucciones.setCveOpcDistrInstrucciones(rs.getLong(DistribucionInstruccionesConstantesHelper.CVE_OPC_DISTR_INSTRUCCIONES));
    		opcDistrInstrucciones.setDescripcion(rs.getString(DistribucionInstruccionesConstantesHelper.OPC_DISTR_INSTRUCCIONES));
    		distribucionInstrucciones.setOpcDistrInstrucciones(opcDistrInstrucciones);
    		distribucionInstrucciones.setCapturados(rs.getBoolean(DistribucionInstruccionesConstantesHelper.CAPTURADOS));
    		distribucionInstrucciones.setContrato(rs.getString(DistribucionInstruccionesConstantesHelper.CONTRATO));
    		distribucionInstrucciones.setFolioMov(rs.getString(DistribucionInstruccionesConstantesHelper.FOLIOMOV));
    		distribucionInstrucciones.setDigito(rs.getString(DistribucionInstruccionesConstantesHelper.DIGITO));
    		distribucionInstrucciones.setImporteNeto(rs.getString(DistribucionInstruccionesConstantesHelper.IMPORTENETO));
    		distribucionInstrucciones.setDepositos(rs.getBoolean(DistribucionInstruccionesConstantesHelper.DEPOSITOS));
    		distribucionInstrucciones.setRetiros(rs.getBoolean(DistribucionInstruccionesConstantesHelper.RETIROS));
    		Dummy sucursal = new Dummy();
    		sucursal.setCveDummy(rs.getLong(DistribucionInstruccionesConstantesHelper.CVE_DUMMY));
    		sucursal.setDescripcion(rs.getString(DistribucionInstruccionesConstantesHelper.DUMMY));
    		distribucionInstrucciones.setDummy(sucursal);
    		distribucionInstrucciones.setEstadoLogico(rs.getBoolean("ESTADO_LOGICO"));
		
		return distribucionInstrucciones;
	}

}	

