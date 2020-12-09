package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.LimitanteBean;
import com.citi.insurance.catalogos.domain.LimitantePkBean;
import com.citi.insurance.catalogos.entity.Limitante;
import com.citi.insurance.catalogos.entity.LimitantePk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class LimitanteAssembler extends BaseAssembler<Limitante, LimitanteBean, LimitantePk, LimitantePkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Limitante toEntity(final LimitanteBean source) {
	  Limitante domain = new Limitante();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setGrupoinstrumento(source.getGrupoInstrumento());
	  domain.setTipovalor(source.getTipoValor());
	  domain.setEmisoras(source.getEmisoras());
	  domain.setTipovaloremisora(source.getTipoValorEmisora());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final LimitanteBean assemble(final Limitante source) {
    LimitanteBean domain = new LimitanteBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setGrupoInstrumento(source.getGrupoinstrumento());
    domain.setTipoValor(source.getTipovalor());
    domain.setEmisoras(source.getEmisoras());
    domain.setTipoValorEmisora(source.getTipovaloremisora());
    return domain;
  }
  

  @Override
  public LimitantePk toPkEntity(LimitantePkBean source) {
	LimitantePk domainPk = new LimitantePk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public LimitantePkBean assemblePK(LimitantePk source) {
	LimitantePkBean domainPk = new LimitantePkBean();
	return domainPk;
  }

}
