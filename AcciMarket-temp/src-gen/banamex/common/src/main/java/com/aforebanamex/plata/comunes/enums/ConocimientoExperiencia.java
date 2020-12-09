package com.aforebanamex.plata.comunes.enums;

public enum ConocimientoExperiencia {
noconoce(268,"no conoce ni ha intervenido"),
	soloconoce(269,"sólo conoce"),
	conoceintervenido(270,"conoce y ha intervenido")
	;

private long cveConocimientoExperiencia;
private String descripcion;

private ConocimientoExperiencia(int cveConocimientoExperiencia, String descripcion) {
	this.cveConocimientoExperiencia = cveConocimientoExperiencia;
	this.descripcion = descripcion;
}

public long getcveConocimientoExperiencia() {
	return cveConocimientoExperiencia;
}

public void setcveConocimientoExperiencia(long cveConocimientoExperiencia) {
	this.cveConocimientoExperiencia = cveConocimientoExperiencia;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (ConocimientoexperienciaEnum ConocimientoexperienciaEnum : ConocimientoexperienciaEnum.values()) {
    //        if (ConocimientoexperienciaEnum.getDescripcion().equals(descripcion)) {
    //            return ConocimientoexperienciaEnum.getcveConocimientoexperiencia();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveConocimientoexperiencia) {
    //    for (ConocimientoexperienciaEnum ConocimientoexperienciaEnum : ConocimientoexperienciaEnum.values()) {
    //        if (ConocimientoexperienciaEnum.getcveConocimientoexperiencia() == cveConocimientoexperiencia) {
    //            return ConocimientoexperienciaEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
