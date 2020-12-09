package com.aforebanamex.plata.comunes.model;

import java.io.Serializable;
import java.util.List;
import java.util.Date;
import java.sql.Timestamp;

import javax.validation.Valid;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Size;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonFormat;

import com.aforebanamex.plata.base.model.BaseSerizalizableModel;
import com.aforebanamex.plata.comunes.annotations.Bitacora;
import com.aforebanamex.plata.comunes.annotations.BitacoraField;

import com.aforebanamex.plata.comunes.model.Relacion;

@Bitacora(tipoElemento = "EMISOR")
public class Emisor extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idEmisor;
	
	@BitacoraField
	@Size(min=0,max=99, message="El emisor es incorrecto.")
	private String emisor;
	@NotNull(message = "El campo Relación es obligatorio")
	private Relacion relacion;
	
	private Boolean estadoLogico;

	public Emisor(){}
	
	public Emisor(long idEmisor, 
	String emisor,
	Relacion relacion,
	Boolean estadoLogico
	) {
		super();
		this.idEmisor = idEmisor;
		this.emisor = emisor;
		this.relacion = relacion;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdEmisor() {
		return idEmisor;
	}
	public void setIdEmisor(long idEmisor) {
		this.idEmisor = idEmisor;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public String getEmisor() {
		return emisor;
	}
	public Relacion getRelacion() {
		return relacion;
	}

	public void setEmisor(String emisor) {
		this.emisor = emisor;
	}
	public void setRelacion(Relacion relacion) {
		this.relacion = relacion;
	}
}
