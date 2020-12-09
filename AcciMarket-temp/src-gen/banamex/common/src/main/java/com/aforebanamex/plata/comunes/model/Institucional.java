package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Institucional extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveInstitucional;
	
	private String descripcion;
	
	public Institucional() {
	  super();
	}

	public Long getCveInstitucional() {
	  return cveInstitucional;
	}
	
	public void setCveInstitucional(Long cveInstitucional) {
	  this. cveInstitucional = cveInstitucional;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
