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

import com.citi.insurance.catalogos.assembler.DistribucionInstruccionesAssembler;
import com.citi.insurance.catalogos.domain.DistribucionInstruccionesBean;
import com.citi.insurance.catalogos.domain.DistribucionInstruccionesPkBean;
import com.citi.insurance.catalogos.entity.Distribucioninstrucciones;
import com.citi.insurance.catalogos.entity.DistribucioninstruccionesPk;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByCapturadosSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByContratoSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByFolioMovSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByDigitoSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByImporteNetoSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByDepositosSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesByRetirosSpecification;
/* TODO: Importar librerías faltantes si es necesario */
//import com.citi.insurance.catalogos.persistence.TblDatosGeneralesByTypeSpecification;
import com.citi.insurance.catalogos.persistence.DistribucioninstruccionesRepository;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;
import com.citi.insurance.catalogos.support.service.BasePageableCRUDService;

/**
 *
 * @author
 */
@Service
public class DistribucionInstruccionesService extends BasePageableCRUDService<DistribucionInstruccionesBean, Distribucioninstrucciones, DistribucioninstruccionesPk, DistribucionInstruccionesPkBean> {

  @Autowired
  private DistribucioninstruccionesRepository repository;
  @Autowired
  private DistribucionInstruccionesAssembler assembler;

  @Override
  public final DistribucioninstruccionesRepository getRepository() {
    return repository;
  }

  @Override
  public final DistribucioninstruccionesRepository getJpaRepository() {
    return repository;
  }

  @Override
  public final DistribucionInstruccionesAssembler getAssembler() {
    return assembler;
  }
  
  @Override
  public Collection<BaseSpecification<Distribucioninstrucciones>> customConstraints() {
	  List<BaseSpecification<Distribucioninstrucciones>> especificaciones =
	            new ArrayList<BaseSpecification <Distribucioninstrucciones>>();	  
	  /* TODO: Descomentar y reemplazar por valor a Buscar */
	  //especificaciones.add(new TblDatosGeneralesByTypeSpecification("VDPP"));
	    return especificaciones;
  }
  
  @Override
  public Collection<BaseSpecification<Distribucioninstrucciones>> customConstraints (DistribucionInstruccionesBean model){
      LOGGER.debug("Filtrando con {}", model);
	  List<BaseSpecification <Distribucioninstrucciones>> especificaciones = new ArrayList<BaseSpecification <Distribucioninstrucciones>>();
	  
	  /* TODO: Verificar campos llaves que se van a utilizar y los que no eliminarlos */ 
	  if( model.getOpcDistrInstrucciones() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByOpcDistrInstruccionesSpecification( model.getOpcDistrInstrucciones() ) );  
	  }	  
	  if( model.getCapturados() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByCapturadosSpecification( model.getCapturados() ) );  
	  }	  
	  if( model.getContrato() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByContratoSpecification( model.getContrato() ) );  
	  }	  
	  if( model.getFolioMov() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByFolioMovSpecification( model.getFolioMov() ) );  
	  }	  
	  if( model.getDigito() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByDigitoSpecification( model.getDigito() ) );  
	  }	  
	  if( model.getImporteNeto() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByImporteNetoSpecification( model.getImporteNeto() ) );  
	  }	  
	  if( model.getDepositos() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByDepositosSpecification( model.getDepositos() ) );  
	  }	  
	  if( model.getRetiros() != null ) {
			  especificaciones.add(new DistribucioninstruccionesByRetirosSpecification( model.getRetiros() ) );  
	  }	  
	  if( model.getSucursal() != null ) {
			  especificaciones.add(new DistribucioninstruccionesBySucursalSpecification( model.getSucursal() ) );  
	  }	  
	  LOGGER.debug("Especificaciones {}", especificaciones.size());
	  return especificaciones;
	  
  }
}

