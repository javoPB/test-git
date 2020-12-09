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


@Bitacora(tipoElemento = "LIMITANTE")
public class Limitante extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idLimitante;
	
	@BitacoraField
	@Size(min=0,max=99, message="El grupoinstrumento es incorrecto.")
	private String grupoInstrumento;
	@BitacoraField
	@Size(min=0,max=99, message="El tipovalor es incorrecto.")
	private String tipoValor;
	@BitacoraField
	@Size(min=0,max=99, message="El emisoras es incorrecto.")
	private String emisoras;
	@BitacoraField
	@Size(min=0,max=99, message="El tipovaloremisora es incorrecto.")
	private String tipoValorEmisora;
	
	private Boolean estadoLogico;

	public Limitante(){}
	
	public Limitante(long idLimitante, 
	String grupoInstrumento,
	String tipoValor,
	String emisoras,
	String tipoValorEmisora,
	Boolean estadoLogico
	) {
		super();
		this.idLimitante = idLimitante;
		this.grupoInstrumento = grupoInstrumento;
		this.tipoValor = tipoValor;
		this.emisoras = emisoras;
		this.tipoValorEmisora = tipoValorEmisora;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdLimitante() {
		return idLimitante;
	}
	public void setIdLimitante(long idLimitante) {
		this.idLimitante = idLimitante;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public String getGrupoInstrumento() {
		return grupoInstrumento;
	}
	public String getTipoValor() {
		return tipoValor;
	}
	public String getEmisoras() {
		return emisoras;
	}
	public String getTipoValorEmisora() {
		return tipoValorEmisora;
	}

	public void setGrupoInstrumento(String grupoInstrumento) {
		this.grupoInstrumento = grupoInstrumento;
	}
	public void setTipoValor(String tipoValor) {
		this.tipoValor = tipoValor;
	}
	public void setEmisoras(String emisoras) {
		this.emisoras = emisoras;
	}
	public void setTipoValorEmisora(String tipoValorEmisora) {
		this.tipoValorEmisora = tipoValorEmisora;
	}
}
