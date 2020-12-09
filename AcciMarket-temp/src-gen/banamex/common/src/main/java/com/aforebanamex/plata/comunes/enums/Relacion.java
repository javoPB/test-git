package com.aforebanamex.plata.comunes.enums;

public enum Relacion {
vicepresidente(271,"vicepresidente"),
	presidente(272,"presidente")
	;

private long cveRelacion;
private String descripcion;

private Relacion(int cveRelacion, String descripcion) {
	this.cveRelacion = cveRelacion;
	this.descripcion = descripcion;
}

public long getcveRelacion() {
	return cveRelacion;
}

public void setcveRelacion(long cveRelacion) {
	this.cveRelacion = cveRelacion;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (RelacionEnum RelacionEnum : RelacionEnum.values()) {
    //        if (RelacionEnum.getDescripcion().equals(descripcion)) {
    //            return RelacionEnum.getcveRelacion();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveRelacion) {
    //    for (RelacionEnum RelacionEnum : RelacionEnum.values()) {
    //        if (RelacionEnum.getcveRelacion() == cveRelacion) {
    //            return RelacionEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
