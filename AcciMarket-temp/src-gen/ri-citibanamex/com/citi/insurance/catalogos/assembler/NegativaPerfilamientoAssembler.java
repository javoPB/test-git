package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.NegativaPerfilamientoBean;
import com.citi.insurance.catalogos.domain.NegativaPerfilamientoPkBean;
import com.citi.insurance.catalogos.entity.Negativaperfilamiento;
import com.citi.insurance.catalogos.entity.NegativaperfilamientoPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class NegativaPerfilamientoAssembler extends BaseAssembler<Negativaperfilamiento, NegativaPerfilamientoBean, NegativaperfilamientoPk, NegativaPerfilamientoPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Negativaperfilamiento toEntity(final NegativaPerfilamientoBean source) {
	  Negativaperfilamiento domain = new Negativaperfilamiento();
	  /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	  domain.setId(toPkEntity(source.getId()));
	  domain.setContrato(source.getContrato());
	  domain.setNombre(source.getNombre());
	  domain.setPerfilactual(source.getPerfilActual());
	  domain.setPersonaperfilar(source.getPersonaPerfilar());
	  domain.setPorcentajeliquidez(source.getPorcentajeLiquidez());
	  domain.setMontoliquidez(source.getMontoLiquidez());
	  domain.setPorcentajecortoplazo(source.getPorcentajeCortoPlazo());
	  domain.setMontocortoplazo(source.getMontoCortoPlazo());
	  domain.setPorcentajelargoplazo(source.getPorcentajeLargoPlazo());
	  domain.setMontolargoplazo(source.getMontoLargoPlazo());
	  domain.setPorcentajepatrimonioliquidototal(source.getPorcentajePatrimonioLiquidoTotal());
	  domain.setMontopatrimonioliquidototal(source.getMontoPatrimonioLiquidoTotal());
	  domain.setIntervaloedad(source.getIntervaloEdad());
	  domain.setNivelestudios(source.getNivelEstudios());
	  domain.setOcupacion(source.getOcupacion());
	  domain.setActividadprofesionalanterior(source.getActividadProfesionalAnterior());
	  domain.setActividadprofesionalactual(source.getActividadProfesionalActual());
	  domain.setActividadrelacionadainversiones(source.getActividadRelacionadaInversiones());
	  domain.setEstrategiacliente(source.getEstrategiaCliente());
	  domain.setClienteasesoria(source.getClienteAsesoria());
	  domain.setExperienciadeudagub(source.getExperienciaDeudaGub());
	  domain.setFrecuenciadeudagub(source.getFrecuenciaDeudaGub());
	  domain.setPlazodeudagub(source.getPlazoDeudaGub());
	  domain.setVolumendeudagub(source.getVolumenDeudaGub());
	  domain.setExpdeudacorp(source.getExpDeudaCorp());
	  domain.setFrecuenciadeudacorp(source.getFrecuenciaDeudaCorp());
	  domain.setPlazodeudacorp(source.getPlazoDeudaCorp());
	  domain.setVolumendeudacorp(source.getVolumenDeudaCorp());
	  domain.setExpsociedadesinv(source.getExpSociedadesInv());
	  domain.setFrecuenciasociedadesinv(source.getFrecuenciaSociedadesInv());
	  domain.setPlazosociedadesinv(source.getPlazoSociedadesInv());
	  domain.setVolumensociedadesinv(source.getVolumenSociedadesInv());
	  domain.setExpvaloresest(source.getExpValoresEst());
	  domain.setFrecuenciavaloresest(source.getFrecuenciaValoresEst());
	  domain.setPlazovaloresest(source.getPlazoValoresEst());
	  domain.setVolumenvaloresest(source.getVolumenValoresEst());
	  domain.setExpcertificadosbur(source.getExpCertificadosBur());
	  domain.setFrecuenciacertificadosbur(source.getFrecuenciaCertificadosBur());
	  domain.setPlazocertificadosbur(source.getPlazoCertificadosBur());
	  domain.setVolumencertificadosbur(source.getVolumenCertificadosBur());
	  domain.setExptitulosopc(source.getExpTitulosOpc());
	  domain.setFrecuenciatitulosopc(source.getFrecuenciaTitulosOpc());
	  domain.setPlazotitulosopc(source.getPlazoTitulosOpc());
	  domain.setVolumentitulosopc(source.getVolumenTitulosOpc());
	  domain.setExpacciones(source.getExpAcciones());
	  domain.setFrecuenciaacciones(source.getFrecuenciaAcciones());
	  domain.setPlazoacciones(source.getPlazoAcciones());
	  domain.setVolumenacciones(source.getVolumenAcciones());
	  domain.setExpvaloresext(source.getExpValoresExt());
	  domain.setFrecuenciavaloresext(source.getFrecuenciaValoresExt());
	  domain.setPlazovaloresext(source.getPlazoValoresExt());
	  domain.setVolumenvaloresext(source.getVolumenValoresExt());
	  domain.setExptrackers(source.getExpTrackers());
	  domain.setFrecuenciatrackers(source.getFrecuenciaTrackers());
	  domain.setPlazotrackers(source.getPlazoTrackers());
	  domain.setVolumentrackers(source.getVolumenTrackers());
	  domain.setExpcertificadoscap(source.getExpCertificadosCap());
	  domain.setFrecuenciacertificadoscap(source.getFrecuenciaCertificadosCap());
	  domain.setPlazocertificadoscap(source.getPlazoCertificadosCap());
	  domain.setVolumencertificadoscap(source.getVolumenCertificadosCap());
	  domain.setPropositoinversion(source.getPropositoInversion());
	  domain.setToleranciariesgo(source.getToleranciaRiesgo());
	  domain.setHorizonteinversion(source.getHorizonteInversion());
	  domain.setTienelimitante(source.getTieneLimitante());
	  domain.setPorcentajetotalpatrimonio(source.getPorcentajeTotalPatrimonio());
	  domain.setPorcentajeingresoanual(source.getPorcentajeIngresoAnual());
	  domain.setPorcentajeinversiones(source.getPorcentajeInversiones());
	  domain.setOrigeningresos(source.getOrigenIngresos());
	  domain.setPerfil(source.getPerfil());
	  domain.setInconsistencias(source.getInconsistencias());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final NegativaPerfilamientoBean assemble(final Negativaperfilamiento source) {
    NegativaPerfilamientoBean domain = new NegativaPerfilamientoBean();  
    domain.setId(assemblePK(source.getId()));
    domain.setContrato(source.getContrato());
    domain.setNombre(source.getNombre());
    domain.setPerfilActual(source.getPerfilactual());
    domain.setPersonaPerfilar(source.getPersonaperfilar());
    domain.setPorcentajeLiquidez(source.getPorcentajeliquidez());
    domain.setMontoLiquidez(source.getMontoliquidez());
    domain.setPorcentajeCortoPlazo(source.getPorcentajecortoplazo());
    domain.setMontoCortoPlazo(source.getMontocortoplazo());
    domain.setPorcentajeLargoPlazo(source.getPorcentajelargoplazo());
    domain.setMontoLargoPlazo(source.getMontolargoplazo());
    domain.setPorcentajePatrimonioLiquidoTotal(source.getPorcentajepatrimonioliquidototal());
    domain.setMontoPatrimonioLiquidoTotal(source.getMontopatrimonioliquidototal());
    domain.setIntervaloEdad(source.getIntervaloedad());
    domain.setNivelEstudios(source.getNivelestudios());
    domain.setOcupacion(source.getOcupacion());
    domain.setActividadProfesionalAnterior(source.getActividadprofesionalanterior());
    domain.setActividadProfesionalActual(source.getActividadprofesionalactual());
    domain.setActividadRelacionadaInversiones(source.getActividadrelacionadainversiones());
    domain.setEstrategiaCliente(source.getEstrategiacliente());
    domain.setClienteAsesoria(source.getClienteasesoria());
    domain.setExperienciaDeudaGub(source.getExperienciadeudagub());
    domain.setFrecuenciaDeudaGub(source.getFrecuenciadeudagub());
    domain.setPlazoDeudaGub(source.getPlazodeudagub());
    domain.setVolumenDeudaGub(source.getVolumendeudagub());
    domain.setExpDeudaCorp(source.getExpdeudacorp());
    domain.setFrecuenciaDeudaCorp(source.getFrecuenciadeudacorp());
    domain.setPlazoDeudaCorp(source.getPlazodeudacorp());
    domain.setVolumenDeudaCorp(source.getVolumendeudacorp());
    domain.setExpSociedadesInv(source.getExpsociedadesinv());
    domain.setFrecuenciaSociedadesInv(source.getFrecuenciasociedadesinv());
    domain.setPlazoSociedadesInv(source.getPlazosociedadesinv());
    domain.setVolumenSociedadesInv(source.getVolumensociedadesinv());
    domain.setExpValoresEst(source.getExpvaloresest());
    domain.setFrecuenciaValoresEst(source.getFrecuenciavaloresest());
    domain.setPlazoValoresEst(source.getPlazovaloresest());
    domain.setVolumenValoresEst(source.getVolumenvaloresest());
    domain.setExpCertificadosBur(source.getExpcertificadosbur());
    domain.setFrecuenciaCertificadosBur(source.getFrecuenciacertificadosbur());
    domain.setPlazoCertificadosBur(source.getPlazocertificadosbur());
    domain.setVolumenCertificadosBur(source.getVolumencertificadosbur());
    domain.setExpTitulosOpc(source.getExptitulosopc());
    domain.setFrecuenciaTitulosOpc(source.getFrecuenciatitulosopc());
    domain.setPlazoTitulosOpc(source.getPlazotitulosopc());
    domain.setVolumenTitulosOpc(source.getVolumentitulosopc());
    domain.setExpAcciones(source.getExpacciones());
    domain.setFrecuenciaAcciones(source.getFrecuenciaacciones());
    domain.setPlazoAcciones(source.getPlazoacciones());
    domain.setVolumenAcciones(source.getVolumenacciones());
    domain.setExpValoresExt(source.getExpvaloresext());
    domain.setFrecuenciaValoresExt(source.getFrecuenciavaloresext());
    domain.setPlazoValoresExt(source.getPlazovaloresext());
    domain.setVolumenValoresExt(source.getVolumenvaloresext());
    domain.setExpTrackers(source.getExptrackers());
    domain.setFrecuenciaTrackers(source.getFrecuenciatrackers());
    domain.setPlazoTrackers(source.getPlazotrackers());
    domain.setVolumenTrackers(source.getVolumentrackers());
    domain.setExpCertificadosCap(source.getExpcertificadoscap());
    domain.setFrecuenciaCertificadosCap(source.getFrecuenciacertificadoscap());
    domain.setPlazoCertificadosCap(source.getPlazocertificadoscap());
    domain.setVolumenCertificadosCap(source.getVolumencertificadoscap());
    domain.setPropositoInversion(source.getPropositoinversion());
    domain.setToleranciaRiesgo(source.getToleranciariesgo());
    domain.setHorizonteInversion(source.getHorizonteinversion());
    domain.setTieneLimitante(source.getTienelimitante());
    domain.setPorcentajeTotalPatrimonio(source.getPorcentajetotalpatrimonio());
    domain.setPorcentajeIngresoAnual(source.getPorcentajeingresoanual());
    domain.setPorcentajeInversiones(source.getPorcentajeinversiones());
    domain.setOrigenIngresos(source.getOrigeningresos());
    domain.setPerfil(source.getPerfil());
    domain.setInconsistencias(source.getInconsistencias());
    return domain;
  }
  

  @Override
  public NegativaperfilamientoPk toPkEntity(NegativaPerfilamientoPkBean source) {
	NegativaperfilamientoPk domainPk = new NegativaperfilamientoPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public NegativaPerfilamientoPkBean assemblePK(NegativaperfilamientoPk source) {
	NegativaPerfilamientoPkBean domainPk = new NegativaPerfilamientoPkBean();
	return domainPk;
  }

}
