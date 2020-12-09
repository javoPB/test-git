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

import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

@Bitacora(tipoElemento = "REPERFILAMIENTOPERSONAFISICA")
public class ReperfilamientoPersonaFisica extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idReperfilamientoPersonaFisica;
	
	@NotNull(message = "El campo  es obligatorio")
	private Contrato contrato;
	@BitacoraField
	@Size(min=0,max=99, message="El nombre es incorrecto.")
	private String nombre;
	@BitacoraField
	@Size(min=0,max=99, message="El perfilactual es incorrecto.")
	private String perfilActual;
	@NotNull(message = "El campo Seleccione a la persona a perfilar es obligatorio")
	private Dummy dummy;
	@BitacoraField
	@Size(min=0,max=99, message="El porcentajeliquidez es incorrecto.")
	private String porcentajeLiquidez;
	@BitacoraField
	@Size(min=0,max=99, message="El montoliquidez es incorrecto.")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "es-MX", timezone = "CST")
	private Date montoLiquidez;
	@BitacoraField
	@Size(min=0,max=99, message="El porcentajecortoplazo es incorrecto.")
	private String porcentajeCortoPlazo;
	@BitacoraField
	@Size(min=0,max=99, message="El montocortoplazo es incorrecto.")
	private Double montoCortoPlazo;
	@BitacoraField
	@Size(min=0,max=99, message="El porcentajelargoplazo es incorrecto.")
	private String porcentajeLargoPlazo;
	@BitacoraField
	@Size(min=0,max=99, message="El montolargoplazo es incorrecto.")
	private Double montoLargoPlazo;
	@BitacoraField
	@Size(min=0,max=99, message="El porcentajepatrimonioliquidototal es incorrecto.")
	private String porcentajePatrimonioLiquidoTotal;
	@BitacoraField
	@Size(min=0,max=99, message="El montopatrimonioliquidototal es incorrecto.")
	private Double montoPatrimonioLiquidoTotal;
	@NotNull(message = "El campo 1.1 Intervalo de Edad es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 1.2 Nivel de Estudios es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 1.3 Ocupación es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 1.4 Actividad Profesional ¿Anterior? es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Actividad Profesional ¿Actual? es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Relacionada con Inversiones es obligatorio")
	private NoSi noSi;
	@NotNull(message = "El campo 1.5 Estrategia de inversión del Cliente generalmente utilizada es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 2.1 Instrumentos de Deuda Gubernamental es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Frecuencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Plazo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Volumen es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 2.2 Instrumentos de Deuda Corporativa es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Frecuencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Plazo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Volumen es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 2.3 Sociedades de Inversión es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Frecuencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Plazo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Volumen es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 2.4 Valores Estructurados es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Frecuencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Plazo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Volumen es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Frecuencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Plazo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Volumen es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo 1. El Cliente tiene alguna limitante y/o restricción para invertir es obligatorio")
	private NoSi noSi;
	@NotNull(message = "El campo 6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.) es obligatorio")
	private SituacionFinancieraActual situacionFinancieraActual;
	@NotNull(message = "El campo 6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión es obligatorio")
	private SituacionFinancieraActual situacionFinancieraActual;
	@NotNull(message = "El campo 6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución es obligatorio")
	private SituacionFinancieraActual situacionFinancieraActual;
	@BitacoraField
	@Size(min=0,max=99, message="El perfil es incorrecto.")
	private String perfil;
	
	private Boolean estadoLogico;

	public ReperfilamientoPersonaFisica(){}
	
	public ReperfilamientoPersonaFisica(long idReperfilamientoPersonaFisica, 
	Contrato contrato,
	String nombre,
	String perfilActual,
	Dummy dummy,
	String porcentajeLiquidez,
	Date montoLiquidez,
	String porcentajeCortoPlazo,
	Double montoCortoPlazo,
	String porcentajeLargoPlazo,
	Double montoLargoPlazo,
	String porcentajePatrimonioLiquidoTotal,
	Double montoPatrimonioLiquidoTotal,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	NoSi noSi,
	Dummy dummy,
	Dummy dummy,
	ConocimientoExperiencia conocimientoExperiencia,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	ConocimientoExperiencia conocimientoExperiencia,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	Dummy dummy,
	NoSi noSi,
	SituacionFinancieraActual situacionFinancieraActual,
	SituacionFinancieraActual situacionFinancieraActual,
	SituacionFinancieraActual situacionFinancieraActual,
	String perfil,
	Boolean estadoLogico
	) {
		super();
		this.idReperfilamientoPersonaFisica = idReperfilamientoPersonaFisica;
		this.contrato = contrato;
		this.nombre = nombre;
		this.perfilActual = perfilActual;
		this.dummy = dummy;
		this.porcentajeLiquidez = porcentajeLiquidez;
		this.montoLiquidez = montoLiquidez;
		this.porcentajeCortoPlazo = porcentajeCortoPlazo;
		this.montoCortoPlazo = montoCortoPlazo;
		this.porcentajeLargoPlazo = porcentajeLargoPlazo;
		this.montoLargoPlazo = montoLargoPlazo;
		this.porcentajePatrimonioLiquidoTotal = porcentajePatrimonioLiquidoTotal;
		this.montoPatrimonioLiquidoTotal = montoPatrimonioLiquidoTotal;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.noSi = noSi;
		this.dummy = dummy;
		this.dummy = dummy;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.dummy = dummy;
		this.noSi = noSi;
		this.situacionFinancieraActual = situacionFinancieraActual;
		this.situacionFinancieraActual = situacionFinancieraActual;
		this.situacionFinancieraActual = situacionFinancieraActual;
		this.perfil = perfil;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdReperfilamientoPersonaFisica() {
		return idReperfilamientoPersonaFisica;
	}
	public void setIdReperfilamientoPersonaFisica(long idReperfilamientoPersonaFisica) {
		this.idReperfilamientoPersonaFisica = idReperfilamientoPersonaFisica;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public Contrato getContrato() {
		return contrato;
	}
	public String getNombre() {
		return nombre;
	}
	public String getPerfilActual() {
		return perfilActual;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public String getPorcentajeLiquidez() {
		return porcentajeLiquidez;
	}
	public Date getMontoLiquidez() {
		return montoLiquidez;
	}
	public String getPorcentajeCortoPlazo() {
		return porcentajeCortoPlazo;
	}
	public Double getMontoCortoPlazo() {
		return montoCortoPlazo;
	}
	public String getPorcentajeLargoPlazo() {
		return porcentajeLargoPlazo;
	}
	public Double getMontoLargoPlazo() {
		return montoLargoPlazo;
	}
	public String getPorcentajePatrimonioLiquidoTotal() {
		return porcentajePatrimonioLiquidoTotal;
	}
	public Double getMontoPatrimonioLiquidoTotal() {
		return montoPatrimonioLiquidoTotal;
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
	public Dummy getDummy() {
		return dummy;
	}
	public NoSi getNoSi() {
		return noSi;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
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
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
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
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public NoSi getNoSi() {
		return noSi;
	}
	public SituacionFinancieraActual getSituacionFinancieraActual() {
		return situacionFinancieraActual;
	}
	public SituacionFinancieraActual getSituacionFinancieraActual() {
		return situacionFinancieraActual;
	}
	public SituacionFinancieraActual getSituacionFinancieraActual() {
		return situacionFinancieraActual;
	}
	public String getPerfil() {
		return perfil;
	}

	public void setContrato(Contrato contrato) {
		this.contrato = contrato;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setPerfilActual(String perfilActual) {
		this.perfilActual = perfilActual;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setPorcentajeLiquidez(String porcentajeLiquidez) {
		this.porcentajeLiquidez = porcentajeLiquidez;
	}
	public void setMontoLiquidez(Date montoLiquidez) {
		this.montoLiquidez = montoLiquidez;
	}
	public void setPorcentajeCortoPlazo(String porcentajeCortoPlazo) {
		this.porcentajeCortoPlazo = porcentajeCortoPlazo;
	}
	public void setMontoCortoPlazo(Double montoCortoPlazo) {
		this.montoCortoPlazo = montoCortoPlazo;
	}
	public void setPorcentajeLargoPlazo(String porcentajeLargoPlazo) {
		this.porcentajeLargoPlazo = porcentajeLargoPlazo;
	}
	public void setMontoLargoPlazo(Double montoLargoPlazo) {
		this.montoLargoPlazo = montoLargoPlazo;
	}
	public void setPorcentajePatrimonioLiquidoTotal(String porcentajePatrimonioLiquidoTotal) {
		this.porcentajePatrimonioLiquidoTotal = porcentajePatrimonioLiquidoTotal;
	}
	public void setMontoPatrimonioLiquidoTotal(Double montoPatrimonioLiquidoTotal) {
		this.montoPatrimonioLiquidoTotal = montoPatrimonioLiquidoTotal;
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
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setNoSi(NoSi noSi) {
		this.noSi = noSi;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
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
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
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
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setNoSi(NoSi noSi) {
		this.noSi = noSi;
	}
	public void setSituacionFinancieraActual(SituacionFinancieraActual situacionFinancieraActual) {
		this.situacionFinancieraActual = situacionFinancieraActual;
	}
	public void setSituacionFinancieraActual(SituacionFinancieraActual situacionFinancieraActual) {
		this.situacionFinancieraActual = situacionFinancieraActual;
	}
	public void setSituacionFinancieraActual(SituacionFinancieraActual situacionFinancieraActual) {
		this.situacionFinancieraActual = situacionFinancieraActual;
	}
	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}
}
