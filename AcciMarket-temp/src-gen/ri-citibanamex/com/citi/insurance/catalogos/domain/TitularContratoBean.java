package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class TitularContratoBean extends BaseModel<TitularContratoPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String nombre;
@Getter @Setter private String noClienteBanamex;
@Getter @Setter private String noCta;
@Getter @Setter private String suc;
@Getter @Setter private String clabe;
@Getter @Setter private String calle;
@Getter @Setter private String noExt;
@Getter @Setter private String noInterior;
@Getter @Setter private String cp;
@Getter @Setter private String estado;
@Getter @Setter private String delMpo;
@Getter @Setter private String ciudad;
@Getter @Setter private String colonia;
@Getter @Setter private String rfc;
@Getter @Setter private String curp;
@Getter @Setter private String fecNac;
	@Getter @Setter private TitularContratoPkBean id;

}
