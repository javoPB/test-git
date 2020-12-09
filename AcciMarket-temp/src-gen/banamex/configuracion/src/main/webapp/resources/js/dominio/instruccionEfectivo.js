$(document).ready(function() {
	crearCabeceras();
	validaNulos();
//	busquedaPorSubproceso();
//	busquedaPorNombreSalida();
//	datatableInicio();
	tablaVacia();
		
	$('#datostabla').on('click', "tbody tr", function(e) {
		console.log("Target: " + e.target.type);
		if (e.target.type === 'radio'){
			$(this).addClass('selected-row').siblings().removeClass('selected-row');
		}
	});

	$("#consultarInstruccionEfectivos").hide();
	
	$('#dominio-btn-buscar').on("click", function() {
		var caracteres = " ' * \ / ( ) \" & ";
		$('#formBuscar').bootstrapValidator().data('bootstrapValidator').destroy();	
		$('#formBuscar').bootstrapValidator({
			onError: function(e) {
	            console.log('error al buscar los informes');
	        },
	        fields: {
	        	contratoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,subtipoportafolioFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,digitoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,titularFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,saldoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,contratoegresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,digitoegresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,saldoinicialegresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,saldocalculadoegresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,contratoingresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,digitoingresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,saldoinicialingresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,saldocalculadoingresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,importeingresoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        }
	    }).on('success.field.bv', function(e, data) {
            if (data.element.val() === '') {
                var $parent = data.element.parents('.form-group');
                $parent.removeClass('has-success');
                $parent.find('.form-control-feedback[data-bv-icon-for="' + data.field + '"]').hide();
            }
        /*}).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            var modulo = $("#gi-sel-modulo").val();
            var subproceso = $("#gi-sel-subproceso").val();
            var nombreInforme = $("#nombreSalida").val();
            var estado = $("#cveEstado").val();
            if(modulo === '0' && estado === '' && nombreInforme === ''){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
//            }
//            else if (subproceso === '' && nombreInforme === '') {
		} else {
			buscarInformes();
		}
            $form.bootstrapValidator().data('bootstrapValidator').destroy();
        });*/
        }).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var contrato = $("#contratoFlt").val();
var subtipoPortafolio = $("#subtipoPortafolioFlt").val();
var digito = $("#digitoFlt").val();
var titular = $("#titularFlt").val();
var saldo = $("#saldoFlt").val();
var contratoEgreso = $("#contratoEgresoFlt").val();
var digitoEgreso = $("#digitoEgresoFlt").val();
var saldoInicialEgreso = $("#saldoInicialEgresoFlt").val();
var saldoCalculadoEgreso = $("#saldoCalculadoEgresoFlt").val();
var contratoIngreso = $("#contratoIngresoFlt").val();
var digitoIngreso = $("#digitoIngresoFlt").val();
var saldoInicialIngreso = $("#saldoInicialIngresoFlt").val();
var saldoCalculadoIngreso = $("#saldoCalculadoIngresoFlt").val();
var importeIngreso = $("#importeIngresoFlt").val();
			if(
				dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && contrato === ''
				 && subtipoPortafolio === ''
				 && digito === ''
				 && titular === ''
				 && saldo === ''
				 && contratoEgreso === ''
				 && digitoEgreso === ''
				 && saldoInicialEgreso === ''
				 && saldoCalculadoEgreso === ''
				 && contratoIngreso === ''
				 && digitoIngreso === ''
				 && saldoInicialIngreso === ''
				 && saldoCalculadoIngreso === ''
				 && importeIngreso === ''
			){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
		} else {
			buscarInstruccionEfectivos();
		}
            $form.bootstrapValidator().data('bootstrapValidator').destroy();
        });
		
	});
		
/*			
$('#subprocesoEx').autocomplete({
	source : function(request, response) {
		$.ajax({
			url : contextPath + "consultarSubprocesosNombre",
			dataType : "json",
			type : 'POST',
			data : {
				term : request.term
			},
			success : function(data) {
				response(data);
			}
		});
	},
	messages: {
        noResults: function(){
        	mostrarAlertDanger('No existe informaci\u00f3n de los Niveles de Proceso de Negocio de tipo \"' + $('#subproceso').val() + '\"', 'alertDangerError');
        }
    },
	minLength : 3,
	select : function(event, ui) {
		$('#idSubproceso').val(ui.item.idSubproceso);
		$('#proceso').val(ui.item.proceso);
		$('#modulo').val(ui.item.modulo);

	}
});
*/	
	$('#agregar').click(function() {		
		cleanForm("formNew");
		resetCombosFormAgregar();
		$('#formNew').bootstrapValidator().data('bootstrapValidator').destroy();
		validarForm();
		$('#modalCrear').modal('show');
		//$("#subprocesoI").prop("disabled", true);
		//$("#procesoI").prop("disabled", true);
		//$("#moduloI").prop("disabled", false);		 
	});
					
	$('#actualizarButton').click(function() {
		cleanForm("formUpd");
		$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
		//$("#subprocesoAdd").prop("disabled", false);
		//$("#procesoAdd").prop("disabled", false);
		//$("#moduloAdd").prop("disabled", false);
		
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#contratoUpd").prop("readonly", false);
$("#subtipoPortafolioUpd").prop("readonly", false);
$("#digitoUpd").prop("readonly", false);
$("#titularUpd").prop("readonly", false);
$("#saldoUpd").prop("readonly", false);
$("#contratoEgresoUpd").prop("readonly", false);
$("#digitoEgresoUpd").prop("readonly", false);
$("#saldoInicialEgresoUpd").prop("readonly", false);
$("#saldoCalculadoEgresoUpd").prop("readonly", false);
$("#contratoIngresoUpd").prop("readonly", false);
$("#digitoIngresoUpd").prop("readonly", false);
$("#saldoInicialIngresoUpd").prop("readonly", false);
$("#saldoCalculadoIngresoUpd").prop("readonly", false);
$("#importeIngresoUpd").prop("readonly", false);
		if ($("input[name='radio']:radio").is(':checked')) {
			var row = getRowSelected();
			//$("#idSubprocesoUpd").val(row.idSubproceso);
			//$("#procesoUpd").val(row.proceso);
			//$("#moduloUpd").val(row.modulo),
			//$("#subprocesoUpd").val(row.subproceso),
			$("#idInstruccionEfectivoUpd").val(row.idInstruccionEfectivo);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#contratoUpd").val(row.contrato);
$("#subtipoPortafolioUpd").val(row.subtipoPortafolio);
$("#digitoUpd").val(row.digito);
$("#titularUpd").val(row.titular);
$("#saldoUpd").val(row.saldo);
$("#contratoEgresoUpd").val(row.contratoEgreso);
$("#digitoEgresoUpd").val(row.digitoEgreso);
$("#saldoInicialEgresoUpd").val(row.saldoInicialEgreso);
$("#saldoCalculadoEgresoUpd").val(row.saldoCalculadoEgreso);
$("#contratoIngresoUpd").val(row.contratoIngreso);
$("#digitoIngresoUpd").val(row.digitoIngreso);
$("#saldoInicialIngresoUpd").val(row.saldoInicialIngreso);
$("#saldoCalculadoIngresoUpd").val(row.saldoCalculadoIngreso);
$("#importeIngresoUpd").val(row.importeIngreso);
			$('#modalTitle').empty();
			$('#modalTitle').append('Actualizar informe');
			$('#movModal').modal('show');
			$("#consultarInstruccionEfectivos").hide();
			$("#updInstruccionEfectivos").show();
			validarFormUpd();
		}else{
			mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }

	});
				
	$('#consultarDetalle').click(function() {
		if ($("input[name='radio']:radio").is(':checked')) {
			$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
			var row = getRowSelected();
				$("#updInstruccionEfectivos").hide();
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#contratoUpd").prop("readonly", true);
$("#subtipoPortafolioUpd").prop("readonly", true);
$("#digitoUpd").prop("readonly", true);
$("#titularUpd").prop("readonly", true);
$("#saldoUpd").prop("readonly", true);
$("#contratoEgresoUpd").prop("readonly", true);
$("#digitoEgresoUpd").prop("readonly", true);
$("#saldoInicialEgresoUpd").prop("readonly", true);
$("#saldoCalculadoEgresoUpd").prop("readonly", true);
$("#contratoIngresoUpd").prop("readonly", true);
$("#digitoIngresoUpd").prop("readonly", true);
$("#saldoInicialIngresoUpd").prop("readonly", true);
$("#saldoCalculadoIngresoUpd").prop("readonly", true);
$("#importeIngresoUpd").prop("readonly", true);
				//$("#procesoUpd").val(row.proceso);
				//$("#moduloUpd").val(row.modulo);
				//$("#subprocesoUpd").val(row.subproceso);
				$("#idInstruccionEfectivoUpd").val(row.idInstruccionEfectivo);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#contratoUpd").val(row.contrato);
$("#subtipoPortafolioUpd").val(row.subtipoPortafolio);
$("#digitoUpd").val(row.digito);
$("#titularUpd").val(row.titular);
$("#saldoUpd").val(row.saldo);
$("#contratoEgresoUpd").val(row.contratoEgreso);
$("#digitoEgresoUpd").val(row.digitoEgreso);
$("#saldoInicialEgresoUpd").val(row.saldoInicialEgreso);
$("#saldoCalculadoEgresoUpd").val(row.saldoCalculadoEgreso);
$("#contratoIngresoUpd").val(row.contratoIngreso);
$("#digitoIngresoUpd").val(row.digitoIngreso);
$("#saldoInicialIngresoUpd").val(row.saldoInicialIngreso);
$("#saldoCalculadoIngresoUpd").val(row.saldoCalculadoIngreso);
$("#importeIngresoUpd").val(row.importeIngreso);
				$("#consultarInstruccionEfectivos").show();									
				$('#modalTitle').empty();
				$('#modalTitle').append('Consultar informe');
				$("#formBuscar").bootstrapValidator();
				$('#movModal').modal('show');
			 }else{
				 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
			 }
	});
					
	$('#eliminarButton').click(function() {
		
		 if($("input[name='radio']:radio").is(':checked')){
			 
			 var row = getRowSelected();
			 
			//if (row.estadoInforme.cveEstado != 3){
			//		mostrarAlertDanger('Solo se puede eliminar un informe en estado inactivo', 'alertDangerError');
			// } else{
				 
				 //$("#procesoUpd").val(row.proceso);
				 //$("#moduloUpd").val(row.modulo),
				 //$("#subprocesoUpd").val(row.subproceso),
				 $("#idInstruccionEfectivoUpd").val(row.idInstruccionEfectivo);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#contratoUpd").val(row.contrato);
$("#subtipoPortafolioUpd").val(row.subtipoPortafolio);
$("#digitoUpd").val(row.digito);
$("#titularUpd").val(row.titular);
$("#saldoUpd").val(row.saldo);
$("#contratoEgresoUpd").val(row.contratoEgreso);
$("#digitoEgresoUpd").val(row.digitoEgreso);
$("#saldoInicialEgresoUpd").val(row.saldoInicialEgreso);
$("#saldoCalculadoEgresoUpd").val(row.saldoCalculadoEgreso);
$("#contratoIngresoUpd").val(row.contratoIngreso);
$("#digitoIngresoUpd").val(row.digitoIngreso);
$("#saldoInicialIngresoUpd").val(row.saldoInicialIngreso);
$("#saldoCalculadoIngresoUpd").val(row.saldoCalculadoIngreso);
$("#importeIngresoUpd").val(row.importeIngreso);
				 $("#dominio-mensaje-eliminar").empty().append("&iquest;Desea eliminar el ?");
				 $('#modalEliminar').modal('show');
			//}
		 }	else{
			 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }	
	});
/*	
	$('#dominio-sel-subproceso, #dominio-sel-modulo, #dominio-sel-proceso').on('change', function() {
	$('#com.softtek.rdl2.impl.EntityImpl@133171f4 (name: InstruccionEfectivo)').val('');
	});
	
	$('#com.softtek.rdl2.impl.EntityImpl@133171f4 (name: InstruccionEfectivo)').on('input', function() {
		resetCombosFormConsultar();
		$('#dominio-sel-modulo').val('0');
		$('#dominio-sel-proceso').val('');
		$('#dominio-sel-subproceso').val('');
	});
	
	$("#dominio-sel-modulo").change(function(){
		$('#formBuscar').bootstrapValidator('revalidateField', 'Proceso');
		if (this.value === '0'){
			$('#dominio-sel-proceso').prop('disabled', true);
			$('#dominio-sel-subproceso').prop('disabled', true);
		}
	});
	
	$("#dominio-sel-proceso").change(function(){
		$('#formBuscar').bootstrapValidator('revalidateField', 'subproceso');
		if (this.value === ''){
			$('#dominio-sel-subproceso').prop('disabled', true);
		}
	});
	
	$("#dominio-sel-subproceso").change(function(){
		$('#formBuscar').bootstrapValidator('revalidateField', this.name);
	});
*/	
//	$('#subprocesoI').autocomplete({
//		source : function(request, response) {
//			$.ajax({
//				url : contextPath + "consultarSubprocesosNombre",
//				dataType : "json",
//				type : 'POST',
//				data : {
//					term : request.term
//				},
//				success : function(data) {
//					response(data);
//				}
//			});
//		},
//		messages: {
//	        noResults: function(){
//	        	mostrarAlertDanger('No existe informaci\u00f3n de los Niveles de Proceso de Negocio de tipo \"' + $('#subprocesoI').val() + '\"', 'alertDanger');
//	        }
//	    },
//		appendTo: $("#modalCrear"),
//		minLength : 3,
//		select : function(event, ui) {
//			$('#idSubprocesoI').val(ui.item.idSubproceso);
//			$('#procesoI').val(ui.item.proceso);
//			$('#moduloI').val(ui.item.modulo);
//		}
//	});		
	
	$("#dominio-but-limpiar").click(function() {
		cleanForm("formBuscar");
		$('#formBuscar').bootstrapValidator().data('bootstrapValidator').destroy();
		//$("#gi-sel-proceso").prop("disabled", true);
		//$("#gi-sel-subproceso").prop("disabled", true);
		tablaVacia();
	});
});


function datatableInicio() {
	var modelo = {
			"paginado":{
				"pagina":1,
				"registrosMostrados": 10
			}
	}
	
	jsonAjax(contextPath + "obtenerInstruccionEfectivosActivo",modelo,inicioDatos);
}

function buscarInstruccionEfectivos() {
	
	var model = {
			"paginado":{
				"pagina":1,
				"registrosMostrados":Number($("#datostabla_length select").val())
			},
			"payload":{
	            //"idSubproceso": $("#idSubproceso").val(),
				//"subproceso": $("#gi-sel-subproceso").val(),
				//"proceso": $("#gi-sel-proceso").val(),
				//"modulo": $("#gi-sel-modulo").val(),
				"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"contrato": $("#contratoFlt").val()
				,"subtipoPortafolio": $("#subtipoPortafolioFlt").val()
				,"digito": $("#digitoFlt").val()
				,"titular": $("#titularFlt").val()
				,"saldo": $("#saldoFlt").val()
				,"contratoEgreso": $("#contratoEgresoFlt").val()
				,"digitoEgreso": $("#digitoEgresoFlt").val()
				,"saldoInicialEgreso": $("#saldoInicialEgresoFlt").val()
				,"saldoCalculadoEgreso": $("#saldoCalculadoEgresoFlt").val()
				,"contratoIngreso": $("#contratoIngresoFlt").val()
				,"digitoIngreso": $("#digitoIngresoFlt").val()
				,"saldoInicialIngreso": $("#saldoInicialIngresoFlt").val()
				,"saldoCalculadoIngreso": $("#saldoCalculadoIngresoFlt").val()
				,"importeIngreso": $("#importeIngresoFlt").val()
			}
	}
	console.log(model);
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "obtenerInstruccionEfectivos",
			data : JSON.stringify(model),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if(data.mensaje.codigoEstatus === 404) {
					mostrarAlertWarning('No se encontr\u00f3 informaci\u00f3n');
				}
		        inicioDatos(data);
			},
			error: function(){
				mostrarAlertWarning('No se encontr\u00f3 informaci\u00f3n');
				inicioDatos(undefined);
			}
		});
	$("#verInstruccionEfectivos").show();
}

function obtenerDummy(){
	
	var sucursal = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sucursal === undefined){
			return 2; // estado activo para busquedas en ejecucion de sucursal
		}
	}
	
	return sucursal;
}	

function obtenerDummyFlt(){
	
	var sucursal = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sucursal === undefined){
			return 2; // estado activo para busquedas en ejecucion de sucursal
		}
	}
	
	return sucursal;
	}	
function obtenerDummy(){
	
	var operacion = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (operacion === undefined){
			return 2; // estado activo para busquedas en ejecucion de operacion
		}
	}
	
	return operacion;
}	

function obtenerDummyFlt(){
	
	var operacion = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (operacion === undefined){
			return 2; // estado activo para busquedas en ejecucion de operacion
		}
	}
	
	return operacion;
	}	
function obtenerDummy(){
	
	var tipo = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tipo === undefined){
			return 2; // estado activo para busquedas en ejecucion de tipo
		}
	}
	
	return tipo;
}	

function obtenerDummyFlt(){
	
	var tipo = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tipo === undefined){
			return 2; // estado activo para busquedas en ejecucion de tipo
		}
	}
	
	return tipo;
	}	
function obtenerDummy(){
	
	var medLiq = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (medLiq === undefined){
			return 2; // estado activo para busquedas en ejecucion de medLiq
		}
	}
	
	return medLiq;
}	

function obtenerDummyFlt(){
	
	var medLiq = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (medLiq === undefined){
			return 2; // estado activo para busquedas en ejecucion de medLiq
		}
	}
	
	return medLiq;
	}	

function registrarInstruccionEfectivos() {	
		var data = getObject();	
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				url : contextPath + "registrarInstruccionEfectivo",
				data: JSON.stringify(data),
				dataType: 'json',
				cache : false,
				processData : false,
				success : function(data) {
					if (data.codigoEstatus === 400){
						mostrarAlertDanger("Ya existe una  con esa configuraci\u00f3n", 'alertDanger');
					} else if (data.codigoEstatus === 404) {
						mostrarAlertDanger('No existe la plantilla especificada en el servidor', 'alertDanger');
					} else {
						mostrarAlertSuccess('El  se agreg\u00f3 exitosamente');
						tablaVacia();
						$('#modalCrear').modal('hide');
						$('#dominio-but-limpiar').trigger('click');
					}
				}
			});
}

function actualizarInstruccionEfectivo(){
	var data = getObjectUpd();
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "actualizarInstruccionEfectivo",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if (data.codigoEstatus === 400){
					mostrarAlertDanger("Ya existe una  con esa configuraci\u00f3n", 'alertDangerUp');
				} else {
					mostrarAlertSuccess(MENSAJE_ACTUALIZADO_EXITOSO);
					tablaVacia();
					$('#movModal').modal('hide');
					$('#gi-but-limpiar').trigger('click');
				}
			}
		});
}

function eliminarInstruccionEfectivo() {
	var data = getObjectUpd();
	
	$.ajax({
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		url : contextPath + "eliminarInstruccionEfectivo/"+$("#idInstruccionEfectivoUpd").val(),
		dataType: 'json',
		cache : false,
		processData : false,
		success : function(data) {
			 $('#modalEliminar').modal('hide');
			 if (data.codigoEstatus === 200){
				 mostrarAlertSuccess(MENSAJE_ELIMINADO_EXITOSO);
				 tablaVacia();
				 $('#gi-but-limpiar').trigger('click');
			 }
		}
	});
}

function getObject() {
	//var tipo = parseInt($("#tipoInforme").val());
	//var clasificacion = parseInt($("#clasificacionInforme").val());		
	var data = {			
			//"idSubproceso" : $("#idSubprocesoI").val(),
			"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"contrato": $("#contrato").val()
			,"subtipoPortafolio": $("#subtipoPortafolio").val()
			,"digito": $("#digito").val()
			,"titular": $("#titular").val()
			,"saldo": $("#saldo").val()
			,"contratoEgreso": $("#contratoEgreso").val()
			,"digitoEgreso": $("#digitoEgreso").val()
			,"saldoInicialEgreso": $("#saldoInicialEgreso").val()
			,"saldoCalculadoEgreso": $("#saldoCalculadoEgreso").val()
			,"contratoIngreso": $("#contratoIngreso").val()
			,"digitoIngreso": $("#digitoIngreso").val()
			,"saldoInicialIngreso": $("#saldoInicialIngreso").val()
			,"saldoCalculadoIngreso": $("#saldoCalculadoIngreso").val()
			,"importeIngreso": $("#importeIngreso").val()
	};
	return data;
}

function getObjectUpd() {
	//var tipo = parseInt($("#tipoInformeUpd").val());
	//var clasificacion = parseInt($("#clasificacionInformeUpd").val());
	//var estado = parseInt($("#estadoInformeUpd").val());
	
	var row = getRowSelected();
	var data = {
			"idInstruccionEfectivo" : $("#idInstruccionEfectivoUpd").val(),
			"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"contrato": $("#contratoUpd").val()
			,"subtipoPortafolio": $("#subtipoPortafolioUpd").val()
			,"digito": $("#digitoUpd").val()
			,"titular": $("#titularUpd").val()
			,"saldo": $("#saldoUpd").val()
			,"contratoEgreso": $("#contratoEgresoUpd").val()
			,"digitoEgreso": $("#digitoEgresoUpd").val()
			,"saldoInicialEgreso": $("#saldoInicialEgresoUpd").val()
			,"saldoCalculadoEgreso": $("#saldoCalculadoEgresoUpd").val()
			,"contratoIngreso": $("#contratoIngresoUpd").val()
			,"digitoIngreso": $("#digitoIngresoUpd").val()
			,"saldoInicialIngreso": $("#saldoInicialIngresoUpd").val()
			,"saldoCalculadoIngreso": $("#saldoCalculadoIngresoUpd").val()
			,"importeIngreso": $("#importeIngresoUpd").val()
			//"idSubproceso" : $("#idSubprocesoUpd").val(),
	};
	return data;
}


function cleanForm(id){
	document.getElementById(id).reset();
	$("#"+id).removeClass("was-validated");
}

function validaNulos(){
	$.fn.bootstrapValidator.validators.notNullValor = {
	        validate: function(validator, $field, options) {
			    var valid = true;
	        	var value = $field.val();
	        	if(value === '' ){
	        		return {
	                    valid: false,
	                    message: 'El '+$field.attr('name')+ ' es obligatorio'
	                }
	        	}
	        }	
	 };
}

//function busquedaPorSubproceso(){
//$.fn.bootstrapValidator.validators.busqueda = {
//        validate: function(validator, $field, options) {
//		    var valid = true;
//        	var value = $field.val();
//        	if(value === '' && $('#nombreSalida').val() === ''){
//        		valid = false;
//        	}
//        	return valid;
//        }	
// };
//}

//function busquedaPorNombreSalida(){
//$.fn.bootstrapValidator.validators.busquedaNombreSalida = {
//        validate: function(validator, $field, options) {
//		    var valid = true;
//        	var value = $field.val();
//        	if(value === '' && $('#subproceso').val() === ''){
//        		valid = false;
//        	}
//        	return valid;
//        }	
// };
//}

function validarForm(){
	$('#formNew').bootstrapValidator({
		onError: function(e) {
            console.log('error');
        },
        fields: {
            //moduloI: {
            //    validators: {
            //    	notEmpty: {
            //            message: MENSAJE_CAMPO_OBLIGATORIO
            //        }
            //    }
            //},
            //procesoI: {
            //    validators: {
            //    	notEmpty: {
            //            message: MENSAJE_CAMPO_OBLIGATORIO
            //        }
            //    }
            //},
            //subprocesoI: {
            //    validators: {
            //    	notEmpty: {
            //            message: MENSAJE_CAMPO_OBLIGATORIO
            //        }
            //    }
            //},
            dummy: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,dummy: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,dummy: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,dummy: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,contrato: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,subtipoPortafolio: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,digito: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,titular: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,saldo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,contratoEgreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,digitoEgreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,saldoInicialEgreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,saldoCalculadoEgreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,contratoIngreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,digitoIngreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,saldoInicialIngreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,saldoCalculadoIngreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,importeIngreso: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
        }
    }) .on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        registrarInstruccionEfectivos();
    });
	
	//$('#moduloI').on('change', function (e) {
    //    $('#formNew').bootstrapValidator('revalidateField', 'procesoI');
    //});
	
	//$('#procesoI').on('change', function (e) {
    //    $('#formNew').bootstrapValidator('revalidateField', 'subprocesoI');
    //});
}

function validarFormUpd(){
	$('#formUpd').bootstrapValidator({
		onError: function(e) {
            console.log('error');
        },
        fields: {
        	dummyUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,dummyUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,dummyUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,dummyUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,contratoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,subtipoPortafolioUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,digitoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,titularUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,saldoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,contratoEgresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,digitoEgresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,saldoInicialEgresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,saldoCalculadoEgresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,contratoIngresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,digitoIngresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,saldoInicialIngresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,saldoCalculadoIngresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,importeIngresoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        }
    }) .on('success.form.bv', function(e) {
        e.preventDefault();
        var $form = $(e.target);
        var bv = $form.data('bootstrapValidator');
        actualizarInstruccionEfectivo();
    });
}


//Tiempo de ejecucion
function verInstruccionEfectivo(){
	
	if ($("input[name='radio']:radio").is(':checked')) {
		var row = getRowSelected();
		
		var data = {
				"paginado" : {
					"registrosMostrados" : 1,
					"totalRegistros" : 1,
					"pagina" : 1,
					"totalPaginas" : 1
				},
				"payload" : {
					"idInstruccionEfectivo" : row.idInstruccionEfectivo,
	         		"dummy" : row.sucursal
	         		,"dummy" : row.operacion
	         		,"dummy" : row.tipo
	         		,"dummy" : row.medLiq
	         		,"contrato" : row.contrato
	         		,"subtipoPortafolio" : row.subtipoPortafolio
	         		,"digito" : row.digito
	         		,"titular" : row.titular
	         		,"saldo" : row.saldo
	         		,"contratoEgreso" : row.contratoEgreso
	         		,"digitoEgreso" : row.digitoEgreso
	         		,"saldoInicialEgreso" : row.saldoInicialEgreso
	         		,"saldoCalculadoEgreso" : row.saldoCalculadoEgreso
	         		,"contratoIngreso" : row.contratoIngreso
	         		,"digitoIngreso" : row.digitoIngreso
	         		,"saldoInicialIngreso" : row.saldoInicialIngreso
	         		,"saldoCalculadoIngreso" : row.saldoCalculadoIngreso
	         		,"importeIngreso" : row.importeIngreso
				}
			};
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "paramsInstruccionEfectivo",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				console.log("success" + data);
				if (data.payload.existePlantilla === true){
					window.location.href = contextPath + 'parametrosInstruccionEfectivo?reporte=' + data.payload.nomPlantilla + '&rutaSalida=' + data.payload.rutaPlantilla+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&contrato='+data.payload.contrato
					+'&subtipoPortafolio='+data.payload.subtipoPortafolio
					+'&digito='+data.payload.digito
					+'&titular='+data.payload.titular
					+'&saldo='+data.payload.saldo
					+'&contratoEgreso='+data.payload.contratoEgreso
					+'&digitoEgreso='+data.payload.digitoEgreso
					+'&saldoInicialEgreso='+data.payload.saldoInicialEgreso
					+'&saldoCalculadoEgreso='+data.payload.saldoCalculadoEgreso
					+'&contratoIngreso='+data.payload.contratoIngreso
					+'&digitoIngreso='+data.payload.digitoIngreso
					+'&saldoInicialIngreso='+data.payload.saldoInicialIngreso
					+'&saldoCalculadoIngreso='+data.payload.saldoCalculadoIngreso
					+'&importeIngreso='+data.payload.importeIngreso
					;
				}else{
					mostrarAlertDanger('No existe la plantilla seleccionada en el servidor', 'alertDanger');
				}
			}
		});
	} else {
		mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
	}
}

function planify(data) {
    for (var i = 0; i < data.columns.length; i++) {
        column = data.columns[i];
        column.searchRegex = column.search.regex;
        column.searchValue = column.search.value;
        delete(column.search);
    }
}

function getRowSelected(){
	return $("#datostabla").DataTable().rows('.selected-row').data()[0];
}

function iniciarTabla(){
	var modelo = {
			"paginado":{
			"pagina":1,
			"registrosMostrados":Number($("#datostabla_length select").val())
		},
		"payload":{
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": $("#cveEstado").val()
		}
	};
	jsonAjax(contextPath + "obtenerInstruccionEfectivos",modelo,inicioDatos);
}

function paginarTabla(pagina){
	var modelo = {
			"paginado":{
				"pagina":pagina,
				"registrosMostrados": Number($("#datostabla_length select").val())
			},
			"payload":{
				"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"contrato": $("#contratoFlt").val()
				,"subtipoPortafolio": $("#subtipoPortafolioFlt").val()
				,"digito": $("#digitoFlt").val()
				,"titular": $("#titularFlt").val()
				,"saldo": $("#saldoFlt").val()
				,"contratoEgreso": $("#contratoEgresoFlt").val()
				,"digitoEgreso": $("#digitoEgresoFlt").val()
				,"saldoInicialEgreso": $("#saldoInicialEgresoFlt").val()
				,"saldoCalculadoEgreso": $("#saldoCalculadoEgresoFlt").val()
				,"contratoIngreso": $("#contratoIngresoFlt").val()
				,"digitoIngreso": $("#digitoIngresoFlt").val()
				,"saldoInicialIngreso": $("#saldoInicialIngresoFlt").val()
				,"saldoCalculadoIngreso": $("#saldoCalculadoIngresoFlt").val()
				,"importeIngreso": $("#importeIngresoFlt").val()
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"proceso": $("#proceso").val(),
			//"modulo": $("#modulo").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": obtenerEstadoInforme()
			}
		};
	jsonAjax(contextPath + "obtenerInstruccionEfectivos",modelo,inicioDatos);
}

//function obtenerProceso(data){
//    $("#gi-sel-proceso").html("<option value='' selected>-- Seleccione --</option>");
//    $("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
//    if(data != null && data.length > 0){
//        for (var key in data) {
//            $("#gi-sel-proceso").append("<option value='"+data[key].cveProcesoId+"'>"+data[key].descripcion+"</option>");
//          }
//    }else{
//    	mostrarAlertDanger("No existen procesos asociados", 'alertDangerError');
//    	$("#gi-sel-proceso").prop("disabled", true);
//    }
//}

//function activarProceso(){
//    $("#gi-sel-proceso").prop("disabled", false);
//    var idModulo = $('#gi-sel-modulo').val();
//    var modelo = {};
//    if(idModulo != 0){
//    	jsonAjax(contextPath+"consultarProcesosPorModulo/"+idModulo,modelo,obtenerProceso);	
//    }else{
//    	$("#gi-sel-proceso").html("<option value='' selected>-- Seleccione --</option>");
//    	$("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
//    }
//}

//function obtenerSubProceso(data){
//    $("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
//    
//    if (data != null && data.length > 0){
//    	for (var key in data) {
//    		$("#gi-sel-subproceso").append("<option value='"+data[key].cveSubProcesoId+"'>"+data[key].descripcion+"</option>");
//    	}
//    } else { 
//    	mostrarAlertDanger("No existen subprocesos asociados", 'alertDangerError');
//    	$("#gi-sel-subproceso").prop("disabled", true);
//    }
//}

//function activarSubProceso(){
//    $("#gi-sel-subproceso").prop("disabled", false);
//    var idProceso = $('#gi-sel-proceso').val();
//    var modelo = {};
//    if(idProceso != 0){
//    	jsonAjax(contextPath+"consultarSubProcesosPorProceso/"+idProceso,modelo,obtenerSubProceso);	
//    }else{
//    	$("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
//    }
//}

//function setIdSubProceso(){
//	var idSubproceso = $("#gi-sel-subproceso").val();
//	if(idSubproceso != ''){
//		$("#idSubproceso").val(idSubproceso);
//	}else{
//		$("#idSubproceso").val('');
//	}
//	
//}

//function activarProcesoInsert(){
//    $("#procesoI").prop("disabled", false);
//    var idModulo = $('#moduloI').val();
//    var modelo = {};
//    if(idModulo != ""){
//    	jsonAjax(contextPath+"consultarProcesosPorModulo/"+idModulo,modelo,obtenerProcesoInsert);	
//    }else{
//    	$("#procesoI").html("<option value='' selected>-- Seleccione --</option>");
//    	$("#subprocesoI").html("<option value='' selected>-- Seleccione --</option>");
//    }
//}

/*
function obtenerProcesoInsert(data){
    $("#procesoI").html("<option value='' selected>-- Seleccione --</option>");
    $("#subprocesoI").html("<option value='' selected>-- Seleccione --</option>");
    if(data != null && data.length > 0){
        for (var key in data) {
            $("#procesoI").append("<option value='"+data[key].cveProcesoId+"'>"+data[key].descripcion+"</option>");
          }
    } else{
    	mostrarAlertDanger("No existen procesos asociados", 'alertDanger');
    	$('#formNew').bootstrapValidator('revalidateField', 'procesoI');
    	$('#formNew').bootstrapValidator('revalidateField', 'subprocesoI');
    	$("#procesoI").prop("disabled", true);
    	$("#subprocesoI").prop("disabled", true);
    }
}

function obtenerSubProcesoInsert(data){
    $("#subprocesoI").html("<option value='' selected>-- Seleccione --</option>");
    if(data != null){
        for (var key in data) {
            $("#subprocesoI").append("<option value='"+data[key].cveSubProcesoId+"'>"+data[key].descripcion+"</option>");
          }
    } else {
    	mostrarAlertDanger("No existen subprocesos asociados", 'alertDanger');
    	$('#formNew').bootstrapValidator('revalidateField', 'subprocesoI');
    	$("#subprocesoI").prop("disabled", true);
    }
    
}

function activarSubProcesoInsert(){
    $("#subprocesoI").prop("disabled", false);
    var idProceso = $('#procesoI').val();
    var modelo = {};
    if(idProceso != ""){
    	jsonAjax(contextPath+"consultarSubProcesosPorProceso/"+idProceso,modelo,obtenerSubProcesoInsert);	
    }else{
    	$("#subprocesoI").html("<option value='' selected>-- Seleccione --</option>");
    }
}

function setIdSubProcesoInsert(){
	var idSubproceso = $("#subprocesoI").val();
	$("#idSubprocesoI").val(idSubproceso);
}
*/

function resetCombosFormAgregar(){
$("#gi-sel-proceso").html("<option value='0' selected>-- Seleccione --</option>");
	//$("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
	//$("#idSubproceso").val('');
}

/*	
function resetCombosFormConsultar(){
   	$("#gi-sel-proceso").html("<option value='' selected>-- Seleccione --</option>");
   	$("#gi-sel-proceso").prop("disabled", true);
	$("#gi-sel-subproceso").html("<option value='' selected>-- Seleccione --</option>");
	$("#gi-sel-subproceso").prop("disabled", true);
	$("#idSubproceso").val('');
}*/	
