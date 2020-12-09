package com.aforebanamex.plata.comunes.enums;

public enum Sofisticado {
sofisticado(260,"sofisticado"),
	nosofisticado(261,"no sofisticado")
	;

private long cveSofisticado;
private String descripcion;

private Sofisticado(int cveSofisticado, String descripcion) {
	this.cveSofisticado = cveSofisticado;
	this.descripcion = descripcion;
}

public long getcveSofisticado() {
	return cveSofisticado;
}

public void setcveSofisticado(long cveSofisticado) {
	this.cveSofisticado = cveSofisticado;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (SofisticadoEnum SofisticadoEnum : SofisticadoEnum.values()) {
    //        if (SofisticadoEnum.getDescripcion().equals(descripcion)) {
    //            return SofisticadoEnum.getcveSofisticado();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveSofisticado) {
    //    for (SofisticadoEnum SofisticadoEnum : SofisticadoEnum.values()) {
    //        if (SofisticadoEnum.getcveSofisticado() == cveSofisticado) {
    //            return SofisticadoEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
