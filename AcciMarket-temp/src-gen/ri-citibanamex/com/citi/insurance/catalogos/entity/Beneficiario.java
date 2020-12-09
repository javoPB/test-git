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
@Table(name = "Beneficiario")
public class Beneficiario implements Serializable {
	
	public Beneficiario() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private BeneficiarioPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "Nombre")
  @Getter
  @Setter
  private String nombre;
  
  @Column(name = "ApPaterno")
  @Getter
  @Setter
  private String appaterno;
  
  @Column(name = "ApMaterno")
  @Getter
  @Setter
  private String apmaterno;
  
  @Column(name = "Porcentaje")
  @Getter
  @Setter
  private Integer porcentaje;
  
  	
}
