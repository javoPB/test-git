package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Dummy extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveDummy;
	
	private String descripcion;
	
	public Dummy() {
	  super();
	}

	public Long getCveDummy() {
	  return cveDummy;
	}
	
	public void setCveDummy(Long cveDummy) {
	  this. cveDummy = cveDummy;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
