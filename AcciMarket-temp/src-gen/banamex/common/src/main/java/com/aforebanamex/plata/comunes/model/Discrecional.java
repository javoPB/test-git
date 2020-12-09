package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Discrecional extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveDiscrecional;
	
	private String descripcion;
	
	public Discrecional() {
	  super();
	}

	public Long getCveDiscrecional() {
	  return cveDiscrecional;
	}
	
	public void setCveDiscrecional(Long cveDiscrecional) {
	  this. cveDiscrecional = cveDiscrecional;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
