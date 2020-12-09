package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class OrigenIngresos extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveOrigenIngresos;
	
	private String descripcion;
	
	public OrigenIngresos() {
	  super();
	}

	public Long getCveOrigenIngresos() {
	  return cveOrigenIngresos;
	}
	
	public void setCveOrigenIngresos(Long cveOrigenIngresos) {
	  this. cveOrigenIngresos = cveOrigenIngresos;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
