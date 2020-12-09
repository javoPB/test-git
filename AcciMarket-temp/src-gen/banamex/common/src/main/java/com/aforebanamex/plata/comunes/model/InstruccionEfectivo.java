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

import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;

@Bitacora(tipoElemento = "INSTRUCCIONEFECTIVO")
public class InstruccionEfectivo extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idInstruccionEfectivo;
	
	@NotNull(message = "El campo Sucursal es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Operación es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Tipo Operación es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Med. Liquidación es obligatorio")
	private Dummy dummy;
	@BitacoraField
	@Size(min=0,max=99, message="El contrato es incorrecto.")
	private String contrato;
	@BitacoraField
	@Size(min=0,max=99, message="El subtipoportafolio es incorrecto.")
	private String subtipoPortafolio;
	@BitacoraField
	@Size(min=0,max=99, message="El digito es incorrecto.")
	private String digito;
	@BitacoraField
	@Size(min=0,max=99, message="El titular es incorrecto.")
	private String titular;
	@BitacoraField
	@Size(min=0,max=99, message="El saldo es incorrecto.")
	private Double saldo;
	@BitacoraField
	@Size(min=0,max=99, message="El contratoegreso es incorrecto.")
	private String contratoEgreso;
	@BitacoraField
	@Size(min=0,max=99, message="El digitoegreso es incorrecto.")
	private String digitoEgreso;
	@BitacoraField
	@Size(min=0,max=99, message="El saldoinicialegreso es incorrecto.")
	private Double saldoInicialEgreso;
	@BitacoraField
	@Size(min=0,max=99, message="El saldocalculadoegreso es incorrecto.")
	private Double saldoCalculadoEgreso;
	@BitacoraField
	@Size(min=0,max=99, message="El contratoingreso es incorrecto.")
	private String contratoIngreso;
	@BitacoraField
	@Size(min=0,max=99, message="El digitoingreso es incorrecto.")
	private String digitoIngreso;
	@BitacoraField
	@Size(min=0,max=99, message="El saldoinicialingreso es incorrecto.")
	private Double saldoInicialIngreso;
	@BitacoraField
	@Size(min=0,max=99, message="El saldocalculadoingreso es incorrecto.")
	private Double saldoCalculadoIngreso;
	@BitacoraField
	@Size(min=0,max=99, message="El importeingreso es incorrecto.")
	private Double importeIngreso;
	
	private Boolean estadoLogico;

	public InstruccionEfectivo(){}
	
	public InstruccionEfectivo(long idInstruccionEfectivo, 
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	String contrato,
	String subtipoPortafolio,
	String digito,
	String titular,
	Double saldo,
	String contratoEgreso,
	String digitoEgreso,
	Double saldoInicialEgreso,
	Double saldoCalculadoEgreso,
	String contratoIngreso,
	String digitoIngreso,
	Double saldoInicialIngreso,
	Double saldoCalculadoIngreso,
	Double importeIngreso,
	Boolean estadoLogico
	) {
		super();
		this.idInstruccionEfectivo = idInstruccionEfectivo;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.contrato = contrato;
		this.subtipoPortafolio = subtipoPortafolio;
		this.digito = digito;
		this.titular = titular;
		this.saldo = saldo;
		this.contratoEgreso = contratoEgreso;
		this.digitoEgreso = digitoEgreso;
		this.saldoInicialEgreso = saldoInicialEgreso;
		this.saldoCalculadoEgreso = saldoCalculadoEgreso;
		this.contratoIngreso = contratoIngreso;
		this.digitoIngreso = digitoIngreso;
		this.saldoInicialIngreso = saldoInicialIngreso;
		this.saldoCalculadoIngreso = saldoCalculadoIngreso;
		this.importeIngreso = importeIngreso;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdInstruccionEfectivo() {
		return idInstruccionEfectivo;
	}
	public void setIdInstruccionEfectivo(long idInstruccionEfectivo) {
		this.idInstruccionEfectivo = idInstruccionEfectivo;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public String getContrato() {
		return contrato;
	}
	public String getSubtipoPortafolio() {
		return subtipoPortafolio;
	}
	public String getDigito() {
		return digito;
	}
	public String getTitular() {
		return titular;
	}
	public Double getSaldo() {
		return saldo;
	}
	public String getContratoEgreso() {
		return contratoEgreso;
	}
	public String getDigitoEgreso() {
		return digitoEgreso;
	}
	public Double getSaldoInicialEgreso() {
		return saldoInicialEgreso;
	}
	public Double getSaldoCalculadoEgreso() {
		return saldoCalculadoEgreso;
	}
	public String getContratoIngreso() {
		return contratoIngreso;
	}
	public String getDigitoIngreso() {
		return digitoIngreso;
	}
	public Double getSaldoInicialIngreso() {
		return saldoInicialIngreso;
	}
	public Double getSaldoCalculadoIngreso() {
		return saldoCalculadoIngreso;
	}
	public Double getImporteIngreso() {
		return importeIngreso;
	}

	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setContrato(String contrato) {
		this.contrato = contrato;
	}
	public void setSubtipoPortafolio(String subtipoPortafolio) {
		this.subtipoPortafolio = subtipoPortafolio;
	}
	public void setDigito(String digito) {
		this.digito = digito;
	}
	public void setTitular(String titular) {
		this.titular = titular;
	}
	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	public void setContratoEgreso(String contratoEgreso) {
		this.contratoEgreso = contratoEgreso;
	}
	public void setDigitoEgreso(String digitoEgreso) {
		this.digitoEgreso = digitoEgreso;
	}
	public void setSaldoInicialEgreso(Double saldoInicialEgreso) {
		this.saldoInicialEgreso = saldoInicialEgreso;
	}
	public void setSaldoCalculadoEgreso(Double saldoCalculadoEgreso) {
		this.saldoCalculadoEgreso = saldoCalculadoEgreso;
	}
	public void setContratoIngreso(String contratoIngreso) {
		this.contratoIngreso = contratoIngreso;
	}
	public void setDigitoIngreso(String digitoIngreso) {
		this.digitoIngreso = digitoIngreso;
	}
	public void setSaldoInicialIngreso(Double saldoInicialIngreso) {
		this.saldoInicialIngreso = saldoInicialIngreso;
	}
	public void setSaldoCalculadoIngreso(Double saldoCalculadoIngreso) {
		this.saldoCalculadoIngreso = saldoCalculadoIngreso;
	}
	public void setImporteIngreso(Double importeIngreso) {
		this.importeIngreso = importeIngreso;
	}
}
