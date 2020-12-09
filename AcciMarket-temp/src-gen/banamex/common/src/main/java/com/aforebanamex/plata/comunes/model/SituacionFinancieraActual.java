package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class SituacionFinancieraActual extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveSituacionFinancieraActual;
	
	private String descripcion;
	
	public SituacionFinancieraActual() {
	  super();
	}

	public Long getCveSituacionFinancieraActual() {
	  return cveSituacionFinancieraActual;
	}
	
	public void setCveSituacionFinancieraActual(Long cveSituacionFinancieraActual) {
	  this. cveSituacionFinancieraActual = cveSituacionFinancieraActual;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
