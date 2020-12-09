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
@Table(name = "InstruccionEfectivo")
public class Instruccionefectivo implements Serializable {
	
	public Instruccionefectivo() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private InstruccionefectivoPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "Sucursal")
  @Getter
  @Setter
  private String sucursal;
  
  @Column(name = "Operacion")
  @Getter
  @Setter
  private String operacion;
  
  @Column(name = "Tipo")
  @Getter
  @Setter
  private String tipo;
  
  @Column(name = "MedLiq")
  @Getter
  @Setter
  private String medliq;
  
  @Column(name = "Contrato")
  @Getter
  @Setter
  private String contrato;
  
  @Column(name = "SubtipoPortafolio")
  @Getter
  @Setter
  private String subtipoportafolio;
  
  @Column(name = "Digito")
  @Getter
  @Setter
  private String digito;
  
  @Column(name = "Titular")
  @Getter
  @Setter
  private String titular;
  
  @Column(name = "Saldo")
  @Getter
  @Setter
  private String saldo;
  
  @Column(name = "ContratoEgreso")
  @Getter
  @Setter
  private String contratoegreso;
  
  @Column(name = "DigitoEgreso")
  @Getter
  @Setter
  private String digitoegreso;
  
  @Column(name = "SaldoInicialEgreso")
  @Getter
  @Setter
  private String saldoinicialegreso;
  
  @Column(name = "SaldoCalculadoEgreso")
  @Getter
  @Setter
  private String saldocalculadoegreso;
  
  @Column(name = "BenefEgreso")
  @Getter
  @Setter
  private String benefegreso;
  
  @Column(name = "ContratoIngreso")
  @Getter
  @Setter
  private String contratoingreso;
  
  @Column(name = "DigitoIngreso")
  @Getter
  @Setter
  private String digitoingreso;
  
  @Column(name = "SaldoInicialIngreso")
  @Getter
  @Setter
  private String saldoinicialingreso;
  
  @Column(name = "SaldoCalculadoIngreso")
  @Getter
  @Setter
  private String saldocalculadoingreso;
  
  @Column(name = "BenefIngreso")
  @Getter
  @Setter
  private String benefingreso;
  
  @Column(name = "ImporteIngreso")
  @Getter
  @Setter
  private String importeingreso;
  
  	
}
