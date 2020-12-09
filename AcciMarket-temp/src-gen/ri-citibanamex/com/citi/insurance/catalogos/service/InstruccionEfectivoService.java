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

import com.citi.insurance.catalogos.assembler.InstruccionEfectivoAssembler;
import com.citi.insurance.catalogos.domain.InstruccionEfectivoBean;
import com.citi.insurance.catalogos.domain.InstruccionEfectivoPkBean;
import com.citi.insurance.catalogos.entity.Instruccionefectivo;
import com.citi.insurance.catalogos.entity.InstruccionefectivoPk;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByContratoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySubtipoPortafolioSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByDigitoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByTitularSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySaldoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByContratoEgresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByDigitoEgresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySaldoInicialEgresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySaldoCalculadoEgresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByContratoIngresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByDigitoIngresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySaldoInicialIngresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoBySaldoCalculadoIngresoSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoByImporteIngresoSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.InstruccionefectivoRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class InstruccionEfectivoService extends BasePageableCRUDService<InstruccionEfectivoBean, Instruccionefectivo, InstruccionefectivoPk, InstruccionEfectivoPkBean> {

  @Autowired
  private InstruccionefectivoRepository repository;
  @Autowired
  private InstruccionEfectivoAssembler assembler;

  @Override
  public final InstruccionefectivoRepository getRepository() {
    return repository;
  }

  @Override
  public final InstruccionefectivoRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final InstruccionEfectivoAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Instruccionefectivo>> customConstraints() {
	  List<BaseSpecification<Instruccionefectivo>> especificaciones =
	            new ArrayList<BaseSpecification <Instruccionefectivo>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Instruccionefectivo>> customConstraints (InstruccionEfectivoBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Instruccionefectivo>> especificaciones = new ArrayList<BaseSpecification <Instruccionefectivo>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getSucursal() != null ) {
			  especificaciones.add(new InstruccionefectivoBySucursalSpecification( model.getSucursal() ) );  
	  }	  
	  if( model.getOperacion() != null ) {
			  especificaciones.add(new InstruccionefectivoByOperacionSpecification( model.getOperacion() ) );  
	  }	  
	  if( model.getTipo() != null ) {
			  especificaciones.add(new InstruccionefectivoByTipoSpecification( model.getTipo() ) );  
	  }	  
	  if( model.getMedLiq() != null ) {
			  especificaciones.add(new InstruccionefectivoByMedLiqSpecification( model.getMedLiq() ) );  
	  }	  
	  if( model.getContrato() != null ) {
			  especificaciones.add(new InstruccionefectivoByContratoSpecification( model.getContrato() ) );  
	  }	  
	  if( model.getSubtipoPortafolio() != null ) {
			  especificaciones.add(new InstruccionefectivoBySubtipoPortafolioSpecification( model.getSubtipoPortafolio() ) );  
	  }	  
	  if( model.getDigito() != null ) {
			  especificaciones.add(new InstruccionefectivoByDigitoSpecification( model.getDigito() ) );  
	  }	  
	  if( model.getTitular() != null ) {
			  especificaciones.add(new InstruccionefectivoByTitularSpecification( model.getTitular() ) );  
	  }	  
	  if( model.getSaldo() != null ) {
			  especificaciones.add(new InstruccionefectivoBySaldoSpecification( model.getSaldo() ) );  
	  }	  
	  if( model.getContratoEgreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByContratoEgresoSpecification( model.getContratoEgreso() ) );  
	  }	  
	  if( model.getDigitoEgreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByDigitoEgresoSpecification( model.getDigitoEgreso() ) );  
	  }	  
	  if( model.getSaldoInicialEgreso() != null ) {
			  especificaciones.add(new InstruccionefectivoBySaldoInicialEgresoSpecification( model.getSaldoInicialEgreso() ) );  
	  }	  
	  if( model.getSaldoCalculadoEgreso() != null ) {
			  especificaciones.add(new InstruccionefectivoBySaldoCalculadoEgresoSpecification( model.getSaldoCalculadoEgreso() ) );  
	  }	  
	  if( model.getBenefEgreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByBenefEgresoSpecification( model.getBenefEgreso() ) );  
	  }	  
	  if( model.getContratoIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByContratoIngresoSpecification( model.getContratoIngreso() ) );  
	  }	  
	  if( model.getDigitoIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByDigitoIngresoSpecification( model.getDigitoIngreso() ) );  
	  }	  
	  if( model.getSaldoInicialIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoBySaldoInicialIngresoSpecification( model.getSaldoInicialIngreso() ) );  
	  }	  
	  if( model.getSaldoCalculadoIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoBySaldoCalculadoIngresoSpecification( model.getSaldoCalculadoIngreso() ) );  
	  }	  
	  if( model.getBenefIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByBenefIngresoSpecification( model.getBenefIngreso() ) );  
	  }	  
	  if( model.getImporteIngreso() != null ) {
			  especificaciones.add(new InstruccionefectivoByImporteIngresoSpecification( model.getImporteIngreso() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

