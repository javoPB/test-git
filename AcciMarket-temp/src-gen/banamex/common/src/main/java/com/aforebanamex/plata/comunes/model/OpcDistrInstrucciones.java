package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class OpcDistrInstrucciones extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveOpcDistrInstrucciones;
	
	private String descripcion;
	
	public OpcDistrInstrucciones() {
	  super();
	}

	public Long getCveOpcDistrInstrucciones() {
	  return cveOpcDistrInstrucciones;
	}
	
	public void setCveOpcDistrInstrucciones(Long cveOpcDistrInstrucciones) {
	  this. cveOpcDistrInstrucciones = cveOpcDistrInstrucciones;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
