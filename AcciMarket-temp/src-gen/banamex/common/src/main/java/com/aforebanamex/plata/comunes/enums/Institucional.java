package com.aforebanamex.plata.comunes.enums;

public enum Institucional {
institucional(258,"institucional"),
	institucionalpract(259,"institucional pract. vta.")
	;

private long cveInstitucional;
private String descripcion;

private Institucional(int cveInstitucional, String descripcion) {
	this.cveInstitucional = cveInstitucional;
	this.descripcion = descripcion;
}

public long getcveInstitucional() {
	return cveInstitucional;
}

public void setcveInstitucional(long cveInstitucional) {
	this.cveInstitucional = cveInstitucional;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (InstitucionalEnum InstitucionalEnum : InstitucionalEnum.values()) {
    //        if (InstitucionalEnum.getDescripcion().equals(descripcion)) {
    //            return InstitucionalEnum.getcveInstitucional();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveInstitucional) {
    //    for (InstitucionalEnum InstitucionalEnum : InstitucionalEnum.values()) {
    //        if (InstitucionalEnum.getcveInstitucional() == cveInstitucional) {
    //            return InstitucionalEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
