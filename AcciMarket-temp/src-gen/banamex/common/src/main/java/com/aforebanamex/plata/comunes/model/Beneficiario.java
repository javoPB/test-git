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


@Bitacora(tipoElemento = "BENEFICIARIO")
public class Beneficiario extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idBeneficiario;
	
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
	@Size(min=0,max=99, message="El porcentaje es incorrecto.")
	private int porcentaje;
	
	private Boolean estadoLogico;

	public Beneficiario(){}
	
	public Beneficiario(long idBeneficiario, 
	String nombre,
	String apPaterno,
	String apMaterno,
	int porcentaje,
	Boolean estadoLogico
	) {
		super();
		this.idBeneficiario = idBeneficiario;
		this.nombre = nombre;
		this.apPaterno = apPaterno;
		this.apMaterno = apMaterno;
		this.porcentaje = porcentaje;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdBeneficiario() {
		return idBeneficiario;
	}
	public void setIdBeneficiario(long idBeneficiario) {
		this.idBeneficiario = idBeneficiario;
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
	public int getPorcentaje() {
		return porcentaje;
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
	public void setPorcentaje(int porcentaje) {
		this.porcentaje = porcentaje;
	}
}
