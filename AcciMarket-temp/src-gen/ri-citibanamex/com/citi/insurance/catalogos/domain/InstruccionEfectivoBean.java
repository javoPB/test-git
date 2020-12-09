package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class InstruccionEfectivoBean extends BaseModel<InstruccionEfectivoPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String contrato;
@Getter @Setter private String subtipoPortafolio;
@Getter @Setter private String digito;
@Getter @Setter private String titular;
@Getter @Setter private String saldo;
@Getter @Setter private String contratoEgreso;
@Getter @Setter private String digitoEgreso;
@Getter @Setter private String saldoInicialEgreso;
@Getter @Setter private String saldoCalculadoEgreso;
@Getter @Setter private String contratoIngreso;
@Getter @Setter private String digitoIngreso;
@Getter @Setter private String saldoInicialIngreso;
@Getter @Setter private String saldoCalculadoIngreso;
@Getter @Setter private String importeIngreso;
	@Getter @Setter private InstruccionEfectivoPkBean id;

}
