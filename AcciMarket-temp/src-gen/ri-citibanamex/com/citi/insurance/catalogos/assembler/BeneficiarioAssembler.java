package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.BeneficiarioBean;
import com.citi.insurance.catalogos.domain.BeneficiarioPkBean;
import com.citi.insurance.catalogos.entity.Beneficiario;
import com.citi.insurance.catalogos.entity.BeneficiarioPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class BeneficiarioAssembler extends BaseAssembler<Beneficiario, BeneficiarioBean, BeneficiarioPk, BeneficiarioPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Beneficiario toEntity(final BeneficiarioBean source) {
	  Beneficiario domain = new Beneficiario();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setNombre(source.getNombre());
	  domain.setAppaterno(source.getApPaterno());
	  domain.setApmaterno(source.getApMaterno());
	  domain.setPorcentaje(source.getPorcentaje());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final BeneficiarioBean assemble(final Beneficiario source) {
    BeneficiarioBean domain = new BeneficiarioBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setNombre(source.getNombre());
    domain.setApPaterno(source.getAppaterno());
    domain.setApMaterno(source.getApmaterno());
    domain.setPorcentaje(source.getPorcentaje());
    return domain;
  }
  

  @Override
  public BeneficiarioPk toPkEntity(BeneficiarioPkBean source) {
	BeneficiarioPk domainPk = new BeneficiarioPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public BeneficiarioPkBean assemblePK(BeneficiarioPk source) {
	BeneficiarioPkBean domainPk = new BeneficiarioPkBean();
	return domainPk;
  }

}
