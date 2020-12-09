package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.DistribucionInstruccionesBean;
import com.citi.insurance.catalogos.domain.DistribucionInstruccionesPkBean;
import com.citi.insurance.catalogos.entity.Distribucioninstrucciones;
import com.citi.insurance.catalogos.entity.DistribucioninstruccionesPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class DistribucionInstruccionesAssembler extends BaseAssembler<Distribucioninstrucciones, DistribucionInstruccionesBean, DistribucioninstruccionesPk, DistribucionInstruccionesPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Distribucioninstrucciones toEntity(final DistribucionInstruccionesBean source) {
	  Distribucioninstrucciones domain = new Distribucioninstrucciones();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setOpcdistrinstrucciones(source.getOpcDistrInstrucciones());
	  domain.setCapturados(source.getCapturados());
	  domain.setContrato(source.getContrato());
	  domain.setFoliomov(source.getFolioMov());
	  domain.setDigito(source.getDigito());
	  domain.setImporteneto(source.getImporteNeto());
	  domain.setDepositos(source.getDepositos());
	  domain.setRetiros(source.getRetiros());
	  domain.setSucursal(source.getSucursal());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final DistribucionInstruccionesBean assemble(final Distribucioninstrucciones source) {
    DistribucionInstruccionesBean domain = new DistribucionInstruccionesBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setOpcDistrInstrucciones(source.getOpcdistrinstrucciones());
    domain.setCapturados(source.getCapturados());
    domain.setContrato(source.getContrato());
    domain.setFolioMov(source.getFoliomov());
    domain.setDigito(source.getDigito());
    domain.setImporteNeto(source.getImporteneto());
    domain.setDepositos(source.getDepositos());
    domain.setRetiros(source.getRetiros());
    domain.setSucursal(source.getSucursal());
    return domain;
  }
  

  @Override
  public DistribucioninstruccionesPk toPkEntity(DistribucionInstruccionesPkBean source) {
	DistribucioninstruccionesPk domainPk = new DistribucioninstruccionesPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public DistribucionInstruccionesPkBean assemblePK(DistribucioninstruccionesPk source) {
	DistribucionInstruccionesPkBean domainPk = new DistribucionInstruccionesPkBean();
	return domainPk;
  }

}
