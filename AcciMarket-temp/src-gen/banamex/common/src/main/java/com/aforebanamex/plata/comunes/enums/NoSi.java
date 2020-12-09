package com.aforebanamex.plata.comunes.enums;

public enum NoSi {
no(278,"no"),
	si(279,"si")
	;

private long cveNoSi;
private String descripcion;

private NoSi(int cveNoSi, String descripcion) {
	this.cveNoSi = cveNoSi;
	this.descripcion = descripcion;
}

public long getcveNoSi() {
	return cveNoSi;
}

public void setcveNoSi(long cveNoSi) {
	this.cveNoSi = cveNoSi;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (NosiEnum NosiEnum : NosiEnum.values()) {
    //        if (NosiEnum.getDescripcion().equals(descripcion)) {
    //            return NosiEnum.getcveNosi();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveNosi) {
    //    for (NosiEnum NosiEnum : NosiEnum.values()) {
    //        if (NosiEnum.getcveNosi() == cveNosi) {
    //            return NosiEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
