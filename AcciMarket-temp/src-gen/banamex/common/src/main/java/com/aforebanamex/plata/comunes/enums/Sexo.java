package com.aforebanamex.plata.comunes.enums;

public enum Sexo {
femenino(256,"femenino"),
	masculino(257,"masculino")
	;

private long cveSexo;
private String descripcion;

private Sexo(int cveSexo, String descripcion) {
	this.cveSexo = cveSexo;
	this.descripcion = descripcion;
}

public long getcveSexo() {
	return cveSexo;
}

public void setcveSexo(long cveSexo) {
	this.cveSexo = cveSexo;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (SexoEnum SexoEnum : SexoEnum.values()) {
    //        if (SexoEnum.getDescripcion().equals(descripcion)) {
    //            return SexoEnum.getcveSexo();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveSexo) {
    //    for (SexoEnum SexoEnum : SexoEnum.values()) {
    //        if (SexoEnum.getcveSexo() == cveSexo) {
    //            return SexoEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
