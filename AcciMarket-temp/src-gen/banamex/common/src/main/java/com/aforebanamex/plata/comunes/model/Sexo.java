package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Sexo extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveSexo;
	
	private String descripcion;
	
	public Sexo() {
	  super();
	}

	public Long getCveSexo() {
	  return cveSexo;
	}
	
	public void setCveSexo(Long cveSexo) {
	  this. cveSexo = cveSexo;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
