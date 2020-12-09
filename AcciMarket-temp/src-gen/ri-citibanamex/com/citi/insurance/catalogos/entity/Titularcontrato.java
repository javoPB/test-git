/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.citi.insurance.catalogos.entity;

//import com.asva.insurance.catalogos.support.entity.LogicDeletedEntity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author 
 */
@javax.persistence.Entity
@Table(name = "TitularContrato")
public class Titularcontrato implements Serializable {
	
	public Titularcontrato() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private TitularcontratoPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "Nombre")
  @Getter
  @Setter
  private String nombre;
  
  @Column(name = "Actividad")
  @Getter
  @Setter
  private String actividad;
  
  @Column(name = "NoClienteBanamex")
  @Getter
  @Setter
  private String noclientebanamex;
  
  @Column(name = "Inst")
  @Getter
  @Setter
  private String inst;
  
  @Column(name = "NoCta")
  @Getter
  @Setter
  private String nocta;
  
  @Column(name = "Suc")
  @Getter
  @Setter
  private String suc;
  
  @Column(name = "Clabe")
  @Getter
  @Setter
  private String clabe;
  
  @Column(name = "Calle")
  @Getter
  @Setter
  private String calle;
  
  @Column(name = "NoExt")
  @Getter
  @Setter
  private String noext;
  
  @Column(name = "NoInterior")
  @Getter
  @Setter
  private String nointerior;
  
  @Column(name = "MexExtr")
  @Getter
  @Setter
  private String mexextr;
  
  @Column(name = "Cp")
  @Getter
  @Setter
  private String cp;
  
  @Column(name = "Estado")
  @Getter
  @Setter
  private String estado;
  
  @Column(name = "DelMpo")
  @Getter
  @Setter
  private String delmpo;
  
  @Column(name = "Ciudad")
  @Getter
  @Setter
  private String ciudad;
  
  @Column(name = "Colonia")
  @Getter
  @Setter
  private String colonia;
  
  @Column(name = "Correspondencia")
  @Getter
  @Setter
  private String correspondencia;
  
  @Column(name = "Rfc")
  @Getter
  @Setter
  private String rfc;
  
  @Column(name = "Curp")
  @Getter
  @Setter
  private String curp;
  
  @Column(name = "FecNac")
  @Getter
  @Setter
  private String fecnac
  
  @Column(name = "Escolaridad")
  @Getter
  @Setter
  private String escolaridad;
  
  @Column(name = "EdoCivil")
  @Getter
  @Setter
  private String edocivil;
  
  @Column(name = "Sexo")
  @Getter
  @Setter
  private String sexo;
  
  @Column(name = "TipoVivienda")
  @Getter
  @Setter
  private String tipovivienda;
  
  @Column(name = "CalidadMigratoria")
  @Getter
  @Setter
  private String calidadmigratoria;
  
  @Column(name = "PaisResidencia")
  @Getter
  @Setter
  private String paisresidencia;
  
  @Column(name = "Nacionalidad")
  @Getter
  @Setter
  private String nacionalidad;
  
  @Column(name = "PaisNac")
  @Getter
  @Setter
  private String paisnac;
  
  @Column(name = "EdoNac")
  @Getter
  @Setter
  private String edonac;
  
  @Column(name = "EmpleadoGroFinBanamex")
  @Getter
  @Setter
  private String empleadogrofinbanamex;
  
  	
}
