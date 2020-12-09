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

	$("#consultarBeneficiarios").hide();
	
	$('#dominio-btn-buscar').on("click", function() {
		var caracteres = " ' * \ / ( ) \" & ";
		$('#formBuscar').bootstrapValidator().data('bootstrapValidator').destroy();	
		$('#formBuscar').bootstrapValidator({
			onError: function(e) {
	            console.log('error al buscar los informes');
	        },
	        fields: {
	        	nombreFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,appaternoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,apmaternoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,porcentajeFlt: {
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
var nombre = $("#nombreFlt").val();
var apPaterno = $("#apPaternoFlt").val();
var apMaterno = $("#apMaternoFlt").val();
var porcentaje = $("#porcentajeFlt").val();
			if(
				nombre === ''
				 && apPaterno === ''
				 && apMaterno === ''
				 && porcentaje === ''
			){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
		} else {
			buscarBeneficiarios();
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
		
$("#nombreUpd").prop("readonly", false);
$("#apPaternoUpd").prop("readonly", false);
$("#apMaternoUpd").prop("readonly", false);
$("#porcentajeUpd").prop("readonly", false);
		if ($("input[name='radio']:radio").is(':checked')) {
			var row = getRowSelected();
			//$("#idSubprocesoUpd").val(row.idSubproceso);
			//$("#procesoUpd").val(row.proceso);
			//$("#moduloUpd").val(row.modulo),
			//$("#subprocesoUpd").val(row.subproceso),
			$("#idBeneficiarioUpd").val(row.idBeneficiario);
$("#nombreUpd").val(row.nombre);
$("#apPaternoUpd").val(row.apPaterno);
$("#apMaternoUpd").val(row.apMaterno);
$("#porcentajeUpd").val(row.porcentaje);
			$('#modalTitle').empty();
			$('#modalTitle').append('Actualizar informe');
			$('#movModal').modal('show');
			$("#consultarBeneficiarios").hide();
			$("#updBeneficiarios").show();
			validarFormUpd();
		}else{
			mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }

	});
				
	$('#consultarDetalle').click(function() {
		if ($("input[name='radio']:radio").is(':checked')) {
			$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
			var row = getRowSelected();
				$("#updBeneficiarios").hide();
$("#nombreUpd").prop("readonly", true);
$("#apPaternoUpd").prop("readonly", true);
$("#apMaternoUpd").prop("readonly", true);
$("#porcentajeUpd").prop("readonly", true);
				//$("#procesoUpd").val(row.proceso);
				//$("#moduloUpd").val(row.modulo);
				//$("#subprocesoUpd").val(row.subproceso);
				$("#idBeneficiarioUpd").val(row.idBeneficiario);
$("#nombreUpd").val(row.nombre);
$("#apPaternoUpd").val(row.apPaterno);
$("#apMaternoUpd").val(row.apMaterno);
$("#porcentajeUpd").val(row.porcentaje);
				$("#consultarBeneficiarios").show();									
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
				 $("#idBeneficiarioUpd").val(row.idBeneficiario);
$("#nombreUpd").val(row.nombre);
$("#apPaternoUpd").val(row.apPaterno);
$("#apMaternoUpd").val(row.apMaterno);
$("#porcentajeUpd").val(row.porcentaje);
				 $("#dominio-mensaje-eliminar").empty().append("&iquest;Desea eliminar el beneficiarios?");
				 $('#modalEliminar').modal('show');
			//}
		 }	else{
			 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }	
	});
/*	
	$('#dominio-sel-subproceso, #dominio-sel-modulo, #dominio-sel-proceso').on('change', function() {
	$('#com.softtek.rdl2.impl.EntityImpl@5c3f0b62 (name: Beneficiario)').val('');
	});
	
	$('#com.softtek.rdl2.impl.EntityImpl@5c3f0b62 (name: Beneficiario)').on('input', function() {
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
	
	jsonAjax(contextPath + "obtenerBeneficiariosActivo",modelo,inicioDatos);
}

function buscarBeneficiarios() {
	
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
				"nombre": $("#nombreFlt").val()
				,"apPaterno": $("#apPaternoFlt").val()
				,"apMaterno": $("#apMaternoFlt").val()
				,"porcentaje": $("#porcentajeFlt").val()
			}
	}
	console.log(model);
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "obtenerBeneficiarios",
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
	$("#verBeneficiarios").show();
}


function registrarBeneficiarios() {	
		var data = getObject();	
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				url : contextPath + "registrarBeneficiario",
				data: JSON.stringify(data),
				dataType: 'json',
				cache : false,
				processData : false,
				success : function(data) {
					if (data.codigoEstatus === 400){
						mostrarAlertDanger("Ya existe una beneficiarios con esa configuraci\u00f3n", 'alertDanger');
					} else if (data.codigoEstatus === 404) {
						mostrarAlertDanger('No existe la plantilla especificada en el servidor', 'alertDanger');
					} else {
						mostrarAlertSuccess('El beneficiarios se agreg\u00f3 exitosamente');
						tablaVacia();
						$('#modalCrear').modal('hide');
						$('#dominio-but-limpiar').trigger('click');
					}
				}
			});
}

function actualizarBeneficiario(){
	var data = getObjectUpd();
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "actualizarBeneficiario",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if (data.codigoEstatus === 400){
					mostrarAlertDanger("Ya existe una beneficiarios con esa configuraci\u00f3n", 'alertDangerUp');
				} else {
					mostrarAlertSuccess(MENSAJE_ACTUALIZADO_EXITOSO);
					tablaVacia();
					$('#movModal').modal('hide');
					$('#gi-but-limpiar').trigger('click');
				}
			}
		});
}

function eliminarBeneficiario() {
	var data = getObjectUpd();
	
	$.ajax({
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		url : contextPath + "eliminarBeneficiario/"+$("#idBeneficiarioUpd").val(),
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
			"nombre": $("#nombre").val()
			,"apPaterno": $("#apPaterno").val()
			,"apMaterno": $("#apMaterno").val()
			,"porcentaje": $("#porcentaje").val()
	};
	return data;
}

function getObjectUpd() {
	//var tipo = parseInt($("#tipoInformeUpd").val());
	//var clasificacion = parseInt($("#clasificacionInformeUpd").val());
	//var estado = parseInt($("#estadoInformeUpd").val());
	
	var row = getRowSelected();
	var data = {
			"idBeneficiario" : $("#idBeneficiarioUpd").val(),
			"nombre": $("#nombreUpd").val()
			,"apPaterno": $("#apPaternoUpd").val()
			,"apMaterno": $("#apMaternoUpd").val()
			,"porcentaje": $("#porcentajeUpd").val()
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
            nombre: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,apPaterno: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,apMaterno: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,porcentaje: {
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
        registrarBeneficiarios();
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
        	nombreUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,apPaternoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,apMaternoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,porcentajeUpd: {
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
        actualizarBeneficiario();
    });
}


//Tiempo de ejecucion
function verBeneficiario(){
	
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
					"idBeneficiario" : row.idBeneficiario,
	         		"nombre" : row.nombre
	         		,"apPaterno" : row.apPaterno
	         		,"apMaterno" : row.apMaterno
	         		,"porcentaje" : row.porcentaje
				}
			};
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "paramsBeneficiario",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				console.log("success" + data);
				if (data.payload.existePlantilla === true){
					window.location.href = contextPath + 'parametrosBeneficiario?reporte=' + data.payload.nomPlantilla + '&rutaSalida=' + data.payload.rutaPlantilla+'&nombre='+data.payload.nombre
					+'&apPaterno='+data.payload.apPaterno
					+'&apMaterno='+data.payload.apMaterno
					+'&porcentaje='+data.payload.porcentaje
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
	jsonAjax(contextPath + "obtenerBeneficiarios",modelo,inicioDatos);
}

function paginarTabla(pagina){
	var modelo = {
			"paginado":{
				"pagina":pagina,
				"registrosMostrados": Number($("#datostabla_length select").val())
			},
			"payload":{
				"nombre": $("#nombreFlt").val()
				,"apPaterno": $("#apPaternoFlt").val()
				,"apMaterno": $("#apMaternoFlt").val()
				,"porcentaje": $("#porcentajeFlt").val()
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"proceso": $("#proceso").val(),
			//"modulo": $("#modulo").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": obtenerEstadoInforme()
			}
		};
	jsonAjax(contextPath + "obtenerBeneficiarios",modelo,inicioDatos);
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
