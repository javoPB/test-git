package com.aforebanamex.plata.comunes.enums;

public enum Calificado {
calificado(264,"calificado"),
	nocalificado(265,"no calificado")
	;

private long cveCalificado;
private String descripcion;

private Calificado(int cveCalificado, String descripcion) {
	this.cveCalificado = cveCalificado;
	this.descripcion = descripcion;
}

public long getcveCalificado() {
	return cveCalificado;
}

public void setcveCalificado(long cveCalificado) {
	this.cveCalificado = cveCalificado;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (CalificadoEnum CalificadoEnum : CalificadoEnum.values()) {
    //        if (CalificadoEnum.getDescripcion().equals(descripcion)) {
    //            return CalificadoEnum.getcveCalificado();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveCalificado) {
    //    for (CalificadoEnum CalificadoEnum : CalificadoEnum.values()) {
    //        if (CalificadoEnum.getcveCalificado() == cveCalificado) {
    //            return CalificadoEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
