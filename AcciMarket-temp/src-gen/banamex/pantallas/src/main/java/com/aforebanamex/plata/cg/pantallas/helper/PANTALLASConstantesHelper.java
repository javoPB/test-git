package com.aforebanamex.plata.cg.pantallas.helper;

public class PANTALLASConstantesHelper {

	private PANTALLASConstantesHelper() {
	}

	public static final String ID_MODULO = "idModulo";
	public static final String CVE_PROCESO_ID = "cveProcesoId";
	public static final String CLAVE = "clave";
	public static final String DESCRIPCION = "descripcion";
	public static final String ESTADO_LOGICO = "estadoLogico";
	public static final String CVE_SUBPROCESO_ID = "cveSubProcesoId";
	public static final String RUTA = "ruta";

	public static final String AND = " AND ";
	public static final String WHERE = " WHERE 1=1 ";
	public static final String LIMIT = " LIMIT ";
	public static final String COMA = ",";
	public static final String WHERE_ROWN = " WHERE ROWN ";
	public static final String BETWEEN = " BETWEEN ";


	
	public static final int CODIGO_ERROR = 415;
	public static final int CODIGO_EXITO = 200;
	public static final String ERROR_REGISTRO_DUPLICADO = " Ya existe un registro con las mismas características.";
	public static final String ERROR_ACTUALIZACION_BD = " No se pudo realizar la actualización.";
	public static final String EXITO_REGISTRO = " Se realizo el registro de forma correcta.";
	public static final String EXITO_ACTUALIZA_REGISTRO = " Se actalizo el registro de forma correcta.";
	public static final String EXITO_ELIMINADO_REGISTRO = " Se elimino el registro de forma correcta.";
	public static final String ERROR_ELIMINADO_REGISTRO ="Registro con las mismas características se encuentra con estado eliminado.";
	public static final String ERROR_ELIMINADO = " No se pudo elimar el registro.";
	public static final String ERROR_CARACTERES_NO_VALIDOS ="No se permiten los caracteres [']";
}
