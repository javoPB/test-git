package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Relacion extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveRelacion;
	
	private String descripcion;
	
	public Relacion() {
	  super();
	}

	public Long getCveRelacion() {
	  return cveRelacion;
	}
	
	public void setCveRelacion(Long cveRelacion) {
	  this. cveRelacion = cveRelacion;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
