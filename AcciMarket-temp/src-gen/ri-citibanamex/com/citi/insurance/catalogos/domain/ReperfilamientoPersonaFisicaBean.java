package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class ReperfilamientoPersonaFisicaBean extends BaseModel<ReperfilamientoPersonaFisicaPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String nombre;
@Getter @Setter private String perfilActual;
@Getter @Setter private String porcentajeLiquidez;
@Getter @Setter private String montoLiquidez;
@Getter @Setter private String porcentajeCortoPlazo;
@Getter @Setter private String montoCortoPlazo;
@Getter @Setter private String porcentajeLargoPlazo;
@Getter @Setter private String montoLargoPlazo;
@Getter @Setter private String porcentajePatrimonioLiquidoTotal;
@Getter @Setter private String montoPatrimonioLiquidoTotal;
@Getter @Setter private String perfil;
	@Getter @Setter private ReperfilamientoPersonaFisicaPkBean id;

}
