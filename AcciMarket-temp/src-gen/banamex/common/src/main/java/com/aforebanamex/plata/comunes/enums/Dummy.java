package com.aforebanamex.plata.comunes.enums;

public enum Dummy {
dummy1(253,"dummy 1"),
	dummy2(254,"dummy 2"),
	dummy3(255,"dummy 3")
	;

private long cveDummy;
private String descripcion;

private Dummy(int cveDummy, String descripcion) {
	this.cveDummy = cveDummy;
	this.descripcion = descripcion;
}

public long getcveDummy() {
	return cveDummy;
}

public void setcveDummy(long cveDummy) {
	this.cveDummy = cveDummy;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (DummyEnum DummyEnum : DummyEnum.values()) {
    //        if (DummyEnum.getDescripcion().equals(descripcion)) {
    //            return DummyEnum.getcveDummy();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveDummy) {
    //    for (DummyEnum DummyEnum : DummyEnum.values()) {
    //        if (DummyEnum.getcveDummy() == cveDummy) {
    //            return DummyEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
