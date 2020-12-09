package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Elegible extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveElegible;
	
	private String descripcion;
	
	public Elegible() {
	  super();
	}

	public Long getCveElegible() {
	  return cveElegible;
	}
	
	public void setCveElegible(Long cveElegible) {
	  this. cveElegible = cveElegible;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
