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

	$("#consultarContratos").hide();
	
	$('#dominio-btn-buscar').on("click", function() {
		var caracteres = " ' * \ / ( ) \" & ";
		$('#formBuscar').bootstrapValidator().data('bootstrapValidator').destroy();	
		$('#formBuscar').bootstrapValidator({
			onError: function(e) {
	            console.log('error al buscar los informes');
	        },
	        fields: {
	        	nocontratoFlt: {
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
	        	,dvFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,estatusFlt: {
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
	        	,portafolioFlt: {
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
	        	,stipoportFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,libroFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,asesorinversionFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,tipomanifiestoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,servicioinversionFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,cartaejecucion1Flt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechacartaejecucion1Flt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,cartaejecucion2Flt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechacartaejecucion2Flt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,justificacioninstitucionalFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechainstitucionalFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,justificacionsofisticadoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechasofisticadoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,justificacionelegibleFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechaelegibleFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,justificacioncalificadoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechacalificadoFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,justificaciondiscrecionalFlt: {
	        	    validators: {
	        	        regexp: {
	        	            regexp: /^[^\'\"\*\(\)\&\|\/\\]*$/,
	        	            message: "No se permiten los caracteres:" + caracteres
	        	        }
	        	    }
	        	}
	        	,fechadiscrecionalFlt: {
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
var noContrato = $("#noContratoFlt").val();
var digito = $("#digitoFlt").val();
var dv = $("#dvFlt").val();
var estatus = $("#estatusFlt").val();
var perfil = $("#perfilFlt").val();
var portafolio = $("#portafolioFlt").val();
var cLABE = $("#cLABEFlt").val();
var sTipoPort = $("#sTipoPortFlt").val();
var libro = $("#libroFlt").val();
var asesorInversion = $("#asesorInversionFlt").val();
var tipoManifiesto = $("#tipoManifiestoFlt").val();
var servicioInversion = $("#servicioInversionFlt").val();
var cartaEjecucion1 = $("#cartaEjecucion1Flt").val();
var fechaCartaEjecucion1 = $("#fechaCartaEjecucion1Flt").val();
var cartaEjecucion2 = $("#cartaEjecucion2Flt").val();
var fechaCartaEjecucion2 = $("#fechaCartaEjecucion2Flt").val();
var justificacionInstitucional = $("#justificacionInstitucionalFlt").val();
var fechaInstitucional = $("#fechaInstitucionalFlt").val();
var sofisticado = $("#cveSofisticadoFlt").val();
var justificacionSofisticado = $("#justificacionSofisticadoFlt").val();
var fechaSofisticado = $("#fechaSofisticadoFlt").val();
var elegible = $("#cveElegibleFlt").val();
var justificacionElegible = $("#justificacionElegibleFlt").val();
var fechaElegible = $("#fechaElegibleFlt").val();
var calificado = $("#cveCalificadoFlt").val();
var justificacionCalificado = $("#justificacionCalificadoFlt").val();
var fechaCalificado = $("#fechaCalificadoFlt").val();
var discrecional = $("#cveDiscrecionalFlt").val();
var justificacionDiscrecional = $("#justificacionDiscrecionalFlt").val();
var fechaDiscrecional = $("#fechaDiscrecionalFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
var conocimientoExperiencia = $("#cveConocimientoExperienciaFlt").val();
			if(
				noContrato === ''
				 && digito === ''
				 && dv === ''
				 && estatus === ''
				 && perfil === ''
				 && portafolio === ''
				 && cLABE === ''
				 && sTipoPort === ''
				 && libro === ''
				 && asesorInversion === ''
				 && tipoManifiesto === ''
				 && servicioInversion === ''
				 && cartaEjecucion1 === ''
				 && fechaCartaEjecucion1 === ''
				 && cartaEjecucion2 === ''
				 && fechaCartaEjecucion2 === ''
				 && justificacionInstitucional === ''
				 && fechaInstitucional === ''
				 && sofisticado === ''
				 && justificacionSofisticado === ''
				 && fechaSofisticado === ''
				 && elegible === ''
				 && justificacionElegible === ''
				 && fechaElegible === ''
				 && calificado === ''
				 && justificacionCalificado === ''
				 && fechaCalificado === ''
				 && discrecional === ''
				 && justificacionDiscrecional === ''
				 && fechaDiscrecional === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
				 && conocimientoExperiencia === ''
			){
            	mostrarAlertWarning(MENSAJE_CAMPOS_OBLIGATORIOS);
		} else {
			buscarContratos();
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
		
$("#noContratoUpd").prop("readonly", false);
$("#digitoUpd").prop("readonly", false);
$("#dvUpd").prop("readonly", false);
$("#estatusUpd").prop("readonly", false);
$("#perfilUpd").prop("readonly", false);
$("#portafolioUpd").prop("readonly", false);
$("#cLABEUpd").prop("readonly", false);
$("#sTipoPortUpd").prop("readonly", false);
$("#libroUpd").prop("readonly", false);
$("#asesorInversionUpd").prop("readonly", false);
$("#tipoManifiestoUpd").prop("readonly", false);
$("#servicioInversionUpd").prop("readonly", false);
$("#cartaEjecucion1Upd").prop("readonly", false);
$("#fechaCartaEjecucion1Upd").prop("readonly", false);
$("#cartaEjecucion2Upd").prop("readonly", false);
$("#fechaCartaEjecucion2Upd").prop("readonly", false);
$("#justificacionInstitucionalUpd").prop("readonly", false);
$("#fechaInstitucionalUpd").prop("readonly", false);
$("#sofisticadoUpd").prop("disabled", false);
$("#justificacionSofisticadoUpd").prop("readonly", false);
$("#fechaSofisticadoUpd").prop("readonly", false);
$("#elegibleUpd").prop("disabled", false);
$("#justificacionElegibleUpd").prop("readonly", false);
$("#fechaElegibleUpd").prop("readonly", false);
$("#calificadoUpd").prop("disabled", false);
$("#justificacionCalificadoUpd").prop("readonly", false);
$("#fechaCalificadoUpd").prop("readonly", false);
$("#discrecionalUpd").prop("disabled", false);
$("#justificacionDiscrecionalUpd").prop("readonly", false);
$("#fechaDiscrecionalUpd").prop("readonly", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
$("#conocimientoExperienciaUpd").prop("disabled", false);
		if ($("input[name='radio']:radio").is(':checked')) {
			var row = getRowSelected();
			//$("#idSubprocesoUpd").val(row.idSubproceso);
			//$("#procesoUpd").val(row.proceso);
			//$("#moduloUpd").val(row.modulo),
			//$("#subprocesoUpd").val(row.subproceso),
			$("#idContratoUpd").val(row.idContrato);
$("#noContratoUpd").val(row.noContrato);
$("#digitoUpd").val(row.digito);
$("#dvUpd").val(row.dv);
$("#estatusUpd").val(row.estatus);
$("#perfilUpd").val(row.perfil);
$("#portafolioUpd").val(row.portafolio);
$("#cLABEUpd").val(row.cLABE);
$("#sTipoPortUpd").val(row.sTipoPort);
$("#libroUpd").val(row.libro);
$("#asesorInversionUpd").val(row.asesorInversion);
$("#tipoManifiestoUpd").val(row.tipoManifiesto);
$("#servicioInversionUpd").val(row.servicioInversion);
$("#cartaEjecucion1Upd").val(row.cartaEjecucion1);
$("#fechaCartaEjecucion1Upd").val(row.fechaCartaEjecucion1);
$("#cartaEjecucion2Upd").val(row.cartaEjecucion2);
$("#fechaCartaEjecucion2Upd").val(row.fechaCartaEjecucion2);
$("#justificacionInstitucionalUpd").val(row.justificacionInstitucional);
$("#fechaInstitucionalUpd").val(row.fechaInstitucional);
$("#sofisticadoUpd").val(row.sofisticado.cveSofisticado);
$("#justificacionSofisticadoUpd").val(row.justificacionSofisticado);
$("#fechaSofisticadoUpd").val(row.fechaSofisticado);
$("#elegibleUpd").val(row.elegible.cveElegible);
$("#justificacionElegibleUpd").val(row.justificacionElegible);
$("#fechaElegibleUpd").val(row.fechaElegible);
$("#calificadoUpd").val(row.calificado.cveCalificado);
$("#justificacionCalificadoUpd").val(row.justificacionCalificado);
$("#fechaCalificadoUpd").val(row.fechaCalificado);
$("#discrecionalUpd").val(row.discrecional.cveDiscrecional);
$("#justificacionDiscrecionalUpd").val(row.justificacionDiscrecional);
$("#fechaDiscrecionalUpd").val(row.fechaDiscrecional);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
			$('#modalTitle').empty();
			$('#modalTitle').append('Actualizar informe');
			$('#movModal').modal('show');
			$("#consultarContratos").hide();
			$("#updContratos").show();
			validarFormUpd();
		}else{
			mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }

	});
				
	$('#consultarDetalle').click(function() {
		if ($("input[name='radio']:radio").is(':checked')) {
			$('#formUpd').bootstrapValidator().data('bootstrapValidator').destroy();
			var row = getRowSelected();
				$("#updContratos").hide();
$("#noContratoUpd").prop("readonly", true);
$("#digitoUpd").prop("readonly", true);
$("#dvUpd").prop("readonly", true);
$("#estatusUpd").prop("readonly", true);
$("#perfilUpd").prop("readonly", true);
$("#portafolioUpd").prop("readonly", true);
$("#cLABEUpd").prop("readonly", true);
$("#sTipoPortUpd").prop("readonly", true);
$("#libroUpd").prop("readonly", true);
$("#asesorInversionUpd").prop("readonly", true);
$("#tipoManifiestoUpd").prop("readonly", true);
$("#servicioInversionUpd").prop("readonly", true);
$("#cartaEjecucion1Upd").prop("readonly", true);
$("#fechaCartaEjecucion1Upd").prop("readonly", true);
$("#cartaEjecucion2Upd").prop("readonly", true);
$("#fechaCartaEjecucion2Upd").prop("readonly", true);
$("#justificacionInstitucionalUpd").prop("readonly", true);
$("#fechaInstitucionalUpd").prop("readonly", true);
$("#sofisticadoUpd").prop("disabled", true);
$("#justificacionSofisticadoUpd").prop("readonly", true);
$("#fechaSofisticadoUpd").prop("readonly", true);
$("#elegibleUpd").prop("disabled", true);
$("#justificacionElegibleUpd").prop("readonly", true);
$("#fechaElegibleUpd").prop("readonly", true);
$("#calificadoUpd").prop("disabled", true);
$("#justificacionCalificadoUpd").prop("readonly", true);
$("#fechaCalificadoUpd").prop("readonly", true);
$("#discrecionalUpd").prop("disabled", true);
$("#justificacionDiscrecionalUpd").prop("readonly", true);
$("#fechaDiscrecionalUpd").prop("readonly", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
$("#conocimientoExperienciaUpd").prop("disabled", true);
				//$("#procesoUpd").val(row.proceso);
				//$("#moduloUpd").val(row.modulo);
				//$("#subprocesoUpd").val(row.subproceso);
				$("#idContratoUpd").val(row.idContrato);
$("#noContratoUpd").val(row.noContrato);
$("#digitoUpd").val(row.digito);
$("#dvUpd").val(row.dv);
$("#estatusUpd").val(row.estatus);
$("#perfilUpd").val(row.perfil);
$("#portafolioUpd").val(row.portafolio);
$("#cLABEUpd").val(row.cLABE);
$("#sTipoPortUpd").val(row.sTipoPort);
$("#libroUpd").val(row.libro);
$("#asesorInversionUpd").val(row.asesorInversion);
$("#tipoManifiestoUpd").val(row.tipoManifiesto);
$("#servicioInversionUpd").val(row.servicioInversion);
$("#cartaEjecucion1Upd").val(row.cartaEjecucion1);
$("#fechaCartaEjecucion1Upd").val(row.fechaCartaEjecucion1);
$("#cartaEjecucion2Upd").val(row.cartaEjecucion2);
$("#fechaCartaEjecucion2Upd").val(row.fechaCartaEjecucion2);
$("#justificacionInstitucionalUpd").val(row.justificacionInstitucional);
$("#fechaInstitucionalUpd").val(row.fechaInstitucional);
$("#sofisticadoUpd").val(row.sofisticado.cveSofisticado);
$("#justificacionSofisticadoUpd").val(row.justificacionSofisticado);
$("#fechaSofisticadoUpd").val(row.fechaSofisticado);
$("#elegibleUpd").val(row.elegible.cveElegible);
$("#justificacionElegibleUpd").val(row.justificacionElegible);
$("#fechaElegibleUpd").val(row.fechaElegible);
$("#calificadoUpd").val(row.calificado.cveCalificado);
$("#justificacionCalificadoUpd").val(row.justificacionCalificado);
$("#fechaCalificadoUpd").val(row.fechaCalificado);
$("#discrecionalUpd").val(row.discrecional.cveDiscrecional);
$("#justificacionDiscrecionalUpd").val(row.justificacionDiscrecional);
$("#fechaDiscrecionalUpd").val(row.fechaDiscrecional);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
				$("#consultarContratos").show();									
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
				 $("#idContratoUpd").val(row.idContrato);
$("#noContratoUpd").val(row.noContrato);
$("#digitoUpd").val(row.digito);
$("#dvUpd").val(row.dv);
$("#estatusUpd").val(row.estatus);
$("#perfilUpd").val(row.perfil);
$("#portafolioUpd").val(row.portafolio);
$("#cLABEUpd").val(row.cLABE);
$("#sTipoPortUpd").val(row.sTipoPort);
$("#libroUpd").val(row.libro);
$("#asesorInversionUpd").val(row.asesorInversion);
$("#tipoManifiestoUpd").val(row.tipoManifiesto);
$("#servicioInversionUpd").val(row.servicioInversion);
$("#cartaEjecucion1Upd").val(row.cartaEjecucion1);
$("#fechaCartaEjecucion1Upd").val(row.fechaCartaEjecucion1);
$("#cartaEjecucion2Upd").val(row.cartaEjecucion2);
$("#fechaCartaEjecucion2Upd").val(row.fechaCartaEjecucion2);
$("#justificacionInstitucionalUpd").val(row.justificacionInstitucional);
$("#fechaInstitucionalUpd").val(row.fechaInstitucional);
$("#sofisticadoUpd").val(row.sofisticado.cveSofisticado);
$("#justificacionSofisticadoUpd").val(row.justificacionSofisticado);
$("#fechaSofisticadoUpd").val(row.fechaSofisticado);
$("#elegibleUpd").val(row.elegible.cveElegible);
$("#justificacionElegibleUpd").val(row.justificacionElegible);
$("#fechaElegibleUpd").val(row.fechaElegible);
$("#calificadoUpd").val(row.calificado.cveCalificado);
$("#justificacionCalificadoUpd").val(row.justificacionCalificado);
$("#fechaCalificadoUpd").val(row.fechaCalificado);
$("#discrecionalUpd").val(row.discrecional.cveDiscrecional);
$("#justificacionDiscrecionalUpd").val(row.justificacionDiscrecional);
$("#fechaDiscrecionalUpd").val(row.fechaDiscrecional);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
$("#conocimientoExperienciaUpd").val(row.conocimientoExperiencia.cveConocimientoExperiencia);
				 $("#dominio-mensaje-eliminar").empty().append("&iquest;Desea eliminar el contrato?");
				 $('#modalEliminar').modal('show');
			//}
		 }	else{
			 mostrarAlertWarning(MENSAJE_ERROR_OPEN_ACTUALIZAR);
		 }	
	});
/*	
	$('#dominio-sel-subproceso, #dominio-sel-modulo, #dominio-sel-proceso').on('change', function() {
	$('#com.softtek.rdl2.impl.EntityImpl@42bec62b (name: Contrato)').val('');
	});
	
	$('#com.softtek.rdl2.impl.EntityImpl@42bec62b (name: Contrato)').on('input', function() {
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
	
	jsonAjax(contextPath + "obtenerContratosActivo",modelo,inicioDatos);
}

function buscarContratos() {
	
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
				"noContrato": $("#noContratoFlt").val()
				,"digito": $("#digitoFlt").val()
				,"dv": $("#dvFlt").val()
				,"estatus": $("#estatusFlt").val()
				,"perfil": $("#perfilFlt").val()
				,"portafolio": $("#portafolioFlt").val()
				,"cLABE": $("#cLABEFlt").val()
				,"sTipoPort": $("#sTipoPortFlt").val()
				,"libro": $("#libroFlt").val()
				,"asesorInversion": $("#asesorInversionFlt").val()
				,"tipoManifiesto": $("#tipoManifiestoFlt").val()
				,"servicioInversion": $("#servicioInversionFlt").val()
				,"cartaEjecucion1": $("#cartaEjecucion1Flt").val()
				,"fechaCartaEjecucion1": $("#fechaCartaEjecucion1Flt").val()
				,"cartaEjecucion2": $("#cartaEjecucion2Flt").val()
				,"fechaCartaEjecucion2": $("#fechaCartaEjecucion2Flt").val()
				,"justificacionInstitucional": $("#justificacionInstitucionalFlt").val()
				,"fechaInstitucional": $("#fechaInstitucionalFlt").val()
				,"sofisticado": {
					"cveSofisticado": obtenerSofisticadoFlt()
				}
				,"justificacionSofisticado": $("#justificacionSofisticadoFlt").val()
				,"fechaSofisticado": $("#fechaSofisticadoFlt").val()
				,"elegible": {
					"cveElegible": obtenerElegibleFlt()
				}
				,"justificacionElegible": $("#justificacionElegibleFlt").val()
				,"fechaElegible": $("#fechaElegibleFlt").val()
				,"calificado": {
					"cveCalificado": obtenerCalificadoFlt()
				}
				,"justificacionCalificado": $("#justificacionCalificadoFlt").val()
				,"fechaCalificado": $("#fechaCalificadoFlt").val()
				,"discrecional": {
					"cveDiscrecional": obtenerDiscrecionalFlt()
				}
				,"justificacionDiscrecional": $("#justificacionDiscrecionalFlt").val()
				,"fechaDiscrecional": $("#fechaDiscrecionalFlt").val()
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
			}
	}
	console.log(model);
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "obtenerContratos",
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
	$("#verContratos").show();
}

function obtenerSofisticado(){
	
	var sofisticado = $("#cveSofisticado").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sofisticado === undefined){
			return 2; // estado activo para busquedas en ejecucion de sofisticado
		}
	}
	
	return sofisticado;
}	

function obtenerSofisticadoFlt(){
	
	var sofisticado = $("#cveSofisticadoFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sofisticado === undefined){
			return 2; // estado activo para busquedas en ejecucion de sofisticado
		}
	}
	
	return sofisticado;
	}	
function obtenerElegible(){
	
	var elegible = $("#cveElegible").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (elegible === undefined){
			return 2; // estado activo para busquedas en ejecucion de elegible
		}
	}
	
	return elegible;
}	

function obtenerElegibleFlt(){
	
	var elegible = $("#cveElegibleFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (elegible === undefined){
			return 2; // estado activo para busquedas en ejecucion de elegible
		}
	}
	
	return elegible;
	}	
function obtenerCalificado(){
	
	var calificado = $("#cveCalificado").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (calificado === undefined){
			return 2; // estado activo para busquedas en ejecucion de calificado
		}
	}
	
	return calificado;
}	

function obtenerCalificadoFlt(){
	
	var calificado = $("#cveCalificadoFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (calificado === undefined){
			return 2; // estado activo para busquedas en ejecucion de calificado
		}
	}
	
	return calificado;
	}	
function obtenerDiscrecional(){
	
	var discrecional = $("#cveDiscrecional").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (discrecional === undefined){
			return 2; // estado activo para busquedas en ejecucion de discrecional
		}
	}
	
	return discrecional;
}	

function obtenerDiscrecionalFlt(){
	
	var discrecional = $("#cveDiscrecionalFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (discrecional === undefined){
			return 2; // estado activo para busquedas en ejecucion de discrecional
		}
	}
	
	return discrecional;
	}	
function obtenerConocimientoExperiencia(){
	
	var instrDeudaGub = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (instrDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de instrDeudaGub
		}
	}
	
	return instrDeudaGub;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var instrDeudaGub = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (instrDeudaGub === undefined){
			return 2; // estado activo para busquedas en ejecucion de instrDeudaGub
		}
	}
	
	return instrDeudaGub;
	}	
function obtenerConocimientoExperiencia(){
	
	var instrDeudaCorp = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (instrDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de instrDeudaCorp
		}
	}
	
	return instrDeudaCorp;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var instrDeudaCorp = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (instrDeudaCorp === undefined){
			return 2; // estado activo para busquedas en ejecucion de instrDeudaCorp
		}
	}
	
	return instrDeudaCorp;
	}	
function obtenerConocimientoExperiencia(){
	
	var sociedadesInver = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sociedadesInver === undefined){
			return 2; // estado activo para busquedas en ejecucion de sociedadesInver
		}
	}
	
	return sociedadesInver;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var sociedadesInver = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (sociedadesInver === undefined){
			return 2; // estado activo para busquedas en ejecucion de sociedadesInver
		}
	}
	
	return sociedadesInver;
	}	
function obtenerConocimientoExperiencia(){
	
	var valoresEstruc = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (valoresEstruc === undefined){
			return 2; // estado activo para busquedas en ejecucion de valoresEstruc
		}
	}
	
	return valoresEstruc;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var valoresEstruc = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (valoresEstruc === undefined){
			return 2; // estado activo para busquedas en ejecucion de valoresEstruc
		}
	}
	
	return valoresEstruc;
	}	
function obtenerConocimientoExperiencia(){
	
	var certBurFideicomisos = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (certBurFideicomisos === undefined){
			return 2; // estado activo para busquedas en ejecucion de certBurFideicomisos
		}
	}
	
	return certBurFideicomisos;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var certBurFideicomisos = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (certBurFideicomisos === undefined){
			return 2; // estado activo para busquedas en ejecucion de certBurFideicomisos
		}
	}
	
	return certBurFideicomisos;
	}	
function obtenerConocimientoExperiencia(){
	
	var titulosOpcionales = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (titulosOpcionales === undefined){
			return 2; // estado activo para busquedas en ejecucion de titulosOpcionales
		}
	}
	
	return titulosOpcionales;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var titulosOpcionales = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (titulosOpcionales === undefined){
			return 2; // estado activo para busquedas en ejecucion de titulosOpcionales
		}
	}
	
	return titulosOpcionales;
	}	
function obtenerConocimientoExperiencia(){
	
	var acciones = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (acciones === undefined){
			return 2; // estado activo para busquedas en ejecucion de acciones
		}
	}
	
	return acciones;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var acciones = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (acciones === undefined){
			return 2; // estado activo para busquedas en ejecucion de acciones
		}
	}
	
	return acciones;
	}	
function obtenerConocimientoExperiencia(){
	
	var valoresExtr = $("#cveConocimientoExperiencia").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (valoresExtr === undefined){
			return 2; // estado activo para busquedas en ejecucion de valoresExtr
		}
	}
	
	return valoresExtr;
}	

function obtenerConocimientoExperienciaFlt(){
	
	var valoresExtr = $("#cveConocimientoExperienciaFlt").val();
	
	if ($(location).attr("href").indexOf('ejecucion') != -1){
		if (valoresExtr === undefined){
			return 2; // estado activo para busquedas en ejecucion de valoresExtr
		}
	}
	
	return valoresExtr;
	}	

function registrarContratos() {	
		var data = getObject();	
			$.ajax({
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				url : contextPath + "registrarContrato",
				data: JSON.stringify(data),
				dataType: 'json',
				cache : false,
				processData : false,
				success : function(data) {
					if (data.codigoEstatus === 400){
						mostrarAlertDanger("Ya existe una contrato con esa configuraci\u00f3n", 'alertDanger');
					} else if (data.codigoEstatus === 404) {
						mostrarAlertDanger('No existe la plantilla especificada en el servidor', 'alertDanger');
					} else {
						mostrarAlertSuccess('El contrato se agreg\u00f3 exitosamente');
						tablaVacia();
						$('#modalCrear').modal('hide');
						$('#dominio-but-limpiar').trigger('click');
					}
				}
			});
}

function actualizarContrato(){
	var data = getObjectUpd();
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "actualizarContrato",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				if (data.codigoEstatus === 400){
					mostrarAlertDanger("Ya existe una contrato con esa configuraci\u00f3n", 'alertDangerUp');
				} else {
					mostrarAlertSuccess(MENSAJE_ACTUALIZADO_EXITOSO);
					tablaVacia();
					$('#movModal').modal('hide');
					$('#gi-but-limpiar').trigger('click');
				}
			}
		});
}

function eliminarContrato() {
	var data = getObjectUpd();
	
	$.ajax({
		type : 'POST',
		contentType : 'application/json; charset=utf-8',
		url : contextPath + "eliminarContrato/"+$("#idContratoUpd").val(),
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
			"noContrato": $("#noContrato").val()
			,"digito": $("#digito").val()
			,"dv": $("#dv").val()
			,"estatus": $("#estatus").val()
			,"perfil": $("#perfil").val()
			,"portafolio": $("#portafolio").val()
			,"cLABE": $("#cLABE").val()
			,"sTipoPort": $("#sTipoPort").val()
			,"libro": $("#libro").val()
			,"asesorInversion": $("#asesorInversion").val()
			,"tipoManifiesto": $("#tipoManifiesto").val()
			,"servicioInversion": $("#servicioInversion").val()
			,"cartaEjecucion1": $("#cartaEjecucion1").val()
			,"fechaCartaEjecucion1": $("#fechaCartaEjecucion1").val()
			,"cartaEjecucion2": $("#cartaEjecucion2").val()
			,"fechaCartaEjecucion2": $("#fechaCartaEjecucion2").val()
			,"justificacionInstitucional": $("#justificacionInstitucional").val()
			,"fechaInstitucional": $("#fechaInstitucional").val()
			,"sofisticado": {
				"cveSofisticado": parseInt($("#cveSofisticado").val()),
				"descripcion" : null
			}
			,"justificacionSofisticado": $("#justificacionSofisticado").val()
			,"fechaSofisticado": $("#fechaSofisticado").val()
			,"elegible": {
				"cveElegible": parseInt($("#cveElegible").val()),
				"descripcion" : null
			}
			,"justificacionElegible": $("#justificacionElegible").val()
			,"fechaElegible": $("#fechaElegible").val()
			,"calificado": {
				"cveCalificado": parseInt($("#cveCalificado").val()),
				"descripcion" : null
			}
			,"justificacionCalificado": $("#justificacionCalificado").val()
			,"fechaCalificado": $("#fechaCalificado").val()
			,"discrecional": {
				"cveDiscrecional": parseInt($("#cveDiscrecional").val()),
				"descripcion" : null
			}
			,"justificacionDiscrecional": $("#justificacionDiscrecional").val()
			,"fechaDiscrecional": $("#fechaDiscrecional").val()
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#cveConocimientoExperiencia").val()),
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
			"idContrato" : $("#idContratoUpd").val(),
			"noContrato": $("#noContratoUpd").val()
			,"digito": $("#digitoUpd").val()
			,"dv": $("#dvUpd").val()
			,"estatus": $("#estatusUpd").val()
			,"perfil": $("#perfilUpd").val()
			,"portafolio": $("#portafolioUpd").val()
			,"cLABE": $("#cLABEUpd").val()
			,"sTipoPort": $("#sTipoPortUpd").val()
			,"libro": $("#libroUpd").val()
			,"asesorInversion": $("#asesorInversionUpd").val()
			,"tipoManifiesto": $("#tipoManifiestoUpd").val()
			,"servicioInversion": $("#servicioInversionUpd").val()
			,"cartaEjecucion1": $("#cartaEjecucion1Upd").val()
			,"fechaCartaEjecucion1": $("#fechaCartaEjecucion1Upd").val()
			,"cartaEjecucion2": $("#cartaEjecucion2Upd").val()
			,"fechaCartaEjecucion2": $("#fechaCartaEjecucion2Upd").val()
			,"justificacionInstitucional": $("#justificacionInstitucionalUpd").val()
			,"fechaInstitucional": $("#fechaInstitucionalUpd").val()
			,"sofisticado": {
				"cveSofisticado": parseInt($("#sofisticadoUpd").val()),
				"descripcion" : null
			}
			,"justificacionSofisticado": $("#justificacionSofisticadoUpd").val()
			,"fechaSofisticado": $("#fechaSofisticadoUpd").val()
			,"elegible": {
				"cveElegible": parseInt($("#elegibleUpd").val()),
				"descripcion" : null
			}
			,"justificacionElegible": $("#justificacionElegibleUpd").val()
			,"fechaElegible": $("#fechaElegibleUpd").val()
			,"calificado": {
				"cveCalificado": parseInt($("#calificadoUpd").val()),
				"descripcion" : null
			}
			,"justificacionCalificado": $("#justificacionCalificadoUpd").val()
			,"fechaCalificado": $("#fechaCalificadoUpd").val()
			,"discrecional": {
				"cveDiscrecional": parseInt($("#discrecionalUpd").val()),
				"descripcion" : null
			}
			,"justificacionDiscrecional": $("#justificacionDiscrecionalUpd").val()
			,"fechaDiscrecional": $("#fechaDiscrecionalUpd").val()
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
				"descripcion" : null
			}
			,"conocimientoExperiencia": {
				"cveConocimientoExperiencia": parseInt($("#conocimientoExperienciaUpd").val()),
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
            noContrato: {
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
            ,dv: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,estatus: {
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
            ,portafolio: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,cLABE: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,sTipoPort: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,libro: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,asesorInversion: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,tipoManifiesto: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,servicioInversion: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,cartaEjecucion1: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaCartaEjecucion1: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,cartaEjecucion2: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaCartaEjecucion2: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,justificacionInstitucional: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaInstitucional: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,sofisticado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,justificacionSofisticado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaSofisticado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,elegible: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,justificacionElegible: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaElegible: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,calificado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,justificacionCalificado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaCalificado: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,discrecional: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,justificacionDiscrecional: {
                validators: {
                	notEmpty: {
                        message: MENSAJE_CAMPO_OBLIGATORIO
                    }
                }
            }
            ,fechaDiscrecional: {
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
            ,conocimientoExperiencia: {
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
            ,conocimientoExperiencia: {
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
            ,conocimientoExperiencia: {
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
            ,conocimientoExperiencia: {
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
        registrarContratos();
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
        	noContratoUpd: {
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
        	,dvUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,estatusUpd: {
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
        	,portafolioUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,cLABEUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,sTipoPortUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,libroUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,asesorInversionUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,tipoManifiestoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,servicioInversionUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,cartaEjecucion1Upd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaCartaEjecucion1Upd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,cartaEjecucion2Upd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaCartaEjecucion2Upd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,justificacionInstitucionalUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaInstitucionalUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,sofisticadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,justificacionSofisticadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaSofisticadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,elegibleUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,justificacionElegibleUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaElegibleUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,calificadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,justificacionCalificadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaCalificadoUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,discrecionalUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,justificacionDiscrecionalUpd: {
        	    validators: {
        	    	notEmpty: {
        	            message: MENSAJE_CAMPO_OBLIGATORIO
        	        }
        	    }
        	}
        	,fechaDiscrecionalUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        	,conocimientoExperienciaUpd: {
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
        actualizarContrato();
    });
}


//Tiempo de ejecucion
function verContrato(){
	
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
					"idContrato" : row.idContrato,
	         		"noContrato" : row.noContrato
	         		,"digito" : row.digito
	         		,"dv" : row.dv
	         		,"estatus" : row.estatus
	         		,"perfil" : row.perfil
	         		,"portafolio" : row.portafolio
	         		,"cLABE" : row.cLABE
	         		,"sTipoPort" : row.sTipoPort
	         		,"libro" : row.libro
	         		,"asesorInversion" : row.asesorInversion
	         		,"tipoManifiesto" : row.tipoManifiesto
	         		,"servicioInversion" : row.servicioInversion
	         		,"cartaEjecucion1" : row.cartaEjecucion1
	         		,"fechaCartaEjecucion1" : row.fechaCartaEjecucion1
	         		,"cartaEjecucion2" : row.cartaEjecucion2
	         		,"fechaCartaEjecucion2" : row.fechaCartaEjecucion2
	         		,"justificacionInstitucional" : row.justificacionInstitucional
	         		,"fechaInstitucional" : row.fechaInstitucional
	         		,"sofisticado" : row.sofisticado
	         		,"justificacionSofisticado" : row.justificacionSofisticado
	         		,"fechaSofisticado" : row.fechaSofisticado
	         		,"elegible" : row.elegible
	         		,"justificacionElegible" : row.justificacionElegible
	         		,"fechaElegible" : row.fechaElegible
	         		,"calificado" : row.calificado
	         		,"justificacionCalificado" : row.justificacionCalificado
	         		,"fechaCalificado" : row.fechaCalificado
	         		,"discrecional" : row.discrecional
	         		,"justificacionDiscrecional" : row.justificacionDiscrecional
	         		,"fechaDiscrecional" : row.fechaDiscrecional
	         		,"conocimientoExperiencia" : row.instrDeudaGub
	         		,"conocimientoExperiencia" : row.instrDeudaCorp
	         		,"conocimientoExperiencia" : row.sociedadesInver
	         		,"conocimientoExperiencia" : row.valoresEstruc
	         		,"conocimientoExperiencia" : row.certBurFideicomisos
	         		,"conocimientoExperiencia" : row.titulosOpcionales
	         		,"conocimientoExperiencia" : row.acciones
	         		,"conocimientoExperiencia" : row.valoresExtr
				}
			};
		
		$.ajax({
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			url : contextPath + "paramsContrato",
			data: JSON.stringify(data),
			dataType: 'json',
			cache : false,
			processData : false,
			success : function(data) {
				console.log("success" + data);
				if (data.payload.existePlantilla === true){
					window.location.href = contextPath + 'parametrosContrato?reporte=' + data.payload.nomPlantilla + '&rutaSalida=' + data.payload.rutaPlantilla+'&noContrato='+data.payload.noContrato
					+'&digito='+data.payload.digito
					+'&dv='+data.payload.dv
					+'&estatus='+data.payload.estatus
					+'&perfil='+data.payload.perfil
					+'&portafolio='+data.payload.portafolio
					+'&cLABE='+data.payload.cLABE
					+'&sTipoPort='+data.payload.sTipoPort
					+'&libro='+data.payload.libro
					+'&asesorInversion='+data.payload.asesorInversion
					+'&tipoManifiesto='+data.payload.tipoManifiesto
					+'&servicioInversion='+data.payload.servicioInversion
					+'&cartaEjecucion1='+data.payload.cartaEjecucion1
					+'&fechaCartaEjecucion1='+data.payload.fechaCartaEjecucion1
					+'&cartaEjecucion2='+data.payload.cartaEjecucion2
					+'&fechaCartaEjecucion2='+data.payload.fechaCartaEjecucion2
					+'&justificacionInstitucional='+data.payload.justificacionInstitucional
					+'&fechaInstitucional='+data.payload.fechaInstitucional
					+'&sofisticado='+data.payload.sofisticado.cveSofisticado
					+'&justificacionSofisticado='+data.payload.justificacionSofisticado
					+'&fechaSofisticado='+data.payload.fechaSofisticado
					+'&elegible='+data.payload.elegible.cveElegible
					+'&justificacionElegible='+data.payload.justificacionElegible
					+'&fechaElegible='+data.payload.fechaElegible
					+'&calificado='+data.payload.calificado.cveCalificado
					+'&justificacionCalificado='+data.payload.justificacionCalificado
					+'&fechaCalificado='+data.payload.fechaCalificado
					+'&discrecional='+data.payload.discrecional.cveDiscrecional
					+'&justificacionDiscrecional='+data.payload.justificacionDiscrecional
					+'&fechaDiscrecional='+data.payload.fechaDiscrecional
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
					+'&conocimientoExperiencia='+data.payload.conocimientoExperiencia.cveConocimientoExperiencia
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
	jsonAjax(contextPath + "obtenerContratos",modelo,inicioDatos);
}

function paginarTabla(pagina){
	var modelo = {
			"paginado":{
				"pagina":pagina,
				"registrosMostrados": Number($("#datostabla_length select").val())
			},
			"payload":{
				"noContrato": $("#noContratoFlt").val()
				,"digito": $("#digitoFlt").val()
				,"dv": $("#dvFlt").val()
				,"estatus": $("#estatusFlt").val()
				,"perfil": $("#perfilFlt").val()
				,"portafolio": $("#portafolioFlt").val()
				,"cLABE": $("#cLABEFlt").val()
				,"sTipoPort": $("#sTipoPortFlt").val()
				,"libro": $("#libroFlt").val()
				,"asesorInversion": $("#asesorInversionFlt").val()
				,"tipoManifiesto": $("#tipoManifiestoFlt").val()
				,"servicioInversion": $("#servicioInversionFlt").val()
				,"cartaEjecucion1": $("#cartaEjecucion1Flt").val()
				,"fechaCartaEjecucion1": $("#fechaCartaEjecucion1Flt").val()
				,"cartaEjecucion2": $("#cartaEjecucion2Flt").val()
				,"fechaCartaEjecucion2": $("#fechaCartaEjecucion2Flt").val()
				,"justificacionInstitucional": $("#justificacionInstitucionalFlt").val()
				,"fechaInstitucional": $("#fechaInstitucionalFlt").val()
				,"sofisticado": {
					"cveSofisticado": obtenerSofisticadoFlt()
				}
				,"justificacionSofisticado": $("#justificacionSofisticadoFlt").val()
				,"fechaSofisticado": $("#fechaSofisticadoFlt").val()
				,"elegible": {
					"cveElegible": obtenerElegibleFlt()
				}
				,"justificacionElegible": $("#justificacionElegibleFlt").val()
				,"fechaElegible": $("#fechaElegibleFlt").val()
				,"calificado": {
					"cveCalificado": obtenerCalificadoFlt()
				}
				,"justificacionCalificado": $("#justificacionCalificadoFlt").val()
				,"fechaCalificado": $("#fechaCalificadoFlt").val()
				,"discrecional": {
					"cveDiscrecional": obtenerDiscrecionalFlt()
				}
				,"justificacionDiscrecional": $("#justificacionDiscrecionalFlt").val()
				,"fechaDiscrecional": $("#fechaDiscrecionalFlt").val()
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
				,"conocimientoExperiencia": {
					"cveConocimientoExperiencia": obtenerConocimientoExperienciaFlt()
				}
			//"idSubproceso": $("#idSubproceso").val(),
			//"subproceso": $("#subproceso").val(),
			//"proceso": $("#proceso").val(),
			//"modulo": $("#modulo").val(),
			//"nombreSalida": $("#nombreSalida").val(),
			//"cveEstadoInforme": obtenerEstadoInforme()
			}
		};
	jsonAjax(contextPath + "obtenerContratos",modelo,inicioDatos);
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
