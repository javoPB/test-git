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

import com.citi.insurance.catalogos.assembler.TitularContratoAssembler;
import com.citi.insurance.catalogos.domain.TitularContratoBean;
import com.citi.insurance.catalogos.domain.TitularContratoPkBean;
import com.citi.insurance.catalogos.entity.Titularcontrato;
import com.citi.insurance.catalogos.entity.TitularcontratoPk;
import com.citi.insurance.catalogos.persistence.TitularcontratoByNombreSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByNoClienteBanamexSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByNoCtaSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoBySucSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByClabeSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByCalleSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByNoExtSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByNoInteriorSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByCpSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByEstadoSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByDelMpoSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByCiudadSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByColoniaSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByRfcSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByCurpSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoByFecNacSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.TitularcontratoRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class TitularContratoService extends BasePageableCRUDService<TitularContratoBean, Titularcontrato, TitularcontratoPk, TitularContratoPkBean> {

  @Autowired
  private TitularcontratoRepository repository;
  @Autowired
  private TitularContratoAssembler assembler;

  @Override
  public final TitularcontratoRepository getRepository() {
    return repository;
  }

  @Override
  public final TitularcontratoRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final TitularContratoAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Titularcontrato>> customConstraints() {
	  List<BaseSpecification<Titularcontrato>> especificaciones =
	            new ArrayList<BaseSpecification <Titularcontrato>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Titularcontrato>> customConstraints (TitularContratoBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Titularcontrato>> especificaciones = new ArrayList<BaseSpecification <Titularcontrato>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getNombre() != null ) {
			  especificaciones.add(new TitularcontratoByNombreSpecification( model.getNombre() ) );  
	  }	  
	  if( model.getActividad() != null ) {
			  especificaciones.add(new TitularcontratoByActividadSpecification( model.getActividad() ) );  
	  }	  
	  if( model.getNoClienteBanamex() != null ) {
			  especificaciones.add(new TitularcontratoByNoClienteBanamexSpecification( model.getNoClienteBanamex() ) );  
	  }	  
	  if( model.getNoCta() != null ) {
			  especificaciones.add(new TitularcontratoByNoCtaSpecification( model.getNoCta() ) );  
	  }	  
	  if( model.getSuc() != null ) {
			  especificaciones.add(new TitularcontratoBySucSpecification( model.getSuc() ) );  
	  }	  
	  if( model.getClabe() != null ) {
			  especificaciones.add(new TitularcontratoByClabeSpecification( model.getClabe() ) );  
	  }	  
	  if( model.getCalle() != null ) {
			  especificaciones.add(new TitularcontratoByCalleSpecification( model.getCalle() ) );  
	  }	  
	  if( model.getNoExt() != null ) {
			  especificaciones.add(new TitularcontratoByNoExtSpecification( model.getNoExt() ) );  
	  }	  
	  if( model.getNoInterior() != null ) {
			  especificaciones.add(new TitularcontratoByNoInteriorSpecification( model.getNoInterior() ) );  
	  }	  
	  if( model.getMexExtr() != null ) {
			  especificaciones.add(new TitularcontratoByMexExtrSpecification( model.getMexExtr() ) );  
	  }	  
	  if( model.getCp() != null ) {
			  especificaciones.add(new TitularcontratoByCpSpecification( model.getCp() ) );  
	  }	  
	  if( model.getEstado() != null ) {
			  especificaciones.add(new TitularcontratoByEstadoSpecification( model.getEstado() ) );  
	  }	  
	  if( model.getDelMpo() != null ) {
			  especificaciones.add(new TitularcontratoByDelMpoSpecification( model.getDelMpo() ) );  
	  }	  
	  if( model.getCiudad() != null ) {
			  especificaciones.add(new TitularcontratoByCiudadSpecification( model.getCiudad() ) );  
	  }	  
	  if( model.getColonia() != null ) {
			  especificaciones.add(new TitularcontratoByColoniaSpecification( model.getColonia() ) );  
	  }	  
	  if( model.getCorrespondencia() != null ) {
			  especificaciones.add(new TitularcontratoByCorrespondenciaSpecification( model.getCorrespondencia() ) );  
	  }	  
	  if( model.getRfc() != null ) {
			  especificaciones.add(new TitularcontratoByRfcSpecification( model.getRfc() ) );  
	  }	  
	  if( model.getCurp() != null ) {
			  especificaciones.add(new TitularcontratoByCurpSpecification( model.getCurp() ) );  
	  }	  
	  if( model.getFecNac() != null ) {
			  especificaciones.add(new TitularcontratoByFecNacSpecification( model.getFecNac() ) );  
	  }	  
	  if( model.getEscolaridad() != null ) {
			  especificaciones.add(new TitularcontratoByEscolaridadSpecification( model.getEscolaridad() ) );  
	  }	  
	  if( model.getEdoCivil() != null ) {
			  especificaciones.add(new TitularcontratoByEdoCivilSpecification( model.getEdoCivil() ) );  
	  }	  
	  if( model.getSexo() != null ) {
			  especificaciones.add(new TitularcontratoBySexoSpecification( model.getSexo() ) );  
	  }	  
	  if( model.getTipoVivienda() != null ) {
			  especificaciones.add(new TitularcontratoByTipoViviendaSpecification( model.getTipoVivienda() ) );  
	  }	  
	  if( model.getCalidadMigratoria() != null ) {
			  especificaciones.add(new TitularcontratoByCalidadMigratoriaSpecification( model.getCalidadMigratoria() ) );  
	  }	  
	  if( model.getPaisResidencia() != null ) {
			  especificaciones.add(new TitularcontratoByPaisResidenciaSpecification( model.getPaisResidencia() ) );  
	  }	  
	  if( model.getNacionalidad() != null ) {
			  especificaciones.add(new TitularcontratoByNacionalidadSpecification( model.getNacionalidad() ) );  
	  }	  
	  if( model.getPaisNac() != null ) {
			  especificaciones.add(new TitularcontratoByPaisNacSpecification( model.getPaisNac() ) );  
	  }	  
	  if( model.getEdoNac() != null ) {
			  especificaciones.add(new TitularcontratoByEdoNacSpecification( model.getEdoNac() ) );  
	  }	  
	  if( model.getEmpleadoGroFinBanamex() != null ) {
			  especificaciones.add(new TitularcontratoByEmpleadoGroFinBanamexSpecification( model.getEmpleadoGroFinBanamex() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

