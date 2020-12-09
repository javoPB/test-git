package com.aforebanamex.plata.comunes.model;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(content = Include.NON_NULL)
public class NoSi extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	private Long cveNoSi;
	
	private String descripcion;
	
	public NoSi() {
	  super();
	}

	public Long getCveNoSi() {
	  return cveNoSi;
	}
	
	public void setCveNoSi(Long cveNoSi) {
	  this. cveNoSi = cveNoSi;
	}
	
	public String getDescripcion() {
	  return descripcion;
	}
	
	public void setDescripcion(String descripcion) {
	 this.descripcion = descripcion;
	}
	
}
