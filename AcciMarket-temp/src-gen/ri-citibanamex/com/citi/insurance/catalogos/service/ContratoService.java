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

import com.citi.insurance.catalogos.assembler.ContratoAssembler;
import com.citi.insurance.catalogos.domain.ContratoBean;
import com.citi.insurance.catalogos.domain.ContratoPkBean;
import com.citi.insurance.catalogos.entity.Contrato;
import com.citi.insurance.catalogos.entity.ContratoPk;
import com.citi.insurance.catalogos.persistence.ContratoByNoContratoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByDigitoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByDvSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByEstatusSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByPerfilSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByPortafolioSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByCLABESpecification;
import com.citi.insurance.catalogos.persistence.ContratoBySTipoPortSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByLibroSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByAsesorInversionSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByTipoManifiestoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByServicioInversionSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByCartaEjecucion1Specification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaCartaEjecucion1Specification;
import com.citi.insurance.catalogos.persistence.ContratoByCartaEjecucion2Specification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaCartaEjecucion2Specification;
import com.citi.insurance.catalogos.persistence.ContratoByJustificacionInstitucionalSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaInstitucionalSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByJustificacionSofisticadoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaSofisticadoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByJustificacionElegibleSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaElegibleSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByJustificacionCalificadoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaCalificadoSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByJustificacionDiscrecionalSpecification;
import com.citi.insurance.catalogos.persistence.ContratoByFechaDiscrecionalSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.ContratoRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class ContratoService extends BasePageableCRUDService<ContratoBean, Contrato, ContratoPk, ContratoPkBean> {

  @Autowired
  private ContratoRepository repository;
  @Autowired
  private ContratoAssembler assembler;

  @Override
  public final ContratoRepository getRepository() {
    return repository;
  }

  @Override
  public final ContratoRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final ContratoAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Contrato>> customConstraints() {
	  List<BaseSpecification<Contrato>> especificaciones =
	            new ArrayList<BaseSpecification <Contrato>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Contrato>> customConstraints (ContratoBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Contrato>> especificaciones = new ArrayList<BaseSpecification <Contrato>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getNoContrato() != null ) {
			  especificaciones.add(new ContratoByNoContratoSpecification( model.getNoContrato() ) );  
	  }	  
	  if( model.getDigito() != null ) {
			  especificaciones.add(new ContratoByDigitoSpecification( model.getDigito() ) );  
	  }	  
	  if( model.getDv() != null ) {
			  especificaciones.add(new ContratoByDvSpecification( model.getDv() ) );  
	  }	  
	  if( model.getEstatus() != null ) {
			  especificaciones.add(new ContratoByEstatusSpecification( model.getEstatus() ) );  
	  }	  
	  if( model.getPerfil() != null ) {
			  especificaciones.add(new ContratoByPerfilSpecification( model.getPerfil() ) );  
	  }	  
	  if( model.getPortafolio() != null ) {
			  especificaciones.add(new ContratoByPortafolioSpecification( model.getPortafolio() ) );  
	  }	  
	  if( model.getCLABE() != null ) {
			  especificaciones.add(new ContratoByCLABESpecification( model.getCLABE() ) );  
	  }	  
	  if( model.getSTipoPort() != null ) {
			  especificaciones.add(new ContratoBySTipoPortSpecification( model.getSTipoPort() ) );  
	  }	  
	  if( model.getLibro() != null ) {
			  especificaciones.add(new ContratoByLibroSpecification( model.getLibro() ) );  
	  }	  
	  if( model.getTitular() != null ) {
			  especificaciones.add(new ContratoByTitularSpecification( model.getTitular() ) );  
	  }	  
	  if( model.getAsesorInversion() != null ) {
			  especificaciones.add(new ContratoByAsesorInversionSpecification( model.getAsesorInversion() ) );  
	  }	  
	  if( model.getTipoManifiesto() != null ) {
			  especificaciones.add(new ContratoByTipoManifiestoSpecification( model.getTipoManifiesto() ) );  
	  }	  
	  if( model.getServicioInversion() != null ) {
			  especificaciones.add(new ContratoByServicioInversionSpecification( model.getServicioInversion() ) );  
	  }	  
	  if( model.getCartaEjecucion1() != null ) {
			  especificaciones.add(new ContratoByCartaEjecucion1Specification( model.getCartaEjecucion1() ) );  
	  }	  
	  if( model.getFechaCartaEjecucion1() != null ) {
			  especificaciones.add(new ContratoByFechaCartaEjecucion1Specification( model.getFechaCartaEjecucion1() ) );  
	  }	  
	  if( model.getCartaEjecucion2() != null ) {
			  especificaciones.add(new ContratoByCartaEjecucion2Specification( model.getCartaEjecucion2() ) );  
	  }	  
	  if( model.getFechaCartaEjecucion2() != null ) {
			  especificaciones.add(new ContratoByFechaCartaEjecucion2Specification( model.getFechaCartaEjecucion2() ) );  
	  }	  
	  if( model.getInstitucional() != null ) {
			  especificaciones.add(new ContratoByInstitucionalSpecification( model.getInstitucional() ) );  
	  }	  
	  if( model.getJustificacionInstitucional() != null ) {
			  especificaciones.add(new ContratoByJustificacionInstitucionalSpecification( model.getJustificacionInstitucional() ) );  
	  }	  
	  if( model.getFechaInstitucional() != null ) {
			  especificaciones.add(new ContratoByFechaInstitucionalSpecification( model.getFechaInstitucional() ) );  
	  }	  
	  if( model.getSofisticado() != null ) {
			  especificaciones.add(new ContratoBySofisticadoSpecification( model.getSofisticado() ) );  
	  }	  
	  if( model.getJustificacionSofisticado() != null ) {
			  especificaciones.add(new ContratoByJustificacionSofisticadoSpecification( model.getJustificacionSofisticado() ) );  
	  }	  
	  if( model.getFechaSofisticado() != null ) {
			  especificaciones.add(new ContratoByFechaSofisticadoSpecification( model.getFechaSofisticado() ) );  
	  }	  
	  if( model.getElegible() != null ) {
			  especificaciones.add(new ContratoByElegibleSpecification( model.getElegible() ) );  
	  }	  
	  if( model.getJustificacionElegible() != null ) {
			  especificaciones.add(new ContratoByJustificacionElegibleSpecification( model.getJustificacionElegible() ) );  
	  }	  
	  if( model.getFechaElegible() != null ) {
			  especificaciones.add(new ContratoByFechaElegibleSpecification( model.getFechaElegible() ) );  
	  }	  
	  if( model.getCalificado() != null ) {
			  especificaciones.add(new ContratoByCalificadoSpecification( model.getCalificado() ) );  
	  }	  
	  if( model.getJustificacionCalificado() != null ) {
			  especificaciones.add(new ContratoByJustificacionCalificadoSpecification( model.getJustificacionCalificado() ) );  
	  }	  
	  if( model.getFechaCalificado() != null ) {
			  especificaciones.add(new ContratoByFechaCalificadoSpecification( model.getFechaCalificado() ) );  
	  }	  
	  if( model.getDiscrecional() != null ) {
			  especificaciones.add(new ContratoByDiscrecionalSpecification( model.getDiscrecional() ) );  
	  }	  
	  if( model.getJustificacionDiscrecional() != null ) {
			  especificaciones.add(new ContratoByJustificacionDiscrecionalSpecification( model.getJustificacionDiscrecional() ) );  
	  }	  
	  if( model.getFechaDiscrecional() != null ) {
			  especificaciones.add(new ContratoByFechaDiscrecionalSpecification( model.getFechaDiscrecional() ) );  
	  }	  
	  if( model.getInstrDeudaGub() != null ) {
			  especificaciones.add(new ContratoByInstrDeudaGubSpecification( model.getInstrDeudaGub() ) );  
	  }	  
	  if( model.getInstrDeudaCorp() != null ) {
			  especificaciones.add(new ContratoByInstrDeudaCorpSpecification( model.getInstrDeudaCorp() ) );  
	  }	  
	  if( model.getSociedadesInver() != null ) {
			  especificaciones.add(new ContratoBySociedadesInverSpecification( model.getSociedadesInver() ) );  
	  }	  
	  if( model.getValoresEstruc() != null ) {
			  especificaciones.add(new ContratoByValoresEstrucSpecification( model.getValoresEstruc() ) );  
	  }	  
	  if( model.getCertBurFideicomisos() != null ) {
			  especificaciones.add(new ContratoByCertBurFideicomisosSpecification( model.getCertBurFideicomisos() ) );  
	  }	  
	  if( model.getTitulosOpcionales() != null ) {
			  especificaciones.add(new ContratoByTitulosOpcionalesSpecification( model.getTitulosOpcionales() ) );  
	  }	  
	  if( model.getAcciones() != null ) {
			  especificaciones.add(new ContratoByAccionesSpecification( model.getAcciones() ) );  
	  }	  
	  if( model.getValoresExtr() != null ) {
			  especificaciones.add(new ContratoByValoresExtrSpecification( model.getValoresExtr() ) );  
	  }	  
	  if( model.getTrackers() != null ) {
			  especificaciones.add(new ContratoByTrackersSpecification( model.getTrackers() ) );  
	  }	  
	  if( model.getLimitantes() != null ) {
			  especificaciones.add(new ContratoByLimitantesSpecification( model.getLimitantes() ) );  
	  }	  
	  if( model.getEmisor() != null ) {
			  especificaciones.add(new ContratoByEmisorSpecification( model.getEmisor() ) );  
	  }	  
	  if( model.getFirmasAutorizadas() != null ) {
			  especificaciones.add(new ContratoByFirmasAutorizadasSpecification( model.getFirmasAutorizadas() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

