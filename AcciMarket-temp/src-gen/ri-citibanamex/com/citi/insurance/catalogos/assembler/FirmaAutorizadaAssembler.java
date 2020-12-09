package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.FirmaAutorizadaBean;
import com.citi.insurance.catalogos.domain.FirmaAutorizadaPkBean;
import com.citi.insurance.catalogos.entity.Firmaautorizada;
import com.citi.insurance.catalogos.entity.FirmaautorizadaPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class FirmaAutorizadaAssembler extends BaseAssembler<Firmaautorizada, FirmaAutorizadaBean, FirmaautorizadaPk, FirmaAutorizadaPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Firmaautorizada toEntity(final FirmaAutorizadaBean source) {
	  Firmaautorizada domain = new Firmaautorizada();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setTipo(source.getTipo());
	  domain.setNombre(source.getNombre());
	  domain.setAppaterno(source.getApPaterno());
	  domain.setApmaterno(source.getApMaterno());
	  domain.setNoescr(source.getNoEscr());
	  domain.setNonot(source.getNoNot());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final FirmaAutorizadaBean assemble(final Firmaautorizada source) {
    FirmaAutorizadaBean domain = new FirmaAutorizadaBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setTipo(source.getTipo());
    domain.setNombre(source.getNombre());
    domain.setApPaterno(source.getAppaterno());
    domain.setApMaterno(source.getApmaterno());
    domain.setNoEscr(source.getNoescr());
    domain.setNoNot(source.getNonot());
    return domain;
  }
  

  @Override
  public FirmaautorizadaPk toPkEntity(FirmaAutorizadaPkBean source) {
	FirmaautorizadaPk domainPk = new FirmaautorizadaPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public FirmaAutorizadaPkBean assemblePK(FirmaautorizadaPk source) {
	FirmaAutorizadaPkBean domainPk = new FirmaAutorizadaPkBean();
	return domainPk;
  }

}
