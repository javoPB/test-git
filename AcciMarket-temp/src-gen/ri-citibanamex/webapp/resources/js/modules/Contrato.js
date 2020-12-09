	function Catalogo(){
	    this.divName = "workingArea";
	    this.instanceName = "myModule";
	    this.FETCH = "fetch";
	    this.SAVE = "save";
	    this.DELETE = "delete";
	    this.UPLOAD = "upload";
		this.LOAD = "load";
	    
	    this.validator = new MyValidator();
	}
	
	// En esta funcion se define la forma del catalogo
	// en HTML basico con algo de bootstrap
	Catalogo.prototype.forma = function(){
		/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	    var html = 
			'		<div class="form">'
			+'			<form id="forma" name="forma">'
			+'					<fieldset class="fieldset">'
			+'						<legend>Contrato</legend>'
			
		  
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="noContrato" class="control-label">Contrato</label>'
		  +'							<div class="controls">'
		  +'								<input id="noContrato" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="noContrato">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="digito" class="control-label">Dígito</label>'
		  +'							<div class="controls">'
		  +'								<input id="digito" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="digito">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="dv" class="control-label">DV</label>'
		  +'							<div class="controls">'
		  +'								<input id="dv" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="dv">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="estatus" class="control-label">Estatus</label>'
		  +'							<div class="controls">'
		  +'								<input id="estatus" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="estatus">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="perfil" class="control-label">Perfil</label>'
		  +'							<div class="controls">'
		  +'								<input id="perfil" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="perfil">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="portafolio" class="control-label">Portafolio</label>'
		  +'							<div class="controls">'
		  +'								<input id="portafolio" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="portafolio">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="cLABE" class="control-label">CLABE</label>'
		  +'							<div class="controls">'
		  +'								<input id="cLABE" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="cLABE">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="sTipoPort" class="control-label">STipo Port</label>'
		  +'							<div class="controls">'
		  +'								<input id="sTipoPort" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="sTipoPort">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="libro" class="control-label">Libro</label>'
		  +'							<div class="controls">'
		  +'								<input id="libro" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="libro">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="titular" class="control-label">Titular del Contrato</label>'
		  +'							<div class="controls">'
		  +'								<input id="titular" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="titular">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="beneficiarios" class="control-label">Beneficiarios</label>'
		  +'							<div class="controls">'
		  +'								<input id="beneficiarios" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="beneficiarios">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="asesorInversion" class="control-label">Asesor de Inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="asesorInversion" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="asesorInversion">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="tipoManifiesto" class="control-label">Tipo de Manifiesto</label>'
		  +'							<div class="controls">'
		  +'								<input id="tipoManifiesto" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="tipoManifiesto">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="servicioInversion" class="control-label">Servicio de Inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="servicioInversion" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="servicioInversion">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="cartaEjecucion1" class="control-label">Carta Ejecución</label>'
		  +'							<div class="controls">'
		  +'								<input id="cartaEjecucion1" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="cartaEjecucion1">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaCartaEjecucion1" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaCartaEjecucion1" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaCartaEjecucion1">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="cartaEjecucion2" class="control-label">Carta Ejecución</label>'
		  +'							<div class="controls">'
		  +'								<input id="cartaEjecucion2" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="cartaEjecucion2">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaCartaEjecucion2" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaCartaEjecucion2" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaCartaEjecucion2">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="institucional" class="control-label">Institucional/Intitucional Pract. Vta.</label>'
		  +'							<div class="controls">'
		  +'								<input id="institucional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="institucional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="justificacionInstitucional" class="control-label">Justificación</label>'
		  +'							<div class="controls">'
		  +'								<input id="justificacionInstitucional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="justificacionInstitucional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaInstitucional" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaInstitucional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaInstitucional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="sofisticado" class="control-label">Sofisticado/No sofisticaso</label>'
		  +'							<div class="controls">'
		  +'								<input id="sofisticado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="sofisticado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="justificacionSofisticado" class="control-label">Justificación</label>'
		  +'							<div class="controls">'
		  +'								<input id="justificacionSofisticado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="justificacionSofisticado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaSofisticado" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaSofisticado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaSofisticado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="elegible" class="control-label">Elegible/No Elegible</label>'
		  +'							<div class="controls">'
		  +'								<input id="elegible" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="elegible">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="justificacionElegible" class="control-label">Justificación</label>'
		  +'							<div class="controls">'
		  +'								<input id="justificacionElegible" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="justificacionElegible">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaElegible" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaElegible" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaElegible">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="calificado" class="control-label">Calificado/No Calificado</label>'
		  +'							<div class="controls">'
		  +'								<input id="calificado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="calificado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="justificacionCalificado" class="control-label">Justificación</label>'
		  +'							<div class="controls">'
		  +'								<input id="justificacionCalificado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="justificacionCalificado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaCalificado" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaCalificado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaCalificado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="discrecional" class="control-label">Discrecional/No Discrecional</label>'
		  +'							<div class="controls">'
		  +'								<input id="discrecional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="discrecional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="justificacionDiscrecional" class="control-label">Justificación</label>'
		  +'							<div class="controls">'
		  +'								<input id="justificacionDiscrecional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="justificacionDiscrecional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fechaDiscrecional" class="control-label">Fecha</label>'
		  +'							<div class="controls">'
		  +'								<input id="fechaDiscrecional" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fechaDiscrecional">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="instrDeudaGub" class="control-label">Instrumetos de Deuda Gubernamental</label>'
		  +'							<div class="controls">'
		  +'								<input id="instrDeudaGub" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="instrDeudaGub">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="instrDeudaCorp" class="control-label">Instrumentos de Deuda Corporativa</label>'
		  +'							<div class="controls">'
		  +'								<input id="instrDeudaCorp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="instrDeudaCorp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="sociedadesInver" class="control-label">Sociedades de Inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="sociedadesInver" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="sociedadesInver">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="valoresEstruc" class="control-label">Valores Estructurados</label>'
		  +'							<div class="controls">'
		  +'								<input id="valoresEstruc" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="valoresEstruc">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="certBurFideicomisos" class="control-label">Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados</label>'
		  +'							<div class="controls">'
		  +'								<input id="certBurFideicomisos" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="certBurFideicomisos">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="titulosOpcionales" class="control-label">Titulos Opcionales (Warrants)</label>'
		  +'							<div class="controls">'
		  +'								<input id="titulosOpcionales" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="titulosOpcionales">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="acciones" class="control-label">Acciones</label>'
		  +'							<div class="controls">'
		  +'								<input id="acciones" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="acciones">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="valoresExtr" class="control-label">Valores Extranjeros</label>'
		  +'							<div class="controls">'
		  +'								<input id="valoresExtr" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="valoresExtr">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="trackers" class="control-label">Trackers TRACs o ETFs</label>'
		  +'							<div class="controls">'
		  +'								<input id="trackers" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="trackers">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="limitantes" class="control-label">Limitantes a Intervenir</label>'
		  +'							<div class="controls">'
		  +'								<input id="limitantes" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="limitantes">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="emisor" class="control-label">Relación Emisor</label>'
		  +'							<div class="controls">'
		  +'								<input id="emisor" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="emisor">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="firmasAutorizadas" class="control-label">Firmas Autorizadas</label>'
		  +'							<div class="controls">'
		  +'								<input id="firmasAutorizadas" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="firmasAutorizadas">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
+'							</div>'
+'						</div>'
			+'						<div class="row">'
			+'							<div class="column">'
			+'								<div class="btn-group">'
			+'									<button type="button" class="btn btn-warning" onclick="'+this.instanceName+'.cancelar()"><span class="glyphicon-pencil"></span> Cancelar</button>'
			+'									<button type="button" class="btn btn-primary " onclick="'+this.instanceName+'.guardar()"><span class="glyphicon-flash"></span> Guardar</button>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'					</fieldset>'
			+'			</form>'
			+'		</div>';
			
	    return html;
	};

Catalogo.prototype.formaFiltros = function(){
	/**TODO: Verificar columnas a utilizar y eliminar los que no sean necesarios.*/
    var html ='<div class="form">'
			+'	<form id="filter" name="filter">'
			//+'		<fieldset class="fieldset"><legend>Contrato</legend>'
			+'				<div class="row" style="display:  inline-flex;">'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="noContrato" class="control-label">Contrato</label>'
			+'								<div class="controls">'
			+'									<input id="noContrato" class="form-control" data-type = "number" maxlength="0" data-length="0" name="noContrato">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="digito" class="control-label">Dígito</label>'
			+'								<div class="controls">'
			+'									<input id="digito" class="form-control" data-type = "number" maxlength="0" data-length="0" name="digito">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="dv" class="control-label">DV</label>'
			+'								<div class="controls">'
			+'									<input id="dv" class="form-control" data-type = "number" maxlength="0" data-length="0" name="dv">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="estatus" class="control-label">Estatus</label>'
			+'								<div class="controls">'
			+'									<input id="estatus" class="form-control" data-type = "number" maxlength="0" data-length="0" name="estatus">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="perfil" class="control-label">Perfil</label>'
			+'								<div class="controls">'
			+'									<input id="perfil" class="form-control" data-type = "number" maxlength="0" data-length="0" name="perfil">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="portafolio" class="control-label">Portafolio</label>'
			+'								<div class="controls">'
			+'									<input id="portafolio" class="form-control" data-type = "number" maxlength="0" data-length="0" name="portafolio">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="cLABE" class="control-label">CLABE</label>'
			+'								<div class="controls">'
			+'									<input id="cLABE" class="form-control" data-type = "number" maxlength="0" data-length="0" name="cLABE">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="sTipoPort" class="control-label">STipo Port</label>'
			+'								<div class="controls">'
			+'									<input id="sTipoPort" class="form-control" data-type = "number" maxlength="0" data-length="0" name="sTipoPort">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="libro" class="control-label">Libro</label>'
			+'								<div class="controls">'
			+'									<input id="libro" class="form-control" data-type = "number" maxlength="0" data-length="0" name="libro">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="titular" class="control-label">Titular del Contrato</label>'
			+'								<div class="controls">'
			+'									<input id="titular" class="form-control" data-type = "number" maxlength="0" data-length="0" name="titular">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="asesorInversion" class="control-label">Asesor de Inversión</label>'
			+'								<div class="controls">'
			+'									<input id="asesorInversion" class="form-control" data-type = "number" maxlength="0" data-length="0" name="asesorInversion">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="tipoManifiesto" class="control-label">Tipo de Manifiesto</label>'
			+'								<div class="controls">'
			+'									<input id="tipoManifiesto" class="form-control" data-type = "number" maxlength="0" data-length="0" name="tipoManifiesto">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="servicioInversion" class="control-label">Servicio de Inversión</label>'
			+'								<div class="controls">'
			+'									<input id="servicioInversion" class="form-control" data-type = "number" maxlength="0" data-length="0" name="servicioInversion">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="cartaEjecucion1" class="control-label">Carta Ejecución</label>'
			+'								<div class="controls">'
			+'									<input id="cartaEjecucion1" class="form-control" data-type = "number" maxlength="0" data-length="0" name="cartaEjecucion1">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaCartaEjecucion1" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaCartaEjecucion1" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaCartaEjecucion1">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="cartaEjecucion2" class="control-label">Carta Ejecución</label>'
			+'								<div class="controls">'
			+'									<input id="cartaEjecucion2" class="form-control" data-type = "number" maxlength="0" data-length="0" name="cartaEjecucion2">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaCartaEjecucion2" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaCartaEjecucion2" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaCartaEjecucion2">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="institucional" class="control-label">Institucional/Intitucional Pract. Vta.</label>'
			+'								<div class="controls">'
			+'									<input id="institucional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="institucional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="justificacionInstitucional" class="control-label">Justificación</label>'
			+'								<div class="controls">'
			+'									<input id="justificacionInstitucional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="justificacionInstitucional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaInstitucional" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaInstitucional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaInstitucional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="sofisticado" class="control-label">Sofisticado/No sofisticaso</label>'
			+'								<div class="controls">'
			+'									<input id="sofisticado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="sofisticado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="justificacionSofisticado" class="control-label">Justificación</label>'
			+'								<div class="controls">'
			+'									<input id="justificacionSofisticado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="justificacionSofisticado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaSofisticado" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaSofisticado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaSofisticado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="elegible" class="control-label">Elegible/No Elegible</label>'
			+'								<div class="controls">'
			+'									<input id="elegible" class="form-control" data-type = "number" maxlength="0" data-length="0" name="elegible">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="justificacionElegible" class="control-label">Justificación</label>'
			+'								<div class="controls">'
			+'									<input id="justificacionElegible" class="form-control" data-type = "number" maxlength="0" data-length="0" name="justificacionElegible">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaElegible" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaElegible" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaElegible">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="calificado" class="control-label">Calificado/No Calificado</label>'
			+'								<div class="controls">'
			+'									<input id="calificado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="calificado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="justificacionCalificado" class="control-label">Justificación</label>'
			+'								<div class="controls">'
			+'									<input id="justificacionCalificado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="justificacionCalificado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaCalificado" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaCalificado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaCalificado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="discrecional" class="control-label">Discrecional/No Discrecional</label>'
			+'								<div class="controls">'
			+'									<input id="discrecional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="discrecional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="justificacionDiscrecional" class="control-label">Justificación</label>'
			+'								<div class="controls">'
			+'									<input id="justificacionDiscrecional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="justificacionDiscrecional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fechaDiscrecional" class="control-label">Fecha</label>'
			+'								<div class="controls">'
			+'									<input id="fechaDiscrecional" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fechaDiscrecional">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="instrDeudaGub" class="control-label">Instrumetos de Deuda Gubernamental</label>'
			+'								<div class="controls">'
			+'									<input id="instrDeudaGub" class="form-control" data-type = "number" maxlength="0" data-length="0" name="instrDeudaGub">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="instrDeudaCorp" class="control-label">Instrumentos de Deuda Corporativa</label>'
			+'								<div class="controls">'
			+'									<input id="instrDeudaCorp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="instrDeudaCorp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="sociedadesInver" class="control-label">Sociedades de Inversión</label>'
			+'								<div class="controls">'
			+'									<input id="sociedadesInver" class="form-control" data-type = "number" maxlength="0" data-length="0" name="sociedadesInver">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="valoresEstruc" class="control-label">Valores Estructurados</label>'
			+'								<div class="controls">'
			+'									<input id="valoresEstruc" class="form-control" data-type = "number" maxlength="0" data-length="0" name="valoresEstruc">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="certBurFideicomisos" class="control-label">Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados</label>'
			+'								<div class="controls">'
			+'									<input id="certBurFideicomisos" class="form-control" data-type = "number" maxlength="0" data-length="0" name="certBurFideicomisos">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="titulosOpcionales" class="control-label">Titulos Opcionales (Warrants)</label>'
			+'								<div class="controls">'
			+'									<input id="titulosOpcionales" class="form-control" data-type = "number" maxlength="0" data-length="0" name="titulosOpcionales">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="acciones" class="control-label">Acciones</label>'
			+'								<div class="controls">'
			+'									<input id="acciones" class="form-control" data-type = "number" maxlength="0" data-length="0" name="acciones">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="valoresExtr" class="control-label">Valores Extranjeros</label>'
			+'								<div class="controls">'
			+'									<input id="valoresExtr" class="form-control" data-type = "number" maxlength="0" data-length="0" name="valoresExtr">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="trackers" class="control-label">Trackers TRACs o ETFs</label>'
			+'								<div class="controls">'
			+'									<input id="trackers" class="form-control" data-type = "number" maxlength="0" data-length="0" name="trackers">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="limitantes" class="control-label">Limitantes a Intervenir</label>'
			+'								<div class="controls">'
			+'									<input id="limitantes" class="form-control" data-type = "number" maxlength="0" data-length="0" name="limitantes">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="emisor" class="control-label">Relación Emisor</label>'
			+'								<div class="controls">'
			+'									<input id="emisor" class="form-control" data-type = "number" maxlength="0" data-length="0" name="emisor">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="firmasAutorizadas" class="control-label">Firmas Autorizadas</label>'
			+'								<div class="controls">'
			+'									<input id="firmasAutorizadas" class="form-control" data-type = "number" maxlength="0" data-length="0" name="firmasAutorizadas">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="btn-group" style="padding-top: 15px;">'
			+'								<button type="button" class="btn btn-primary " onclick="'+this.instanceName+'.fetch(1)">'
			+'									<span class="glyphicon-flash"></span>Buscar'
			+'								</button>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="btn-group" style="padding-top: 15px;">'
			+'								<button type="button" class="btn btn-primary " onclick="'+this.instanceName+'.clear()">'
			+'									<span class="glyphicon-flash"></span>Limpiar'
			+'								</button>'
			+'							</div>'
			+'						</div>'
			+'				</div>' 
			+'</form>'
			+'</div>'
			
    return html;
};

Catalogo.prototype.formaUpload = function(){
	var html ='<div class="pull-right">'
			+'		<div class="btnAdd">'
			+'			<button class="btn btn-sm btn-success" type="button" onclick="myModule.add()">'
			+'				<span class="oi oi-pencil">Agregar</span>'
			+'			</button>'
			+'		</div>'
			+'		<div class>'
			+'			<label for="archivo" class="control-label">Cargar archivo</label>'
			+'			<div class="controls">'
			+'				<input id="archivo" class="form-control file" type="file" name="archivo" onchange="'+this.instanceName+'.validator.loadExcel(\'archivo\','+this.instanceName+' )">'
			+'				<span></span>'
			+'			</div>'
			+'		</div>'
			+'</div>';
    
    
    return html;
};

Catalogo.prototype.formaDownload = function(){
	  var html  = '<div><div style=" display: inline; ">Acción</div>'
		  		 +'		<div style=" display: inline; padding: 17px;">'
		  		 +'			<a href="#" class="glyphicon" onclick="' + this.instanceName + '.load()">'
		  		 +'		</div>'
          		 +'</div>';
		  return html;
};

	// La tabla y el paginador
	Catalogo.prototype.listado = function( data ){
		console.log(data);
	    //Almaceamos los registros en el objeto
	    this.content = data.content;
	    
	    /**TODO: Verificar columnas a utilizar y eliminar los que no sean necesarios.*/
	    var columnas = [
{ header: "Contrato", field: "noContrato" }
	    	
, { header: "Dígito", field: "digito" }
	    	
, { header: "DV", field: "dv" }
	    	
, { header: "Estatus", field: "estatus" }
	    	
, { header: "Perfil", field: "perfil" }
	    	
, { header: "Portafolio", field: "portafolio" }
	    	
, { header: "CLABE", field: "cLABE" }
	    	
, { header: "STipo Port", field: "sTipoPort" }
	    	
, { header: "Libro", field: "libro" }
	    	
, { header: "Titular del Contrato", field: "titular" }
	    	
, { header: "Beneficiarios", field: "beneficiarios" }
	    	
, { header: "Asesor de Inversión", field: "asesorInversion" }
	    	
, { header: "Tipo de Manifiesto", field: "tipoManifiesto" }
	    	
, { header: "Servicio de Inversión", field: "servicioInversion" }
	    	
, { header: "Carta Ejecución", field: "cartaEjecucion1" }
	    	
, { header: "Fecha", field: "fechaCartaEjecucion1" }
	    	
, { header: "Carta Ejecución", field: "cartaEjecucion2" }
	    	
, { header: "Fecha", field: "fechaCartaEjecucion2" }
	    	
, { header: "Institucional/Intitucional Pract. Vta.", field: "institucional" }
	    	
, { header: "Justificación", field: "justificacionInstitucional" }
	    	
, { header: "Fecha", field: "fechaInstitucional" }
	    	
, { header: "Sofisticado/No sofisticaso", field: "sofisticado" }
	    	
, { header: "Justificación", field: "justificacionSofisticado" }
	    	
, { header: "Fecha", field: "fechaSofisticado" }
	    	
, { header: "Elegible/No Elegible", field: "elegible" }
	    	
, { header: "Justificación", field: "justificacionElegible" }
	    	
, { header: "Fecha", field: "fechaElegible" }
	    	
, { header: "Calificado/No Calificado", field: "calificado" }
	    	
, { header: "Justificación", field: "justificacionCalificado" }
	    	
, { header: "Fecha", field: "fechaCalificado" }
	    	
, { header: "Discrecional/No Discrecional", field: "discrecional" }
	    	
, { header: "Justificación", field: "justificacionDiscrecional" }
	    	
, { header: "Fecha", field: "fechaDiscrecional" }
	    	
, { header: "Instrumetos de Deuda Gubernamental", field: "instrDeudaGub" }
	    	
, { header: "Instrumentos de Deuda Corporativa", field: "instrDeudaCorp" }
	    	
, { header: "Sociedades de Inversión", field: "sociedadesInver" }
	    	
, { header: "Valores Estructurados", field: "valoresEstruc" }
	    	
, { header: "Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados", field: "certBurFideicomisos" }
	    	
, { header: "Titulos Opcionales (Warrants)", field: "titulosOpcionales" }
	    	
, { header: "Acciones", field: "acciones" }
	    	
, { header: "Valores Extranjeros", field: "valoresExtr" }
	    	
, { header: "Trackers TRACs o ETFs", field: "trackers" }
	    	
, { header: "Limitantes a Intervenir", field: "limitantes" }
	    	
, { header: "Relación Emisor", field: "emisor" }
	    	
, { header: "Firmas Autorizadas", field: "firmasAutorizadas" }
	    	
	        ];
	    var i,j;
	    var html = "";
	    
	    html +="<h2>Contrato</h2>";
	    
    	html += this.formaFiltros();
	    
	    
	    html += "<table class='table'>";
	    html += "<thead class='table-header'>";
	    html += "<tr>";
	    for(i=0; i< columnas.length; i++){
	        html += "<th>" + columnas[i].header + "</th>";
	    }
	    html += "<th>"+this.formaDownload()+"</th></tr>";
	    html += "</thead>";
	    
	    var parClass= "column-par'";
	    
	    for( i=0; i< data.content.length; i++){
	        html += "<tr class='table-row ";
	        
	        if(i%2==0){
	        	html +=parClass;	
	        }
	    
	        html +="'>";
	        
	        for( j=0; j<columnas.length; j++ ){
	            var row = data.content[i];
	            html += "<td>" + this.validator.htmlEncode( this.validator.getModel(row, columnas[j].field) ) + "</td>";
	        }
	        
	        html += "<td class='row-button'><button class='btn btn-sm btn-info' type='button' onclick='"+this.instanceName+".select("+i+")'>Modificar<span class='oi oi-pencil'></span></button>";
	        html += "<button class='btn btn-sm btn-danger' id ='btnEliminar' type='button' onclick='"+this.instanceName+".remove("+i+")'>Eliminar<span class='oi oi-pencil'></span></button></td>";
	        html += "</tr>";
	    }
	    
	    html += "</table>";
	    
	    
	    
	    
	    // Para el paginador
	      var msg = "No existen registros";
	    
	      var currentPage = data.number + 1;
	      var pageSize = data.numberOfElements;
	      var totalOfRecords = data.totalElements;
	      var totalOfPages = data.totalPages;
	      var minPage = currentPage - 5;
	      if (minPage < 1) {
	        minPage = 1;
	      }
	      var maxPage = currentPage + 5;
	      if (maxPage > totalOfPages) {
	        maxPage = totalOfPages;
	      }
	      if( (maxPage - minPage)<10 && maxPage < totalOfPages ){
	        var faltantes = 10-(maxPage - minPage);
	        if( totalOfPages >= (maxPage+faltantes) ){
	          maxPage += faltantes;
	        }else{
	          maxPage = totalOfPages;
	        }
	      }
	      
	      if (totalOfRecords > pageSize) {
	        html += '<div style="text-align:center"><ul class="pagination middle">';
	        var classDisabled = "class";
	        
	        //html += '<li ';
	        //if (minPage === 1) {
	        if (currentPage === 1) {
	        	classDisabled +='=disabled';
	            //html += ' class="disabled" ';
	        }
	        var prevPage = currentPage-1;
	        if(currentPage!==minPage){

	        	html += '<li '+classDisabled+'><a href="#" class="arrow first" onclick="'+this.instanceName+'.fetch( \'1\' )" >&laquo;</a></li>';
	        	html += '<li '+classDisabled+'><a href="#" class="arrow last" onclick="'+this.instanceName+'.fetch( \''+prevPage+'\' )" >&lt;</a></li>';
	        }
	        for (var page = minPage; page <= maxPage; page++) {
	          html += '<li ';
	          if (page === currentPage) {
	            html += ' class="active-pagination" ';
	          }
	          html += '><a href="#" onclick="'+this.instanceName+'.fetch( \'' + page + '\' )" >' + page;
			  
	          
	          
	          html += '</a></li>';
	        }//cierre de for
	        
	        //html += '<li ';
	        classDisabled = "class"
	        //if (maxPage === totalOfPages) {
	        if (currentPage === totalOfPages) {
	          //html += ' class="disabled" ';
	          classDisabled +='=disabled';
	        }
	        var nextPage = currentPage+1;
	        
	        html += '<li '+classDisabled+'><a href="#" class="arrow next" onclick="'+this.instanceName+'.fetch( \''+nextPage+'\' )" >&gt;</a></li>';
	        html += '<li '+classDisabled+'><a href="#" class="arrow last" onclick="'+this.instanceName+'.fetch( \'' + totalOfPages + '\' )" >&raquo;</a></li></ul></div>';
	      }
	      
	      
	      if(totalOfRecords === 0){
	        
	          
	          html += "<p></p><div class='alert alert-info alert-dismissible'>";
	          html += '<a href="#" class="close" data-dismiss="alert">&times;</a><strong>';
	          html += msg;
	          html += "</strong></div>";
	      }
	      
	      html += this.formaUpload();
	      
	   return html;
	    
	};
	
	Catalogo.prototype.add = function( ){
	    this.currentIndex = -1;
	    $("#" + this.divName ).html( this.forma() );
	};
	
	Catalogo.prototype.select = function( index ){
	    this.currentIndex = index;
	    
	    $("#" + this.divName ).html( this.forma() );
	    
	 // forma de clonar objetos
	    var row = JSON.parse( JSON.stringify( this.content[index] )) ;
	    row.habilitado = row.habilitado === 1 ;
	    this.validator.modelToForm("forma", row );
		
		/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
	    $("#noContrato").prop('disabled', true);
	    $("#digito").prop('disabled', true);
	    $("#dv").prop('disabled', true);
	    $("#estatus").prop('disabled', true);
	    $("#perfil").prop('disabled', true);
	    $("#portafolio").prop('disabled', true);
	    $("#cLABE").prop('disabled', true);
	    $("#sTipoPort").prop('disabled', true);
	    $("#libro").prop('disabled', true);
	    $("#titular").prop('disabled', true);
	    $("#beneficiarios").prop('disabled', true);
	    $("#asesorInversion").prop('disabled', true);
	    $("#tipoManifiesto").prop('disabled', true);
	    $("#servicioInversion").prop('disabled', true);
	    $("#cartaEjecucion1").prop('disabled', true);
	    $("#fechaCartaEjecucion1").prop('disabled', true);
	    $("#cartaEjecucion2").prop('disabled', true);
	    $("#fechaCartaEjecucion2").prop('disabled', true);
	    $("#institucional").prop('disabled', true);
	    $("#justificacionInstitucional").prop('disabled', true);
	    $("#fechaInstitucional").prop('disabled', true);
	    $("#sofisticado").prop('disabled', true);
	    $("#justificacionSofisticado").prop('disabled', true);
	    $("#fechaSofisticado").prop('disabled', true);
	    $("#elegible").prop('disabled', true);
	    $("#justificacionElegible").prop('disabled', true);
	    $("#fechaElegible").prop('disabled', true);
	    $("#calificado").prop('disabled', true);
	    $("#justificacionCalificado").prop('disabled', true);
	    $("#fechaCalificado").prop('disabled', true);
	    $("#discrecional").prop('disabled', true);
	    $("#justificacionDiscrecional").prop('disabled', true);
	    $("#fechaDiscrecional").prop('disabled', true);
	    $("#instrDeudaGub").prop('disabled', true);
	    $("#instrDeudaCorp").prop('disabled', true);
	    $("#sociedadesInver").prop('disabled', true);
	    $("#valoresEstruc").prop('disabled', true);
	    $("#certBurFideicomisos").prop('disabled', true);
	    $("#titulosOpcionales").prop('disabled', true);
	    $("#acciones").prop('disabled', true);
	    $("#valoresExtr").prop('disabled', true);
	    $("#trackers").prop('disabled', true);
	    $("#limitantes").prop('disabled', true);
	    $("#emisor").prop('disabled', true);
	    $("#firmasAutorizadas").prop('disabled', true);
	};
	
	Catalogo.prototype.cancelar = function(  ){
	    this.init();
	};
	
	Catalogo.prototype.init = function(){
	    this.fetch(1);
	}
	
	Catalogo.prototype.fetch = function( page ){
	  var url = this.FETCH;
	  var params = {page: page };
	  var model = {};
	  this.validator.formToModel( "filter", model );
	  //Quitar el atributo habilitado o ponerlo en 0;
	  model.habilitado = 0;	  
	  params.model = model;
	  
	  var _that = this;
	  
	  if (url !== null) {
		  
		 _that.showLoadingModal('');
	  	
	    $.ajax({
	      url: url,
	      data: JSON.stringify(params),
	      type: "POST",
	      contentType: "application/json; charset=UTF-8",
	      dataType: "json",
	      mode: "abort",
	      port: "uniqueport",
	      success: function (data) {
	    	  console.log(data);
	    	  _that.listado(data);
			  var filtroAnterior = {};
			  _that.validator.formToModel( "filter", filtroAnterior );
	    	  
	    	  $("#" + _that.divName).html(_that.listado(data));
			  _that.validator.modelToForm( "filter", filtroAnterior );
			  _that.removeModal();
	      },
	      error: function (errMsg) {
	      	_that.showModalMessage('Ha ocurrido un error al cargar los datos');
	      }
	    });
	  }
	};
	
	Catalogo.prototype.removeModal = function (){
		 $("#dialog").parent().removeClass('blocker');
		 $("body").css('overflow', '');
		 $("#dialog").hide();
		 $("#contentModal").removeClass('loading');
		 $("#contentModal").html('');
	}
	
	Catalogo.prototype.showModalMessage = function (message){
		 $("#dialog").modal();
		  $("#contentModal").html(message);
		  $("#btnAceptar").hide();
		  $("#btnCancelar").show();
		  $("#contentModal").removeClass('loading');
		
	}
	
	Catalogo.prototype.showLoadingModal = function (message){
		 $("#dialog").modal({
			  escapeClose: false,
			  clickClose: false,
			  showClose: false
		  });
		 //var html =message+ '<span class ="loading"></span>' 
		 $("#contentModal").html(message);
		 $("#contentModal").addClass('loading');
		 $("#btnAceptar").hide();
		 $("#btnCancelar").hide();
		 
	}
	
	Catalogo.prototype.guardar = function () {
	  var url = this.SAVE;
	  var _that = this;
	  // Obtener la forma
	  var params = {};
	  
	  this.validator.formToModel( "forma", params );
	  
	  //Cambiar el habilitado por 1, o 0
	  params.habilitado = ( JSON.parse( params.habilitado ) | JSON.parse( params.habilitado ) );
	  
	  // Esta editando
	  if( this.currentIndex >= 0 ){
	      params.id = this.content[ this.currentIndex ].id;
	  }
	  
	  var listInputs = $('form').find('.form-control').not('.checkbox');
		
		var error;
		var contError =0;
		_that.showLoadingModal('');
		$.each(listInputs, function(id, elem){
			error= false;
			
			var type =$(elem).data('type');
			var length =$(elem).data('length');
			
			console.log(' type '+type+ ' length '+length);
			
			error= _that.validator.empty(elem, '');
			
			if(!error && type=='number'){
				error =_that.validator.numeric(elem);
			}else if(!error && type=='varchar'){
				error =_that.validator.alphaNumeric(elem);
			}				
			if(!error){
				error=_that.validator.validateLength(elem, $(elem).data('length'));		
			}	
			
			if(error){
				contError++;
			}
			var textElem =$(elem).val().trim(); 
			$(elem).val(textElem);
		});
		
		
		if (contError>0){
			 _that.removeModal();
		}
	  
	  if (contError==0 && url !== null) {
	    $.ajax({
	      url: url,
	      data: JSON.stringify(params),
	      type: "POST",
	      contentType: "application/json; charset=UTF-8",
	      dataType: "json",
	      mode: "abort",
	      port: "uniqueport",
	      success: function (data) {
	      	_that.removeModal();
	        _that.init();
	      },
	      error: function (errMsg) {
	        _that.showModalMessage('Ha ocurrido un error al guardar la información');
	      }
	    });
	  }
	};
	
	Catalogo.prototype.remove = function (index) {
	  var url = this.DELETE;
	  var _that = this;
	  // Obtener la forma
	  //var params = this.content[index];
	  
	  
	  $("#dialog").modal({
		  escapeClose: false,
		  clickClose: false,
		  showClose: false
	  });
	  
	  $("#contentModal").html('¿Estás seguro de eliminar el registro?');
	  $("#btnAceptar").show();
	  $("#btnCancelar").show();
	
	  
	  //seguro es la carga del evento
	  $("#btnAceptar").attr( "onclick", this.instanceName+".acceptDelete('"+index+"')" );
	};
	
	Catalogo.prototype.acceptDelete = function (index) {
		  var url = this.DELETE;
		  var _that = this;
		  var params = this.content[index];
		  // Obtener la forma
		  
		 	  	_that.showLoadingModal('');
				  if (url !== null) {
					    $.ajax({
						      url: url,
						      data: JSON.stringify(params),
						      type: "POST",
						      contentType: "application/json; charset=UTF-8",
						      dataType: "json",
						      mode: "abort",
						      port: "uniqueport",
						      success: function (data) {
						      		console.log(data);
									_that.showModalMessage('Borrado exitoso');
								    _that.init();
						      },
						      error: function (errMsg) {
						    	  	console.log(errMsg);
						      	 	_that.showModalMessage('Ha ocurrido un error con el borrado');
						      	 	
						      }
					    });
				  }
	
	};
	
	Catalogo.prototype.cancelDelete = function (index) {
		
	};
	
	Catalogo.prototype.fillInputDOM = function (element) {
		var textInput;
		var textLength;
		var _that = this;
		_that.validator.removeWhiteSpace(element);
		textInput = $(element).val().replace(/\s/g, '');
		if(textInput.length>=1){
			$(element).val(_that.fillInput(textInput));
		}
		
	};
	
	
	Catalogo.prototype.fillInput = function (textValue) {
		
		var _that = this;
		var textLength =4-textValue.length;
		console.log("Value: "+textValue);
		textValue =textValue.trim();
		if(textLength>0){
			for(var i=0; i<textLength;i++){
				textValue = '0'+textValue;						
			}
		}
		return textValue;
	
	}
	
	
	//Metodo que controla la lectura del archivo
	Catalogo.prototype.upload = function( datos ){
		
		
		
		console.log("Dentro de la funcion de negocio:" + datos.length);
	    console.log(datos);
	    _that = this;
		url = this.UPLOAD; 
		_that.showLoadingModal('');
		//_that.showLoadingModal('Cargando información...');
	    // Crear lista con Beans
	    
		
		/*Antes de crear lista valida registros*/
		
	    var contError =0;
	    var campo;
	    var item;
	    var error;
	    //$.each(datos, function(index, item){
	    for(var i=0; i<datos.length;i++){
	    	campo = '';
	    	item =  datos[i];
	    	for(var key in item){
	    		//console.log('Key '+key);
	    		campo = item[key].trim();
	    		switch(key){
	    			/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
case 'NoContrato':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Digito':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Dv':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Estatus':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Perfil':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Portafolio':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'CLABE':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'STipoPort':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Libro':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Titular':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Beneficiarios':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'AsesorInversion':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'TipoManifiesto':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'ServicioInversion':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'CartaEjecucion1':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaCartaEjecucion1':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'CartaEjecucion2':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaCartaEjecucion2':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Institucional':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'JustificacionInstitucional':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaInstitucional':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Sofisticado':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'JustificacionSofisticado':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaSofisticado':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Elegible':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'JustificacionElegible':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaElegible':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Calificado':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'JustificacionCalificado':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaCalificado':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Discrecional':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'JustificacionDiscrecional':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FechaDiscrecional':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'InstrDeudaGub':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'InstrDeudaCorp':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'SociedadesInver':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ValoresEstruc':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'CertBurFideicomisos':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'TitulosOpcionales':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Acciones':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ValoresExtr':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Trackers':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Limitantes':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Emisor':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FirmasAutorizadas':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
	    		}//switch
	    		
	    		if(error){
	        		contError++;
	        		$("#dialog").modal();
	        		$("#contentModal").removeClass('loading');
	    	    	$("#contentModal").html('Ha ocurrido un error con el siguiente registro: <br>  '+JSON.stringify(item));
	    	    	$("#btnAceptar").hide();
	    	    	$("#btnCancelar").html('Cerrar').show();
	    	    	break;
	        	}
	    	}//for key
	    	
	    	if(error){
	    		break;
	    	}
	    	
	    } //for elements
	
	    if(contError==0 && url!==null && datos.length>0){ //si no hay errores, se envía al controller
		    var listBeans = [];
		    for(var i=0; i<datos.length;i++){
		        
		        listBeans[i] = {
		        	/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
		        	id:{
		            }
		            ,  noContrato : datos[i].NoContrato
		            ,  digito : datos[i].Digito
		            ,  dv : datos[i].Dv
		            ,  estatus : datos[i].Estatus
		            ,  perfil : datos[i].Perfil
		            ,  portafolio : datos[i].Portafolio
		            ,  cLABE : datos[i].CLABE
		            ,  sTipoPort : datos[i].STipoPort
		            ,  libro : datos[i].Libro
		            ,  titular : datos[i].Titular
		            ,  beneficiarios : datos[i].Beneficiarios
		            ,  asesorInversion : datos[i].AsesorInversion
		            ,  tipoManifiesto : datos[i].TipoManifiesto
		            ,  servicioInversion : datos[i].ServicioInversion
		            ,  cartaEjecucion1 : datos[i].CartaEjecucion1
		            ,  fechaCartaEjecucion1 : datos[i].FechaCartaEjecucion1
		            ,  cartaEjecucion2 : datos[i].CartaEjecucion2
		            ,  fechaCartaEjecucion2 : datos[i].FechaCartaEjecucion2
		            ,  institucional : datos[i].Institucional
		            ,  justificacionInstitucional : datos[i].JustificacionInstitucional
		            ,  fechaInstitucional : datos[i].FechaInstitucional
		            ,  sofisticado : datos[i].Sofisticado
		            ,  justificacionSofisticado : datos[i].JustificacionSofisticado
		            ,  fechaSofisticado : datos[i].FechaSofisticado
		            ,  elegible : datos[i].Elegible
		            ,  justificacionElegible : datos[i].JustificacionElegible
		            ,  fechaElegible : datos[i].FechaElegible
		            ,  calificado : datos[i].Calificado
		            ,  justificacionCalificado : datos[i].JustificacionCalificado
		            ,  fechaCalificado : datos[i].FechaCalificado
		            ,  discrecional : datos[i].Discrecional
		            ,  justificacionDiscrecional : datos[i].JustificacionDiscrecional
		            ,  fechaDiscrecional : datos[i].FechaDiscrecional
		            ,  instrDeudaGub : datos[i].InstrDeudaGub
		            ,  instrDeudaCorp : datos[i].InstrDeudaCorp
		            ,  sociedadesInver : datos[i].SociedadesInver
		            ,  valoresEstruc : datos[i].ValoresEstruc
		            ,  certBurFideicomisos : datos[i].CertBurFideicomisos
		            ,  titulosOpcionales : datos[i].TitulosOpcionales
		            ,  acciones : datos[i].Acciones
		            ,  valoresExtr : datos[i].ValoresExtr
		            ,  trackers : datos[i].Trackers
		            ,  limitantes : datos[i].Limitantes
		            ,  emisor : datos[i].Emisor
		            ,  firmasAutorizadas : datos[i].FirmasAutorizadas
		        }
		        
		    }
		
		    console.log(listBeans);
		    
			$.ajax({
			      url: url,
			      data: JSON.stringify(listBeans),
			      type: "POST",
			      contentType: "application/json; charset=UTF-8",
			      dataType: "json",
			      mode: "abort",
			      port: "uniqueport",
			      success: function (data) {
			    	  	$("#contentModal").html('Carga exitosa');
			    	  	$("#contentModal").removeClass('loading');
						$("#btnAceptar").hide();
						$("#btnCancelar").html('Cerrar');
						$("#btnCancelar").show();
					    // _that.init();
		      },
		      error: function (errMsg) {   
		    	  _that.showModalMessage('Ocurrió un error al cargar la información');
		      }
		    });
	    }
		
	};
	
	Catalogo.prototype.load = function () {
	  /**TODO: Verificar columnas a utilizar y eliminar los que no sean necesarios.*/
	  var columnas = [ 
"NoContrato"
	    	, "Digito"
	    	, "Dv"
	    	, "Estatus"
	    	, "Perfil"
	    	, "Portafolio"
	    	, "CLABE"
	    	, "STipoPort"
	    	, "Libro"
	    	, "Titular"
	    	, "Beneficiarios"
	    	, "AsesorInversion"
	    	, "TipoManifiesto"
	    	, "ServicioInversion"
	    	, "CartaEjecucion1"
	    	, "FechaCartaEjecucion1"
	    	, "CartaEjecucion2"
	    	, "FechaCartaEjecucion2"
	    	, "Institucional"
	    	, "JustificacionInstitucional"
	    	, "FechaInstitucional"
	    	, "Sofisticado"
	    	, "JustificacionSofisticado"
	    	, "FechaSofisticado"
	    	, "Elegible"
	    	, "JustificacionElegible"
	    	, "FechaElegible"
	    	, "Calificado"
	    	, "JustificacionCalificado"
	    	, "FechaCalificado"
	    	, "Discrecional"
	    	, "JustificacionDiscrecional"
	    	, "FechaDiscrecional"
	    	, "InstrDeudaGub"
	    	, "InstrDeudaCorp"
	    	, "SociedadesInver"
	    	, "ValoresEstruc"
	    	, "CertBurFideicomisos"
	    	, "TitulosOpcionales"
	    	, "Acciones"
	    	, "ValoresExtr"
	    	, "Trackers"
	    	, "Limitantes"
	    	, "Emisor"
	    	, "FirmasAutorizadas"
	  ];
	  var url = this.LOAD;
	  var name = "Contrato"; 
	  var _that = this;
	  if (url !== null) {
	    $.ajax({
	      url: url,
	
	      type: "POST",
	      contentType: "application/json; charset=UTF-8",
	      dataType: "json",
	      mode: "abort",
	      port: "uniqueport",
	      success: function (data) {
			     /**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
			     var columnas = [
{ header: "NoContrato", field: "noContrato" }
     	    	
, { header: "Digito", field: "digito" }
     	    	
, { header: "Dv", field: "dv" }
     	    	
, { header: "Estatus", field: "estatus" }
     	    	
, { header: "Perfil", field: "perfil" }
     	    	
, { header: "Portafolio", field: "portafolio" }
     	    	
, { header: "CLABE", field: "cLABE" }
     	    	
, { header: "STipoPort", field: "sTipoPort" }
     	    	
, { header: "Libro", field: "libro" }
     	    	
, { header: "Titular", field: "titular" }
     	    	
, { header: "Beneficiarios", field: "beneficiarios" }
     	    	
, { header: "AsesorInversion", field: "asesorInversion" }
     	    	
, { header: "TipoManifiesto", field: "tipoManifiesto" }
     	    	
, { header: "ServicioInversion", field: "servicioInversion" }
     	    	
, { header: "CartaEjecucion1", field: "cartaEjecucion1" }
     	    	
, { header: "FechaCartaEjecucion1", field: "fechaCartaEjecucion1" }
     	    	
, { header: "CartaEjecucion2", field: "cartaEjecucion2" }
     	    	
, { header: "FechaCartaEjecucion2", field: "fechaCartaEjecucion2" }
     	    	
, { header: "Institucional", field: "institucional" }
     	    	
, { header: "JustificacionInstitucional", field: "justificacionInstitucional" }
     	    	
, { header: "FechaInstitucional", field: "fechaInstitucional" }
     	    	
, { header: "Sofisticado", field: "sofisticado" }
     	    	
, { header: "JustificacionSofisticado", field: "justificacionSofisticado" }
     	    	
, { header: "FechaSofisticado", field: "fechaSofisticado" }
     	    	
, { header: "Elegible", field: "elegible" }
     	    	
, { header: "JustificacionElegible", field: "justificacionElegible" }
     	    	
, { header: "FechaElegible", field: "fechaElegible" }
     	    	
, { header: "Calificado", field: "calificado" }
     	    	
, { header: "JustificacionCalificado", field: "justificacionCalificado" }
     	    	
, { header: "FechaCalificado", field: "fechaCalificado" }
     	    	
, { header: "Discrecional", field: "discrecional" }
     	    	
, { header: "JustificacionDiscrecional", field: "justificacionDiscrecional" }
     	    	
, { header: "FechaDiscrecional", field: "fechaDiscrecional" }
     	    	
, { header: "InstrDeudaGub", field: "instrDeudaGub" }
     	    	
, { header: "InstrDeudaCorp", field: "instrDeudaCorp" }
     	    	
, { header: "SociedadesInver", field: "sociedadesInver" }
     	    	
, { header: "ValoresEstruc", field: "valoresEstruc" }
     	    	
, { header: "CertBurFideicomisos", field: "certBurFideicomisos" }
     	    	
, { header: "TitulosOpcionales", field: "titulosOpcionales" }
     	    	
, { header: "Acciones", field: "acciones" }
     	    	
, { header: "ValoresExtr", field: "valoresExtr" }
     	    	
, { header: "Trackers", field: "trackers" }
     	    	
, { header: "Limitantes", field: "limitantes" }
     	    	
, { header: "Emisor", field: "emisor" }
     	    	
, { header: "FirmasAutorizadas", field: "firmasAutorizadas" }
     	    	
	        ];
	
			_that.validator.export(data, name, columnas);	  
			 
	
	      },
	      error: function (errMsg) {
		  }
	
	
	    });
	  }
	};

	Catalogo.prototype.clear = function () {
		_that =this; //obtener dinamicos siblings y settear valor
		
		/**TODO: Verificar campos a utilizar y eliminar los que no sean necesarios.*/
		if(
		   !_that.validator.isEmpty($('#noContrato').val())
		   
		   || !_that.validator.isEmpty($('#digito').val())
		   
		   || !_that.validator.isEmpty($('#dv').val())
		   
		   || !_that.validator.isEmpty($('#estatus').val())
		   
		   || !_that.validator.isEmpty($('#perfil').val())
		   
		   || !_that.validator.isEmpty($('#portafolio').val())
		   
		   || !_that.validator.isEmpty($('#cLABE').val())
		   
		   || !_that.validator.isEmpty($('#sTipoPort').val())
		   
		   || !_that.validator.isEmpty($('#libro').val())
		   
		   || !_that.validator.isEmpty($('#titular').val())
		   
		   || !_that.validator.isEmpty($('#beneficiarios').val())
		   
		   || !_that.validator.isEmpty($('#asesorInversion').val())
		   
		   || !_that.validator.isEmpty($('#tipoManifiesto').val())
		   
		   || !_that.validator.isEmpty($('#servicioInversion').val())
		   
		   || !_that.validator.isEmpty($('#cartaEjecucion1').val())
		   
		   || !_that.validator.isEmpty($('#fechaCartaEjecucion1').val())
		   
		   || !_that.validator.isEmpty($('#cartaEjecucion2').val())
		   
		   || !_that.validator.isEmpty($('#fechaCartaEjecucion2').val())
		   
		   || !_that.validator.isEmpty($('#institucional').val())
		   
		   || !_that.validator.isEmpty($('#justificacionInstitucional').val())
		   
		   || !_that.validator.isEmpty($('#fechaInstitucional').val())
		   
		   || !_that.validator.isEmpty($('#sofisticado').val())
		   
		   || !_that.validator.isEmpty($('#justificacionSofisticado').val())
		   
		   || !_that.validator.isEmpty($('#fechaSofisticado').val())
		   
		   || !_that.validator.isEmpty($('#elegible').val())
		   
		   || !_that.validator.isEmpty($('#justificacionElegible').val())
		   
		   || !_that.validator.isEmpty($('#fechaElegible').val())
		   
		   || !_that.validator.isEmpty($('#calificado').val())
		   
		   || !_that.validator.isEmpty($('#justificacionCalificado').val())
		   
		   || !_that.validator.isEmpty($('#fechaCalificado').val())
		   
		   || !_that.validator.isEmpty($('#discrecional').val())
		   
		   || !_that.validator.isEmpty($('#justificacionDiscrecional').val())
		   
		   || !_that.validator.isEmpty($('#fechaDiscrecional').val())
		   
		   || !_that.validator.isEmpty($('#instrDeudaGub').val())
		   
		   || !_that.validator.isEmpty($('#instrDeudaCorp').val())
		   
		   || !_that.validator.isEmpty($('#sociedadesInver').val())
		   
		   || !_that.validator.isEmpty($('#valoresEstruc').val())
		   
		   || !_that.validator.isEmpty($('#certBurFideicomisos').val())
		   
		   || !_that.validator.isEmpty($('#titulosOpcionales').val())
		   
		   || !_that.validator.isEmpty($('#acciones').val())
		   
		   || !_that.validator.isEmpty($('#valoresExtr').val())
		   
		   || !_that.validator.isEmpty($('#trackers').val())
		   
		   || !_that.validator.isEmpty($('#limitantes').val())
		   
		   || !_that.validator.isEmpty($('#emisor').val())
		   
		   || !_that.validator.isEmpty($('#firmasAutorizadas').val())
		   
		 ){
		
			$('#noContrato').val('');
			$('#digito').val('');
			$('#dv').val('');
			$('#estatus').val('');
			$('#perfil').val('');
			$('#portafolio').val('');
			$('#cLABE').val('');
			$('#sTipoPort').val('');
			$('#libro').val('');
			$('#titular').val('');
			$('#beneficiarios').val('');
			$('#asesorInversion').val('');
			$('#tipoManifiesto').val('');
			$('#servicioInversion').val('');
			$('#cartaEjecucion1').val('');
			$('#fechaCartaEjecucion1').val('');
			$('#cartaEjecucion2').val('');
			$('#fechaCartaEjecucion2').val('');
			$('#institucional').val('');
			$('#justificacionInstitucional').val('');
			$('#fechaInstitucional').val('');
			$('#sofisticado').val('');
			$('#justificacionSofisticado').val('');
			$('#fechaSofisticado').val('');
			$('#elegible').val('');
			$('#justificacionElegible').val('');
			$('#fechaElegible').val('');
			$('#calificado').val('');
			$('#justificacionCalificado').val('');
			$('#fechaCalificado').val('');
			$('#discrecional').val('');
			$('#justificacionDiscrecional').val('');
			$('#fechaDiscrecional').val('');
			$('#instrdeudagub').val('');
			$('#instrdeudacorp').val('');
			$('#sociedadesinver').val('');
			$('#valoresestruc').val('');
			$('#certburfideicomisos').val('');
			$('#titulosopcionales').val('');
			$('#acciones').val('');
			$('#valoresextr').val('');
			$('#trackers').val('');
			$('#limitantes').val('');
			$('#emisor').val('');
			$('#firmasautorizadas').val('');
			_that.init();
		}
	}
	
	$(document).ready(function () {
	  myModule = new Catalogo();
	  myModule.init();
	  
	});

