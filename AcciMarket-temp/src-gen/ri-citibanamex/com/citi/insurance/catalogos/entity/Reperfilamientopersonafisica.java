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
@Table(name = "ReperfilamientoPersonaFisica")
public class Reperfilamientopersonafisica implements Serializable {
	
	public Reperfilamientopersonafisica() {
		/* TODO: Ponga todos los campos de la tabla que se deban inicializados */
	}

/* TODO: Inicializar aquellos campos que se necesitan */

  private static final long serialVersionUID = 1L;
  @EmbeddedId
  @Getter
  @Setter
  private ReperfilamientopersonafisicaPk id;
  
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
  
  	
}
