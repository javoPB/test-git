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

	$("#consultarReperfilamientoPersonaFisicas").hide();
	
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
	        	,perfilactualFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,porcentajeliquidezFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,porcentajecortoplazoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,montocortoplazoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,porcentajelargoplazoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,montolargoplazoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,porcentajepatrimonioliquidototalFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,montopatrimonioliquidototalFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,perfilFlt: {
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
var contrato = $("#idContratoFlt").val();
var nombre = $("#nombreFlt").val();
var perfilActual = $("#perfilActualFlt").val();
var dummy = $("#cveDummyFlt").val();
var porcentajeLiquidez = $("#porcentajeLiquidezFlt").val();
var montoLiquidez = $("#montoLiquidezFlt").val();
var porcentajeCortoPlazo = $("#porcentajeCortoPlazoFlt").val();
var montoCortoPlazo = $("#montoCortoPlazoFlt").val();
var porcentajeLargoPlazo = $("#porcentajeLargoPlazoFlt").val();
var montoLargoPlazo = $("#montoLargoPlazoFlt").val();
var porcentajePatrimonioLiquidoTotal = $("#porcentajePatrimonioLiquidoTotalFlt").val();
var montoPatrimonioLiquidoTotal = $("#montoPatrimonioLiquidoTotalFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var noSi = $("#cveNoSiFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
var dummy = $("#cveDummyFlt").val();
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
var situacionFinancieraActual = $("#cveSituacionFinancieraActualFlt").val();
var situacionFinancieraActual = $("#cveSituacionFinancieraActualFlt").val();
var situacionFinancieraActual = $("#cveSituacionFinancieraActualFlt").val();
var perfil = $("#perfilFlt").val();
			if(
				contrato === ''
				 && nombre === ''
				 && perfilActual === ''
				 && dummy === ''
				 && porcentajeLiquidez === ''
				 && montoLiquidez === ''
				 && porcentajeCortoPlazo === ''
				 && montoCortoPlazo === ''
				 && porcentajeLargoPlazo === ''
				 && montoLargoPlazo === ''
				 && porcentajePatrimonioLiquidoTotal === ''
				 && montoPatrimonioLiquidoTotal === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && noSi === ''
				 && dummy === ''
				 && dummy === ''
				 && conocimientoExperiencia === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && conocimientoExperiencia === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
				 && dummy === ''
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
				 && situacionFinancieraActual === ''
				 && situacionFinancieraActual === ''
				 && situacionFinancieraActual === ''
				 && perfil === ''
			){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
		} else {
			buscarReperfilamientoPersonaFisicas();
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
		
$("#contratoUpd").prop("disabled", false);
$("#nombreUpd").prop("readonly", false);
$("#perfilActualUpd").prop("readonly", false);
$("#dummyUpd").prop("disabled", false);
$("#porcentajeLiquidezUpd").prop("readonly", false);
$("#montoLiquidezUpd").prop("readonly", false);
$("#porcentajeCortoPlazoUpd").prop("readonly", false);
$("#montoCortoPlazoUpd").prop("readonly", false);
$("#porcentajeLargoPlazoUpd").prop("readonly", false);
$("#montoLargoPlazoUpd").prop("readonly", false);
$("#porcentajePatrimonioLiquidoTotalUpd").prop("readonly", false);
$("#montoPatrimonioLiquidoTotalUpd").prop("readonly", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#noSiUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
$("#dummyUpd").prop("disabled", false);
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
$("#situacionFinancieraActualUpd").prop("disabled", false);
$("#situacionFinancieraActualUpd").prop("disabled", false);
$("#situacionFinancieraActualUpd").prop("disabled", false);
$("#perfilUpd").prop("readonly", false);
		if ($("input[name='radio']:radio").is(':checked')) {
			var row = getRowSelected();
			//$("#idSubprocesoUpd").val(row.idSubproceso);
			//$("#procesoUpd").val(row.proceso);
			//$("#moduloUpd").val(row.modulo),
			//$("#subprocesoUpd").val(row.subproceso),
			$("#idReperfilamientoPersonaFisicaUpd").val(row.idReperfilamientoPersonaFisica);
$("#contratoUpd").val(row.contrato.idContrato);
$("#nombreUpd").val(row.nombre);
$("#perfilActualUpd").val(row.perfilActual);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#porcentajeLiquidezUpd").val(row.porcentajeLiquidez);
$("#montoLiquidezUpd").val(row.montoLiquidez);
$("#porcentajeCortoPlazoUpd").val(row.porcentajeCortoPlazo);
$("#montoCortoPlazoUpd").val(row.montoCortoPlazo);
$("#porcentajeLargoPlazoUpd").val(row.porcentajeLargoPlazo);
$("#montoLargoPlazoUpd").val(row.montoLargoPlazo);
$("#porcentajePatrimonioLiquidoTotalUpd").val(row.porcentajePatrimonioLiquidoTotal);
$("#montoPatrimonioLiquidoTotalUpd").val(row.montoPatrimonioLiquidoTotal);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
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
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#perfilUpd").val(row.perfil);
			$('#modalTitle').empty();
			$('#modalTitle').append('Actualizar informe');
			$('#movModal').modal('show');
			$("#consultarReperfilamientoPersonaFisicas").hide();
			$("#updReperfilamientoPersonaFisicas").show();
			validarFormUpd();
		}else{
			mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }

	});
				
	$('#consultarDetalle').click(function() {
		if ($("input[name='radio']:radio").is(':checked')) {
			$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
			var row = getRowSelected();
				$("#updReperfilamientoPersonaFisicas").hide();
$("#contratoUpd").prop("disabled", true);
$("#nombreUpd").prop("readonly", true);
$("#perfilActualUpd").prop("readonly", true);
$("#dummyUpd").prop("disabled", true);
$("#porcentajeLiquidezUpd").prop("readonly", true);
$("#montoLiquidezUpd").prop("readonly", true);
$("#porcentajeCortoPlazoUpd").prop("readonly", true);
$("#montoCortoPlazoUpd").prop("readonly", true);
$("#porcentajeLargoPlazoUpd").prop("readonly", true);
$("#montoLargoPlazoUpd").prop("readonly", true);
$("#porcentajePatrimonioLiquidoTotalUpd").prop("readonly", true);
$("#montoPatrimonioLiquidoTotalUpd").prop("readonly", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#noSiUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
$("#dummyUpd").prop("disabled", true);
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
$("#situacionFinancieraActualUpd").prop("disabled", true);
$("#situacionFinancieraActualUpd").prop("disabled", true);
$("#situacionFinancieraActualUpd").prop("disabled", true);
$("#perfilUpd").prop("readonly", true);
				//$("#procesoUpd").val(row.proceso);
				//$("#moduloUpd").val(row.modulo);
				//$("#subprocesoUpd").val(row.subproceso);
				$("#idReperfilamientoPersonaFisicaUpd").val(row.idReperfilamientoPersonaFisica);
$("#contratoUpd").val(row.contrato.idContrato);
$("#nombreUpd").val(row.nombre);
$("#perfilActualUpd").val(row.perfilActual);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#porcentajeLiquidezUpd").val(row.porcentajeLiquidez);
$("#montoLiquidezUpd").val(row.montoLiquidez);
$("#porcentajeCortoPlazoUpd").val(row.porcentajeCortoPlazo);
$("#montoCortoPlazoUpd").val(row.montoCortoPlazo);
$("#porcentajeLargoPlazoUpd").val(row.porcentajeLargoPlazo);
$("#montoLargoPlazoUpd").val(row.montoLargoPlazo);
$("#porcentajePatrimonioLiquidoTotalUpd").val(row.porcentajePatrimonioLiquidoTotal);
$("#montoPatrimonioLiquidoTotalUpd").val(row.montoPatrimonioLiquidoTotal);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
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
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#perfilUpd").val(row.perfil);
				$("#consultarReperfilamientoPersonaFisicas").show();									
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
				 $("#idReperfilamientoPersonaFisicaUpd").val(row.idReperfilamientoPersonaFisica);
$("#contratoUpd").val(row.contrato.idContrato);
$("#nombreUpd").val(row.nombre);
$("#perfilActualUpd").val(row.perfilActual);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#porcentajeLiquidezUpd").val(row.porcentajeLiquidez);
$("#montoLiquidezUpd").val(row.montoLiquidez);
$("#porcentajeCortoPlazoUpd").val(row.porcentajeCortoPlazo);
$("#montoCortoPlazoUpd").val(row.montoCortoPlazo);
$("#porcentajeLargoPlazoUpd").val(row.porcentajeLargoPlazo);
$("#montoLargoPlazoUpd").val(row.montoLargoPlazo);
$("#porcentajePatrimonioLiquidoTotalUpd").val(row.porcentajePatrimonioLiquidoTotal);
$("#montoPatrimonioLiquidoTotalUpd").val(row.montoPatrimonioLiquidoTotal);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#noSiUpd").val(row.noSi.cveNoSi);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
$("#dummyUpd").val(row.dummy.cveDummy);
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
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#situacionFinancieraActualUpd").val(row.situacionFinancieraActual.cveSituacionFinancieraActual);
$("#perfilUpd").val(row.perfil);
				 $("#dominio-mensaje-eliminar").empty().append("&iquest;Desea eliminar el reperfilamiento de personas físicas?");
				 $('#modalEliminar').modal('show');
			//}
		 }	else{
			 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }	
	});
/*	
	$('#dominio-sel-subproceso, #dominio-sel-modulo, #dominio-sel-proceso').on('change', function() {
	$('#com.softtek.rdl2.impl.EntityImpl@47d1b635 (name: ReperfilamientoPersonaFisica)').val('');
	});
	
	$('#com.softtek.rdl2.impl.EntityImpl@47d1b635 (name: ReperfilamientoPersonaFisica)').on('input', function() {
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
	
	jsonAjax(contextPath + "obtenerReperfilamientoPersonaFisicasActivo",modelo,inicioDatos);
}

function buscarReperfilamientoPersonaFisicas() {
	
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
				"contrato": {
					"idContrato": obtenerContratoFlt()
				}
				,"nombre": $("#nombreFlt").val()
				,"perfilActual": $("#perfilActualFlt").val()
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"porcentajeLiquidez": $("#porcentajeLiquidezFlt").val()
				,"montoLiquidez": $("#montoLiquidezFlt").val()
				,"porcentajeCortoPlazo": $("#porcentajeCortoPlazoFlt").val()
				,"montoCortoPlazo": $("#montoCortoPlazoFlt").val()
				,"porcentajeLargoPlazo": $("#porcentajeLargoPlazoFlt").val()
				,"montoLargoPlazo": $("#montoLargoPlazoFlt").val()
				,"porcentajePatrimonioLiquidoTotal": $("#porcentajePatrimonioLiquidoTotalFlt").val()
				,"montoPatrimonioLiquidoTotal": $("#montoPatrimonioLiquidoTotalFlt").val()
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
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
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
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
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
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"perfil": $("#perfilFlt").val()
			}
	}
	console.log(model);
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "obtenerReperfilamientoPersonaFisicas",
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
	$("#verReperfilamientoPersonaFisicas").show();
}

function obtenerContrato(){
	
	var contrato = $("#idContrato").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (contrato === undefined){
			return 2; // estado activo para busquedas en ejecucion de contrato
		}
	}
	
	return contrato;
}

function obtenerContratoFlt(){
	
	var contrato = $("#idContratoFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (contrato === undefined){
			return 2; // estado activo para busquedas en ejecucion de contrato
		}
	}
	
	return contrato;
}		
function obtenerDummy(){
	
	var personaPerfilar = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (personaPerfilar === undefined){
			return 2; // estado activo para busquedas en ejecucion de personaPerfilar
		}
	}
	
	return personaPerfilar;
}	

function obtenerDummyFlt(){
	
	var personaPerfilar = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (personaPerfilar === undefined){
			return 2; // estado activo para busquedas en ejecucion de personaPerfilar
		}
	}
	
	return personaPerfilar;
	}	
function obtenerDummy(){
	
	var intervaloEdad = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (intervaloEdad === undefined){
			return 2; // estado activo para busquedas en ejecucion de intervaloEdad
		}
	}
	
	return intervaloEdad;
}	

function obtenerDummyFlt(){
	
	var intervaloEdad = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (intervaloEdad === undefined){
			return 2; // estado activo para busquedas en ejecucion de intervaloEdad
		}
	}
	
	return intervaloEdad;
	}	
function obtenerDummy(){
	
	var nivelEstudios = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (nivelEstudios === undefined){
			return 2; // estado activo para busquedas en ejecucion de nivelEstudios
		}
	}
	
	return nivelEstudios;
}	

function obtenerDummyFlt(){
	
	var nivelEstudios = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (nivelEstudios === undefined){
			return 2; // estado activo para busquedas en ejecucion de nivelEstudios
		}
	}
	
	return nivelEstudios;
	}	
function obtenerDummy(){
	
	var ocupacion = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (ocupacion === undefined){
			return 2; // estado activo para busquedas en ejecucion de ocupacion
		}
	}
	
	return ocupacion;
}	

function obtenerDummyFlt(){
	
	var ocupacion = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (ocupacion === undefined){
			return 2; // estado activo para busquedas en ejecucion de ocupacion
		}
	}
	
	return ocupacion;
	}	
function obtenerDummy(){
	
	var actividadProfesionalAnterior = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadProfesionalAnterior === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadProfesionalAnterior
		}
	}
	
	return actividadProfesionalAnterior;
}	

function obtenerDummyFlt(){
	
	var actividadProfesionalAnterior = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadProfesionalAnterior === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadProfesionalAnterior
		}
	}
	
	return actividadProfesionalAnterior;
	}	
function obtenerDummy(){
	
	var actividadProfesionalActual = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadProfesionalActual === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadProfesionalActual
		}
	}
	
	return actividadProfesionalActual;
}	

function obtenerDummyFlt(){
	
	var actividadProfesionalActual = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadProfesionalActual === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadProfesionalActual
		}
	}
	
	return actividadProfesionalActual;
	}	
function obtenerNoSi(){
	
	var actividadRelacionadaInversiones = $("#cveNoSi").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadRelacionadaInversiones === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadRelacionadaInversiones
		}
	}
	
	return actividadRelacionadaInversiones;
}	

function obtenerNoSiFlt(){
	
	var actividadRelacionadaInversiones = $("#cveNoSiFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (actividadRelacionadaInversiones === undefined){
			return 2; // estado activo para busquedas en ejecucion de actividadRelacionadaInversiones
		}
	}
	
	return actividadRelacionadaInversiones;
	}	
function obtenerDummy(){
	
	var estrategiaCliente = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (estrategiaCliente === undefined){
			return 2; // estado activo para busquedas en ejecucion de estrategiaCliente
		}
	}
	
	return estrategiaCliente;
}	

function obtenerDummyFlt(){
	
	var estrategiaCliente = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (estrategiaCliente === undefined){
			return 2; // estado activo para busquedas en ejecucion de estrategiaCliente
		}
	}
	
	return estrategiaCliente;
	}	
function obtenerDummy(){
	
	var clienteAsesoria = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (clienteAsesoria === undefined){
			return 2; // estado activo para busquedas en ejecucion de clienteAsesoria
		}
	}
	
	return clienteAsesoria;
}	

function obtenerDummyFlt(){
	
	var clienteAsesoria = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (clienteAsesoria === undefined){
			return 2; // estado activo para busquedas en ejecucion de clienteAsesoria
		}
	}
	
	return clienteAsesoria;
	}	
function obtenerConocimientoExperiencia(){
	
	var experienciaDeudaGub = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (experienciaDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de experienciaDeudaGub
		}
	}
	
	return experienciaDeudaGub;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var experienciaDeudaGub = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (experienciaDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de experienciaDeudaGub
		}
	}
	
	return experienciaDeudaGub;
	}	
function obtenerDummy(){
	
	var frecuenciaDeudaGub = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaDeudaGub
		}
	}
	
	return frecuenciaDeudaGub;
}	

function obtenerDummyFlt(){
	
	var frecuenciaDeudaGub = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaDeudaGub
		}
	}
	
	return frecuenciaDeudaGub;
	}	
function obtenerDummy(){
	
	var plazoDeudaGub = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoDeudaGub
		}
	}
	
	return plazoDeudaGub;
}	

function obtenerDummyFlt(){
	
	var plazoDeudaGub = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoDeudaGub
		}
	}
	
	return plazoDeudaGub;
	}	
function obtenerDummy(){
	
	var volumenDeudaGub = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenDeudaGub
		}
	}
	
	return volumenDeudaGub;
}	

function obtenerDummyFlt(){
	
	var volumenDeudaGub = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenDeudaGub
		}
	}
	
	return volumenDeudaGub;
	}	
function obtenerConocimientoExperiencia(){
	
	var expDeudaCorp = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de expDeudaCorp
		}
	}
	
	return expDeudaCorp;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var expDeudaCorp = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de expDeudaCorp
		}
	}
	
	return expDeudaCorp;
	}	
function obtenerDummy(){
	
	var frecuenciaDeudaCorp = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaDeudaCorp
		}
	}
	
	return frecuenciaDeudaCorp;
}	

function obtenerDummyFlt(){
	
	var frecuenciaDeudaCorp = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaDeudaCorp
		}
	}
	
	return frecuenciaDeudaCorp;
	}	
function obtenerDummy(){
	
	var plazoDeudaCorp = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoDeudaCorp
		}
	}
	
	return plazoDeudaCorp;
}	

function obtenerDummyFlt(){
	
	var plazoDeudaCorp = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoDeudaCorp
		}
	}
	
	return plazoDeudaCorp;
	}	
function obtenerDummy(){
	
	var volumenDeudaCorp = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenDeudaCorp
		}
	}
	
	return volumenDeudaCorp;
}	

function obtenerDummyFlt(){
	
	var volumenDeudaCorp = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenDeudaCorp
		}
	}
	
	return volumenDeudaCorp;
	}	
function obtenerDummy(){
	
	var expSociedadesInv = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de expSociedadesInv
		}
	}
	
	return expSociedadesInv;
}	

function obtenerDummyFlt(){
	
	var expSociedadesInv = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de expSociedadesInv
		}
	}
	
	return expSociedadesInv;
	}	
function obtenerDummy(){
	
	var frecuenciaSociedadesInv = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaSociedadesInv
		}
	}
	
	return frecuenciaSociedadesInv;
}	

function obtenerDummyFlt(){
	
	var frecuenciaSociedadesInv = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaSociedadesInv
		}
	}
	
	return frecuenciaSociedadesInv;
	}	
function obtenerDummy(){
	
	var plazoSociedadesInv = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoSociedadesInv
		}
	}
	
	return plazoSociedadesInv;
}	

function obtenerDummyFlt(){
	
	var plazoSociedadesInv = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoSociedadesInv
		}
	}
	
	return plazoSociedadesInv;
	}	
function obtenerDummy(){
	
	var volumenSociedadesInv = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenSociedadesInv
		}
	}
	
	return volumenSociedadesInv;
}	

function obtenerDummyFlt(){
	
	var volumenSociedadesInv = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenSociedadesInv === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenSociedadesInv
		}
	}
	
	return volumenSociedadesInv;
	}	
function obtenerDummy(){
	
	var expValoresEst = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de expValoresEst
		}
	}
	
	return expValoresEst;
}	

function obtenerDummyFlt(){
	
	var expValoresEst = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de expValoresEst
		}
	}
	
	return expValoresEst;
	}	
function obtenerDummy(){
	
	var frecuenciaValoresEst = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaValoresEst
		}
	}
	
	return frecuenciaValoresEst;
}	

function obtenerDummyFlt(){
	
	var frecuenciaValoresEst = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaValoresEst
		}
	}
	
	return frecuenciaValoresEst;
	}	
function obtenerDummy(){
	
	var plazoValoresEst = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoValoresEst
		}
	}
	
	return plazoValoresEst;
}	

function obtenerDummyFlt(){
	
	var plazoValoresEst = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoValoresEst
		}
	}
	
	return plazoValoresEst;
	}	
function obtenerDummy(){
	
	var volumenValoresEst = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenValoresEst
		}
	}
	
	return volumenValoresEst;
}	

function obtenerDummyFlt(){
	
	var volumenValoresEst = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenValoresEst === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenValoresEst
		}
	}
	
	return volumenValoresEst;
	}	
function obtenerDummy(){
	
	var expCertificadosBur = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de expCertificadosBur
		}
	}
	
	return expCertificadosBur;
}	

function obtenerDummyFlt(){
	
	var expCertificadosBur = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (expCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de expCertificadosBur
		}
	}
	
	return expCertificadosBur;
	}	
function obtenerDummy(){
	
	var frecuenciaCertificadosBur = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaCertificadosBur
		}
	}
	
	return frecuenciaCertificadosBur;
}	

function obtenerDummyFlt(){
	
	var frecuenciaCertificadosBur = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (frecuenciaCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de frecuenciaCertificadosBur
		}
	}
	
	return frecuenciaCertificadosBur;
	}	
function obtenerDummy(){
	
	var plazoCertificadosBur = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoCertificadosBur
		}
	}
	
	return plazoCertificadosBur;
}	

function obtenerDummyFlt(){
	
	var plazoCertificadosBur = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (plazoCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de plazoCertificadosBur
		}
	}
	
	return plazoCertificadosBur;
	}	
function obtenerDummy(){
	
	var volumenCertificadosBur = $("#cveDummy").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenCertificadosBur
		}
	}
	
	return volumenCertificadosBur;
}	

function obtenerDummyFlt(){
	
	var volumenCertificadosBur = $("#cveDummyFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (volumenCertificadosBur === undefined){
			return 2; // estado activo para busquedas en ejecucion de volumenCertificadosBur
		}
	}
	
	return volumenCertificadosBur;
	}	
function obtenerNoSi(){
	
	var tieneLimitante = $("#cveNoSi").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tieneLimitante === undefined){
			return 2; // estado activo para busquedas en ejecucion de tieneLimitante
		}
	}
	
	return tieneLimitante;
}	

function obtenerNoSiFlt(){
	
	var tieneLimitante = $("#cveNoSiFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (tieneLimitante === undefined){
			return 2; // estado activo para busquedas en ejecucion de tieneLimitante
		}
	}
	
	return tieneLimitante;
	}	
function obtenerSituacionFinancieraActual(){
	
	var porcentajeTotalPatrimonio = $("#cveSituacionFinancieraActual").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeTotalPatrimonio === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeTotalPatrimonio
		}
	}
	
	return porcentajeTotalPatrimonio;
}	

function obtenerSituacionFinancieraActualFlt(){
	
	var porcentajeTotalPatrimonio = $("#cveSituacionFinancieraActualFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeTotalPatrimonio === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeTotalPatrimonio
		}
	}
	
	return porcentajeTotalPatrimonio;
	}	
function obtenerSituacionFinancieraActual(){
	
	var porcentajeIngresoAnual = $("#cveSituacionFinancieraActual").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeIngresoAnual === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeIngresoAnual
		}
	}
	
	return porcentajeIngresoAnual;
}	

function obtenerSituacionFinancieraActualFlt(){
	
	var porcentajeIngresoAnual = $("#cveSituacionFinancieraActualFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeIngresoAnual === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeIngresoAnual
		}
	}
	
	return porcentajeIngresoAnual;
	}	
function obtenerSituacionFinancieraActual(){
	
	var porcentajeInversiones = $("#cveSituacionFinancieraActual").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeInversiones === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeInversiones
		}
	}
	
	return porcentajeInversiones;
}	

function obtenerSituacionFinancieraActualFlt(){
	
	var porcentajeInversiones = $("#cveSituacionFinancieraActualFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (porcentajeInversiones === undefined){
			return 2; // estado activo para busquedas en ejecucion de porcentajeInversiones
		}
	}
	
	return porcentajeInversiones;
	}	

function registrarReperfilamientoPersonaFisicas() {	
		var data = getObject();	
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				url : contextPath + "registrarReperfilamientoPersonaFisica",
				data: JSON.stringify(data),
				dataType: 'json',
				cache : false,
				processData : false,
				success : function(data) {
					if (data.codigoEstatus === 400){
						mostrarAlertDanger("Ya existe una reperfilamiento de personas físicas con esa configuraci\u00f3n", 'alertDanger');
					} else if (data.codigoEstatus === 404) {
						mostrarAlertDanger('No existe la plantilla especificada en el servidor', 'alertDanger');
					} else {
						mostrarAlertSuccess('El reperfilamiento de personas físicas se agreg\u00f3 exitosamente');
						tablaVacia();
						$('#modalCrear').modal('hide');
						$('#dominio-but-limpiar').trigger('click');
					}
				}
			});
}

function actualizarReperfilamientoPersonaFisica(){
	var data = getObjectUpd();
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "actualizarReperfilamientoPersonaFisica",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if (data.codigoEstatus === 400){
					mostrarAlertDanger("Ya existe una reperfilamiento de personas físicas con esa configuraci\u00f3n", 'alertDangerUp');
				} else {
					mostrarAlertSuccess(MENSAJE_ACTUALIZADO_EXITOSO);
					tablaVacia();
					$('#movModal').modal('hide');
					$('#gi-but-limpiar').trigger('click');
				}
			}
		});
}

function eliminarReperfilamientoPersonaFisica() {
	var data = getObjectUpd();
	
	$.ajax({
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		url : contextPath + "eliminarReperfilamientoPersonaFisica/"+$("#idReperfilamientoPersonaFisicaUpd").val(),
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
			"contrato": {
				"idContrato": parseInt($("#idContrato").val()),
				"descripcion" : null
			}
			,"nombre": $("#nombre").val()
			,"perfilActual": $("#perfilActual").val()
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"porcentajeLiquidez": $("#porcentajeLiquidez").val()
			,"montoLiquidez": $("#montoLiquidez").val()
			,"porcentajeCortoPlazo": $("#porcentajeCortoPlazo").val()
			,"montoCortoPlazo": $("#montoCortoPlazo").val()
			,"porcentajeLargoPlazo": $("#porcentajeLargoPlazo").val()
			,"montoLargoPlazo": $("#montoLargoPlazo").val()
			,"porcentajePatrimonioLiquidoTotal": $("#porcentajePatrimonioLiquidoTotal").val()
			,"montoPatrimonioLiquidoTotal": $("#montoPatrimonioLiquidoTotal").val()
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
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#cveDummy").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
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
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
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
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#cveSituacionFinancieraActual").val()),
				"descripcion" : null
			}
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#cveSituacionFinancieraActual").val()),
				"descripcion" : null
			}
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#cveSituacionFinancieraActual").val()),
				"descripcion" : null
			}
			,"perfil": $("#perfil").val()
	};
	return data;
}

function getObjectUpd() {
	//var tipo = parseInt($("#tipoInformeUpd").val());
	//var clasificacion = parseInt($("#clasificacionInformeUpd").val());
	//var estado = parseInt($("#estadoInformeUpd").val());
	
	var row = getRowSelected();
	var data = {
			"idReperfilamientoPersonaFisica" : $("#idReperfilamientoPersonaFisicaUpd").val(),
			"contrato": {
				"idContrato": parseInt($("#contratoUpd").val()),
				"descripcion" : null
			}
			,"nombre": $("#nombreUpd").val()
			,"perfilActual": $("#perfilActualUpd").val()
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"porcentajeLiquidez": $("#porcentajeLiquidezUpd").val()
			,"montoLiquidez": $("#montoLiquidezUpd").val()
			,"porcentajeCortoPlazo": $("#porcentajeCortoPlazoUpd").val()
			,"montoCortoPlazo": $("#montoCortoPlazoUpd").val()
			,"porcentajeLargoPlazo": $("#porcentajeLargoPlazoUpd").val()
			,"montoLargoPlazo": $("#montoLargoPlazoUpd").val()
			,"porcentajePatrimonioLiquidoTotal": $("#porcentajePatrimonioLiquidoTotalUpd").val()
			,"montoPatrimonioLiquidoTotal": $("#montoPatrimonioLiquidoTotalUpd").val()
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
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"dummy": {
				"cveDummy": parseInt($("#dummyUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
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
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
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
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#situacionFinancieraActualUpd").val()),
				"descripcion" : null
			}
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#situacionFinancieraActualUpd").val()),
				"descripcion" : null
			}
			,"situacionFinancieraActual": {
				"cveSituacionFinancieraActual": parseInt($("#situacionFinancieraActualUpd").val()),
				"descripcion" : null
			}
			,"perfil": $("#perfilUpd").val()
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
            contrato: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,nombre: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,perfilActual: {
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
            ,porcentajeLiquidez: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,montoLiquidez: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,porcentajeCortoPlazo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,montoCortoPlazo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,porcentajeLargoPlazo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,montoLargoPlazo: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,porcentajePatrimonioLiquidoTotal: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,montoPatrimonioLiquidoTotal: {
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
            ,conocimientoExperiencia: {
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
            ,conocimientoExperiencia: {
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
            ,situacionFinancieraActual: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,situacionFinancieraActual: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,situacionFinancieraActual: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,perfil: {
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
        registrarReperfilamientoPersonaFisicas();
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
        	contratoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,nombreUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,perfilActualUpd: {
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
        	,porcentajeLiquidezUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,montoLiquidezUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,porcentajeCortoPlazoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,montoCortoPlazoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,porcentajeLargoPlazoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,montoLargoPlazoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,porcentajePatrimonioLiquidoTotalUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,montoPatrimonioLiquidoTotalUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        	,situacionFinancieraActualUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,situacionFinancieraActualUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,situacionFinancieraActualUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,perfilUpd: {
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
        actualizarReperfilamientoPersonaFisica();
    });
}


//Tiempo de ejecucion
function verReperfilamientoPersonaFisica(){
	
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
					"idReperfilamientoPersonaFisica" : row.idReperfilamientoPersonaFisica,
	         		"contrato" : row.contrato
	         		,"nombre" : row.nombre
	         		,"perfilActual" : row.perfilActual
	         		,"dummy" : row.personaPerfilar
	         		,"porcentajeLiquidez" : row.porcentajeLiquidez
	         		,"montoLiquidez" : row.montoLiquidez
	         		,"porcentajeCortoPlazo" : row.porcentajeCortoPlazo
	         		,"montoCortoPlazo" : row.montoCortoPlazo
	         		,"porcentajeLargoPlazo" : row.porcentajeLargoPlazo
	         		,"montoLargoPlazo" : row.montoLargoPlazo
	         		,"porcentajePatrimonioLiquidoTotal" : row.porcentajePatrimonioLiquidoTotal
	         		,"montoPatrimonioLiquidoTotal" : row.montoPatrimonioLiquidoTotal
	         		,"dummy" : row.intervaloEdad
	         		,"dummy" : row.nivelEstudios
	         		,"dummy" : row.ocupacion
	         		,"dummy" : row.actividadProfesionalAnterior
	         		,"dummy" : row.actividadProfesionalActual
	         		,"noSi" : row.actividadRelacionadaInversiones
	         		,"dummy" : row.estrategiaCliente
	         		,"dummy" : row.clienteAsesoria
	         		,"conocimientoExperiencia" : row.experienciaDeudaGub
	         		,"dummy" : row.frecuenciaDeudaGub
	         		,"dummy" : row.plazoDeudaGub
	         		,"dummy" : row.volumenDeudaGub
	         		,"conocimientoExperiencia" : row.expDeudaCorp
	         		,"dummy" : row.frecuenciaDeudaCorp
	         		,"dummy" : row.plazoDeudaCorp
	         		,"dummy" : row.volumenDeudaCorp
	         		,"dummy" : row.expSociedadesInv
	         		,"dummy" : row.frecuenciaSociedadesInv
	         		,"dummy" : row.plazoSociedadesInv
	         		,"dummy" : row.volumenSociedadesInv
	         		,"dummy" : row.expValoresEst
	         		,"dummy" : row.frecuenciaValoresEst
	         		,"dummy" : row.plazoValoresEst
	         		,"dummy" : row.volumenValoresEst
	         		,"dummy" : row.expCertificadosBur
	         		,"dummy" : row.frecuenciaCertificadosBur
	         		,"dummy" : row.plazoCertificadosBur
	         		,"dummy" : row.volumenCertificadosBur
	         		,"noSi" : row.tieneLimitante
	         		,"situacionFinancieraActual" : row.porcentajeTotalPatrimonio
	         		,"situacionFinancieraActual" : row.porcentajeIngresoAnual
	         		,"situacionFinancieraActual" : row.porcentajeInversiones
	         		,"perfil" : row.perfil
				}
			};
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "paramsReperfilamientoPersonaFisica",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				console.log("success" + data);
				if (data.payload.existePlantilla === true){
					window.location.href = contextPath + 'parametrosReperfilamientoPersonaFisica?reporte=' + data.payload.nomPlantilla + '&rutaSalida=' + data.payload.rutaPlantilla+'&contrato='+data.payload.contrato.idContrato
					+'&nombre='+data.payload.nombre
					+'&perfilActual='+data.payload.perfilActual
					+'&dummy='+data.payload.dummy.cveDummy
					+'&porcentajeLiquidez='+data.payload.porcentajeLiquidez
					+'&montoLiquidez='+data.payload.montoLiquidez
					+'&porcentajeCortoPlazo='+data.payload.porcentajeCortoPlazo
					+'&montoCortoPlazo='+data.payload.montoCortoPlazo
					+'&porcentajeLargoPlazo='+data.payload.porcentajeLargoPlazo
					+'&montoLargoPlazo='+data.payload.montoLargoPlazo
					+'&porcentajePatrimonioLiquidoTotal='+data.payload.porcentajePatrimonioLiquidoTotal
					+'&montoPatrimonioLiquidoTotal='+data.payload.montoPatrimonioLiquidoTotal
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&noSi='+data.payload.noSi.cveNoSi
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
					+'&dummy='+data.payload.dummy.cveDummy
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
					+'&situacionFinancieraActual='+data.payload.situacionFinancieraActual.cveSituacionFinancieraActual
					+'&situacionFinancieraActual='+data.payload.situacionFinancieraActual.cveSituacionFinancieraActual
					+'&situacionFinancieraActual='+data.payload.situacionFinancieraActual.cveSituacionFinancieraActual
					+'&perfil='+data.payload.perfil
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
	jsonAjax(contextPath + "obtenerReperfilamientoPersonaFisicas",modelo,inicioDatos);
}

function paginarTabla(pagina){
	var modelo = {
			"paginado":{
				"pagina":pagina,
				"registrosMostrados": Number($("#datostabla_length select").val())
			},
			"payload":{
				"contrato": {
					"idContrato": obtenerContratoFlt()
				}
				,"nombre": $("#nombreFlt").val()
				,"perfilActual": $("#perfilActualFlt").val()
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"porcentajeLiquidez": $("#porcentajeLiquidezFlt").val()
				,"montoLiquidez": $("#montoLiquidezFlt").val()
				,"porcentajeCortoPlazo": $("#porcentajeCortoPlazoFlt").val()
				,"montoCortoPlazo": $("#montoCortoPlazoFlt").val()
				,"porcentajeLargoPlazo": $("#porcentajeLargoPlazoFlt").val()
				,"montoLargoPlazo": $("#montoLargoPlazoFlt").val()
				,"porcentajePatrimonioLiquidoTotal": $("#porcentajePatrimonioLiquidoTotalFlt").val()
				,"montoPatrimonioLiquidoTotal": $("#montoPatrimonioLiquidoTotalFlt").val()
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
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"dummy": {
					"cveDummy": obtenerDummyFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
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
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
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
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"situacionFinancieraActual": {
					"cveSituacionFinancieraActual": obtenerSituacionFinancieraActualFlt()
				}
				,"perfil": $("#perfilFlt").val()
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"proceso": $("#proceso").val(),
			//"modulo": $("#modulo").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": obtenerEstadoInforme()
			}
		};
	jsonAjax(contextPath + "obtenerReperfilamientoPersonaFisicas",modelo,inicioDatos);
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
