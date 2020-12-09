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
@Table(name = "Limitante")
public class Limitante implements Serializable {
	
	public Limitante() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private LimitantePk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "GrupoInstrumento")
  @Getter
  @Setter
  private String grupoinstrumento;
  
  @Column(name = "TipoValor")
  @Getter
  @Setter
  private String tipovalor;
  
  @Column(name = "Emisoras")
  @Getter
  @Setter
  private String emisoras;
  
  @Column(name = "TipoValorEmisora")
  @Getter
  @Setter
  private String tipovaloremisora;
  
  	
}
