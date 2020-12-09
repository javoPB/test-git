package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class ConocimientoExperiencia extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveConocimientoExperiencia;
	
	private String descripcion;
	
	public ConocimientoExperiencia() {
	  super();
	}

	public Long getCveConocimientoExperiencia() {
	  return cveConocimientoExperiencia;
	}
	
	public void setCveConocimientoExperiencia(Long cveConocimientoExperiencia) {
	  this. cveConocimientoExperiencia = cveConocimientoExperiencia;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
