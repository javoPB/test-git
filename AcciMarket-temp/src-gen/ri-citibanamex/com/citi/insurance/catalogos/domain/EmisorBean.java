package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class EmisorBean extends BaseModel<EmisorPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String emisor;
	@Getter @Setter private EmisorPkBean id;

}
