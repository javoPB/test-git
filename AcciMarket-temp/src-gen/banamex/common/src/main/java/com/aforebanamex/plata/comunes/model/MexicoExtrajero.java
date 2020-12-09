package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class MexicoExtrajero extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveMexicoExtrajero;
	
	private String descripcion;
	
	public MexicoExtrajero() {
	  super();
	}

	public Long getCveMexicoExtrajero() {
	  return cveMexicoExtrajero;
	}
	
	public void setCveMexicoExtrajero(Long cveMexicoExtrajero) {
	  this. cveMexicoExtrajero = cveMexicoExtrajero;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
