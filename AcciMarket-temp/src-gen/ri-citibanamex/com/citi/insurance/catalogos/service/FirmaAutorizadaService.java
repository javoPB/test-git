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

import com.citi.insurance.catalogos.assembler.FirmaAutorizadaAssembler;
import com.citi.insurance.catalogos.domain.FirmaAutorizadaBean;
import com.citi.insurance.catalogos.domain.FirmaAutorizadaPkBean;
import com.citi.insurance.catalogos.entity.Firmaautorizada;
import com.citi.insurance.catalogos.entity.FirmaautorizadaPk;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaByNombreSpecification;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaByApPaternoSpecification;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaByApMaternoSpecification;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaByNoEscrSpecification;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaByNoNotSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.FirmaautorizadaRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class FirmaAutorizadaService extends BasePageableCRUDService<FirmaAutorizadaBean, Firmaautorizada, FirmaautorizadaPk, FirmaAutorizadaPkBean> {

  @Autowired
  private FirmaautorizadaRepository repository;
  @Autowired
  private FirmaAutorizadaAssembler assembler;

  @Override
  public final FirmaautorizadaRepository getRepository() {
    return repository;
  }

  @Override
  public final FirmaautorizadaRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final FirmaAutorizadaAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Firmaautorizada>> customConstraints() {
	  List<BaseSpecification<Firmaautorizada>> especificaciones =
	            new ArrayList<BaseSpecification <Firmaautorizada>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Firmaautorizada>> customConstraints (FirmaAutorizadaBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Firmaautorizada>> especificaciones = new ArrayList<BaseSpecification <Firmaautorizada>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getTipo() != null ) {
			  especificaciones.add(new FirmaautorizadaByTipoSpecification( model.getTipo() ) );  
	  }	  
	  if( model.getNombre() != null ) {
			  especificaciones.add(new FirmaautorizadaByNombreSpecification( model.getNombre() ) );  
	  }	  
	  if( model.getApPaterno() != null ) {
			  especificaciones.add(new FirmaautorizadaByApPaternoSpecification( model.getApPaterno() ) );  
	  }	  
	  if( model.getApMaterno() != null ) {
			  especificaciones.add(new FirmaautorizadaByApMaternoSpecification( model.getApMaterno() ) );  
	  }	  
	  if( model.getNoEscr() != null ) {
			  especificaciones.add(new FirmaautorizadaByNoEscrSpecification( model.getNoEscr() ) );  
	  }	  
	  if( model.getNoNot() != null ) {
			  especificaciones.add(new FirmaautorizadaByNoNotSpecification( model.getNoNot() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

