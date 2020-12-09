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


@Bitacora(tipoElemento = "FIRMAAUTORIZADA")
public class FirmaAutorizada extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idFirmaAutorizada;
	
	@BitacoraField
	@Size(min=0,max=99, message="El nombre es incorrecto.")
	private String nombre;
	@BitacoraField
	@Size(min=0,max=99, message="El appaterno es incorrecto.")
	private String apPaterno;
	@BitacoraField
	@Size(min=0,max=99, message="El apmaterno es incorrecto.")
	private String apMaterno;
	@BitacoraField
	@Size(min=0,max=99, message="El noescr es incorrecto.")
	private String noEscr;
	@BitacoraField
	@Size(min=0,max=99, message="El nonot es incorrecto.")
	private String noNot;
	
	private Boolean estadoLogico;

	public FirmaAutorizada(){}
	
	public FirmaAutorizada(long idFirmaAutorizada, 
	String nombre,
	String apPaterno,
	String apMaterno,
	String noEscr,
	String noNot,
	Boolean estadoLogico
	) {
		super();
		this.idFirmaAutorizada = idFirmaAutorizada;
		this.nombre = nombre;
		this.apPaterno = apPaterno;
		this.apMaterno = apMaterno;
		this.noEscr = noEscr;
		this.noNot = noNot;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdFirmaAutorizada() {
		return idFirmaAutorizada;
	}
	public void setIdFirmaAutorizada(long idFirmaAutorizada) {
		this.idFirmaAutorizada = idFirmaAutorizada;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public String getNombre() {
		return nombre;
	}
	public String getApPaterno() {
		return apPaterno;
	}
	public String getApMaterno() {
		return apMaterno;
	}
	public String getNoEscr() {
		return noEscr;
	}
	public String getNoNot() {
		return noNot;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setApPaterno(String apPaterno) {
		this.apPaterno = apPaterno;
	}
	public void setApMaterno(String apMaterno) {
		this.apMaterno = apMaterno;
	}
	public void setNoEscr(String noEscr) {
		this.noEscr = noEscr;
	}
	public void setNoNot(String noNot) {
		this.noNot = noNot;
	}
}
