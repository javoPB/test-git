package com.citi.insurance.catalogos.domain;

import com.citi.insurance.catalogos.support.domain.BaseModel;

import lombok.Getter;
import lombok.Setter;

public class ContratoBean extends BaseModel<ContratoPkBean> {

/* TODO: Verificar columnas que se van a utilizar, inicializar las faltantes y eliminar las que no se utilicen si es necesario */
@Getter @Setter private String noContrato;
@Getter @Setter private String digito;
@Getter @Setter private String dv;
@Getter @Setter private String estatus;
@Getter @Setter private String perfil;
@Getter @Setter private String portafolio;
@Getter @Setter private String cLABE;
@Getter @Setter private String sTipoPort;
@Getter @Setter private String libro;
@Getter @Setter private String asesorInversion;
@Getter @Setter private String tipoManifiesto;
@Getter @Setter private String servicioInversion;
@Getter @Setter private String cartaEjecucion1;
@Getter @Setter private String fechaCartaEjecucion1;
@Getter @Setter private String cartaEjecucion2;
@Getter @Setter private String fechaCartaEjecucion2;
@Getter @Setter private String justificacionInstitucional;
@Getter @Setter private String fechaInstitucional;
@Getter @Setter private String justificacionSofisticado;
@Getter @Setter private String fechaSofisticado;
@Getter @Setter private String justificacionElegible;
@Getter @Setter private String fechaElegible;
@Getter @Setter private String justificacionCalificado;
@Getter @Setter private String fechaCalificado;
@Getter @Setter private String justificacionDiscrecional;
@Getter @Setter private String fechaDiscrecional;
	@Getter @Setter private ContratoPkBean id;

}
