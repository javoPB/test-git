package com.citi.insurance.catalogos.assembler;

import com.citi.insurance.catalogos.domain.ReperfilamientoPersonaFisicaBean;
import com.citi.insurance.catalogos.domain.ReperfilamientoPersonaFisicaPkBean;
import com.citi.insurance.catalogos.entity.Reperfilamientopersonafisica;
import com.citi.insurance.catalogos.entity.ReperfilamientopersonafisicaPk;
import com.citi.insurance.catalogos.support.assembler.BaseAssembler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class ReperfilamientoPersonaFisicaAssembler extends BaseAssembler<Reperfilamientopersonafisica, ReperfilamientoPersonaFisicaBean, ReperfilamientopersonafisicaPk, ReperfilamientoPersonaFisicaPkBean > {

  protected Logger LOGGER = LoggerFactory.getLogger(getClass());
  /**
   *
   * @param source ModuleBean
   * @return Module
   */
  @Override
  public final Reperfilamientopersonafisica toEntity(final ReperfilamientoPersonaFisicaBean source) {
	  Reperfilamientopersonafisica domain = new Reperfilamientopersonafisica();
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
	  domain.setTienelimitante(source.getTieneLimitante());
	  domain.setPorcentajetotalpatrimonio(source.getPorcentajeTotalPatrimonio());
	  domain.setPorcentajeingresoanual(source.getPorcentajeIngresoAnual());
	  domain.setPorcentajeinversiones(source.getPorcentajeInversiones());
	  domain.setOrigeningresos(source.getOrigenIngresos());
	  domain.setPerfil(source.getPerfil());
    return domain;
  }

  /**
   *
   * @param source Module
   * @return ModuleBean
   */
  @Override
  public final ReperfilamientoPersonaFisicaBean assemble(final Reperfilamientopersonafisica source) {
    ReperfilamientoPersonaFisicaBean domain = new ReperfilamientoPersonaFisicaBean();  
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
    domain.setTieneLimitante(source.getTienelimitante());
    domain.setPorcentajeTotalPatrimonio(source.getPorcentajetotalpatrimonio());
    domain.setPorcentajeIngresoAnual(source.getPorcentajeingresoanual());
    domain.setPorcentajeInversiones(source.getPorcentajeinversiones());
    domain.setOrigenIngresos(source.getOrigeningresos());
    domain.setPerfil(source.getPerfil());
    return domain;
  }
  

  @Override
  public ReperfilamientopersonafisicaPk toPkEntity(ReperfilamientoPersonaFisicaPkBean source) {
	ReperfilamientopersonafisicaPk domainPk = new ReperfilamientopersonafisicaPk();
	
	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	return domainPk;
  }
  

  @Override
  public ReperfilamientoPersonaFisicaPkBean assemblePK(ReperfilamientopersonafisicaPk source) {
	ReperfilamientoPersonaFisicaPkBean domainPk = new ReperfilamientoPersonaFisicaPkBean();
	return domainPk;
  }

}
