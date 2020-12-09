package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class Sofisticado extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveSofisticado;
	
	private String descripcion;
	
	public Sofisticado() {
	  super();
	}

	public Long getCveSofisticado() {
	  return cveSofisticado;
	}
	
	public void setCveSofisticado(Long cveSofisticado) {
	  this. cveSofisticado = cveSofisticado;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
