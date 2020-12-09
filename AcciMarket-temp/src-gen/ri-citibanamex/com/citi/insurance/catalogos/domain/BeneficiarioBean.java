package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class BeneficiarioBean extends BaseModel<BeneficiarioPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String nombre;
@Getter @Setter private String apPaterno;
@Getter @Setter private String apMaterno;
@Getter @Setter private Integer porcentaje;
	@Getter @Setter private BeneficiarioPkBean id;

}
