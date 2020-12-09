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

import com.citi.insurance.catalogos.assembler.LimitanteAssembler;
import com.citi.insurance.catalogos.domain.LimitanteBean;
import com.citi.insurance.catalogos.domain.LimitantePkBean;
import com.citi.insurance.catalogos.entity.Limitante;
import com.citi.insurance.catalogos.entity.LimitantePk;
import com.citi.insurance.catalogos.persistence.LimitanteByGrupoInstrumentoSpecification;
import com.citi.insurance.catalogos.persistence.LimitanteByTipoValorSpecification;
import com.citi.insurance.catalogos.persistence.LimitanteByEmisorasSpecification;
import com.citi.insurance.catalogos.persistence.LimitanteByTipoValorEmisoraSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.LimitanteRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class LimitanteService extends BasePageableCRUDService<LimitanteBean, Limitante, LimitantePk, LimitantePkBean> {

  @Autowired
  private LimitanteRepository repository;
  @Autowired
  private LimitanteAssembler assembler;

  @Override
  public final LimitanteRepository getRepository() {
    return repository;
  }

  @Override
  public final LimitanteRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final LimitanteAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Limitante>> customConstraints() {
	  List<BaseSpecification<Limitante>> especificaciones =
	            new ArrayList<BaseSpecification <Limitante>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Limitante>> customConstraints (LimitanteBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Limitante>> especificaciones = new ArrayList<BaseSpecification <Limitante>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getGrupoInstrumento() != null ) {
			  especificaciones.add(new LimitanteByGrupoInstrumentoSpecification( model.getGrupoInstrumento() ) );  
	  }	  
	  if( model.getTipoValor() != null ) {
			  especificaciones.add(new LimitanteByTipoValorSpecification( model.getTipoValor() ) );  
	  }	  
	  if( model.getEmisoras() != null ) {
			  especificaciones.add(new LimitanteByEmisorasSpecification( model.getEmisoras() ) );  
	  }	  
	  if( model.getTipoValorEmisora() != null ) {
			  especificaciones.add(new LimitanteByTipoValorEmisoraSpecification( model.getTipoValorEmisora() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

