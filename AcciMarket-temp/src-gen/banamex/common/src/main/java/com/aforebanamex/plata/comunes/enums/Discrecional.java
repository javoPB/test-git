package com.aforebanamex.plata.comunes.enums;

public enum Discrecional {
discrecional(266,"discrecional"),
	nodiscrecional(267,"no discrecional")
	;

private long cveDiscrecional;
private String descripcion;

private Discrecional(int cveDiscrecional, String descripcion) {
	this.cveDiscrecional = cveDiscrecional;
	this.descripcion = descripcion;
}

public long getcveDiscrecional() {
	return cveDiscrecional;
}

public void setcveDiscrecional(long cveDiscrecional) {
	this.cveDiscrecional = cveDiscrecional;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (DiscrecionalEnum DiscrecionalEnum : DiscrecionalEnum.values()) {
    //        if (DiscrecionalEnum.getDescripcion().equals(descripcion)) {
    //            return DiscrecionalEnum.getcveDiscrecional();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveDiscrecional) {
    //    for (DiscrecionalEnum DiscrecionalEnum : DiscrecionalEnum.values()) {
    //        if (DiscrecionalEnum.getcveDiscrecional() == cveDiscrecional) {
    //            return DiscrecionalEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
