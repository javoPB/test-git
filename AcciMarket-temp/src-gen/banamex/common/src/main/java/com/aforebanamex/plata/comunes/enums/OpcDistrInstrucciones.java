package com.aforebanamex.plata.comunes.enums;

public enum OpcDistrInstrucciones {
intradia(273,"intradía"),
	programados(274,"programados"),
	historicos(275,"históricos")
	;

private long cveOpcDistrInstrucciones;
private String descripcion;

private OpcDistrInstrucciones(int cveOpcDistrInstrucciones, String descripcion) {
	this.cveOpcDistrInstrucciones = cveOpcDistrInstrucciones;
	this.descripcion = descripcion;
}

public long getcveOpcDistrInstrucciones() {
	return cveOpcDistrInstrucciones;
}

public void setcveOpcDistrInstrucciones(long cveOpcDistrInstrucciones) {
	this.cveOpcDistrInstrucciones = cveOpcDistrInstrucciones;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (OpcdistrinstruccionesEnum OpcdistrinstruccionesEnum : OpcdistrinstruccionesEnum.values()) {
    //        if (OpcdistrinstruccionesEnum.getDescripcion().equals(descripcion)) {
    //            return OpcdistrinstruccionesEnum.getcveOpcdistrinstrucciones();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveOpcdistrinstrucciones) {
    //    for (OpcdistrinstruccionesEnum OpcdistrinstruccionesEnum : OpcdistrinstruccionesEnum.values()) {
    //        if (OpcdistrinstruccionesEnum.getcveOpcdistrinstrucciones() == cveOpcdistrinstrucciones) {
    //            return OpcdistrinstruccionesEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
