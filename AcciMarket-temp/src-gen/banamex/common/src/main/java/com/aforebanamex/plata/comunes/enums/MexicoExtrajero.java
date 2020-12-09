package com.aforebanamex.plata.comunes.enums;

public enum MexicoExtrajero {
mexico(276,"méxico"),
	extranjero(277,"extranjero")
	;

private long cveMexicoExtrajero;
private String descripcion;

private MexicoExtrajero(int cveMexicoExtrajero, String descripcion) {
	this.cveMexicoExtrajero = cveMexicoExtrajero;
	this.descripcion = descripcion;
}

public long getcveMexicoExtrajero() {
	return cveMexicoExtrajero;
}

public void setcveMexicoExtrajero(long cveMexicoExtrajero) {
	this.cveMexicoExtrajero = cveMexicoExtrajero;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (MexicoextrajeroEnum MexicoextrajeroEnum : MexicoextrajeroEnum.values()) {
    //        if (MexicoextrajeroEnum.getDescripcion().equals(descripcion)) {
    //            return MexicoextrajeroEnum.getcveMexicoextrajero();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveMexicoextrajero) {
    //    for (MexicoextrajeroEnum MexicoextrajeroEnum : MexicoextrajeroEnum.values()) {
    //        if (MexicoextrajeroEnum.getcveMexicoextrajero() == cveMexicoextrajero) {
    //            return MexicoextrajeroEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
