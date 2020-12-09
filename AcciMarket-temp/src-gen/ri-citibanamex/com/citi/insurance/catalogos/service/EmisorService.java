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

import com.citi.insurance.catalogos.assembler.EmisorAssembler;
import com.citi.insurance.catalogos.domain.EmisorBean;
import com.citi.insurance.catalogos.domain.EmisorPkBean;
import com.citi.insurance.catalogos.entity.Emisor;
import com.citi.insurance.catalogos.entity.EmisorPk;
import com.citi.insurance.catalogos.persistence.EmisorByEmisorSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.EmisorRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class EmisorService extends BasePageableCRUDService<EmisorBean, Emisor, EmisorPk, EmisorPkBean> {

  @Autowired
  private EmisorRepository repository;
  @Autowired
  private EmisorAssembler assembler;

  @Override
  public final EmisorRepository getRepository() {
    return repository;
  }

  @Override
  public final EmisorRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final EmisorAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Emisor>> customConstraints() {
	  List<BaseSpecification<Emisor>> especificaciones =
	            new ArrayList<BaseSpecification <Emisor>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Emisor>> customConstraints (EmisorBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Emisor>> especificaciones = new ArrayList<BaseSpecification <Emisor>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getEmisor() != null ) {
			  especificaciones.add(new EmisorByEmisorSpecification( model.getEmisor() ) );  
	  }	  
	  if( model.getRelacion() != null ) {
			  especificaciones.add(new EmisorByRelacionSpecification( model.getRelacion() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

