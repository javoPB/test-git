/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.citi.insurance.catalogos.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.citi.insurance.catalogos.assembler.ReperfilamientoPersonaFisicaAssembler;
import com.citi.insurance.catalogos.domain.ReperfilamientoPersonaFisicaBean;
import com.citi.insurance.catalogos.domain.ReperfilamientoPersonaFisicaPkBean;
import com.citi.insurance.catalogos.entity.Reperfilamientopersonafisica;
import com.citi.insurance.catalogos.entity.ReperfilamientopersonafisicaPk;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByNombreSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPerfilActualSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPorcentajeLiquidezSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByMontoLiquidezSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPorcentajeCortoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByMontoCortoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPorcentajeLargoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByMontoLargoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPorcentajePatrimonioLiquidoTotalSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByMontoPatrimonioLiquidoTotalSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaByPerfilSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.ReperfilamientopersonafisicaRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class ReperfilamientoPersonaFisicaService extends BasePageableCRUDService<ReperfilamientoPersonaFisicaBean, Reperfilamientopersonafisica, ReperfilamientopersonafisicaPk, ReperfilamientoPersonaFisicaPkBean> {

  @Autowired
  private ReperfilamientopersonafisicaRepository repository;
  @Autowired
  private ReperfilamientoPersonaFisicaAssembler assembler;

  @Override
  public final ReperfilamientopersonafisicaRepository getRepository() {
    return repository;
  }

  @Override
  public final ReperfilamientopersonafisicaRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final ReperfilamientoPersonaFisicaAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Reperfilamientopersonafisica>> customConstraints() {
	  List<BaseSpecification<Reperfilamientopersonafisica>> especificaciones =
	            new ArrayList<BaseSpecification <Reperfilamientopersonafisica>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Reperfilamientopersonafisica>> customConstraints (ReperfilamientoPersonaFisicaBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Reperfilamientopersonafisica>> especificaciones = new ArrayList<BaseSpecification <Reperfilamientopersonafisica>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getContrato() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByContratoSpecification( model.getContrato() ) );  
	  }	  
	  if( model.getNombre() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByNombreSpecification( model.getNombre() ) );  
	  }	  
	  if( model.getPerfilActual() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPerfilActualSpecification( model.getPerfilActual() ) );  
	  }	  
	  if( model.getPersonaPerfilar() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPersonaPerfilarSpecification( model.getPersonaPerfilar() ) );  
	  }	  
	  if( model.getPorcentajeLiquidez() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeLiquidezSpecification( model.getPorcentajeLiquidez() ) );  
	  }	  
	  if( model.getMontoLiquidez() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByMontoLiquidezSpecification( model.getMontoLiquidez() ) );  
	  }	  
	  if( model.getPorcentajeCortoPlazo() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeCortoPlazoSpecification( model.getPorcentajeCortoPlazo() ) );  
	  }	  
	  if( model.getMontoCortoPlazo() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByMontoCortoPlazoSpecification( model.getMontoCortoPlazo() ) );  
	  }	  
	  if( model.getPorcentajeLargoPlazo() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeLargoPlazoSpecification( model.getPorcentajeLargoPlazo() ) );  
	  }	  
	  if( model.getMontoLargoPlazo() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByMontoLargoPlazoSpecification( model.getMontoLargoPlazo() ) );  
	  }	  
	  if( model.getPorcentajePatrimonioLiquidoTotal() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajePatrimonioLiquidoTotalSpecification( model.getPorcentajePatrimonioLiquidoTotal() ) );  
	  }	  
	  if( model.getMontoPatrimonioLiquidoTotal() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByMontoPatrimonioLiquidoTotalSpecification( model.getMontoPatrimonioLiquidoTotal() ) );  
	  }	  
	  if( model.getIntervaloEdad() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByIntervaloEdadSpecification( model.getIntervaloEdad() ) );  
	  }	  
	  if( model.getNivelEstudios() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByNivelEstudiosSpecification( model.getNivelEstudios() ) );  
	  }	  
	  if( model.getOcupacion() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByOcupacionSpecification( model.getOcupacion() ) );  
	  }	  
	  if( model.getActividadProfesionalAnterior() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByActividadProfesionalAnteriorSpecification( model.getActividadProfesionalAnterior() ) );  
	  }	  
	  if( model.getActividadProfesionalActual() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByActividadProfesionalActualSpecification( model.getActividadProfesionalActual() ) );  
	  }	  
	  if( model.getActividadRelacionadaInversiones() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByActividadRelacionadaInversionesSpecification( model.getActividadRelacionadaInversiones() ) );  
	  }	  
	  if( model.getEstrategiaCliente() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByEstrategiaClienteSpecification( model.getEstrategiaCliente() ) );  
	  }	  
	  if( model.getClienteAsesoria() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByClienteAsesoriaSpecification( model.getClienteAsesoria() ) );  
	  }	  
	  if( model.getExperienciaDeudaGub() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByExperienciaDeudaGubSpecification( model.getExperienciaDeudaGub() ) );  
	  }	  
	  if( model.getFrecuenciaDeudaGub() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByFrecuenciaDeudaGubSpecification( model.getFrecuenciaDeudaGub() ) );  
	  }	  
	  if( model.getPlazoDeudaGub() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPlazoDeudaGubSpecification( model.getPlazoDeudaGub() ) );  
	  }	  
	  if( model.getVolumenDeudaGub() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByVolumenDeudaGubSpecification( model.getVolumenDeudaGub() ) );  
	  }	  
	  if( model.getExpDeudaCorp() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByExpDeudaCorpSpecification( model.getExpDeudaCorp() ) );  
	  }	  
	  if( model.getFrecuenciaDeudaCorp() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByFrecuenciaDeudaCorpSpecification( model.getFrecuenciaDeudaCorp() ) );  
	  }	  
	  if( model.getPlazoDeudaCorp() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPlazoDeudaCorpSpecification( model.getPlazoDeudaCorp() ) );  
	  }	  
	  if( model.getVolumenDeudaCorp() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByVolumenDeudaCorpSpecification( model.getVolumenDeudaCorp() ) );  
	  }	  
	  if( model.getExpSociedadesInv() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByExpSociedadesInvSpecification( model.getExpSociedadesInv() ) );  
	  }	  
	  if( model.getFrecuenciaSociedadesInv() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByFrecuenciaSociedadesInvSpecification( model.getFrecuenciaSociedadesInv() ) );  
	  }	  
	  if( model.getPlazoSociedadesInv() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPlazoSociedadesInvSpecification( model.getPlazoSociedadesInv() ) );  
	  }	  
	  if( model.getVolumenSociedadesInv() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByVolumenSociedadesInvSpecification( model.getVolumenSociedadesInv() ) );  
	  }	  
	  if( model.getExpValoresEst() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByExpValoresEstSpecification( model.getExpValoresEst() ) );  
	  }	  
	  if( model.getFrecuenciaValoresEst() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByFrecuenciaValoresEstSpecification( model.getFrecuenciaValoresEst() ) );  
	  }	  
	  if( model.getPlazoValoresEst() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPlazoValoresEstSpecification( model.getPlazoValoresEst() ) );  
	  }	  
	  if( model.getVolumenValoresEst() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByVolumenValoresEstSpecification( model.getVolumenValoresEst() ) );  
	  }	  
	  if( model.getExpCertificadosBur() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByExpCertificadosBurSpecification( model.getExpCertificadosBur() ) );  
	  }	  
	  if( model.getFrecuenciaCertificadosBur() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByFrecuenciaCertificadosBurSpecification( model.getFrecuenciaCertificadosBur() ) );  
	  }	  
	  if( model.getPlazoCertificadosBur() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPlazoCertificadosBurSpecification( model.getPlazoCertificadosBur() ) );  
	  }	  
	  if( model.getVolumenCertificadosBur() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByVolumenCertificadosBurSpecification( model.getVolumenCertificadosBur() ) );  
	  }	  
	  if( model.getTieneLimitante() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByTieneLimitanteSpecification( model.getTieneLimitante() ) );  
	  }	  
	  if( model.getPorcentajeTotalPatrimonio() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeTotalPatrimonioSpecification( model.getPorcentajeTotalPatrimonio() ) );  
	  }	  
	  if( model.getPorcentajeIngresoAnual() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeIngresoAnualSpecification( model.getPorcentajeIngresoAnual() ) );  
	  }	  
	  if( model.getPorcentajeInversiones() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPorcentajeInversionesSpecification( model.getPorcentajeInversiones() ) );  
	  }	  
	  if( model.getOrigenIngresos() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByOrigenIngresosSpecification( model.getOrigenIngresos() ) );  
	  }	  
	  if( model.getPerfil() != null ) {
			  especificaciones.add(new ReperfilamientopersonafisicaByPerfilSpecification( model.getPerfil() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

