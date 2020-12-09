package com.aforebanamex.plata.comunes.enums;

public enum SituacionFinancieraActual {
de0a20(280,"0-20%"),
	de20a40(281,"20-40%"),
	de40a60(282,"40-60%"),
	de60a80(283,"60-80%"),
	de80a100(284,"80-100%")
	;

private long cveSituacionFinancieraActual;
private String descripcion;

private SituacionFinancieraActual(int cveSituacionFinancieraActual, String descripcion) {
	this.cveSituacionFinancieraActual = cveSituacionFinancieraActual;
	this.descripcion = descripcion;
}

public long getcveSituacionFinancieraActual() {
	return cveSituacionFinancieraActual;
}

public void setcveSituacionFinancieraActual(long cveSituacionFinancieraActual) {
	this.cveSituacionFinancieraActual = cveSituacionFinancieraActual;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (SituacionfinancieraactualEnum SituacionfinancieraactualEnum : SituacionfinancieraactualEnum.values()) {
    //        if (SituacionfinancieraactualEnum.getDescripcion().equals(descripcion)) {
    //            return SituacionfinancieraactualEnum.getcveSituacionfinancieraactual();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveSituacionfinancieraactual) {
    //    for (SituacionfinancieraactualEnum SituacionfinancieraactualEnum : SituacionfinancieraactualEnum.values()) {
    //        if (SituacionfinancieraactualEnum.getcveSituacionfinancieraactual() == cveSituacionfinancieraactual) {
    //            return SituacionfinancieraactualEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
