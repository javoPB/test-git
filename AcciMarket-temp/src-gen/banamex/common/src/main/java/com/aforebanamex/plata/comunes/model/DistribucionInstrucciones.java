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

import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;
import com.aforebanamex.plata.comunes.model.Dummy;

@Bitacora(tipoElemento = "DISTRIBUCIONINSTRUCCIONES")
public class DistribucionInstrucciones extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idDistribucionInstrucciones;
	
	@NotNull(message = "El campo NOMBRE es obligatorio")
	private OpcDistrInstrucciones opcDistrInstrucciones;
	@BitacoraField
	private Boolean capturados;
	@BitacoraField
	@Size(min=0,max=99, message="El contrato es incorrecto.")
	private String contrato;
	@BitacoraField
	@Size(min=0,max=99, message="El foliomov es incorrecto.")
	private String folioMov;
	@BitacoraField
	@Size(min=0,max=99, message="El digito es incorrecto.")
	private String digito;
	@BitacoraField
	@Size(min=0,max=99, message="El importeneto es incorrecto.")
	private String importeNeto;
	@BitacoraField
	private Boolean depositos;
	@BitacoraField
	private Boolean retiros;
	@NotNull(message = "El campo Sucursal es obligatorio")
	private Dummy dummy;
	
	private Boolean estadoLogico;

	public DistribucionInstrucciones(){}
	
	public DistribucionInstrucciones(long idDistribucionInstrucciones, 
	OpcDistrInstrucciones opcDistrInstrucciones,
	Boolean capturados,
	String contrato,
	String folioMov,
	String digito,
	String importeNeto,
	Boolean depositos,
	Boolean retiros,
	Dummy dummy,
	Boolean estadoLogico
	) {
		super();
		this.idDistribucionInstrucciones = idDistribucionInstrucciones;
		this.opcDistrInstrucciones = opcDistrInstrucciones;
		this.capturados = capturados;
		this.contrato = contrato;
		this.folioMov = folioMov;
		this.digito = digito;
		this.importeNeto = importeNeto;
		this.depositos = depositos;
		this.retiros = retiros;
		this.dummy = dummy;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdDistribucionInstrucciones() {
		return idDistribucionInstrucciones;
	}
	public void setIdDistribucionInstrucciones(long idDistribucionInstrucciones) {
		this.idDistribucionInstrucciones = idDistribucionInstrucciones;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public OpcDistrInstrucciones getOpcDistrInstrucciones() {
		return opcDistrInstrucciones;
	}
	public Boolean getCapturados() {
		return capturados;
	}
	public String getContrato() {
		return contrato;
	}
	public String getFolioMov() {
		return folioMov;
	}
	public String getDigito() {
		return digito;
	}
	public String getImporteNeto() {
		return importeNeto;
	}
	public Boolean getDepositos() {
		return depositos;
	}
	public Boolean getRetiros() {
		return retiros;
	}
	public Dummy getDummy() {
		return dummy;
	}

	public void setOpcDistrInstrucciones(OpcDistrInstrucciones opcDistrInstrucciones) {
		this.opcDistrInstrucciones = opcDistrInstrucciones;
	}
	public void setCapturados(Boolean capturados) {
		this.capturados = capturados;
	}
	public void setContrato(String contrato) {
		this.contrato = contrato;
	}
	public void setFolioMov(String folioMov) {
		this.folioMov = folioMov;
	}
	public void setDigito(String digito) {
		this.digito = digito;
	}
	public void setImporteNeto(String importeNeto) {
		this.importeNeto = importeNeto;
	}
	public void setDepositos(Boolean depositos) {
		this.depositos = depositos;
	}
	public void setRetiros(Boolean retiros) {
		this.retiros = retiros;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
}
