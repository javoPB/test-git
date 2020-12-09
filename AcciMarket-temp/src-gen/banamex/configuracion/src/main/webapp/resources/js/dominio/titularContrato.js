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

	$("#consultarTitularContratos").hide();
	
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
	        	,noclientebanamexFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,noctaFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,sucFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,clabeFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,calleFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,noextFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,nointeriorFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,cpFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,estadoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,delmpoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,ciudadFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,coloniaFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,rfcFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,curpFlt: {
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
var dummy = $("#cveDummyFlt").val();
var noClienteBanamex = $("#noClienteBanamexFlt").val();
var noCta = $("#noCtaFlt").val();
var suc = $("#sucFlt").val();
var clabe = $("#clabeFlt").val();
var calle = $("#calleFlt").val();
var noExt = $("#noExtFlt").val();
var noInterior = $("#noInteriorFlt").val();
var mexicoExtrajero = $("#cveMexicoExtrajeroFlt").val();
var cp = $("#cpFlt").val();
var estado = $("#estadoFlt").val();
var delMpo = $("#delMpoFlt").val();
var ciudad = $("#ciudadFlt").val();
var colonia = $("#coloniaFlt").val();
var noSi = $("#cveNoSiFlt").val();
var rfc = $("#rfcFlt").val();
var curp = $("#curpFlt").val();
var fecNac = $("#fecNacFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var noSi = $("#cveNoSiFlt").val();
			if(
				nombre === ''
				 && dummy === ''
				 && noClienteBanamex === ''
				 && noCta === ''
				 && suc === ''
				 && clabe === ''
				 && calle === ''
				 && noExt === ''
				 && noInterior === ''
				 && mexicoExtrajero === ''
				 && cp === ''
				 && estado === ''
				 && delMpo === ''
				 && ciudad === ''
				 && colonia === ''
				 && noSi === ''
				 && rfc === ''
				 && curp === ''
				 && fecNac === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && noSi === ''
			){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
		} else {
			buscarTitularContratos();
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
$("#dummyUpd").prop("disabled", false);
$("#noClienteBanamexUpd").prop("readonly", false);
$("#dummyUpd").prop("disabled", false);
$("#noCtaUpd").prop("readonly", false);
$("#sucUpd").prop("readonly", false);
$("#clabeUpd").prop("readonly", false);
$("#calleUpd").prop("readonly", false);
$("#noExtUpd").prop("readonly", false);
$("#noInteriorUpd").prop("readonly", false);
$("#mexicoExtrajeroUpd").prop("disabled", false);
$("#cpUpd").prop("readonly", false);
$("#estadoUpd").prop("readonly", false);
$("#delMpoUpd").prop("readonly", false);
$("#ciudadUpd").prop("readonly", false);
$("#coloniaUpd").prop("readonly", false);
$("#noSiUpd").prop("disabled", false);
$("#rfcUpd").prop("readonly", false);
$("#curpUpd").prop("readonly", false);
$("#fecNacUpd").prop("readonly", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#noSiUpd").prop("disabled", false);
		if ($("input[name='radio']:radio").is(':checked')) {
			var row = getRowSelected();
			//$("#idSubprocesoUpd").val(row.idSubproceso);
			//$("#procesoUpd").val(row.proceso);
			//$("#moduloUpd").val(row.modulo),
			//$("#subprocesoUpd").val(row.subproceso),
			$("#idTitularContratoUpd").val(row.idTitularContrato);
$("#nombreUpd").val(row.nombre);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noClienteBanamexUpd").val(row.noClienteBanamex);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noCtaUpd").val(row.noCta);
$("#sucUpd").val(row.suc);
$("#clabeUpd").val(row.clabe);
$("#calleUpd").val(row.calle);
$("#noExtUpd").val(row.noExt);
$("#noInteriorUpd").val(row.noInterior);
$("#mexicoExtrajeroUpd").val(row.mexicoExtrajero.cveMexicoExtrajero);
$("#cpUpd").val(row.cp);
$("#estadoUpd").val(row.estado);
$("#delMpoUpd").val(row.delMpo);
$("#ciudadUpd").val(row.ciudad);
$("#coloniaUpd").val(row.colonia);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#rfcUpd").val(row.rfc);
$("#curpUpd").val(row.curp);
$("#fecNacUpd").val(row.fecNac);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
			$('#modalTitle').empty();
			$('#modalTitle').append('Actualizar informe');
			$('#movModal').modal('show');
			$("#consultarTitularContratos").hide();
			$("#updTitularContratos").show();
			validarFormUpd();
		}else{
			mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }

	});
				
	$('#consultarDetalle').click(function() {
		if ($("input[name='radio']:radio").is(':checked')) {
			$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
			var row = getRowSelected();
				$("#updTitularContratos").hide();
$("#nombreUpd").prop("readonly", true);
$("#dummyUpd").prop("disabled", true);
$("#noClienteBanamexUpd").prop("readonly", true);
$("#dummyUpd").prop("disabled", true);
$("#noCtaUpd").prop("readonly", true);
$("#sucUpd").prop("readonly", true);
$("#clabeUpd").prop("readonly", true);
$("#calleUpd").prop("readonly", true);
$("#noExtUpd").prop("readonly", true);
$("#noInteriorUpd").prop("readonly", true);
$("#mexicoExtrajeroUpd").prop("disabled", true);
$("#cpUpd").prop("readonly", true);
$("#estadoUpd").prop("readonly", true);
$("#delMpoUpd").prop("readonly", true);
$("#ciudadUpd").prop("readonly", true);
$("#coloniaUpd").prop("readonly", true);
$("#noSiUpd").prop("disabled", true);
$("#rfcUpd").prop("readonly", true);
$("#curpUpd").prop("readonly", true);
$("#fecNacUpd").prop("readonly", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#noSiUpd").prop("disabled", true);
				//$("#procesoUpd").val(row.proceso);
				//$("#moduloUpd").val(row.modulo);
				//$("#subprocesoUpd").val(row.subproceso);
				$("#idTitularContratoUpd").val(row.idTitularContrato);
$("#nombreUpd").val(row.nombre);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noClienteBanamexUpd").val(row.noClienteBanamex);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noCtaUpd").val(row.noCta);
$("#sucUpd").val(row.suc);
$("#clabeUpd").val(row.clabe);
$("#calleUpd").val(row.calle);
$("#noExtUpd").val(row.noExt);
$("#noInteriorUpd").val(row.noInterior);
$("#mexicoExtrajeroUpd").val(row.mexicoExtrajero.cveMexicoExtrajero);
$("#cpUpd").val(row.cp);
$("#estadoUpd").val(row.estado);
$("#delMpoUpd").val(row.delMpo);
$("#ciudadUpd").val(row.ciudad);
$("#coloniaUpd").val(row.colonia);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#rfcUpd").val(row.rfc);
$("#curpUpd").val(row.curp);
$("#fecNacUpd").val(row.fecNac);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
				$("#consultarTitularContratos").show();									
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
				 $("#idTitularContratoUpd").val(row.idTitularContrato);
$("#nombreUpd").val(row.nombre);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noClienteBanamexUpd").val(row.noClienteBanamex);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noCtaUpd").val(row.noCta);
$("#sucUpd").val(row.suc);
$("#clabeUpd").val(row.clabe);
$("#calleUpd").val(row.calle);
$("#noExtUpd").val(row.noExt);
$("#noInteriorUpd").val(row.noInterior);
$("#mexicoExtrajeroUpd").val(row.mexicoExtrajero.cveMexicoExtrajero);
$("#cpUpd").val(row.cp);
$("#estadoUpd").val(row.estado);
$("#delMpoUpd").val(row.delMpo);
$("#ciudadUpd").val(row.ciudad);
$("#coloniaUpd").val(row.colonia);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#rfcUpd").val(row.rfc);
$("#curpUpd").val(row.curp);
$("#fecNacUpd").val(row.fecNac);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
				 $("#dominio-mensaje-eliminar").empty().append("&iquest;Desea eliminar el titular?");
				 $('#modalEliminar').modal('show');
			//}
		 }	else{
			 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }	
	});
/*	
	$('#dominio-sel-subproceso, #dominio-sel-modulo, #dominio-sel-proceso').on('change', function() {
	$('#com.softtek.rdl2.impl.EntityImpl@2076a2b2 (name: TitularContrato)').val('');
	});
	
	$('#com.softtek.rdl2.impl.EntityImpl@2076a2b2 (name: TitularContrato)').on('input', function() {
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
	
	jsonAjax(contextPath + "obtenerTitularContratosActivo",modelo,inicioDatos);
}

function buscarTitularContratos() {
	
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
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"noClienteBanamex": $("#noClienteBanamexFlt").val()
				,"noCta": $("#noCtaFlt").val()
				,"suc": $("#sucFlt").val()
				,"clabe": $("#clabeFlt").val()
				,"calle": $("#calleFlt").val()
				,"noExt": $("#noExtFlt").val()
				,"noInterior": $("#noInteriorFlt").val()
				,"mexicoExtrajero": {
					"cveMexicoExtrajero": obtenerMexicoExtrajeroFlt()
				}
				,"cp": $("#cpFlt").val()
				,"estado": $("#estadoFlt").val()
				,"delMpo": $("#delMpoFlt").val()
				,"ciudad": $("#ciudadFlt").val()
				,"colonia": $("#coloniaFlt").val()
				,"noSi": {
					"cveNoSi": obtenerNoSiFlt()
				}
				,"rfc": $("#rfcFlt").val()
				,"curp": $("#curpFlt").val()
				,"fecNac": $("#fecNacFlt").val()
				,"dummy": {
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
				,"dummy": {
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
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"noSi": {
					"cveNoSi": obtenerNoSiFlt()
				}
			}
	}
	console.log(model);
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "obtenerTitularContratos",
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
	$("#verTitularContratos").show();
}

function obtenerDummy(){
	
	var actividad = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividad === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividad
		}
	}
	
	return actividad;
}	

function obtenerDummyFlt(){
	
	var actividad = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividad === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividad
		}
	}
	
	return actividad;
	}	
function obtenerDummy(){
	
	var inst = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (inst === undefined){
			return 2; // estado activo para busquedas en ejecucion de inst
		}
	}
	
	return inst;
}	

function obtenerDummyFlt(){
	
	var inst = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (inst === undefined){
			return 2; // estado activo para busquedas en ejecucion de inst
		}
	}
	
	return inst;
	}	
function obtenerMexicoExtrajero(){
	
	var mexExtr = $("#cveMexicoExtrajero").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (mexExtr === undefined){
			return 2; // estado activo para busquedas en ejecucion de mexExtr
		}
	}
	
	return mexExtr;
}	

function obtenerMexicoExtrajeroFlt(){
	
	var mexExtr = $("#cveMexicoExtrajeroFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (mexExtr === undefined){
			return 2; // estado activo para busquedas en ejecucion de mexExtr
		}
	}
	
	return mexExtr;
	}	
function obtenerNoSi(){
	
	var correspondencia = $("#cveNoSi").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (correspondencia === undefined){
			return 2; // estado activo para busquedas en ejecucion de correspondencia
		}
	}
	
	return correspondencia;
}	

function obtenerNoSiFlt(){
	
	var correspondencia = $("#cveNoSiFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (correspondencia === undefined){
			return 2; // estado activo para busquedas en ejecucion de correspondencia
		}
	}
	
	return correspondencia;
	}	
function obtenerDummy(){
	
	var escolaridad = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (escolaridad === undefined){
			return 2; // estado activo para busquedas en ejecucion de escolaridad
		}
	}
	
	return escolaridad;
}	

function obtenerDummyFlt(){
	
	var escolaridad = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (escolaridad === undefined){
			return 2; // estado activo para busquedas en ejecucion de escolaridad
		}
	}
	
	return escolaridad;
	}	
function obtenerDummy(){
	
	var edoCivil = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (edoCivil === undefined){
			return 2; // estado activo para busquedas en ejecucion de edoCivil
		}
	}
	
	return edoCivil;
}	

function obtenerDummyFlt(){
	
	var edoCivil = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (edoCivil === undefined){
			return 2; // estado activo para busquedas en ejecucion de edoCivil
		}
	}
	
	return edoCivil;
	}	
function obtenerDummy(){
	
	var sexo = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sexo === undefined){
			return 2; // estado activo para busquedas en ejecucion de sexo
		}
	}
	
	return sexo;
}	

function obtenerDummyFlt(){
	
	var sexo = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sexo === undefined){
			return 2; // estado activo para busquedas en ejecucion de sexo
		}
	}
	
	return sexo;
	}	
function obtenerDummy(){
	
	var tipoVivienda = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tipoVivienda === undefined){
			return 2; // estado activo para busquedas en ejecucion de tipoVivienda
		}
	}
	
	return tipoVivienda;
}	

function obtenerDummyFlt(){
	
	var tipoVivienda = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tipoVivienda === undefined){
			return 2; // estado activo para busquedas en ejecucion de tipoVivienda
		}
	}
	
	return tipoVivienda;
	}	
function obtenerDummy(){
	
	var calidadMigratoria = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (calidadMigratoria === undefined){
			return 2; // estado activo para busquedas en ejecucion de calidadMigratoria
		}
	}
	
	return calidadMigratoria;
}	

function obtenerDummyFlt(){
	
	var calidadMigratoria = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (calidadMigratoria === undefined){
			return 2; // estado activo para busquedas en ejecucion de calidadMigratoria
		}
	}
	
	return calidadMigratoria;
	}	
function obtenerDummy(){
	
	var paisResidencia = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (paisResidencia === undefined){
			return 2; // estado activo para busquedas en ejecucion de paisResidencia
		}
	}
	
	return paisResidencia;
}	

function obtenerDummyFlt(){
	
	var paisResidencia = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (paisResidencia === undefined){
			return 2; // estado activo para busquedas en ejecucion de paisResidencia
		}
	}
	
	return paisResidencia;
	}	
function obtenerDummy(){
	
	var nacionalidad = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (nacionalidad === undefined){
			return 2; // estado activo para busquedas en ejecucion de nacionalidad
		}
	}
	
	return nacionalidad;
}	

function obtenerDummyFlt(){
	
	var nacionalidad = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (nacionalidad === undefined){
			return 2; // estado activo para busquedas en ejecucion de nacionalidad
		}
	}
	
	return nacionalidad;
	}	
function obtenerDummy(){
	
	var paisNac = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (paisNac === undefined){
			return 2; // estado activo para busquedas en ejecucion de paisNac
		}
	}
	
	return paisNac;
}	

function obtenerDummyFlt(){
	
	var paisNac = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (paisNac === undefined){
			return 2; // estado activo para busquedas en ejecucion de paisNac
		}
	}
	
	return paisNac;
	}	
function obtenerDummy(){
	
	var edoNac = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (edoNac === undefined){
			return 2; // estado activo para busquedas en ejecucion de edoNac
		}
	}
	
	return edoNac;
}	

function obtenerDummyFlt(){
	
	var edoNac = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (edoNac === undefined){
			return 2; // estado activo para busquedas en ejecucion de edoNac
		}
	}
	
	return edoNac;
	}	
function obtenerNoSi(){
	
	var empleadoGroFinBanamex = $("#cveNoSi").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (empleadoGroFinBanamex === undefined){
			return 2; // estado activo para busquedas en ejecucion de empleadoGroFinBanamex
		}
	}
	
	return empleadoGroFinBanamex;
}	

function obtenerNoSiFlt(){
	
	var empleadoGroFinBanamex = $("#cveNoSiFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (empleadoGroFinBanamex === undefined){
			return 2; // estado activo para busquedas en ejecucion de empleadoGroFinBanamex
		}
	}
	
	return empleadoGroFinBanamex;
	}	

function registrarTitularContratos() {	
		var data = getObject();	
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				url : contextPath + "registrarTitularContrato",
				data: JSON.stringify(data),
				dataType: 'json',
				cache : false,
				processData : false,
				success : function(data) {
					if (data.codigoEstatus === 400){
						mostrarAlertDanger("Ya existe una titular con esa configuraci\u00f3n", 'alertDanger');
					} else if (data.codigoEstatus === 404) {
						mostrarAlertDanger('No existe la plantilla especificada en el servidor', 'alertDanger');
					} else {
						mostrarAlertSuccess('El titular se agreg\u00f3 exitosamente');
						tablaVacia();
						$('#modalCrear').modal('hide');
						$('#dominio-but-limpiar').trigger('click');
					}
				}
			});
}

function actualizarTitularContrato(){
	var data = getObjectUpd();
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "actualizarTitularContrato",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if (data.codigoEstatus === 400){
					mostrarAlertDanger("Ya existe una titular con esa configuraci\u00f3n", 'alertDangerUp');
				} else {
					mostrarAlertSuccess(MENSAJE_ACTUALIZADO_EXITOSO);
					tablaVacia();
					$('#movModal').modal('hide');
					$('#gi-but-limpiar').trigger('click');
				}
			}
		});
}

function eliminarTitularContrato() {
	var data = getObjectUpd();
	
	$.ajax({
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		url : contextPath + "eliminarTitularContrato/"+$("#idTitularContratoUpd").val(),
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
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"noClienteBanamex": $("#noClienteBanamex").val()
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"noCta": $("#noCta").val()
			,"suc": $("#suc").val()
			,"clabe": $("#clabe").val()
			,"calle": $("#calle").val()
			,"noExt": $("#noExt").val()
			,"noInterior": $("#noInterior").val()
			,"mexicoExtrajero": {
				"cveMexicoExtrajero": parseInt($("#cveMexicoExtrajero").val()),
				"descripcion" : null
			}
			,"cp": $("#cp").val()
			,"estado": $("#estado").val()
			,"delMpo": $("#delMpo").val()
			,"ciudad": $("#ciudad").val()
			,"colonia": $("#colonia").val()
			,"noSi": {
				"cveNoSi": parseInt($("#cveNoSi").val()),
				"descripcion" : null
			}
			,"rfc": $("#rfc").val()
			,"curp": $("#curp").val()
			,"fecNac": $("#fecNac").val()
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
			,"noSi": {
				"cveNoSi": parseInt($("#cveNoSi").val()),
				"descripcion" : null
			}
	};
	return data;
}

function getObjectUpd() {
	//var tipo = parseInt($("#tipoInformeUpd").val());
	//var clasificacion = parseInt($("#clasificacionInformeUpd").val());
	//var estado = parseInt($("#estadoInformeUpd").val());
	
	var row = getRowSelected();
	var data = {
			"idTitularContrato" : $("#idTitularContratoUpd").val(),
			"nombre": $("#nombreUpd").val()
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"noClienteBanamex": $("#noClienteBanamexUpd").val()
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"noCta": $("#noCtaUpd").val()
			,"suc": $("#sucUpd").val()
			,"clabe": $("#clabeUpd").val()
			,"calle": $("#calleUpd").val()
			,"noExt": $("#noExtUpd").val()
			,"noInterior": $("#noInteriorUpd").val()
			,"mexicoExtrajero": {
				"cveMexicoExtrajero": parseInt($("#mexicoExtrajeroUpd").val()),
				"descripcion" : null
			}
			,"cp": $("#cpUpd").val()
			,"estado": $("#estadoUpd").val()
			,"delMpo": $("#delMpoUpd").val()
			,"ciudad": $("#ciudadUpd").val()
			,"colonia": $("#coloniaUpd").val()
			,"noSi": {
				"cveNoSi": parseInt($("#noSiUpd").val()),
				"descripcion" : null
			}
			,"rfc": $("#rfcUpd").val()
			,"curp": $("#curpUpd").val()
			,"fecNac": $("#fecNacUpd").val()
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
			,"noSi": {
				"cveNoSi": parseInt($("#noSiUpd").val()),
				"descripcion" : null
			}
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
            ,dummy: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,noClienteBanamex: {
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
            ,noCta: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,suc: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,clabe: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,calle: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,noExt: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,noInterior: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,mexicoExtrajero: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,cp: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,estado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,delMpo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,ciudad: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,colonia: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,noSi: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,rfc: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,curp: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fecNac: {
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
            ,noSi: {
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
        registrarTitularContratos();
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
        	,dummyUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,noClienteBanamexUpd: {
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
        	,noCtaUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,sucUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,clabeUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,calleUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,noExtUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,noInteriorUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,mexicoExtrajeroUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,cpUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,estadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,delMpoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,ciudadUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,coloniaUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,noSiUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,rfcUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,curpUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fecNacUpd: {
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
        	,noSiUpd: {
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
        actualizarTitularContrato();
    });
}


//Tiempo de ejecucion
function verTitularContrato(){
	
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
					"idTitularContrato" : row.idTitularContrato,
	         		"nombre" : row.nombre
	         		,"dummy" : row.actividad
	         		,"noClienteBanamex" : row.noClienteBanamex
	         		,"dummy" : row.inst
	         		,"noCta" : row.noCta
	         		,"suc" : row.suc
	         		,"clabe" : row.clabe
	         		,"calle" : row.calle
	         		,"noExt" : row.noExt
	         		,"noInterior" : row.noInterior
	         		,"mexicoExtrajero" : row.mexExtr
	         		,"cp" : row.cp
	         		,"estado" : row.estado
	         		,"delMpo" : row.delMpo
	         		,"ciudad" : row.ciudad
	         		,"colonia" : row.colonia
	         		,"noSi" : row.correspondencia
	         		,"rfc" : row.rfc
	         		,"curp" : row.curp
	         		,"fecNac" : row.fecNac
	         		,"dummy" : row.escolaridad
	         		,"dummy" : row.edoCivil
	         		,"dummy" : row.sexo
	         		,"dummy" : row.tipoVivienda
	         		,"dummy" : row.calidadMigratoria
	         		,"dummy" : row.paisResidencia
	         		,"dummy" : row.nacionalidad
	         		,"dummy" : row.paisNac
	         		,"dummy" : row.edoNac
	         		,"noSi" : row.empleadoGroFinBanamex
				}
			};
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "paramsTitularContrato",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				console.log("success" + data);
				if (data.payload.existePlantilla === true){
					window.location.href = contextPath + 'parametrosTitularContrato?reporte=' + data.payload.nomPlantilla + '&rutaSalida=' + data.payload.rutaPlantilla+'&nombre='+data.payload.nombre
					+'&dummy='+data.payload.dummy.cveDummy
					+'&noClienteBanamex='+data.payload.noClienteBanamex
					+'&dummy='+data.payload.dummy.cveDummy
					+'&noCta='+data.payload.noCta
					+'&suc='+data.payload.suc
					+'&clabe='+data.payload.clabe
					+'&calle='+data.payload.calle
					+'&noExt='+data.payload.noExt
					+'&noInterior='+data.payload.noInterior
					+'&mexicoExtrajero='+data.payload.mexicoExtrajero.cveMexicoExtrajero
					+'&cp='+data.payload.cp
					+'&estado='+data.payload.estado
					+'&delMpo='+data.payload.delMpo
					+'&ciudad='+data.payload.ciudad
					+'&colonia='+data.payload.colonia
					+'&noSi='+data.payload.noSi.cveNoSi
					+'&rfc='+data.payload.rfc
					+'&curp='+data.payload.curp
					+'&fecNac='+data.payload.fecNac
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&noSi='+data.payload.noSi.cveNoSi
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
	jsonAjax(contextPath + "obtenerTitularContratos",modelo,inicioDatos);
}

function paginarTabla(pagina){
	var modelo = {
			"paginado":{
				"pagina":pagina,
				"registrosMostrados": Number($("#datostabla_length select").val())
			},
			"payload":{
				"nombre": $("#nombreFlt").val()
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"noClienteBanamex": $("#noClienteBanamexFlt").val()
				,"noCta": $("#noCtaFlt").val()
				,"suc": $("#sucFlt").val()
				,"clabe": $("#clabeFlt").val()
				,"calle": $("#calleFlt").val()
				,"noExt": $("#noExtFlt").val()
				,"noInterior": $("#noInteriorFlt").val()
				,"mexicoExtrajero": {
					"cveMexicoExtrajero": obtenerMexicoExtrajeroFlt()
				}
				,"cp": $("#cpFlt").val()
				,"estado": $("#estadoFlt").val()
				,"delMpo": $("#delMpoFlt").val()
				,"ciudad": $("#ciudadFlt").val()
				,"colonia": $("#coloniaFlt").val()
				,"noSi": {
					"cveNoSi": obtenerNoSiFlt()
				}
				,"rfc": $("#rfcFlt").val()
				,"curp": $("#curpFlt").val()
				,"fecNac": $("#fecNacFlt").val()
				,"dummy": {
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
				,"dummy": {
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
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"noSi": {
					"cveNoSi": obtenerNoSiFlt()
				}
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"proceso": $("#proceso").val(),
			//"modulo": $("#modulo").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": obtenerEstadoInforme()
			}
		};
	jsonAjax(contextPath + "obtenerTitularContratos",modelo,inicioDatos);
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
