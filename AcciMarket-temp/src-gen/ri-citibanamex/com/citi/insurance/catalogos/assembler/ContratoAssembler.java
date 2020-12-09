package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.ContratoBean;
import com.citi.insurance.catalogos.domain.ContratoPkBean;
import com.citi.insurance.catalogos.entity.Contrato;
import com.citi.insurance.catalogos.entity.ContratoPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class ContratoAssembler extends BaseAssembler<Contrato, ContratoBean, ContratoPk, ContratoPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Contrato toEntity(final ContratoBean source) {
	  Contrato domain = new Contrato();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setNocontrato(source.getNoContrato());
	  domain.setDigito(source.getDigito());
	  domain.setDv(source.getDv());
	  domain.setEstatus(source.getEstatus());
	  domain.setPerfil(source.getPerfil());
	  domain.setPortafolio(source.getPortafolio());
	  domain.setClabe(source.getCLABE());
	  domain.setStipoport(source.getSTipoPort());
	  domain.setLibro(source.getLibro());
	  domain.setTitular(source.getTitular());
	  domain.setBeneficiarios(source.getBeneficiarios());
	  domain.setAsesorinversion(source.getAsesorInversion());
	  domain.setTipomanifiesto(source.getTipoManifiesto());
	  domain.setServicioinversion(source.getServicioInversion());
	  domain.setCartaejecucion1(source.getCartaEjecucion1());
	  domain.setFechacartaejecucion1(source.getFechaCartaEjecucion1());
	  domain.setCartaejecucion2(source.getCartaEjecucion2());
	  domain.setFechacartaejecucion2(source.getFechaCartaEjecucion2());
	  domain.setInstitucional(source.getInstitucional());
	  domain.setJustificacioninstitucional(source.getJustificacionInstitucional());
	  domain.setFechainstitucional(source.getFechaInstitucional());
	  domain.setSofisticado(source.getSofisticado());
	  domain.setJustificacionsofisticado(source.getJustificacionSofisticado());
	  domain.setFechasofisticado(source.getFechaSofisticado());
	  domain.setElegible(source.getElegible());
	  domain.setJustificacionelegible(source.getJustificacionElegible());
	  domain.setFechaelegible(source.getFechaElegible());
	  domain.setCalificado(source.getCalificado());
	  domain.setJustificacioncalificado(source.getJustificacionCalificado());
	  domain.setFechacalificado(source.getFechaCalificado());
	  domain.setDiscrecional(source.getDiscrecional());
	  domain.setJustificaciondiscrecional(source.getJustificacionDiscrecional());
	  domain.setFechadiscrecional(source.getFechaDiscrecional());
	  domain.setInstrdeudagub(source.getInstrDeudaGub());
	  domain.setInstrdeudacorp(source.getInstrDeudaCorp());
	  domain.setSociedadesinver(source.getSociedadesInver());
	  domain.setValoresestruc(source.getValoresEstruc());
	  domain.setCertburfideicomisos(source.getCertBurFideicomisos());
	  domain.setTitulosopcionales(source.getTitulosOpcionales());
	  domain.setAcciones(source.getAcciones());
	  domain.setValoresextr(source.getValoresExtr());
	  domain.setTrackers(source.getTrackers());
	  domain.setLimitantes(source.getLimitantes());
	  domain.setEmisor(source.getEmisor());
	  domain.setFirmasautorizadas(source.getFirmasAutorizadas());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final ContratoBean assemble(final Contrato source) {
    ContratoBean domain = new ContratoBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setNoContrato(source.getNocontrato());
    domain.setDigito(source.getDigito());
    domain.setDv(source.getDv());
    domain.setEstatus(source.getEstatus());
    domain.setPerfil(source.getPerfil());
    domain.setPortafolio(source.getPortafolio());
    domain.setCLABE(source.getClabe());
    domain.setSTipoPort(source.getStipoport());
    domain.setLibro(source.getLibro());
    domain.setTitular(source.getTitular());
    domain.setBeneficiarios(source.getBeneficiarios());
    domain.setAsesorInversion(source.getAsesorinversion());
    domain.setTipoManifiesto(source.getTipomanifiesto());
    domain.setServicioInversion(source.getServicioinversion());
    domain.setCartaEjecucion1(source.getCartaejecucion1());
    domain.setFechaCartaEjecucion1(source.getFechacartaejecucion1());
    domain.setCartaEjecucion2(source.getCartaejecucion2());
    domain.setFechaCartaEjecucion2(source.getFechacartaejecucion2());
    domain.setInstitucional(source.getInstitucional());
    domain.setJustificacionInstitucional(source.getJustificacioninstitucional());
    domain.setFechaInstitucional(source.getFechainstitucional());
    domain.setSofisticado(source.getSofisticado());
    domain.setJustificacionSofisticado(source.getJustificacionsofisticado());
    domain.setFechaSofisticado(source.getFechasofisticado());
    domain.setElegible(source.getElegible());
    domain.setJustificacionElegible(source.getJustificacionelegible());
    domain.setFechaElegible(source.getFechaelegible());
    domain.setCalificado(source.getCalificado());
    domain.setJustificacionCalificado(source.getJustificacioncalificado());
    domain.setFechaCalificado(source.getFechacalificado());
    domain.setDiscrecional(source.getDiscrecional());
    domain.setJustificacionDiscrecional(source.getJustificaciondiscrecional());
    domain.setFechaDiscrecional(source.getFechadiscrecional());
    domain.setInstrDeudaGub(source.getInstrdeudagub());
    domain.setInstrDeudaCorp(source.getInstrdeudacorp());
    domain.setSociedadesInver(source.getSociedadesinver());
    domain.setValoresEstruc(source.getValoresestruc());
    domain.setCertBurFideicomisos(source.getCertburfideicomisos());
    domain.setTitulosOpcionales(source.getTitulosopcionales());
    domain.setAcciones(source.getAcciones());
    domain.setValoresExtr(source.getValoresextr());
    domain.setTrackers(source.getTrackers());
    domain.setLimitantes(source.getLimitantes());
    domain.setEmisor(source.getEmisor());
    domain.setFirmasAutorizadas(source.getFirmasautorizadas());
    return domain;
  }
  

  @Override
  public ContratoPk toPkEntity(ContratoPkBean source) {
	ContratoPk domainPk = new ContratoPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public ContratoPkBean assemblePK(ContratoPk source) {
	ContratoPkBean domainPk = new ContratoPkBean();
	return domainPk;
  }

}
