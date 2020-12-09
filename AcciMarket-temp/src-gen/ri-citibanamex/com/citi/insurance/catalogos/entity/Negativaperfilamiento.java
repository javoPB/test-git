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
@Table(name = "NegativaPerfilamiento")
public class Negativaperfilamiento implements Serializable {
	
	public Negativaperfilamiento() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private NegativaperfilamientoPk id;
  
  /* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
  @Column(name = "Contrato")
  @Getter
  @Setter
  private String contrato;
  
  @Column(name = "Nombre")
  @Getter
  @Setter
  private String nombre;
  
  @Column(name = "PerfilActual")
  @Getter
  @Setter
  private String perfilactual;
  
  @Column(name = "PersonaPerfilar")
  @Getter
  @Setter
  private String personaperfilar;
  
  @Column(name = "PorcentajeLiquidez")
  @Getter
  @Setter
  private String porcentajeliquidez;
  
  @Column(name = "MontoLiquidez")
  @Getter
  @Setter
  private String montoliquidez
  
  @Column(name = "PorcentajeCortoPlazo")
  @Getter
  @Setter
  private String porcentajecortoplazo;
  
  @Column(name = "MontoCortoPlazo")
  @Getter
  @Setter
  private String montocortoplazo;
  
  @Column(name = "PorcentajeLargoPlazo")
  @Getter
  @Setter
  private String porcentajelargoplazo;
  
  @Column(name = "MontoLargoPlazo")
  @Getter
  @Setter
  private String montolargoplazo;
  
  @Column(name = "PorcentajePatrimonioLiquidoTotal")
  @Getter
  @Setter
  private String porcentajepatrimonioliquidototal;
  
  @Column(name = "MontoPatrimonioLiquidoTotal")
  @Getter
  @Setter
  private String montopatrimonioliquidototal;
  
  @Column(name = "IntervaloEdad")
  @Getter
  @Setter
  private String intervaloedad;
  
  @Column(name = "NivelEstudios")
  @Getter
  @Setter
  private String nivelestudios;
  
  @Column(name = "Ocupacion")
  @Getter
  @Setter
  private String ocupacion;
  
  @Column(name = "ActividadProfesionalAnterior")
  @Getter
  @Setter
  private String actividadprofesionalanterior;
  
  @Column(name = "ActividadProfesionalActual")
  @Getter
  @Setter
  private String actividadprofesionalactual;
  
  @Column(name = "ActividadRelacionadaInversiones")
  @Getter
  @Setter
  private String actividadrelacionadainversiones;
  
  @Column(name = "EstrategiaCliente")
  @Getter
  @Setter
  private String estrategiacliente;
  
  @Column(name = "ClienteAsesoria")
  @Getter
  @Setter
  private String clienteasesoria;
  
  @Column(name = "ExperienciaDeudaGub")
  @Getter
  @Setter
  private String experienciadeudagub;
  
  @Column(name = "FrecuenciaDeudaGub")
  @Getter
  @Setter
  private String frecuenciadeudagub;
  
  @Column(name = "PlazoDeudaGub")
  @Getter
  @Setter
  private String plazodeudagub;
  
  @Column(name = "VolumenDeudaGub")
  @Getter
  @Setter
  private String volumendeudagub;
  
  @Column(name = "ExpDeudaCorp")
  @Getter
  @Setter
  private String expdeudacorp;
  
  @Column(name = "FrecuenciaDeudaCorp")
  @Getter
  @Setter
  private String frecuenciadeudacorp;
  
  @Column(name = "PlazoDeudaCorp")
  @Getter
  @Setter
  private String plazodeudacorp;
  
  @Column(name = "VolumenDeudaCorp")
  @Getter
  @Setter
  private String volumendeudacorp;
  
  @Column(name = "ExpSociedadesInv")
  @Getter
  @Setter
  private String expsociedadesinv;
  
  @Column(name = "FrecuenciaSociedadesInv")
  @Getter
  @Setter
  private String frecuenciasociedadesinv;
  
  @Column(name = "PlazoSociedadesInv")
  @Getter
  @Setter
  private String plazosociedadesinv;
  
  @Column(name = "VolumenSociedadesInv")
  @Getter
  @Setter
  private String volumensociedadesinv;
  
  @Column(name = "ExpValoresEst")
  @Getter
  @Setter
  private String expvaloresest;
  
  @Column(name = "FrecuenciaValoresEst")
  @Getter
  @Setter
  private String frecuenciavaloresest;
  
  @Column(name = "PlazoValoresEst")
  @Getter
  @Setter
  private String plazovaloresest;
  
  @Column(name = "VolumenValoresEst")
  @Getter
  @Setter
  private String volumenvaloresest;
  
  @Column(name = "ExpCertificadosBur")
  @Getter
  @Setter
  private String expcertificadosbur;
  
  @Column(name = "FrecuenciaCertificadosBur")
  @Getter
  @Setter
  private String frecuenciacertificadosbur;
  
  @Column(name = "PlazoCertificadosBur")
  @Getter
  @Setter
  private String plazocertificadosbur;
  
  @Column(name = "VolumenCertificadosBur")
  @Getter
  @Setter
  private String volumencertificadosbur;
  
  @Column(name = "ExpTitulosOpc")
  @Getter
  @Setter
  private String exptitulosopc;
  
  @Column(name = "FrecuenciaTitulosOpc")
  @Getter
  @Setter
  private String frecuenciatitulosopc;
  
  @Column(name = "PlazoTitulosOpc")
  @Getter
  @Setter
  private String plazotitulosopc;
  
  @Column(name = "VolumenTitulosOpc")
  @Getter
  @Setter
  private String volumentitulosopc;
  
  @Column(name = "ExpAcciones")
  @Getter
  @Setter
  private String expacciones;
  
  @Column(name = "FrecuenciaAcciones")
  @Getter
  @Setter
  private String frecuenciaacciones;
  
  @Column(name = "PlazoAcciones")
  @Getter
  @Setter
  private String plazoacciones;
  
  @Column(name = "VolumenAcciones")
  @Getter
  @Setter
  private String volumenacciones;
  
  @Column(name = "ExpValoresExt")
  @Getter
  @Setter
  private String expvaloresext;
  
  @Column(name = "FrecuenciaValoresExt")
  @Getter
  @Setter
  private String frecuenciavaloresext;
  
  @Column(name = "PlazoValoresExt")
  @Getter
  @Setter
  private String plazovaloresext;
  
  @Column(name = "VolumenValoresExt")
  @Getter
  @Setter
  private String volumenvaloresext;
  
  @Column(name = "ExpTrackers")
  @Getter
  @Setter
  private String exptrackers;
  
  @Column(name = "FrecuenciaTrackers")
  @Getter
  @Setter
  private String frecuenciatrackers;
  
  @Column(name = "PlazoTrackers")
  @Getter
  @Setter
  private String plazotrackers;
  
  @Column(name = "VolumenTrackers")
  @Getter
  @Setter
  private String volumentrackers;
  
  @Column(name = "ExpCertificadosCap")
  @Getter
  @Setter
  private String expcertificadoscap;
  
  @Column(name = "FrecuenciaCertificadosCap")
  @Getter
  @Setter
  private String frecuenciacertificadoscap;
  
  @Column(name = "PlazoCertificadosCap")
  @Getter
  @Setter
  private String plazocertificadoscap;
  
  @Column(name = "VolumenCertificadosCap")
  @Getter
  @Setter
  private String volumencertificadoscap;
  
  @Column(name = "PropositoInversion")
  @Getter
  @Setter
  private String propositoinversion;
  
  @Column(name = "ToleranciaRiesgo")
  @Getter
  @Setter
  private String toleranciariesgo;
  
  @Column(name = "HorizonteInversion")
  @Getter
  @Setter
  private String horizonteinversion;
  
  @Column(name = "TieneLimitante")
  @Getter
  @Setter
  private String tienelimitante;
  
  @Column(name = "PorcentajeTotalPatrimonio")
  @Getter
  @Setter
  private String porcentajetotalpatrimonio;
  
  @Column(name = "PorcentajeIngresoAnual")
  @Getter
  @Setter
  private String porcentajeingresoanual;
  
  @Column(name = "PorcentajeInversiones")
  @Getter
  @Setter
  private String porcentajeinversiones;
  
  @Column(name = "OrigenIngresos")
  @Getter
  @Setter
  private String origeningresos;
  
  @Column(name = "Perfil")
  @Getter
  @Setter
  private String perfil;
  
  @Column(name = "Inconsistencias")
  @Getter
  @Setter
  private String inconsistencias;
  
  	
}
