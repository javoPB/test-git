package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.TitularContratoBean;
import com.citi.insurance.catalogos.domain.TitularContratoPkBean;
import com.citi.insurance.catalogos.entity.Titularcontrato;
import com.citi.insurance.catalogos.entity.TitularcontratoPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class TitularContratoAssembler extends BaseAssembler<Titularcontrato, TitularContratoBean, TitularcontratoPk, TitularContratoPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Titularcontrato toEntity(final TitularContratoBean source) {
	  Titularcontrato domain = new Titularcontrato();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setNombre(source.getNombre());
	  domain.setActividad(source.getActividad());
	  domain.setNoclientebanamex(source.getNoClienteBanamex());
	  domain.setInst(source.getInst());
	  domain.setNocta(source.getNoCta());
	  domain.setSuc(source.getSuc());
	  domain.setClabe(source.getClabe());
	  domain.setCalle(source.getCalle());
	  domain.setNoext(source.getNoExt());
	  domain.setNointerior(source.getNoInterior());
	  domain.setMexextr(source.getMexExtr());
	  domain.setCp(source.getCp());
	  domain.setEstado(source.getEstado());
	  domain.setDelmpo(source.getDelMpo());
	  domain.setCiudad(source.getCiudad());
	  domain.setColonia(source.getColonia());
	  domain.setCorrespondencia(source.getCorrespondencia());
	  domain.setRfc(source.getRfc());
	  domain.setCurp(source.getCurp());
	  domain.setFecnac(source.getFecNac());
	  domain.setEscolaridad(source.getEscolaridad());
	  domain.setEdocivil(source.getEdoCivil());
	  domain.setSexo(source.getSexo());
	  domain.setTipovivienda(source.getTipoVivienda());
	  domain.setCalidadmigratoria(source.getCalidadMigratoria());
	  domain.setPaisresidencia(source.getPaisResidencia());
	  domain.setNacionalidad(source.getNacionalidad());
	  domain.setPaisnac(source.getPaisNac());
	  domain.setEdonac(source.getEdoNac());
	  domain.setEmpleadogrofinbanamex(source.getEmpleadoGroFinBanamex());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final TitularContratoBean assemble(final Titularcontrato source) {
    TitularContratoBean domain = new TitularContratoBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setNombre(source.getNombre());
    domain.setActividad(source.getActividad());
    domain.setNoClienteBanamex(source.getNoclientebanamex());
    domain.setInst(source.getInst());
    domain.setNoCta(source.getNocta());
    domain.setSuc(source.getSuc());
    domain.setClabe(source.getClabe());
    domain.setCalle(source.getCalle());
    domain.setNoExt(source.getNoext());
    domain.setNoInterior(source.getNointerior());
    domain.setMexExtr(source.getMexextr());
    domain.setCp(source.getCp());
    domain.setEstado(source.getEstado());
    domain.setDelMpo(source.getDelmpo());
    domain.setCiudad(source.getCiudad());
    domain.setColonia(source.getColonia());
    domain.setCorrespondencia(source.getCorrespondencia());
    domain.setRfc(source.getRfc());
    domain.setCurp(source.getCurp());
    domain.setFecNac(source.getFecnac());
    domain.setEscolaridad(source.getEscolaridad());
    domain.setEdoCivil(source.getEdocivil());
    domain.setSexo(source.getSexo());
    domain.setTipoVivienda(source.getTipovivienda());
    domain.setCalidadMigratoria(source.getCalidadmigratoria());
    domain.setPaisResidencia(source.getPaisresidencia());
    domain.setNacionalidad(source.getNacionalidad());
    domain.setPaisNac(source.getPaisnac());
    domain.setEdoNac(source.getEdonac());
    domain.setEmpleadoGroFinBanamex(source.getEmpleadogrofinbanamex());
    return domain;
  }
  

  @Override
  public TitularcontratoPk toPkEntity(TitularContratoPkBean source) {
	TitularcontratoPk domainPk = new TitularcontratoPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public TitularContratoPkBean assemblePK(TitularcontratoPk source) {
	TitularContratoPkBean domainPk = new TitularContratoPkBean();
	return domainPk;
  }

}
