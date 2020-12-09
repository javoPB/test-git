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

import com.citi.insurance.catalogos.assembler.NegativaPerfilamientoAssembler;
import com.citi.insurance.catalogos.domain.NegativaPerfilamientoBean;
import com.citi.insurance.catalogos.domain.NegativaPerfilamientoPkBean;
import com.citi.insurance.catalogos.entity.Negativaperfilamiento;
import com.citi.insurance.catalogos.entity.NegativaperfilamientoPk;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByNombreSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPerfilActualSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPorcentajeLiquidezSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByMontoLiquidezSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPorcentajeCortoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByMontoCortoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPorcentajeLargoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByMontoLargoPlazoSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPorcentajePatrimonioLiquidoTotalSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByMontoPatrimonioLiquidoTotalSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByPerfilSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoByInconsistenciasSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.NegativaperfilamientoRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class NegativaPerfilamientoService extends BasePageableCRUDService<NegativaPerfilamientoBean, Negativaperfilamiento, NegativaperfilamientoPk, NegativaPerfilamientoPkBean> {

  @Autowired
  private NegativaperfilamientoRepository repository;
  @Autowired
  private NegativaPerfilamientoAssembler assembler;

  @Override
  public final NegativaperfilamientoRepository getRepository() {
    return repository;
  }

  @Override
  public final NegativaperfilamientoRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final NegativaPerfilamientoAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Negativaperfilamiento>> customConstraints() {
	  List<BaseSpecification<Negativaperfilamiento>> especificaciones =
	            new ArrayList<BaseSpecification <Negativaperfilamiento>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Negativaperfilamiento>> customConstraints (NegativaPerfilamientoBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Negativaperfilamiento>> especificaciones = new ArrayList<BaseSpecification <Negativaperfilamiento>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getContrato() != null ) {
			  especificaciones.add(new NegativaperfilamientoByContratoSpecification( model.getContrato() ) );  
	  }	  
	  if( model.getNombre() != null ) {
			  especificaciones.add(new NegativaperfilamientoByNombreSpecification( model.getNombre() ) );  
	  }	  
	  if( model.getPerfilActual() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPerfilActualSpecification( model.getPerfilActual() ) );  
	  }	  
	  if( model.getPersonaPerfilar() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPersonaPerfilarSpecification( model.getPersonaPerfilar() ) );  
	  }	  
	  if( model.getPorcentajeLiquidez() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeLiquidezSpecification( model.getPorcentajeLiquidez() ) );  
	  }	  
	  if( model.getMontoLiquidez() != null ) {
			  especificaciones.add(new NegativaperfilamientoByMontoLiquidezSpecification( model.getMontoLiquidez() ) );  
	  }	  
	  if( model.getPorcentajeCortoPlazo() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeCortoPlazoSpecification( model.getPorcentajeCortoPlazo() ) );  
	  }	  
	  if( model.getMontoCortoPlazo() != null ) {
			  especificaciones.add(new NegativaperfilamientoByMontoCortoPlazoSpecification( model.getMontoCortoPlazo() ) );  
	  }	  
	  if( model.getPorcentajeLargoPlazo() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeLargoPlazoSpecification( model.getPorcentajeLargoPlazo() ) );  
	  }	  
	  if( model.getMontoLargoPlazo() != null ) {
			  especificaciones.add(new NegativaperfilamientoByMontoLargoPlazoSpecification( model.getMontoLargoPlazo() ) );  
	  }	  
	  if( model.getPorcentajePatrimonioLiquidoTotal() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajePatrimonioLiquidoTotalSpecification( model.getPorcentajePatrimonioLiquidoTotal() ) );  
	  }	  
	  if( model.getMontoPatrimonioLiquidoTotal() != null ) {
			  especificaciones.add(new NegativaperfilamientoByMontoPatrimonioLiquidoTotalSpecification( model.getMontoPatrimonioLiquidoTotal() ) );  
	  }	  
	  if( model.getIntervaloEdad() != null ) {
			  especificaciones.add(new NegativaperfilamientoByIntervaloEdadSpecification( model.getIntervaloEdad() ) );  
	  }	  
	  if( model.getNivelEstudios() != null ) {
			  especificaciones.add(new NegativaperfilamientoByNivelEstudiosSpecification( model.getNivelEstudios() ) );  
	  }	  
	  if( model.getOcupacion() != null ) {
			  especificaciones.add(new NegativaperfilamientoByOcupacionSpecification( model.getOcupacion() ) );  
	  }	  
	  if( model.getActividadProfesionalAnterior() != null ) {
			  especificaciones.add(new NegativaperfilamientoByActividadProfesionalAnteriorSpecification( model.getActividadProfesionalAnterior() ) );  
	  }	  
	  if( model.getActividadProfesionalActual() != null ) {
			  especificaciones.add(new NegativaperfilamientoByActividadProfesionalActualSpecification( model.getActividadProfesionalActual() ) );  
	  }	  
	  if( model.getActividadRelacionadaInversiones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByActividadRelacionadaInversionesSpecification( model.getActividadRelacionadaInversiones() ) );  
	  }	  
	  if( model.getEstrategiaCliente() != null ) {
			  especificaciones.add(new NegativaperfilamientoByEstrategiaClienteSpecification( model.getEstrategiaCliente() ) );  
	  }	  
	  if( model.getClienteAsesoria() != null ) {
			  especificaciones.add(new NegativaperfilamientoByClienteAsesoriaSpecification( model.getClienteAsesoria() ) );  
	  }	  
	  if( model.getExperienciaDeudaGub() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExperienciaDeudaGubSpecification( model.getExperienciaDeudaGub() ) );  
	  }	  
	  if( model.getFrecuenciaDeudaGub() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaDeudaGubSpecification( model.getFrecuenciaDeudaGub() ) );  
	  }	  
	  if( model.getPlazoDeudaGub() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoDeudaGubSpecification( model.getPlazoDeudaGub() ) );  
	  }	  
	  if( model.getVolumenDeudaGub() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenDeudaGubSpecification( model.getVolumenDeudaGub() ) );  
	  }	  
	  if( model.getExpDeudaCorp() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpDeudaCorpSpecification( model.getExpDeudaCorp() ) );  
	  }	  
	  if( model.getFrecuenciaDeudaCorp() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaDeudaCorpSpecification( model.getFrecuenciaDeudaCorp() ) );  
	  }	  
	  if( model.getPlazoDeudaCorp() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoDeudaCorpSpecification( model.getPlazoDeudaCorp() ) );  
	  }	  
	  if( model.getVolumenDeudaCorp() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenDeudaCorpSpecification( model.getVolumenDeudaCorp() ) );  
	  }	  
	  if( model.getExpSociedadesInv() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpSociedadesInvSpecification( model.getExpSociedadesInv() ) );  
	  }	  
	  if( model.getFrecuenciaSociedadesInv() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaSociedadesInvSpecification( model.getFrecuenciaSociedadesInv() ) );  
	  }	  
	  if( model.getPlazoSociedadesInv() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoSociedadesInvSpecification( model.getPlazoSociedadesInv() ) );  
	  }	  
	  if( model.getVolumenSociedadesInv() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenSociedadesInvSpecification( model.getVolumenSociedadesInv() ) );  
	  }	  
	  if( model.getExpValoresEst() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpValoresEstSpecification( model.getExpValoresEst() ) );  
	  }	  
	  if( model.getFrecuenciaValoresEst() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaValoresEstSpecification( model.getFrecuenciaValoresEst() ) );  
	  }	  
	  if( model.getPlazoValoresEst() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoValoresEstSpecification( model.getPlazoValoresEst() ) );  
	  }	  
	  if( model.getVolumenValoresEst() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenValoresEstSpecification( model.getVolumenValoresEst() ) );  
	  }	  
	  if( model.getExpCertificadosBur() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpCertificadosBurSpecification( model.getExpCertificadosBur() ) );  
	  }	  
	  if( model.getFrecuenciaCertificadosBur() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaCertificadosBurSpecification( model.getFrecuenciaCertificadosBur() ) );  
	  }	  
	  if( model.getPlazoCertificadosBur() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoCertificadosBurSpecification( model.getPlazoCertificadosBur() ) );  
	  }	  
	  if( model.getVolumenCertificadosBur() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenCertificadosBurSpecification( model.getVolumenCertificadosBur() ) );  
	  }	  
	  if( model.getExpTitulosOpc() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpTitulosOpcSpecification( model.getExpTitulosOpc() ) );  
	  }	  
	  if( model.getFrecuenciaTitulosOpc() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaTitulosOpcSpecification( model.getFrecuenciaTitulosOpc() ) );  
	  }	  
	  if( model.getPlazoTitulosOpc() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoTitulosOpcSpecification( model.getPlazoTitulosOpc() ) );  
	  }	  
	  if( model.getVolumenTitulosOpc() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenTitulosOpcSpecification( model.getVolumenTitulosOpc() ) );  
	  }	  
	  if( model.getExpAcciones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpAccionesSpecification( model.getExpAcciones() ) );  
	  }	  
	  if( model.getFrecuenciaAcciones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaAccionesSpecification( model.getFrecuenciaAcciones() ) );  
	  }	  
	  if( model.getPlazoAcciones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoAccionesSpecification( model.getPlazoAcciones() ) );  
	  }	  
	  if( model.getVolumenAcciones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenAccionesSpecification( model.getVolumenAcciones() ) );  
	  }	  
	  if( model.getExpValoresExt() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpValoresExtSpecification( model.getExpValoresExt() ) );  
	  }	  
	  if( model.getFrecuenciaValoresExt() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaValoresExtSpecification( model.getFrecuenciaValoresExt() ) );  
	  }	  
	  if( model.getPlazoValoresExt() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoValoresExtSpecification( model.getPlazoValoresExt() ) );  
	  }	  
	  if( model.getVolumenValoresExt() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenValoresExtSpecification( model.getVolumenValoresExt() ) );  
	  }	  
	  if( model.getExpTrackers() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpTrackersSpecification( model.getExpTrackers() ) );  
	  }	  
	  if( model.getFrecuenciaTrackers() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaTrackersSpecification( model.getFrecuenciaTrackers() ) );  
	  }	  
	  if( model.getPlazoTrackers() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoTrackersSpecification( model.getPlazoTrackers() ) );  
	  }	  
	  if( model.getVolumenTrackers() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenTrackersSpecification( model.getVolumenTrackers() ) );  
	  }	  
	  if( model.getExpCertificadosCap() != null ) {
			  especificaciones.add(new NegativaperfilamientoByExpCertificadosCapSpecification( model.getExpCertificadosCap() ) );  
	  }	  
	  if( model.getFrecuenciaCertificadosCap() != null ) {
			  especificaciones.add(new NegativaperfilamientoByFrecuenciaCertificadosCapSpecification( model.getFrecuenciaCertificadosCap() ) );  
	  }	  
	  if( model.getPlazoCertificadosCap() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPlazoCertificadosCapSpecification( model.getPlazoCertificadosCap() ) );  
	  }	  
	  if( model.getVolumenCertificadosCap() != null ) {
			  especificaciones.add(new NegativaperfilamientoByVolumenCertificadosCapSpecification( model.getVolumenCertificadosCap() ) );  
	  }	  
	  if( model.getPropositoInversion() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPropositoInversionSpecification( model.getPropositoInversion() ) );  
	  }	  
	  if( model.getToleranciaRiesgo() != null ) {
			  especificaciones.add(new NegativaperfilamientoByToleranciaRiesgoSpecification( model.getToleranciaRiesgo() ) );  
	  }	  
	  if( model.getHorizonteInversion() != null ) {
			  especificaciones.add(new NegativaperfilamientoByHorizonteInversionSpecification( model.getHorizonteInversion() ) );  
	  }	  
	  if( model.getTieneLimitante() != null ) {
			  especificaciones.add(new NegativaperfilamientoByTieneLimitanteSpecification( model.getTieneLimitante() ) );  
	  }	  
	  if( model.getPorcentajeTotalPatrimonio() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeTotalPatrimonioSpecification( model.getPorcentajeTotalPatrimonio() ) );  
	  }	  
	  if( model.getPorcentajeIngresoAnual() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeIngresoAnualSpecification( model.getPorcentajeIngresoAnual() ) );  
	  }	  
	  if( model.getPorcentajeInversiones() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPorcentajeInversionesSpecification( model.getPorcentajeInversiones() ) );  
	  }	  
	  if( model.getOrigenIngresos() != null ) {
			  especificaciones.add(new NegativaperfilamientoByOrigenIngresosSpecification( model.getOrigenIngresos() ) );  
	  }	  
	  if( model.getPerfil() != null ) {
			  especificaciones.add(new NegativaperfilamientoByPerfilSpecification( model.getPerfil() ) );  
	  }	  
	  if( model.getInconsistencias() != null ) {
			  especificaciones.add(new NegativaperfilamientoByInconsistenciasSpecification( model.getInconsistencias() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

