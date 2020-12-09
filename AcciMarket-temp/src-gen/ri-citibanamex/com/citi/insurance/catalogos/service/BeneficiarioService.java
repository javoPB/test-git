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

import com.citi.insurance.catalogos.assembler.BeneficiarioAssembler;
import com.citi.insurance.catalogos.domain.BeneficiarioBean;
import com.citi.insurance.catalogos.domain.BeneficiarioPkBean;
import com.citi.insurance.catalogos.entity.Beneficiario;
import com.citi.insurance.catalogos.entity.BeneficiarioPk;
import com.citi.insurance.catalogos.persistence.BeneficiarioByNombreSpecification;
import com.citi.insurance.catalogos.persistence.BeneficiarioByApPaternoSpecification;
import com.citi.insurance.catalogos.persistence.BeneficiarioByApMaternoSpecification;
import com.citi.insurance.catalogos.persistence.BeneficiarioByPorcentajeSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.BeneficiarioRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class BeneficiarioService extends BasePageableCRUDService<BeneficiarioBean, Beneficiario, BeneficiarioPk, BeneficiarioPkBean> {

  @Autowired
  private BeneficiarioRepository repository;
  @Autowired
  private BeneficiarioAssembler assembler;

  @Override
  public final BeneficiarioRepository getRepository() {
    return repository;
  }

  @Override
  public final BeneficiarioRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final BeneficiarioAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Beneficiario>> customConstraints() {
	  List<BaseSpecification<Beneficiario>> especificaciones =
	            new ArrayList<BaseSpecification <Beneficiario>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Beneficiario>> customConstraints (BeneficiarioBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Beneficiario>> especificaciones = new ArrayList<BaseSpecification <Beneficiario>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getNombre() != null ) {
			  especificaciones.add(new BeneficiarioByNombreSpecification( model.getNombre() ) );  
	  }	  
	  if( model.getApPaterno() != null ) {
			  especificaciones.add(new BeneficiarioByApPaternoSpecification( model.getApPaterno() ) );  
	  }	  
	  if( model.getApMaterno() != null ) {
			  especificaciones.add(new BeneficiarioByApMaternoSpecification( model.getApMaterno() ) );  
	  }	  
	  if( model.getPorcentaje() != null ) {
			  especificaciones.add(new BeneficiarioByPorcentajeSpecification( model.getPorcentaje() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

