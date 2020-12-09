package com.aforebanamex.plata.comunes.enums;

public enum OrigenIngresos {
ventaactivos(285,"venta de activos"),
	premios(286,"premios"),
	prestamos(287,"préstamos"),
	salarioanual(288,"salario anual"),
	dividendos(289,"pago de dividendos"),
	ventabienes(290,"venta de bienes"),
	herencia(291,"herencia"),
	patrimonio(292,"patrimonio/ahorro"),
	traspaso(293,"traspaso/cancelación de cuentas de otro banco"),
	otro(294,"otro")
	;

private long cveOrigenIngresos;
private String descripcion;

private OrigenIngresos(int cveOrigenIngresos, String descripcion) {
	this.cveOrigenIngresos = cveOrigenIngresos;
	this.descripcion = descripcion;
}

public long getcveOrigenIngresos() {
	return cveOrigenIngresos;
}

public void setcveOrigenIngresos(long cveOrigenIngresos) {
	this.cveOrigenIngresos = cveOrigenIngresos;
}

public String getDescripcion() {
	return descripcion;
}

public void setDescripcion(String descripcion) {
	this.descripcion = descripcion;
}

//public static Integer getCveDescripcion(String descripcion) {
    //    for (OrigeningresosEnum OrigeningresosEnum : OrigeningresosEnum.values()) {
    //        if (OrigeningresosEnum.getDescripcion().equals(descripcion)) {
    //            return OrigeningresosEnum.getcveOrigeningresos();
    //        }
    //    }
    //    return null;
    //}

//public static String getDescripcionCve(int cveOrigeningresos) {
    //    for (OrigeningresosEnum OrigeningresosEnum : OrigeningresosEnum.values()) {
    //        if (OrigeningresosEnum.getcveOrigeningresos() == cveOrigeningresos) {
    //            return OrigeningresosEnum.getDescripcion();
    //        }
    //    }
    //    return null;
    //}
    
    }
