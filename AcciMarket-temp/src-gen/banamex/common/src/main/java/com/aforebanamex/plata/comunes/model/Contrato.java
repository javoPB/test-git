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

import com.aforebanamex.plata.comunes.model.Sofisticado;
import com.aforebanamex.plata.comunes.model.Elegible;
import com.aforebanamex.plata.comunes.model.Calificado;
import com.aforebanamex.plata.comunes.model.Discrecional;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

@Bitacora(tipoElemento = "CONTRATO")
public class Contrato extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idContrato;
	
	@BitacoraField
	@Size(min=0,max=99, message="El nocontrato es incorrecto.")
	private String noContrato;
	@BitacoraField
	@Size(min=0,max=99, message="El digito es incorrecto.")
	private String digito;
	@BitacoraField
	@Size(min=0,max=99, message="El dv es incorrecto.")
	private String dv;
	@BitacoraField
	@Size(min=0,max=99, message="El estatus es incorrecto.")
	private String estatus;
	@BitacoraField
	@Size(min=0,max=99, message="El perfil es incorrecto.")
	private String perfil;
	@BitacoraField
	@Size(min=0,max=99, message="El portafolio es incorrecto.")
	private String portafolio;
	@BitacoraField
	@Size(min=0,max=99, message="El clabe es incorrecto.")
	private String cLABE;
	@BitacoraField
	@Size(min=0,max=99, message="El stipoport es incorrecto.")
	private String sTipoPort;
	@BitacoraField
	@Size(min=0,max=99, message="El libro es incorrecto.")
	private String libro;
	@BitacoraField
	@Size(min=0,max=99, message="El asesorinversion es incorrecto.")
	private String asesorInversion;
	@BitacoraField
	@Size(min=0,max=99, message="El tipomanifiesto es incorrecto.")
	private String tipoManifiesto;
	@BitacoraField
	@Size(min=0,max=99, message="El servicioinversion es incorrecto.")
	private String servicioInversion;
	@BitacoraField
	@Size(min=0,max=99, message="El cartaejecucion1 es incorrecto.")
	private String cartaEjecucion1;
	@BitacoraField
	@Size(min=0,max=99, message="El fechacartaejecucion1 es incorrecto.")
	private String fechaCartaEjecucion1;
	@BitacoraField
	@Size(min=0,max=99, message="El cartaejecucion2 es incorrecto.")
	private String cartaEjecucion2;
	@BitacoraField
	@Size(min=0,max=99, message="El fechacartaejecucion2 es incorrecto.")
	private String fechaCartaEjecucion2;
	@BitacoraField
	@Size(min=0,max=99, message="El justificacioninstitucional es incorrecto.")
	private String justificacionInstitucional;
	@BitacoraField
	@Size(min=0,max=99, message="El fechainstitucional es incorrecto.")
	private String fechaInstitucional;
	@NotNull(message = "El campo Sofisticado/No sofisticaso es obligatorio")
	private Sofisticado sofisticado;
	@BitacoraField
	@Size(min=0,max=99, message="El justificacionsofisticado es incorrecto.")
	private String justificacionSofisticado;
	@BitacoraField
	@Size(min=0,max=99, message="El fechasofisticado es incorrecto.")
	private String fechaSofisticado;
	@NotNull(message = "El campo Elegible/No Elegible es obligatorio")
	private Elegible elegible;
	@BitacoraField
	@Size(min=0,max=99, message="El justificacionelegible es incorrecto.")
	private String justificacionElegible;
	@BitacoraField
	@Size(min=0,max=99, message="El fechaelegible es incorrecto.")
	private String fechaElegible;
	@NotNull(message = "El campo Calificado/No Calificado es obligatorio")
	private Calificado calificado;
	@BitacoraField
	@Size(min=0,max=99, message="El justificacioncalificado es incorrecto.")
	private String justificacionCalificado;
	@BitacoraField
	@Size(min=0,max=99, message="El fechacalificado es incorrecto.")
	private String fechaCalificado;
	@NotNull(message = "El campo Discrecional/No Discrecional es obligatorio")
	private Discrecional discrecional;
	@BitacoraField
	@Size(min=0,max=99, message="El justificaciondiscrecional es incorrecto.")
	private String justificacionDiscrecional;
	@BitacoraField
	@Size(min=0,max=99, message="El fechadiscrecional es incorrecto.")
	private String fechaDiscrecional;
	@NotNull(message = "El campo Instrumetos de Deuda Gubernamental es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Instrumentos de Deuda Corporativa es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Sociedades de Inversión es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Valores Estructurados es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Titulos Opcionales (Warrants) es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Acciones es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	@NotNull(message = "El campo Valores Extranjeros es obligatorio")
	private ConocimientoExperiencia conocimientoExperiencia;
	
	private Boolean estadoLogico;

	public Contrato(){}
	
	public Contrato(long idContrato, 
	String noContrato,
	String digito,
	String dv,
	String estatus,
	String perfil,
	String portafolio,
	String cLABE,
	String sTipoPort,
	String libro,
	String asesorInversion,
	String tipoManifiesto,
	String servicioInversion,
	String cartaEjecucion1,
	String fechaCartaEjecucion1,
	String cartaEjecucion2,
	String fechaCartaEjecucion2,
	String justificacionInstitucional,
	String fechaInstitucional,
	Sofisticado sofisticado,
	String justificacionSofisticado,
	String fechaSofisticado,
	Elegible elegible,
	String justificacionElegible,
	String fechaElegible,
	Calificado calificado,
	String justificacionCalificado,
	String fechaCalificado,
	Discrecional discrecional,
	String justificacionDiscrecional,
	String fechaDiscrecional,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	ConocimientoExperiencia conocimientoExperiencia,
	Boolean estadoLogico
	) {
		super();
		this.idContrato = idContrato;
		this.noContrato = noContrato;
		this.digito = digito;
		this.dv = dv;
		this.estatus = estatus;
		this.perfil = perfil;
		this.portafolio = portafolio;
		this.cLABE = cLABE;
		this.sTipoPort = sTipoPort;
		this.libro = libro;
		this.asesorInversion = asesorInversion;
		this.tipoManifiesto = tipoManifiesto;
		this.servicioInversion = servicioInversion;
		this.cartaEjecucion1 = cartaEjecucion1;
		this.fechaCartaEjecucion1 = fechaCartaEjecucion1;
		this.cartaEjecucion2 = cartaEjecucion2;
		this.fechaCartaEjecucion2 = fechaCartaEjecucion2;
		this.justificacionInstitucional = justificacionInstitucional;
		this.fechaInstitucional = fechaInstitucional;
		this.sofisticado = sofisticado;
		this.justificacionSofisticado = justificacionSofisticado;
		this.fechaSofisticado = fechaSofisticado;
		this.elegible = elegible;
		this.justificacionElegible = justificacionElegible;
		this.fechaElegible = fechaElegible;
		this.calificado = calificado;
		this.justificacionCalificado = justificacionCalificado;
		this.fechaCalificado = fechaCalificado;
		this.discrecional = discrecional;
		this.justificacionDiscrecional = justificacionDiscrecional;
		this.fechaDiscrecional = fechaDiscrecional;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.conocimientoExperiencia = conocimientoExperiencia;
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdContrato() {
		return idContrato;
	}
	public void setIdContrato(long idContrato) {
		this.idContrato = idContrato;
	}
	
	public Boolean getEstadoLogico() {
		return estadoLogico;
	}

	public void setEstadoLogico(Boolean estadoLogico) {
		this.estadoLogico = estadoLogico;
	}	
	
	public String getNoContrato() {
		return noContrato;
	}
	public String getDigito() {
		return digito;
	}
	public String getDv() {
		return dv;
	}
	public String getEstatus() {
		return estatus;
	}
	public String getPerfil() {
		return perfil;
	}
	public String getPortafolio() {
		return portafolio;
	}
	public String getCLABE() {
		return cLABE;
	}
	public String getSTipoPort() {
		return sTipoPort;
	}
	public String getLibro() {
		return libro;
	}
	public String getAsesorInversion() {
		return asesorInversion;
	}
	public String getTipoManifiesto() {
		return tipoManifiesto;
	}
	public String getServicioInversion() {
		return servicioInversion;
	}
	public String getCartaEjecucion1() {
		return cartaEjecucion1;
	}
	public String getFechaCartaEjecucion1() {
		return fechaCartaEjecucion1;
	}
	public String getCartaEjecucion2() {
		return cartaEjecucion2;
	}
	public String getFechaCartaEjecucion2() {
		return fechaCartaEjecucion2;
	}
	public String getJustificacionInstitucional() {
		return justificacionInstitucional;
	}
	public String getFechaInstitucional() {
		return fechaInstitucional;
	}
	public Sofisticado getSofisticado() {
		return sofisticado;
	}
	public String getJustificacionSofisticado() {
		return justificacionSofisticado;
	}
	public String getFechaSofisticado() {
		return fechaSofisticado;
	}
	public Elegible getElegible() {
		return elegible;
	}
	public String getJustificacionElegible() {
		return justificacionElegible;
	}
	public String getFechaElegible() {
		return fechaElegible;
	}
	public Calificado getCalificado() {
		return calificado;
	}
	public String getJustificacionCalificado() {
		return justificacionCalificado;
	}
	public String getFechaCalificado() {
		return fechaCalificado;
	}
	public Discrecional getDiscrecional() {
		return discrecional;
	}
	public String getJustificacionDiscrecional() {
		return justificacionDiscrecional;
	}
	public String getFechaDiscrecional() {
		return fechaDiscrecional;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}
	public ConocimientoExperiencia getConocimientoExperiencia() {
		return conocimientoExperiencia;
	}

	public void setNoContrato(String noContrato) {
		this.noContrato = noContrato;
	}
	public void setDigito(String digito) {
		this.digito = digito;
	}
	public void setDv(String dv) {
		this.dv = dv;
	}
	public void setEstatus(String estatus) {
		this.estatus = estatus;
	}
	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}
	public void setPortafolio(String portafolio) {
		this.portafolio = portafolio;
	}
	public void setCLABE(String cLABE) {
		this.cLABE = cLABE;
	}
	public void setSTipoPort(String sTipoPort) {
		this.sTipoPort = sTipoPort;
	}
	public void setLibro(String libro) {
		this.libro = libro;
	}
	public void setAsesorInversion(String asesorInversion) {
		this.asesorInversion = asesorInversion;
	}
	public void setTipoManifiesto(String tipoManifiesto) {
		this.tipoManifiesto = tipoManifiesto;
	}
	public void setServicioInversion(String servicioInversion) {
		this.servicioInversion = servicioInversion;
	}
	public void setCartaEjecucion1(String cartaEjecucion1) {
		this.cartaEjecucion1 = cartaEjecucion1;
	}
	public void setFechaCartaEjecucion1(String fechaCartaEjecucion1) {
		this.fechaCartaEjecucion1 = fechaCartaEjecucion1;
	}
	public void setCartaEjecucion2(String cartaEjecucion2) {
		this.cartaEjecucion2 = cartaEjecucion2;
	}
	public void setFechaCartaEjecucion2(String fechaCartaEjecucion2) {
		this.fechaCartaEjecucion2 = fechaCartaEjecucion2;
	}
	public void setJustificacionInstitucional(String justificacionInstitucional) {
		this.justificacionInstitucional = justificacionInstitucional;
	}
	public void setFechaInstitucional(String fechaInstitucional) {
		this.fechaInstitucional = fechaInstitucional;
	}
	public void setSofisticado(Sofisticado sofisticado) {
		this.sofisticado = sofisticado;
	}
	public void setJustificacionSofisticado(String justificacionSofisticado) {
		this.justificacionSofisticado = justificacionSofisticado;
	}
	public void setFechaSofisticado(String fechaSofisticado) {
		this.fechaSofisticado = fechaSofisticado;
	}
	public void setElegible(Elegible elegible) {
		this.elegible = elegible;
	}
	public void setJustificacionElegible(String justificacionElegible) {
		this.justificacionElegible = justificacionElegible;
	}
	public void setFechaElegible(String fechaElegible) {
		this.fechaElegible = fechaElegible;
	}
	public void setCalificado(Calificado calificado) {
		this.calificado = calificado;
	}
	public void setJustificacionCalificado(String justificacionCalificado) {
		this.justificacionCalificado = justificacionCalificado;
	}
	public void setFechaCalificado(String fechaCalificado) {
		this.fechaCalificado = fechaCalificado;
	}
	public void setDiscrecional(Discrecional discrecional) {
		this.discrecional = discrecional;
	}
	public void setJustificacionDiscrecional(String justificacionDiscrecional) {
		this.justificacionDiscrecional = justificacionDiscrecional;
	}
	public void setFechaDiscrecional(String fechaDiscrecional) {
		this.fechaDiscrecional = fechaDiscrecional;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
	public void setConocimientoExperiencia(ConocimientoExperiencia conocimientoExperiencia) {
		this.conocimientoExperiencia = conocimientoExperiencia;
	}
}
