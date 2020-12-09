package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.EmisorBean;
import com.citi.insurance.catalogos.domain.EmisorPkBean;
import com.citi.insurance.catalogos.entity.Emisor;
import com.citi.insurance.catalogos.entity.EmisorPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class EmisorAssembler extends BaseAssembler<Emisor, EmisorBean, EmisorPk, EmisorPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Emisor toEntity(final EmisorBean source) {
	  Emisor domain = new Emisor();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setEmisor(source.getEmisor());
	  domain.setRelacion(source.getRelacion());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final EmisorBean assemble(final Emisor source) {
    EmisorBean domain = new EmisorBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setEmisor(source.getEmisor());
    domain.setRelacion(source.getRelacion());
    return domain;
  }
  

  @Override
  public EmisorPk toPkEntity(EmisorPkBean source) {
	EmisorPk domainPk = new EmisorPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public EmisorPkBean assemblePK(EmisorPk source) {
	EmisorPkBean domainPk = new EmisorPkBean();
	return domainPk;
  }

}
