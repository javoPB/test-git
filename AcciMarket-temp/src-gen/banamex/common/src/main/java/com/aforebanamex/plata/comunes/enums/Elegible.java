package com.aforebanamex.plata.comunes.enums;

public enum Elegible {
elegible(262,"elegible"),
	noelegible(263,"no elegible")
	;

private long cveElegible;
private String descripcion;

private Elegible(int cveElegible, String descripcion) {
	this.cveElegible = cveElegible;
	this.descripcion = descripcion;
}

public long getcveElegible() {
	return cveElegible;
}

public void setcveElegible(long cveElegible) {
	this.cveElegible = cveElegible;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (ElegibleEnum ElegibleEnum : ElegibleEnum.values()) {
    //        if (ElegibleEnum.getDescripcion().equals(descripcion)) {
    //            return ElegibleEnum.getcveElegible();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveElegible) {
    //    for (ElegibleEnum ElegibleEnum : ElegibleEnum.values()) {
    //        if (ElegibleEnum.getcveElegible() == cveElegible) {
    //            return ElegibleEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
