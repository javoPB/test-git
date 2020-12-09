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
@Table(name = "Contrato")
public class Contrato implements Serializable {
	
	public Contrato() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private ContratoPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "NoContrato")
  @Getter
  @Setter
  private String nocontrato;
  
  @Column(name = "Digito")
  @Getter
  @Setter
  private String digito;
  
  @Column(name = "Dv")
  @Getter
  @Setter
  private String dv;
  
  @Column(name = "Estatus")
  @Getter
  @Setter
  private String estatus;
  
  @Column(name = "Perfil")
  @Getter
  @Setter
  private String perfil;
  
  @Column(name = "Portafolio")
  @Getter
  @Setter
  private String portafolio;
  
  @Column(name = "CLABE")
  @Getter
  @Setter
  private String clabe;
  
  @Column(name = "STipoPort")
  @Getter
  @Setter
  private String stipoport;
  
  @Column(name = "Libro")
  @Getter
  @Setter
  private String libro;
  
  @Column(name = "Titular")
  @Getter
  @Setter
  private String titular;
  
  @Column(name = "Beneficiarios")
  @Getter
  @Setter
  private String beneficiarios;
  
  @Column(name = "AsesorInversion")
  @Getter
  @Setter
  private String asesorinversion;
  
  @Column(name = "TipoManifiesto")
  @Getter
  @Setter
  private String tipomanifiesto;
  
  @Column(name = "ServicioInversion")
  @Getter
  @Setter
  private String servicioinversion;
  
  @Column(name = "CartaEjecucion1")
  @Getter
  @Setter
  private String cartaejecucion1;
  
  @Column(name = "FechaCartaEjecucion1")
  @Getter
  @Setter
  private String fechacartaejecucion1;
  
  @Column(name = "CartaEjecucion2")
  @Getter
  @Setter
  private String cartaejecucion2;
  
  @Column(name = "FechaCartaEjecucion2")
  @Getter
  @Setter
  private String fechacartaejecucion2;
  
  @Column(name = "Institucional")
  @Getter
  @Setter
  private String institucional;
  
  @Column(name = "JustificacionInstitucional")
  @Getter
  @Setter
  private String justificacioninstitucional;
  
  @Column(name = "FechaInstitucional")
  @Getter
  @Setter
  private String fechainstitucional;
  
  @Column(name = "Sofisticado")
  @Getter
  @Setter
  private String sofisticado;
  
  @Column(name = "JustificacionSofisticado")
  @Getter
  @Setter
  private String justificacionsofisticado;
  
  @Column(name = "FechaSofisticado")
  @Getter
  @Setter
  private String fechasofisticado;
  
  @Column(name = "Elegible")
  @Getter
  @Setter
  private String elegible;
  
  @Column(name = "JustificacionElegible")
  @Getter
  @Setter
  private String justificacionelegible;
  
  @Column(name = "FechaElegible")
  @Getter
  @Setter
  private String fechaelegible;
  
  @Column(name = "Calificado")
  @Getter
  @Setter
  private String calificado;
  
  @Column(name = "JustificacionCalificado")
  @Getter
  @Setter
  private String justificacioncalificado;
  
  @Column(name = "FechaCalificado")
  @Getter
  @Setter
  private String fechacalificado;
  
  @Column(name = "Discrecional")
  @Getter
  @Setter
  private String discrecional;
  
  @Column(name = "JustificacionDiscrecional")
  @Getter
  @Setter
  private String justificaciondiscrecional;
  
  @Column(name = "FechaDiscrecional")
  @Getter
  @Setter
  private String fechadiscrecional;
  
  @Column(name = "InstrDeudaGub")
  @Getter
  @Setter
  private String instrdeudagub;
  
  @Column(name = "InstrDeudaCorp")
  @Getter
  @Setter
  private String instrdeudacorp;
  
  @Column(name = "SociedadesInver")
  @Getter
  @Setter
  private String sociedadesinver;
  
  @Column(name = "ValoresEstruc")
  @Getter
  @Setter
  private String valoresestruc;
  
  @Column(name = "CertBurFideicomisos")
  @Getter
  @Setter
  private String certburfideicomisos;
  
  @Column(name = "TitulosOpcionales")
  @Getter
  @Setter
  private String titulosopcionales;
  
  @Column(name = "Acciones")
  @Getter
  @Setter
  private String acciones;
  
  @Column(name = "ValoresExtr")
  @Getter
  @Setter
  private String valoresextr;
  
  @Column(name = "Trackers")
  @Getter
  @Setter
  private String trackers;
  
  @Column(name = "Limitantes")
  @Getter
  @Setter
  private String limitantes;
  
  @Column(name = "Emisor")
  @Getter
  @Setter
  private String emisor;
  
  @Column(name = "FirmasAutorizadas")
  @Getter
  @Setter
  private String firmasautorizadas;
  
  	
}
