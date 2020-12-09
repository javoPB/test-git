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
@Table(name = "DistribucionInstrucciones")
public class Distribucioninstrucciones implements Serializable {
	
	public Distribucioninstrucciones() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private DistribucioninstruccionesPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "OpcDistrInstrucciones")
  @Getter
  @Setter
  private String opcdistrinstrucciones;
  
  @Column(name = "Capturados")
  @Getter
  @Setter
  private String capturados;
  
  @Column(name = "Contrato")
  @Getter
  @Setter
  private String contrato;
  
  @Column(name = "FolioMov")
  @Getter
  @Setter
  private String foliomov;
  
  @Column(name = "Digito")
  @Getter
  @Setter
  private String digito;
  
  @Column(name = "ImporteNeto")
  @Getter
  @Setter
  private String importeneto;
  
  @Column(name = "Depositos")
  @Getter
  @Setter
  private String depositos;
  
  @Column(name = "Retiros")
  @Getter
  @Setter
  private String retiros;
  
  @Column(name = "Sucursal")
  @Getter
  @Setter
  private String sucursal;
  
  	
}
