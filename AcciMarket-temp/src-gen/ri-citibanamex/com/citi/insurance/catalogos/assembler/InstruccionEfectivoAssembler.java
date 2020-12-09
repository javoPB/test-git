package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.InstruccionEfectivoBean;
import com.citi.insurance.catalogos.domain.InstruccionEfectivoPkBean;
import com.citi.insurance.catalogos.entity.Instruccionefectivo;
import com.citi.insurance.catalogos.entity.InstruccionefectivoPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class InstruccionEfectivoAssembler extends BaseAssembler<Instruccionefectivo, InstruccionEfectivoBean, InstruccionefectivoPk, InstruccionEfectivoPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Instruccionefectivo toEntity(final InstruccionEfectivoBean source) {
	  Instruccionefectivo domain = new Instruccionefectivo();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setSucursal(source.getSucursal());
	  domain.setOperacion(source.getOperacion());
	  domain.setTipo(source.getTipo());
	  domain.setMedliq(source.getMedLiq());
	  domain.setContrato(source.getContrato());
	  domain.setSubtipoportafolio(source.getSubtipoPortafolio());
	  domain.setDigito(source.getDigito());
	  domain.setTitular(source.getTitular());
	  domain.setSaldo(source.getSaldo());
	  domain.setContratoegreso(source.getContratoEgreso());
	  domain.setDigitoegreso(source.getDigitoEgreso());
	  domain.setSaldoinicialegreso(source.getSaldoInicialEgreso());
	  domain.setSaldocalculadoegreso(source.getSaldoCalculadoEgreso());
	  domain.setBenefegreso(source.getBenefEgreso());
	  domain.setContratoingreso(source.getContratoIngreso());
	  domain.setDigitoingreso(source.getDigitoIngreso());
	  domain.setSaldoinicialingreso(source.getSaldoInicialIngreso());
	  domain.setSaldocalculadoingreso(source.getSaldoCalculadoIngreso());
	  domain.setBenefingreso(source.getBenefIngreso());
	  domain.setImporteingreso(source.getImporteIngreso());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final InstruccionEfectivoBean assemble(final Instruccionefectivo source) {
    InstruccionEfectivoBean domain = new InstruccionEfectivoBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setSucursal(source.getSucursal());
    domain.setOperacion(source.getOperacion());
    domain.setTipo(source.getTipo());
    domain.setMedLiq(source.getMedliq());
    domain.setContrato(source.getContrato());
    domain.setSubtipoPortafolio(source.getSubtipoportafolio());
    domain.setDigito(source.getDigito());
    domain.setTitular(source.getTitular());
    domain.setSaldo(source.getSaldo());
    domain.setContratoEgreso(source.getContratoegreso());
    domain.setDigitoEgreso(source.getDigitoegreso());
    domain.setSaldoInicialEgreso(source.getSaldoinicialegreso());
    domain.setSaldoCalculadoEgreso(source.getSaldocalculadoegreso());
    domain.setBenefEgreso(source.getBenefegreso());
    domain.setContratoIngreso(source.getContratoingreso());
    domain.setDigitoIngreso(source.getDigitoingreso());
    domain.setSaldoInicialIngreso(source.getSaldoinicialingreso());
    domain.setSaldoCalculadoIngreso(source.getSaldocalculadoingreso());
    domain.setBenefIngreso(source.getBenefingreso());
    domain.setImporteIngreso(source.getImporteingreso());
    return domain;
  }
  

  @Override
  public InstruccionefectivoPk toPkEntity(InstruccionEfectivoPkBean source) {
	InstruccionefectivoPk domainPk = new InstruccionefectivoPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public InstruccionEfectivoPkBean assemblePK(InstruccionefectivoPk source) {
	InstruccionEfectivoPkBean domainPk = new InstruccionEfectivoPkBean();
	return domainPk;
  }

}
