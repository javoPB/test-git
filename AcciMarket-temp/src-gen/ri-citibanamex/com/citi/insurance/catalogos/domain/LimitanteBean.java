package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class LimitanteBean extends BaseModel<LimitantePkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String grupoInstrumento;
@Getter @Setter private String tipoValor;
@Getter @Setter private String emisoras;
@Getter @Setter private String tipoValorEmisora;
	@Getter @Setter private LimitantePkBean id;

}
