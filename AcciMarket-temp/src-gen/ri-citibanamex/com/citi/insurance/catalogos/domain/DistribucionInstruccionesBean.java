package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class DistribucionInstruccionesBean extends BaseModel<DistribucionInstruccionesPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String capturados;
@Getter @Setter private String contrato;
@Getter @Setter private String folioMov;
@Getter @Setter private String digito;
@Getter @Setter private String importeNeto;
@Getter @Setter private String depositos;
@Getter @Setter private String retiros;
	@Getter @Setter private DistribucionInstruccionesPkBean id;

}
