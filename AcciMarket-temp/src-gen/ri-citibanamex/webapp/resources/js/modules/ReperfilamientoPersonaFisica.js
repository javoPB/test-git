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
			+'						<legend>Reperfilamiento de Personas Físicas</legend>'
			
		  
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="contrato" class="control-label"></label>'
		  +'							<div class="controls">'
		  +'								<input id="contrato" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="contrato">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="nombre" class="control-label">Nombre</label>'
		  +'							<div class="controls">'
		  +'								<input id="nombre" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="nombre">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="perfilActual" class="control-label">Perfil Actual</label>'
		  +'							<div class="controls">'
		  +'								<input id="perfilActual" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="perfilActual">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="personaPerfilar" class="control-label">Seleccione a la persona a perfilar</label>'
		  +'							<div class="controls">'
		  +'								<input id="personaPerfilar" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="personaPerfilar">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeLiquidez" class="control-label">% (Liquidez)</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeLiquidez" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeLiquidez">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="montoLiquidez" class="control-label">Monto $ (Liquidez)</label>'
		  +'							<div class="controls">'
		  +'								<input id="montoLiquidez" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="montoLiquidez">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeCortoPlazo" class="control-label">% (Corto Plazo)</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeCortoPlazo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeCortoPlazo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="montoCortoPlazo" class="control-label">Monto $ (Corto Plazo)</label>'
		  +'							<div class="controls">'
		  +'								<input id="montoCortoPlazo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="montoCortoPlazo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeLargoPlazo" class="control-label">% (Largo Plazo)</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeLargoPlazo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeLargoPlazo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="montoLargoPlazo" class="control-label">Monto $ (Largo Plazo)</label>'
		  +'							<div class="controls">'
		  +'								<input id="montoLargoPlazo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="montoLargoPlazo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajePatrimonioLiquidoTotal" class="control-label">% (Patrimonio líquido total 100%)</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajePatrimonioLiquidoTotal" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajePatrimonioLiquidoTotal">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="montoPatrimonioLiquidoTotal" class="control-label">Monto $ (Patrimonio líquido total 100%)</label>'
		  +'							<div class="controls">'
		  +'								<input id="montoPatrimonioLiquidoTotal" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="montoPatrimonioLiquidoTotal">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="intervaloEdad" class="control-label">1.1 Intervalo de Edad</label>'
		  +'							<div class="controls">'
		  +'								<input id="intervaloEdad" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="intervaloEdad">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="nivelEstudios" class="control-label">1.2 Nivel de Estudios</label>'
		  +'							<div class="controls">'
		  +'								<input id="nivelEstudios" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="nivelEstudios">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="ocupacion" class="control-label">1.3 Ocupación</label>'
		  +'							<div class="controls">'
		  +'								<input id="ocupacion" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="ocupacion">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="actividadProfesionalAnterior" class="control-label">1.4 Actividad Profesional ¿Anterior?</label>'
		  +'							<div class="controls">'
		  +'								<input id="actividadProfesionalAnterior" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="actividadProfesionalAnterior">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="actividadProfesionalActual" class="control-label">Actividad Profesional ¿Actual?</label>'
		  +'							<div class="controls">'
		  +'								<input id="actividadProfesionalActual" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="actividadProfesionalActual">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="actividadRelacionadaInversiones" class="control-label">Relacionada con Inversiones</label>'
		  +'							<div class="controls">'
		  +'								<input id="actividadRelacionadaInversiones" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="actividadRelacionadaInversiones">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="estrategiaCliente" class="control-label">1.5 Estrategia de inversión del Cliente generalmente utilizada</label>'
		  +'							<div class="controls">'
		  +'								<input id="estrategiaCliente" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="estrategiaCliente">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="clienteAsesoria" class="control-label">1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="clienteAsesoria" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="clienteAsesoria">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="experienciaDeudaGub" class="control-label">2.1 Instrumentos de Deuda Gubernamental</label>'
		  +'							<div class="controls">'
		  +'								<input id="experienciaDeudaGub" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="experienciaDeudaGub">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="frecuenciaDeudaGub" class="control-label">Frecuencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="frecuenciaDeudaGub" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="frecuenciaDeudaGub">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="plazoDeudaGub" class="control-label">Plazo</label>'
		  +'							<div class="controls">'
		  +'								<input id="plazoDeudaGub" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="plazoDeudaGub">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="volumenDeudaGub" class="control-label">Volumen</label>'
		  +'							<div class="controls">'
		  +'								<input id="volumenDeudaGub" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="volumenDeudaGub">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="expDeudaCorp" class="control-label">2.2 Instrumentos de Deuda Corporativa</label>'
		  +'							<div class="controls">'
		  +'								<input id="expDeudaCorp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="expDeudaCorp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="frecuenciaDeudaCorp" class="control-label">Frecuencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="frecuenciaDeudaCorp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="frecuenciaDeudaCorp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="plazoDeudaCorp" class="control-label">Plazo</label>'
		  +'							<div class="controls">'
		  +'								<input id="plazoDeudaCorp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="plazoDeudaCorp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="volumenDeudaCorp" class="control-label">Volumen</label>'
		  +'							<div class="controls">'
		  +'								<input id="volumenDeudaCorp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="volumenDeudaCorp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="expSociedadesInv" class="control-label">2.3 Sociedades de Inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="expSociedadesInv" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="expSociedadesInv">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="frecuenciaSociedadesInv" class="control-label">Frecuencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="frecuenciaSociedadesInv" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="frecuenciaSociedadesInv">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="plazoSociedadesInv" class="control-label">Plazo</label>'
		  +'							<div class="controls">'
		  +'								<input id="plazoSociedadesInv" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="plazoSociedadesInv">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="volumenSociedadesInv" class="control-label">Volumen</label>'
		  +'							<div class="controls">'
		  +'								<input id="volumenSociedadesInv" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="volumenSociedadesInv">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="expValoresEst" class="control-label">2.4 Valores Estructurados</label>'
		  +'							<div class="controls">'
		  +'								<input id="expValoresEst" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="expValoresEst">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="frecuenciaValoresEst" class="control-label">Frecuencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="frecuenciaValoresEst" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="frecuenciaValoresEst">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="plazoValoresEst" class="control-label">Plazo</label>'
		  +'							<div class="controls">'
		  +'								<input id="plazoValoresEst" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="plazoValoresEst">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="volumenValoresEst" class="control-label">Volumen</label>'
		  +'							<div class="controls">'
		  +'								<input id="volumenValoresEst" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="volumenValoresEst">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="expCertificadosBur" class="control-label">2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados</label>'
		  +'							<div class="controls">'
		  +'								<input id="expCertificadosBur" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="expCertificadosBur">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="frecuenciaCertificadosBur" class="control-label">Frecuencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="frecuenciaCertificadosBur" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="frecuenciaCertificadosBur">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="plazoCertificadosBur" class="control-label">Plazo</label>'
		  +'							<div class="controls">'
		  +'								<input id="plazoCertificadosBur" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="plazoCertificadosBur">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="volumenCertificadosBur" class="control-label">Volumen</label>'
		  +'							<div class="controls">'
		  +'								<input id="volumenCertificadosBur" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="volumenCertificadosBur">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="tieneLimitante" class="control-label">1. El Cliente tiene alguna limitante y/o restricción para invertir</label>'
		  +'							<div class="controls">'
		  +'								<input id="tieneLimitante" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="tieneLimitante">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeTotalPatrimonio" class="control-label">6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.)</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeTotalPatrimonio" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeTotalPatrimonio">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeIngresoAnual" class="control-label">6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeIngresoAnual" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeIngresoAnual">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="porcentajeInversiones" class="control-label">6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución</label>'
		  +'							<div class="controls">'
		  +'								<input id="porcentajeInversiones" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="porcentajeInversiones">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="origenIngresos" class="control-label">6.4 Seleccionar el origen de los ingresos del Cliente destinados a invertir</label>'
		  +'							<div class="controls">'
		  +'								<input id="origenIngresos" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="origenIngresos">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="perfil" class="control-label">Perfil</label>'
		  +'							<div class="controls">'
		  +'								<input id="perfil" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="perfil">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
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
			//+'		<fieldset class="fieldset"><legend>Reperfilamiento de Personas Físicas</legend>'
			+'				<div class="row" style="display:  inline-flex;">'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="contrato" class="control-label"></label>'
			+'								<div class="controls">'
			+'									<input id="contrato" class="form-control" data-type = "number" maxlength="0" data-length="0" name="contrato">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="nombre" class="control-label">Nombre</label>'
			+'								<div class="controls">'
			+'									<input id="nombre" class="form-control" data-type = "number" maxlength="0" data-length="0" name="nombre">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="perfilActual" class="control-label">Perfil Actual</label>'
			+'								<div class="controls">'
			+'									<input id="perfilActual" class="form-control" data-type = "number" maxlength="0" data-length="0" name="perfilActual">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="personaPerfilar" class="control-label">Seleccione a la persona a perfilar</label>'
			+'								<div class="controls">'
			+'									<input id="personaPerfilar" class="form-control" data-type = "number" maxlength="0" data-length="0" name="personaPerfilar">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeLiquidez" class="control-label">% (Liquidez)</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeLiquidez" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeLiquidez">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="montoLiquidez" class="control-label">Monto $ (Liquidez)</label>'
			+'								<div class="controls">'
			+'									<input id="montoLiquidez" class="form-control" data-type = "number" maxlength="0" data-length="0" name="montoLiquidez">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeCortoPlazo" class="control-label">% (Corto Plazo)</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeCortoPlazo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeCortoPlazo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="montoCortoPlazo" class="control-label">Monto $ (Corto Plazo)</label>'
			+'								<div class="controls">'
			+'									<input id="montoCortoPlazo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="montoCortoPlazo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeLargoPlazo" class="control-label">% (Largo Plazo)</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeLargoPlazo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeLargoPlazo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="montoLargoPlazo" class="control-label">Monto $ (Largo Plazo)</label>'
			+'								<div class="controls">'
			+'									<input id="montoLargoPlazo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="montoLargoPlazo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajePatrimonioLiquidoTotal" class="control-label">% (Patrimonio líquido total 100%)</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajePatrimonioLiquidoTotal" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajePatrimonioLiquidoTotal">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="montoPatrimonioLiquidoTotal" class="control-label">Monto $ (Patrimonio líquido total 100%)</label>'
			+'								<div class="controls">'
			+'									<input id="montoPatrimonioLiquidoTotal" class="form-control" data-type = "number" maxlength="0" data-length="0" name="montoPatrimonioLiquidoTotal">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="intervaloEdad" class="control-label">1.1 Intervalo de Edad</label>'
			+'								<div class="controls">'
			+'									<input id="intervaloEdad" class="form-control" data-type = "number" maxlength="0" data-length="0" name="intervaloEdad">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="nivelEstudios" class="control-label">1.2 Nivel de Estudios</label>'
			+'								<div class="controls">'
			+'									<input id="nivelEstudios" class="form-control" data-type = "number" maxlength="0" data-length="0" name="nivelEstudios">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="ocupacion" class="control-label">1.3 Ocupación</label>'
			+'								<div class="controls">'
			+'									<input id="ocupacion" class="form-control" data-type = "number" maxlength="0" data-length="0" name="ocupacion">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="actividadProfesionalAnterior" class="control-label">1.4 Actividad Profesional ¿Anterior?</label>'
			+'								<div class="controls">'
			+'									<input id="actividadProfesionalAnterior" class="form-control" data-type = "number" maxlength="0" data-length="0" name="actividadProfesionalAnterior">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="actividadProfesionalActual" class="control-label">Actividad Profesional ¿Actual?</label>'
			+'								<div class="controls">'
			+'									<input id="actividadProfesionalActual" class="form-control" data-type = "number" maxlength="0" data-length="0" name="actividadProfesionalActual">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="actividadRelacionadaInversiones" class="control-label">Relacionada con Inversiones</label>'
			+'								<div class="controls">'
			+'									<input id="actividadRelacionadaInversiones" class="form-control" data-type = "number" maxlength="0" data-length="0" name="actividadRelacionadaInversiones">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="estrategiaCliente" class="control-label">1.5 Estrategia de inversión del Cliente generalmente utilizada</label>'
			+'								<div class="controls">'
			+'									<input id="estrategiaCliente" class="form-control" data-type = "number" maxlength="0" data-length="0" name="estrategiaCliente">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="clienteAsesoria" class="control-label">1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión</label>'
			+'								<div class="controls">'
			+'									<input id="clienteAsesoria" class="form-control" data-type = "number" maxlength="0" data-length="0" name="clienteAsesoria">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="experienciaDeudaGub" class="control-label">2.1 Instrumentos de Deuda Gubernamental</label>'
			+'								<div class="controls">'
			+'									<input id="experienciaDeudaGub" class="form-control" data-type = "number" maxlength="0" data-length="0" name="experienciaDeudaGub">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="frecuenciaDeudaGub" class="control-label">Frecuencia</label>'
			+'								<div class="controls">'
			+'									<input id="frecuenciaDeudaGub" class="form-control" data-type = "number" maxlength="0" data-length="0" name="frecuenciaDeudaGub">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="plazoDeudaGub" class="control-label">Plazo</label>'
			+'								<div class="controls">'
			+'									<input id="plazoDeudaGub" class="form-control" data-type = "number" maxlength="0" data-length="0" name="plazoDeudaGub">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="volumenDeudaGub" class="control-label">Volumen</label>'
			+'								<div class="controls">'
			+'									<input id="volumenDeudaGub" class="form-control" data-type = "number" maxlength="0" data-length="0" name="volumenDeudaGub">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="expDeudaCorp" class="control-label">2.2 Instrumentos de Deuda Corporativa</label>'
			+'								<div class="controls">'
			+'									<input id="expDeudaCorp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="expDeudaCorp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="frecuenciaDeudaCorp" class="control-label">Frecuencia</label>'
			+'								<div class="controls">'
			+'									<input id="frecuenciaDeudaCorp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="frecuenciaDeudaCorp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="plazoDeudaCorp" class="control-label">Plazo</label>'
			+'								<div class="controls">'
			+'									<input id="plazoDeudaCorp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="plazoDeudaCorp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="volumenDeudaCorp" class="control-label">Volumen</label>'
			+'								<div class="controls">'
			+'									<input id="volumenDeudaCorp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="volumenDeudaCorp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="expSociedadesInv" class="control-label">2.3 Sociedades de Inversión</label>'
			+'								<div class="controls">'
			+'									<input id="expSociedadesInv" class="form-control" data-type = "number" maxlength="0" data-length="0" name="expSociedadesInv">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="frecuenciaSociedadesInv" class="control-label">Frecuencia</label>'
			+'								<div class="controls">'
			+'									<input id="frecuenciaSociedadesInv" class="form-control" data-type = "number" maxlength="0" data-length="0" name="frecuenciaSociedadesInv">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="plazoSociedadesInv" class="control-label">Plazo</label>'
			+'								<div class="controls">'
			+'									<input id="plazoSociedadesInv" class="form-control" data-type = "number" maxlength="0" data-length="0" name="plazoSociedadesInv">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="volumenSociedadesInv" class="control-label">Volumen</label>'
			+'								<div class="controls">'
			+'									<input id="volumenSociedadesInv" class="form-control" data-type = "number" maxlength="0" data-length="0" name="volumenSociedadesInv">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="expValoresEst" class="control-label">2.4 Valores Estructurados</label>'
			+'								<div class="controls">'
			+'									<input id="expValoresEst" class="form-control" data-type = "number" maxlength="0" data-length="0" name="expValoresEst">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="frecuenciaValoresEst" class="control-label">Frecuencia</label>'
			+'								<div class="controls">'
			+'									<input id="frecuenciaValoresEst" class="form-control" data-type = "number" maxlength="0" data-length="0" name="frecuenciaValoresEst">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="plazoValoresEst" class="control-label">Plazo</label>'
			+'								<div class="controls">'
			+'									<input id="plazoValoresEst" class="form-control" data-type = "number" maxlength="0" data-length="0" name="plazoValoresEst">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="volumenValoresEst" class="control-label">Volumen</label>'
			+'								<div class="controls">'
			+'									<input id="volumenValoresEst" class="form-control" data-type = "number" maxlength="0" data-length="0" name="volumenValoresEst">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="expCertificadosBur" class="control-label">2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados</label>'
			+'								<div class="controls">'
			+'									<input id="expCertificadosBur" class="form-control" data-type = "number" maxlength="0" data-length="0" name="expCertificadosBur">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="frecuenciaCertificadosBur" class="control-label">Frecuencia</label>'
			+'								<div class="controls">'
			+'									<input id="frecuenciaCertificadosBur" class="form-control" data-type = "number" maxlength="0" data-length="0" name="frecuenciaCertificadosBur">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="plazoCertificadosBur" class="control-label">Plazo</label>'
			+'								<div class="controls">'
			+'									<input id="plazoCertificadosBur" class="form-control" data-type = "number" maxlength="0" data-length="0" name="plazoCertificadosBur">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="volumenCertificadosBur" class="control-label">Volumen</label>'
			+'								<div class="controls">'
			+'									<input id="volumenCertificadosBur" class="form-control" data-type = "number" maxlength="0" data-length="0" name="volumenCertificadosBur">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="tieneLimitante" class="control-label">1. El Cliente tiene alguna limitante y/o restricción para invertir</label>'
			+'								<div class="controls">'
			+'									<input id="tieneLimitante" class="form-control" data-type = "number" maxlength="0" data-length="0" name="tieneLimitante">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeTotalPatrimonio" class="control-label">6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.)</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeTotalPatrimonio" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeTotalPatrimonio">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeIngresoAnual" class="control-label">6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeIngresoAnual" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeIngresoAnual">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="porcentajeInversiones" class="control-label">6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución</label>'
			+'								<div class="controls">'
			+'									<input id="porcentajeInversiones" class="form-control" data-type = "number" maxlength="0" data-length="0" name="porcentajeInversiones">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="origenIngresos" class="control-label">6.4 Seleccionar el origen de los ingresos del Cliente destinados a invertir</label>'
			+'								<div class="controls">'
			+'									<input id="origenIngresos" class="form-control" data-type = "number" maxlength="0" data-length="0" name="origenIngresos">'
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
{ header: "", field: "contrato" }
	    	
, { header: "Nombre", field: "nombre" }
	    	
, { header: "Perfil Actual", field: "perfilActual" }
	    	
, { header: "Seleccione a la persona a perfilar", field: "personaPerfilar" }
	    	
, { header: "% (Liquidez)", field: "porcentajeLiquidez" }
	    	
, { header: "Monto $ (Liquidez)", field: "montoLiquidez" }
	    	
, { header: "% (Corto Plazo)", field: "porcentajeCortoPlazo" }
	    	
, { header: "Monto $ (Corto Plazo)", field: "montoCortoPlazo" }
	    	
, { header: "% (Largo Plazo)", field: "porcentajeLargoPlazo" }
	    	
, { header: "Monto $ (Largo Plazo)", field: "montoLargoPlazo" }
	    	
, { header: "% (Patrimonio líquido total 100%)", field: "porcentajePatrimonioLiquidoTotal" }
	    	
, { header: "Monto $ (Patrimonio líquido total 100%)", field: "montoPatrimonioLiquidoTotal" }
	    	
, { header: "1.1 Intervalo de Edad", field: "intervaloEdad" }
	    	
, { header: "1.2 Nivel de Estudios", field: "nivelEstudios" }
	    	
, { header: "1.3 Ocupación", field: "ocupacion" }
	    	
, { header: "1.4 Actividad Profesional ¿Anterior?", field: "actividadProfesionalAnterior" }
	    	
, { header: "Actividad Profesional ¿Actual?", field: "actividadProfesionalActual" }
	    	
, { header: "Relacionada con Inversiones", field: "actividadRelacionadaInversiones" }
	    	
, { header: "1.5 Estrategia de inversión del Cliente generalmente utilizada", field: "estrategiaCliente" }
	    	
, { header: "1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión", field: "clienteAsesoria" }
	    	
, { header: "2.1 Instrumentos de Deuda Gubernamental", field: "experienciaDeudaGub" }
	    	
, { header: "Frecuencia", field: "frecuenciaDeudaGub" }
	    	
, { header: "Plazo", field: "plazoDeudaGub" }
	    	
, { header: "Volumen", field: "volumenDeudaGub" }
	    	
, { header: "2.2 Instrumentos de Deuda Corporativa", field: "expDeudaCorp" }
	    	
, { header: "Frecuencia", field: "frecuenciaDeudaCorp" }
	    	
, { header: "Plazo", field: "plazoDeudaCorp" }
	    	
, { header: "Volumen", field: "volumenDeudaCorp" }
	    	
, { header: "2.3 Sociedades de Inversión", field: "expSociedadesInv" }
	    	
, { header: "Frecuencia", field: "frecuenciaSociedadesInv" }
	    	
, { header: "Plazo", field: "plazoSociedadesInv" }
	    	
, { header: "Volumen", field: "volumenSociedadesInv" }
	    	
, { header: "2.4 Valores Estructurados", field: "expValoresEst" }
	    	
, { header: "Frecuencia", field: "frecuenciaValoresEst" }
	    	
, { header: "Plazo", field: "plazoValoresEst" }
	    	
, { header: "Volumen", field: "volumenValoresEst" }
	    	
, { header: "2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados", field: "expCertificadosBur" }
	    	
, { header: "Frecuencia", field: "frecuenciaCertificadosBur" }
	    	
, { header: "Plazo", field: "plazoCertificadosBur" }
	    	
, { header: "Volumen", field: "volumenCertificadosBur" }
	    	
, { header: "1. El Cliente tiene alguna limitante y/o restricción para invertir", field: "tieneLimitante" }
	    	
, { header: "6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.)", field: "porcentajeTotalPatrimonio" }
	    	
, { header: "6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión", field: "porcentajeIngresoAnual" }
	    	
, { header: "6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución", field: "porcentajeInversiones" }
	    	
, { header: "6.4 Seleccionar el origen de los ingresos del Cliente destinados a invertir", field: "origenIngresos" }
	    	
, { header: "Perfil", field: "perfil" }
	    	
	        ];
	    var i,j;
	    var html = "";
	    
	    html +="<h2>Reperfilamiento de Personas Físicas</h2>";
	    
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
	    $("#contrato").prop('disabled', true);
	    $("#nombre").prop('disabled', true);
	    $("#perfilActual").prop('disabled', true);
	    $("#personaPerfilar").prop('disabled', true);
	    $("#porcentajeLiquidez").prop('disabled', true);
	    $("#montoLiquidez").prop('disabled', true);
	    $("#porcentajeCortoPlazo").prop('disabled', true);
	    $("#montoCortoPlazo").prop('disabled', true);
	    $("#porcentajeLargoPlazo").prop('disabled', true);
	    $("#montoLargoPlazo").prop('disabled', true);
	    $("#porcentajePatrimonioLiquidoTotal").prop('disabled', true);
	    $("#montoPatrimonioLiquidoTotal").prop('disabled', true);
	    $("#intervaloEdad").prop('disabled', true);
	    $("#nivelEstudios").prop('disabled', true);
	    $("#ocupacion").prop('disabled', true);
	    $("#actividadProfesionalAnterior").prop('disabled', true);
	    $("#actividadProfesionalActual").prop('disabled', true);
	    $("#actividadRelacionadaInversiones").prop('disabled', true);
	    $("#estrategiaCliente").prop('disabled', true);
	    $("#clienteAsesoria").prop('disabled', true);
	    $("#experienciaDeudaGub").prop('disabled', true);
	    $("#frecuenciaDeudaGub").prop('disabled', true);
	    $("#plazoDeudaGub").prop('disabled', true);
	    $("#volumenDeudaGub").prop('disabled', true);
	    $("#expDeudaCorp").prop('disabled', true);
	    $("#frecuenciaDeudaCorp").prop('disabled', true);
	    $("#plazoDeudaCorp").prop('disabled', true);
	    $("#volumenDeudaCorp").prop('disabled', true);
	    $("#expSociedadesInv").prop('disabled', true);
	    $("#frecuenciaSociedadesInv").prop('disabled', true);
	    $("#plazoSociedadesInv").prop('disabled', true);
	    $("#volumenSociedadesInv").prop('disabled', true);
	    $("#expValoresEst").prop('disabled', true);
	    $("#frecuenciaValoresEst").prop('disabled', true);
	    $("#plazoValoresEst").prop('disabled', true);
	    $("#volumenValoresEst").prop('disabled', true);
	    $("#expCertificadosBur").prop('disabled', true);
	    $("#frecuenciaCertificadosBur").prop('disabled', true);
	    $("#plazoCertificadosBur").prop('disabled', true);
	    $("#volumenCertificadosBur").prop('disabled', true);
	    $("#tieneLimitante").prop('disabled', true);
	    $("#porcentajeTotalPatrimonio").prop('disabled', true);
	    $("#porcentajeIngresoAnual").prop('disabled', true);
	    $("#porcentajeInversiones").prop('disabled', true);
	    $("#origenIngresos").prop('disabled', true);
	    $("#perfil").prop('disabled', true);
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
case 'Contrato':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Nombre':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'PerfilActual':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'PersonaPerfilar':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PorcentajeLiquidez':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'MontoLiquidez':
	/*****CAMPO x***/
	error =_that.validator.numericFile(campo);
	if(!error){
		error =_that.validator.validateLengthFile(campo, 0);
	}
	campo = campo.trim().replace(/\s/g, '');
	item[key]=_that.fillInput(campo);
break;
case 'PorcentajeCortoPlazo':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'MontoCortoPlazo':
	/*****CAMPO x***/
	error =_that.validator.numericFile(campo);
	if(!error){
		error =_that.validator.validateLengthFile(campo, 0);
	}
	campo = campo.trim().replace(/\s/g, '');
	item[key]=_that.fillInput(campo);
break;
case 'PorcentajeLargoPlazo':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'MontoLargoPlazo':
	/*****CAMPO x***/
	error =_that.validator.numericFile(campo);
	if(!error){
		error =_that.validator.validateLengthFile(campo, 0);
	}
	campo = campo.trim().replace(/\s/g, '');
	item[key]=_that.fillInput(campo);
break;
case 'PorcentajePatrimonioLiquidoTotal':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'MontoPatrimonioLiquidoTotal':
	/*****CAMPO x***/
	error =_that.validator.numericFile(campo);
	if(!error){
		error =_that.validator.validateLengthFile(campo, 0);
	}
	campo = campo.trim().replace(/\s/g, '');
	item[key]=_that.fillInput(campo);
break;
case 'IntervaloEdad':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'NivelEstudios':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Ocupacion':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ActividadProfesionalAnterior':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ActividadProfesionalActual':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ActividadRelacionadaInversiones':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'EstrategiaCliente':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ClienteAsesoria':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ExperienciaDeudaGub':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FrecuenciaDeudaGub':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PlazoDeudaGub':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'VolumenDeudaGub':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ExpDeudaCorp':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FrecuenciaDeudaCorp':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PlazoDeudaCorp':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'VolumenDeudaCorp':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ExpSociedadesInv':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FrecuenciaSociedadesInv':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PlazoSociedadesInv':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'VolumenSociedadesInv':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ExpValoresEst':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FrecuenciaValoresEst':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PlazoValoresEst':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'VolumenValoresEst':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'ExpCertificadosBur':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'FrecuenciaCertificadosBur':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PlazoCertificadosBur':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'VolumenCertificadosBur':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'TieneLimitante':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PorcentajeTotalPatrimonio':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PorcentajeIngresoAnual':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PorcentajeInversiones':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'OrigenIngresos':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Perfil':
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
		            ,  contrato : datos[i].Contrato
		            ,  nombre : datos[i].Nombre
		            ,  perfilActual : datos[i].PerfilActual
		            ,  personaPerfilar : datos[i].PersonaPerfilar
		            ,  porcentajeLiquidez : datos[i].PorcentajeLiquidez
		            ,  montoLiquidez : datos[i].MontoLiquidez
		            ,  porcentajeCortoPlazo : datos[i].PorcentajeCortoPlazo
		            ,  montoCortoPlazo : datos[i].MontoCortoPlazo
		            ,  porcentajeLargoPlazo : datos[i].PorcentajeLargoPlazo
		            ,  montoLargoPlazo : datos[i].MontoLargoPlazo
		            ,  porcentajePatrimonioLiquidoTotal : datos[i].PorcentajePatrimonioLiquidoTotal
		            ,  montoPatrimonioLiquidoTotal : datos[i].MontoPatrimonioLiquidoTotal
		            ,  intervaloEdad : datos[i].IntervaloEdad
		            ,  nivelEstudios : datos[i].NivelEstudios
		            ,  ocupacion : datos[i].Ocupacion
		            ,  actividadProfesionalAnterior : datos[i].ActividadProfesionalAnterior
		            ,  actividadProfesionalActual : datos[i].ActividadProfesionalActual
		            ,  actividadRelacionadaInversiones : datos[i].ActividadRelacionadaInversiones
		            ,  estrategiaCliente : datos[i].EstrategiaCliente
		            ,  clienteAsesoria : datos[i].ClienteAsesoria
		            ,  experienciaDeudaGub : datos[i].ExperienciaDeudaGub
		            ,  frecuenciaDeudaGub : datos[i].FrecuenciaDeudaGub
		            ,  plazoDeudaGub : datos[i].PlazoDeudaGub
		            ,  volumenDeudaGub : datos[i].VolumenDeudaGub
		            ,  expDeudaCorp : datos[i].ExpDeudaCorp
		            ,  frecuenciaDeudaCorp : datos[i].FrecuenciaDeudaCorp
		            ,  plazoDeudaCorp : datos[i].PlazoDeudaCorp
		            ,  volumenDeudaCorp : datos[i].VolumenDeudaCorp
		            ,  expSociedadesInv : datos[i].ExpSociedadesInv
		            ,  frecuenciaSociedadesInv : datos[i].FrecuenciaSociedadesInv
		            ,  plazoSociedadesInv : datos[i].PlazoSociedadesInv
		            ,  volumenSociedadesInv : datos[i].VolumenSociedadesInv
		            ,  expValoresEst : datos[i].ExpValoresEst
		            ,  frecuenciaValoresEst : datos[i].FrecuenciaValoresEst
		            ,  plazoValoresEst : datos[i].PlazoValoresEst
		            ,  volumenValoresEst : datos[i].VolumenValoresEst
		            ,  expCertificadosBur : datos[i].ExpCertificadosBur
		            ,  frecuenciaCertificadosBur : datos[i].FrecuenciaCertificadosBur
		            ,  plazoCertificadosBur : datos[i].PlazoCertificadosBur
		            ,  volumenCertificadosBur : datos[i].VolumenCertificadosBur
		            ,  tieneLimitante : datos[i].TieneLimitante
		            ,  porcentajeTotalPatrimonio : datos[i].PorcentajeTotalPatrimonio
		            ,  porcentajeIngresoAnual : datos[i].PorcentajeIngresoAnual
		            ,  porcentajeInversiones : datos[i].PorcentajeInversiones
		            ,  origenIngresos : datos[i].OrigenIngresos
		            ,  perfil : datos[i].Perfil
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
"Contrato"
	    	, "Nombre"
	    	, "PerfilActual"
	    	, "PersonaPerfilar"
	    	, "PorcentajeLiquidez"
	    	, "MontoLiquidez"
	    	, "PorcentajeCortoPlazo"
	    	, "MontoCortoPlazo"
	    	, "PorcentajeLargoPlazo"
	    	, "MontoLargoPlazo"
	    	, "PorcentajePatrimonioLiquidoTotal"
	    	, "MontoPatrimonioLiquidoTotal"
	    	, "IntervaloEdad"
	    	, "NivelEstudios"
	    	, "Ocupacion"
	    	, "ActividadProfesionalAnterior"
	    	, "ActividadProfesionalActual"
	    	, "ActividadRelacionadaInversiones"
	    	, "EstrategiaCliente"
	    	, "ClienteAsesoria"
	    	, "ExperienciaDeudaGub"
	    	, "FrecuenciaDeudaGub"
	    	, "PlazoDeudaGub"
	    	, "VolumenDeudaGub"
	    	, "ExpDeudaCorp"
	    	, "FrecuenciaDeudaCorp"
	    	, "PlazoDeudaCorp"
	    	, "VolumenDeudaCorp"
	    	, "ExpSociedadesInv"
	    	, "FrecuenciaSociedadesInv"
	    	, "PlazoSociedadesInv"
	    	, "VolumenSociedadesInv"
	    	, "ExpValoresEst"
	    	, "FrecuenciaValoresEst"
	    	, "PlazoValoresEst"
	    	, "VolumenValoresEst"
	    	, "ExpCertificadosBur"
	    	, "FrecuenciaCertificadosBur"
	    	, "PlazoCertificadosBur"
	    	, "VolumenCertificadosBur"
	    	, "TieneLimitante"
	    	, "PorcentajeTotalPatrimonio"
	    	, "PorcentajeIngresoAnual"
	    	, "PorcentajeInversiones"
	    	, "OrigenIngresos"
	    	, "Perfil"
	  ];
	  var url = this.LOAD;
	  var name = "ReperfilamientoPersonaFisica"; 
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
{ header: "Contrato", field: "contrato" }
     	    	
, { header: "Nombre", field: "nombre" }
     	    	
, { header: "PerfilActual", field: "perfilActual" }
     	    	
, { header: "PersonaPerfilar", field: "personaPerfilar" }
     	    	
, { header: "PorcentajeLiquidez", field: "porcentajeLiquidez" }
     	    	
, { header: "MontoLiquidez", field: "montoLiquidez" }
     	    	
, { header: "PorcentajeCortoPlazo", field: "porcentajeCortoPlazo" }
     	    	
, { header: "MontoCortoPlazo", field: "montoCortoPlazo" }
     	    	
, { header: "PorcentajeLargoPlazo", field: "porcentajeLargoPlazo" }
     	    	
, { header: "MontoLargoPlazo", field: "montoLargoPlazo" }
     	    	
, { header: "PorcentajePatrimonioLiquidoTotal", field: "porcentajePatrimonioLiquidoTotal" }
     	    	
, { header: "MontoPatrimonioLiquidoTotal", field: "montoPatrimonioLiquidoTotal" }
     	    	
, { header: "IntervaloEdad", field: "intervaloEdad" }
     	    	
, { header: "NivelEstudios", field: "nivelEstudios" }
     	    	
, { header: "Ocupacion", field: "ocupacion" }
     	    	
, { header: "ActividadProfesionalAnterior", field: "actividadProfesionalAnterior" }
     	    	
, { header: "ActividadProfesionalActual", field: "actividadProfesionalActual" }
     	    	
, { header: "ActividadRelacionadaInversiones", field: "actividadRelacionadaInversiones" }
     	    	
, { header: "EstrategiaCliente", field: "estrategiaCliente" }
     	    	
, { header: "ClienteAsesoria", field: "clienteAsesoria" }
     	    	
, { header: "ExperienciaDeudaGub", field: "experienciaDeudaGub" }
     	    	
, { header: "FrecuenciaDeudaGub", field: "frecuenciaDeudaGub" }
     	    	
, { header: "PlazoDeudaGub", field: "plazoDeudaGub" }
     	    	
, { header: "VolumenDeudaGub", field: "volumenDeudaGub" }
     	    	
, { header: "ExpDeudaCorp", field: "expDeudaCorp" }
     	    	
, { header: "FrecuenciaDeudaCorp", field: "frecuenciaDeudaCorp" }
     	    	
, { header: "PlazoDeudaCorp", field: "plazoDeudaCorp" }
     	    	
, { header: "VolumenDeudaCorp", field: "volumenDeudaCorp" }
     	    	
, { header: "ExpSociedadesInv", field: "expSociedadesInv" }
     	    	
, { header: "FrecuenciaSociedadesInv", field: "frecuenciaSociedadesInv" }
     	    	
, { header: "PlazoSociedadesInv", field: "plazoSociedadesInv" }
     	    	
, { header: "VolumenSociedadesInv", field: "volumenSociedadesInv" }
     	    	
, { header: "ExpValoresEst", field: "expValoresEst" }
     	    	
, { header: "FrecuenciaValoresEst", field: "frecuenciaValoresEst" }
     	    	
, { header: "PlazoValoresEst", field: "plazoValoresEst" }
     	    	
, { header: "VolumenValoresEst", field: "volumenValoresEst" }
     	    	
, { header: "ExpCertificadosBur", field: "expCertificadosBur" }
     	    	
, { header: "FrecuenciaCertificadosBur", field: "frecuenciaCertificadosBur" }
     	    	
, { header: "PlazoCertificadosBur", field: "plazoCertificadosBur" }
     	    	
, { header: "VolumenCertificadosBur", field: "volumenCertificadosBur" }
     	    	
, { header: "TieneLimitante", field: "tieneLimitante" }
     	    	
, { header: "PorcentajeTotalPatrimonio", field: "porcentajeTotalPatrimonio" }
     	    	
, { header: "PorcentajeIngresoAnual", field: "porcentajeIngresoAnual" }
     	    	
, { header: "PorcentajeInversiones", field: "porcentajeInversiones" }
     	    	
, { header: "OrigenIngresos", field: "origenIngresos" }
     	    	
, { header: "Perfil", field: "perfil" }
     	    	
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
		   !_that.validator.isEmpty($('#contrato').val())
		   
		   || !_that.validator.isEmpty($('#nombre').val())
		   
		   || !_that.validator.isEmpty($('#perfilActual').val())
		   
		   || !_that.validator.isEmpty($('#personaPerfilar').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeLiquidez').val())
		   
		   || !_that.validator.isEmpty($('#montoLiquidez').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeCortoPlazo').val())
		   
		   || !_that.validator.isEmpty($('#montoCortoPlazo').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeLargoPlazo').val())
		   
		   || !_that.validator.isEmpty($('#montoLargoPlazo').val())
		   
		   || !_that.validator.isEmpty($('#porcentajePatrimonioLiquidoTotal').val())
		   
		   || !_that.validator.isEmpty($('#montoPatrimonioLiquidoTotal').val())
		   
		   || !_that.validator.isEmpty($('#intervaloEdad').val())
		   
		   || !_that.validator.isEmpty($('#nivelEstudios').val())
		   
		   || !_that.validator.isEmpty($('#ocupacion').val())
		   
		   || !_that.validator.isEmpty($('#actividadProfesionalAnterior').val())
		   
		   || !_that.validator.isEmpty($('#actividadProfesionalActual').val())
		   
		   || !_that.validator.isEmpty($('#actividadRelacionadaInversiones').val())
		   
		   || !_that.validator.isEmpty($('#estrategiaCliente').val())
		   
		   || !_that.validator.isEmpty($('#clienteAsesoria').val())
		   
		   || !_that.validator.isEmpty($('#experienciaDeudaGub').val())
		   
		   || !_that.validator.isEmpty($('#frecuenciaDeudaGub').val())
		   
		   || !_that.validator.isEmpty($('#plazoDeudaGub').val())
		   
		   || !_that.validator.isEmpty($('#volumenDeudaGub').val())
		   
		   || !_that.validator.isEmpty($('#expDeudaCorp').val())
		   
		   || !_that.validator.isEmpty($('#frecuenciaDeudaCorp').val())
		   
		   || !_that.validator.isEmpty($('#plazoDeudaCorp').val())
		   
		   || !_that.validator.isEmpty($('#volumenDeudaCorp').val())
		   
		   || !_that.validator.isEmpty($('#expSociedadesInv').val())
		   
		   || !_that.validator.isEmpty($('#frecuenciaSociedadesInv').val())
		   
		   || !_that.validator.isEmpty($('#plazoSociedadesInv').val())
		   
		   || !_that.validator.isEmpty($('#volumenSociedadesInv').val())
		   
		   || !_that.validator.isEmpty($('#expValoresEst').val())
		   
		   || !_that.validator.isEmpty($('#frecuenciaValoresEst').val())
		   
		   || !_that.validator.isEmpty($('#plazoValoresEst').val())
		   
		   || !_that.validator.isEmpty($('#volumenValoresEst').val())
		   
		   || !_that.validator.isEmpty($('#expCertificadosBur').val())
		   
		   || !_that.validator.isEmpty($('#frecuenciaCertificadosBur').val())
		   
		   || !_that.validator.isEmpty($('#plazoCertificadosBur').val())
		   
		   || !_that.validator.isEmpty($('#volumenCertificadosBur').val())
		   
		   || !_that.validator.isEmpty($('#tieneLimitante').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeTotalPatrimonio').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeIngresoAnual').val())
		   
		   || !_that.validator.isEmpty($('#porcentajeInversiones').val())
		   
		   || !_that.validator.isEmpty($('#origenIngresos').val())
		   
		   || !_that.validator.isEmpty($('#perfil').val())
		   
		 ){
		
			$('#contrato').val('');
			$('#nombre').val('');
			$('#perfilActual').val('');
			$('#personaperfilar').val('');
			$('#porcentajeLiquidez').val('');
			$('#montoLiquidez').val('');
			$('#porcentajeCortoPlazo').val('');
			$('#montoCortoPlazo').val('');
			$('#porcentajeLargoPlazo').val('');
			$('#montoLargoPlazo').val('');
			$('#porcentajePatrimonioLiquidoTotal').val('');
			$('#montoPatrimonioLiquidoTotal').val('');
			$('#intervaloedad').val('');
			$('#nivelestudios').val('');
			$('#ocupacion').val('');
			$('#actividadprofesionalanterior').val('');
			$('#actividadprofesionalactual').val('');
			$('#actividadrelacionadainversiones').val('');
			$('#estrategiacliente').val('');
			$('#clienteasesoria').val('');
			$('#experienciadeudagub').val('');
			$('#frecuenciadeudagub').val('');
			$('#plazodeudagub').val('');
			$('#volumendeudagub').val('');
			$('#expdeudacorp').val('');
			$('#frecuenciadeudacorp').val('');
			$('#plazodeudacorp').val('');
			$('#volumendeudacorp').val('');
			$('#expsociedadesinv').val('');
			$('#frecuenciasociedadesinv').val('');
			$('#plazosociedadesinv').val('');
			$('#volumensociedadesinv').val('');
			$('#expvaloresest').val('');
			$('#frecuenciavaloresest').val('');
			$('#plazovaloresest').val('');
			$('#volumenvaloresest').val('');
			$('#expcertificadosbur').val('');
			$('#frecuenciacertificadosbur').val('');
			$('#plazocertificadosbur').val('');
			$('#volumencertificadosbur').val('');
			$('#tienelimitante').val('');
			$('#porcentajetotalpatrimonio').val('');
			$('#porcentajeingresoanual').val('');
			$('#porcentajeinversiones').val('');
			$('#origeningresos').val('');
			$('#perfil').val('');
			_that.init();
		}
	}
	
	$(document).ready(function () {
	  myModule = new Catalogo();
	  myModule.init();
	  
	});

