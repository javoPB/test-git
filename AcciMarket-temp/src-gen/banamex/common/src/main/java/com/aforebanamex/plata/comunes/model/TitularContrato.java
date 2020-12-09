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
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;
import com.aforebanamex.plata.comunes.model.NoSi;
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

@Bitacora(tipoElemento = "TITULARCONTRATO")
public class TitularContrato extends BaseSerizalizableModel{
	
	private static final long serialVersionUID = 1L;
	
	@BitacoraField(isId = true)
	private long idTitularContrato;
	
	@BitacoraField
	@Size(min=0,max=99, message="El nombre es incorrecto.")
	private String nombre;
	@NotNull(message = "El campo Actividad es obligatorio")
	private Dummy dummy;
	@BitacoraField
	@Size(min=0,max=99, message="El noclientebanamex es incorrecto.")
	private String noClienteBanamex;
	@NotNull(message = "El campo Inst es obligatorio")
	private Dummy dummy;
	@BitacoraField
	@Size(min=0,max=99, message="El nocta es incorrecto.")
	private String noCta;
	@BitacoraField
	@Size(min=0,max=99, message="El suc es incorrecto.")
	private String suc;
	@BitacoraField
	@Size(min=0,max=99, message="El clabe es incorrecto.")
	private String clabe;
	@BitacoraField
	@Size(min=0,max=99, message="El calle es incorrecto.")
	private String calle;
	@BitacoraField
	@Size(min=0,max=99, message="El noext es incorrecto.")
	private String noExt;
	@BitacoraField
	@Size(min=0,max=99, message="El nointerior es incorrecto.")
	private String noInterior;
	@NotNull(message = "El campo CLABE es obligatorio")
	private MexicoExtrajero mexicoExtrajero;
	@BitacoraField
	@Size(min=0,max=99, message="El cp es incorrecto.")
	private String cp;
	@BitacoraField
	@Size(min=0,max=99, message="El estado es incorrecto.")
	private String estado;
	@BitacoraField
	@Size(min=0,max=99, message="El delmpo es incorrecto.")
	private String delMpo;
	@BitacoraField
	@Size(min=0,max=99, message="El ciudad es incorrecto.")
	private String ciudad;
	@BitacoraField
	@Size(min=0,max=99, message="El colonia es incorrecto.")
	private String colonia;
	@NotNull(message = "El campo ¿Quieres que la correspondencia llegue al domicilio anterior? es obligatorio")
	private NoSi noSi;
	@BitacoraField
	@Size(min=0,max=99, message="El rfc es incorrecto.")
	private String rfc;
	@BitacoraField
	@Size(min=0,max=99, message="El curp es incorrecto.")
	private String curp;
	@BitacoraField
	@Size(min=0,max=99, message="El fecnac es incorrecto.")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", locale = "es-MX", timezone = "CST")
	private Date fecNac;
	@NotNull(message = "El campo Escolaridad es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Edo. Civil es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Sexo es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Tipo Vivienda es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo C. Migratoria es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo P. Residencia es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Nacionalidad es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo País Nac. es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo Edo. Nac. es obligatorio")
	private Dummy dummy;
	@NotNull(message = "El campo ¿El cliente es empleado del Grupo Financiero Banamex? es obligatorio")
	private NoSi noSi;
	
	private Boolean estadoLogico;

	public TitularContrato(){}
	
	public TitularContrato(long idTitularContrato, 
	String nombre,
	Dummy dummy,
	String noClienteBanamex,
	Dummy dummy,
	String noCta,
	String suc,
	String clabe,
	String calle,
	String noExt,
	String noInterior,
	MexicoExtrajero mexicoExtrajero,
	String cp,
	String estado,
	String delMpo,
	String ciudad,
	String colonia,
	NoSi noSi,
	String rfc,
	String curp,
	Date fecNac,
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
	Boolean estadoLogico
	) {
		super();
		this.idTitularContrato = idTitularContrato;
		this.nombre = nombre;
		this.dummy = dummy;
		this.noClienteBanamex = noClienteBanamex;
		this.dummy = dummy;
		this.noCta = noCta;
		this.suc = suc;
		this.clabe = clabe;
		this.calle = calle;
		this.noExt = noExt;
		this.noInterior = noInterior;
		this.mexicoExtrajero = mexicoExtrajero;
		this.cp = cp;
		this.estado = estado;
		this.delMpo = delMpo;
		this.ciudad = ciudad;
		this.colonia = colonia;
		this.noSi = noSi;
		this.rfc = rfc;
		this.curp = curp;
		this.fecNac = fecNac;
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
		this.estadoLogico = estadoLogico;
	}
	
	public long getIdTitularContrato() {
		return idTitularContrato;
	}
	public void setIdTitularContrato(long idTitularContrato) {
		this.idTitularContrato = idTitularContrato;
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
	public Dummy getDummy() {
		return dummy;
	}
	public String getNoClienteBanamex() {
		return noClienteBanamex;
	}
	public Dummy getDummy() {
		return dummy;
	}
	public String getNoCta() {
		return noCta;
	}
	public String getSuc() {
		return suc;
	}
	public String getClabe() {
		return clabe;
	}
	public String getCalle() {
		return calle;
	}
	public String getNoExt() {
		return noExt;
	}
	public String getNoInterior() {
		return noInterior;
	}
	public MexicoExtrajero getMexicoExtrajero() {
		return mexicoExtrajero;
	}
	public String getCp() {
		return cp;
	}
	public String getEstado() {
		return estado;
	}
	public String getDelMpo() {
		return delMpo;
	}
	public String getCiudad() {
		return ciudad;
	}
	public String getColonia() {
		return colonia;
	}
	public NoSi getNoSi() {
		return noSi;
	}
	public String getRfc() {
		return rfc;
	}
	public String getCurp() {
		return curp;
	}
	public Date getFecNac() {
		return fecNac;
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

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setNoClienteBanamex(String noClienteBanamex) {
		this.noClienteBanamex = noClienteBanamex;
	}
	public void setDummy(Dummy dummy) {
		this.dummy = dummy;
	}
	public void setNoCta(String noCta) {
		this.noCta = noCta;
	}
	public void setSuc(String suc) {
		this.suc = suc;
	}
	public void setClabe(String clabe) {
		this.clabe = clabe;
	}
	public void setCalle(String calle) {
		this.calle = calle;
	}
	public void setNoExt(String noExt) {
		this.noExt = noExt;
	}
	public void setNoInterior(String noInterior) {
		this.noInterior = noInterior;
	}
	public void setMexicoExtrajero(MexicoExtrajero mexicoExtrajero) {
		this.mexicoExtrajero = mexicoExtrajero;
	}
	public void setCp(String cp) {
		this.cp = cp;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public void setDelMpo(String delMpo) {
		this.delMpo = delMpo;
	}
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	public void setColonia(String colonia) {
		this.colonia = colonia;
	}
	public void setNoSi(NoSi noSi) {
		this.noSi = noSi;
	}
	public void setRfc(String rfc) {
		this.rfc = rfc;
	}
	public void setCurp(String curp) {
		this.curp = curp;
	}
	public void setFecNac(Date fecNac) {
		this.fecNac = fecNac;
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
}
