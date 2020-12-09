package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Calificado extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveCalificado;
	
	private String descripcion;
	
	public Calificado() {
	  super();
	}

	public Long getCveCalificado() {
	  return cveCalificado;
	}
	
	public void setCveCalificado(Long cveCalificado) {
	  this. cveCalificado = cveCalificado;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
