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
			+'						<legend>Titular</legend>'
			
		  
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="nombre" class="control-label">Nombre</label>'
		  +'							<div class="controls">'
		  +'								<input id="nombre" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="nombre">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="actividad" class="control-label">Actividad</label>'
		  +'							<div class="controls">'
		  +'								<input id="actividad" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="actividad">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="noClienteBanamex" class="control-label">No. Cliente Banamex</label>'
		  +'							<div class="controls">'
		  +'								<input id="noClienteBanamex" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="noClienteBanamex">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="inst" class="control-label">Inst</label>'
		  +'							<div class="controls">'
		  +'								<input id="inst" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="inst">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="noCta" class="control-label">No. Cta</label>'
		  +'							<div class="controls">'
		  +'								<input id="noCta" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="noCta">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="suc" class="control-label">Suc.</label>'
		  +'							<div class="controls">'
		  +'								<input id="suc" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="suc">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="clabe" class="control-label">CLABE</label>'
		  +'							<div class="controls">'
		  +'								<input id="clabe" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="clabe">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="calle" class="control-label">Calle</label>'
		  +'							<div class="controls">'
		  +'								<input id="calle" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="calle">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="noExt" class="control-label">No. Exterior</label>'
		  +'							<div class="controls">'
		  +'								<input id="noExt" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="noExt">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="noInterior" class="control-label">No. Interior</label>'
		  +'							<div class="controls">'
		  +'								<input id="noInterior" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="noInterior">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="mexExtr" class="control-label">CLABE</label>'
		  +'							<div class="controls">'
		  +'								<input id="mexExtr" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="mexExtr">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="cp" class="control-label">C.P.</label>'
		  +'							<div class="controls">'
		  +'								<input id="cp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="cp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="estado" class="control-label">Estado</label>'
		  +'							<div class="controls">'
		  +'								<input id="estado" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="estado">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="delMpo" class="control-label">Del/Mpo</label>'
		  +'							<div class="controls">'
		  +'								<input id="delMpo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="delMpo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="ciudad" class="control-label">Ciudad</label>'
		  +'							<div class="controls">'
		  +'								<input id="ciudad" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="ciudad">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="colonia" class="control-label">Colonia</label>'
		  +'							<div class="controls">'
		  +'								<input id="colonia" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="colonia">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="correspondencia" class="control-label">¿Quieres que la correspondencia llegue al domicilio anterior?</label>'
		  +'							<div class="controls">'
		  +'								<input id="correspondencia" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="correspondencia">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="rfc" class="control-label">R.F.C.(Con Homoclave)</label>'
		  +'							<div class="controls">'
		  +'								<input id="rfc" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="rfc">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="curp" class="control-label">CURP</label>'
		  +'							<div class="controls">'
		  +'								<input id="curp" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="curp">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="fecNac" class="control-label">Fecha Nac.</label>'
		  +'							<div class="controls">'
		  +'								<input id="fecNac" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="fecNac">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="escolaridad" class="control-label">Escolaridad</label>'
		  +'							<div class="controls">'
		  +'								<input id="escolaridad" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="escolaridad">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="edoCivil" class="control-label">Edo. Civil</label>'
		  +'							<div class="controls">'
		  +'								<input id="edoCivil" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="edoCivil">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="sexo" class="control-label">Sexo</label>'
		  +'							<div class="controls">'
		  +'								<input id="sexo" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="sexo">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="tipoVivienda" class="control-label">Tipo Vivienda</label>'
		  +'							<div class="controls">'
		  +'								<input id="tipoVivienda" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="tipoVivienda">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="calidadMigratoria" class="control-label">C. Migratoria</label>'
		  +'							<div class="controls">'
		  +'								<input id="calidadMigratoria" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="calidadMigratoria">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="paisResidencia" class="control-label">P. Residencia</label>'
		  +'							<div class="controls">'
		  +'								<input id="paisResidencia" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="paisResidencia">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="nacionalidad" class="control-label">Nacionalidad</label>'
		  +'							<div class="controls">'
		  +'								<input id="nacionalidad" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="nacionalidad">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="paisNac" class="control-label">País Nac.</label>'
		  +'							<div class="controls">'
		  +'								<input id="paisNac" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="paisNac">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="edoNac" class="control-label">Edo. Nac.</label>'
		  +'							<div class="controls">'
		  +'								<input id="edoNac" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="edoNac">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="empleadoGroFinBanamex" class="control-label">¿El cliente es empleado del Grupo Financiero Banamex?</label>'
		  +'							<div class="controls">'
		  +'								<input id="empleadoGroFinBanamex" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="empleadoGroFinBanamex">'
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
			//+'		<fieldset class="fieldset"><legend>Titular</legend>'
			+'				<div class="row" style="display:  inline-flex;">'
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
			+'								<label for="actividad" class="control-label">Actividad</label>'
			+'								<div class="controls">'
			+'									<input id="actividad" class="form-control" data-type = "number" maxlength="0" data-length="0" name="actividad">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="noClienteBanamex" class="control-label">No. Cliente Banamex</label>'
			+'								<div class="controls">'
			+'									<input id="noClienteBanamex" class="form-control" data-type = "number" maxlength="0" data-length="0" name="noClienteBanamex">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="noCta" class="control-label">No. Cta</label>'
			+'								<div class="controls">'
			+'									<input id="noCta" class="form-control" data-type = "number" maxlength="0" data-length="0" name="noCta">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="suc" class="control-label">Suc.</label>'
			+'								<div class="controls">'
			+'									<input id="suc" class="form-control" data-type = "number" maxlength="0" data-length="0" name="suc">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="clabe" class="control-label">CLABE</label>'
			+'								<div class="controls">'
			+'									<input id="clabe" class="form-control" data-type = "number" maxlength="0" data-length="0" name="clabe">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="calle" class="control-label">Calle</label>'
			+'								<div class="controls">'
			+'									<input id="calle" class="form-control" data-type = "number" maxlength="0" data-length="0" name="calle">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="noExt" class="control-label">No. Exterior</label>'
			+'								<div class="controls">'
			+'									<input id="noExt" class="form-control" data-type = "number" maxlength="0" data-length="0" name="noExt">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="noInterior" class="control-label">No. Interior</label>'
			+'								<div class="controls">'
			+'									<input id="noInterior" class="form-control" data-type = "number" maxlength="0" data-length="0" name="noInterior">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="mexExtr" class="control-label">CLABE</label>'
			+'								<div class="controls">'
			+'									<input id="mexExtr" class="form-control" data-type = "number" maxlength="0" data-length="0" name="mexExtr">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="cp" class="control-label">C.P.</label>'
			+'								<div class="controls">'
			+'									<input id="cp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="cp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="estado" class="control-label">Estado</label>'
			+'								<div class="controls">'
			+'									<input id="estado" class="form-control" data-type = "number" maxlength="0" data-length="0" name="estado">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="delMpo" class="control-label">Del/Mpo</label>'
			+'								<div class="controls">'
			+'									<input id="delMpo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="delMpo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="ciudad" class="control-label">Ciudad</label>'
			+'								<div class="controls">'
			+'									<input id="ciudad" class="form-control" data-type = "number" maxlength="0" data-length="0" name="ciudad">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="colonia" class="control-label">Colonia</label>'
			+'								<div class="controls">'
			+'									<input id="colonia" class="form-control" data-type = "number" maxlength="0" data-length="0" name="colonia">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="correspondencia" class="control-label">¿Quieres que la correspondencia llegue al domicilio anterior?</label>'
			+'								<div class="controls">'
			+'									<input id="correspondencia" class="form-control" data-type = "number" maxlength="0" data-length="0" name="correspondencia">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="rfc" class="control-label">R.F.C.(Con Homoclave)</label>'
			+'								<div class="controls">'
			+'									<input id="rfc" class="form-control" data-type = "number" maxlength="0" data-length="0" name="rfc">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="curp" class="control-label">CURP</label>'
			+'								<div class="controls">'
			+'									<input id="curp" class="form-control" data-type = "number" maxlength="0" data-length="0" name="curp">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="fecNac" class="control-label">Fecha Nac.</label>'
			+'								<div class="controls">'
			+'									<input id="fecNac" class="form-control" data-type = "number" maxlength="0" data-length="0" name="fecNac">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="escolaridad" class="control-label">Escolaridad</label>'
			+'								<div class="controls">'
			+'									<input id="escolaridad" class="form-control" data-type = "number" maxlength="0" data-length="0" name="escolaridad">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="edoCivil" class="control-label">Edo. Civil</label>'
			+'								<div class="controls">'
			+'									<input id="edoCivil" class="form-control" data-type = "number" maxlength="0" data-length="0" name="edoCivil">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="sexo" class="control-label">Sexo</label>'
			+'								<div class="controls">'
			+'									<input id="sexo" class="form-control" data-type = "number" maxlength="0" data-length="0" name="sexo">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="tipoVivienda" class="control-label">Tipo Vivienda</label>'
			+'								<div class="controls">'
			+'									<input id="tipoVivienda" class="form-control" data-type = "number" maxlength="0" data-length="0" name="tipoVivienda">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="calidadMigratoria" class="control-label">C. Migratoria</label>'
			+'								<div class="controls">'
			+'									<input id="calidadMigratoria" class="form-control" data-type = "number" maxlength="0" data-length="0" name="calidadMigratoria">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="paisResidencia" class="control-label">P. Residencia</label>'
			+'								<div class="controls">'
			+'									<input id="paisResidencia" class="form-control" data-type = "number" maxlength="0" data-length="0" name="paisResidencia">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="nacionalidad" class="control-label">Nacionalidad</label>'
			+'								<div class="controls">'
			+'									<input id="nacionalidad" class="form-control" data-type = "number" maxlength="0" data-length="0" name="nacionalidad">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="paisNac" class="control-label">País Nac.</label>'
			+'								<div class="controls">'
			+'									<input id="paisNac" class="form-control" data-type = "number" maxlength="0" data-length="0" name="paisNac">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="edoNac" class="control-label">Edo. Nac.</label>'
			+'								<div class="controls">'
			+'									<input id="edoNac" class="form-control" data-type = "number" maxlength="0" data-length="0" name="edoNac">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="empleadoGroFinBanamex" class="control-label">¿El cliente es empleado del Grupo Financiero Banamex?</label>'
			+'								<div class="controls">'
			+'									<input id="empleadoGroFinBanamex" class="form-control" data-type = "number" maxlength="0" data-length="0" name="empleadoGroFinBanamex">'
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
{ header: "Nombre", field: "nombre" }
	    	
, { header: "Actividad", field: "actividad" }
	    	
, { header: "No. Cliente Banamex", field: "noClienteBanamex" }
	    	
, { header: "Inst", field: "inst" }
	    	
, { header: "No. Cta", field: "noCta" }
	    	
, { header: "Suc.", field: "suc" }
	    	
, { header: "CLABE", field: "clabe" }
	    	
, { header: "Calle", field: "calle" }
	    	
, { header: "No. Exterior", field: "noExt" }
	    	
, { header: "No. Interior", field: "noInterior" }
	    	
, { header: "CLABE", field: "mexExtr" }
	    	
, { header: "C.P.", field: "cp" }
	    	
, { header: "Estado", field: "estado" }
	    	
, { header: "Del/Mpo", field: "delMpo" }
	    	
, { header: "Ciudad", field: "ciudad" }
	    	
, { header: "Colonia", field: "colonia" }
	    	
, { header: "¿Quieres que la correspondencia llegue al domicilio anterior?", field: "correspondencia" }
	    	
, { header: "R.F.C.(Con Homoclave)", field: "rfc" }
	    	
, { header: "CURP", field: "curp" }
	    	
, { header: "Fecha Nac.", field: "fecNac" }
	    	
, { header: "Escolaridad", field: "escolaridad" }
	    	
, { header: "Edo. Civil", field: "edoCivil" }
	    	
, { header: "Sexo", field: "sexo" }
	    	
, { header: "Tipo Vivienda", field: "tipoVivienda" }
	    	
, { header: "C. Migratoria", field: "calidadMigratoria" }
	    	
, { header: "P. Residencia", field: "paisResidencia" }
	    	
, { header: "Nacionalidad", field: "nacionalidad" }
	    	
, { header: "País Nac.", field: "paisNac" }
	    	
, { header: "Edo. Nac.", field: "edoNac" }
	    	
, { header: "¿El cliente es empleado del Grupo Financiero Banamex?", field: "empleadoGroFinBanamex" }
	    	
	        ];
	    var i,j;
	    var html = "";
	    
	    html +="<h2>Titular</h2>";
	    
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
	    $("#nombre").prop('disabled', true);
	    $("#actividad").prop('disabled', true);
	    $("#noClienteBanamex").prop('disabled', true);
	    $("#inst").prop('disabled', true);
	    $("#noCta").prop('disabled', true);
	    $("#suc").prop('disabled', true);
	    $("#clabe").prop('disabled', true);
	    $("#calle").prop('disabled', true);
	    $("#noExt").prop('disabled', true);
	    $("#noInterior").prop('disabled', true);
	    $("#mexExtr").prop('disabled', true);
	    $("#cp").prop('disabled', true);
	    $("#estado").prop('disabled', true);
	    $("#delMpo").prop('disabled', true);
	    $("#ciudad").prop('disabled', true);
	    $("#colonia").prop('disabled', true);
	    $("#correspondencia").prop('disabled', true);
	    $("#rfc").prop('disabled', true);
	    $("#curp").prop('disabled', true);
	    $("#fecNac").prop('disabled', true);
	    $("#escolaridad").prop('disabled', true);
	    $("#edoCivil").prop('disabled', true);
	    $("#sexo").prop('disabled', true);
	    $("#tipoVivienda").prop('disabled', true);
	    $("#calidadMigratoria").prop('disabled', true);
	    $("#paisResidencia").prop('disabled', true);
	    $("#nacionalidad").prop('disabled', true);
	    $("#paisNac").prop('disabled', true);
	    $("#edoNac").prop('disabled', true);
	    $("#empleadoGroFinBanamex").prop('disabled', true);
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
case 'Nombre':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Actividad':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'NoClienteBanamex':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Inst':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'NoCta':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Suc':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Clabe':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Calle':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'NoExt':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'NoInterior':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'MexExtr':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Cp':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Estado':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'DelMpo':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Ciudad':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Colonia':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Correspondencia':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Rfc':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Curp':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FecNac':
	/*****CAMPO x***/
	error =_that.validator.numericFile(campo);
	if(!error){
		error =_that.validator.validateLengthFile(campo, 0);
	}
	campo = campo.trim().replace(/\s/g, '');
	item[key]=_that.fillInput(campo);
break;
case 'Escolaridad':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'EdoCivil':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Sexo':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'TipoVivienda':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'CalidadMigratoria':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PaisResidencia':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Nacionalidad':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'PaisNac':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'EdoNac':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'EmpleadoGroFinBanamex':
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
		            ,  nombre : datos[i].Nombre
		            ,  actividad : datos[i].Actividad
		            ,  noClienteBanamex : datos[i].NoClienteBanamex
		            ,  inst : datos[i].Inst
		            ,  noCta : datos[i].NoCta
		            ,  suc : datos[i].Suc
		            ,  clabe : datos[i].Clabe
		            ,  calle : datos[i].Calle
		            ,  noExt : datos[i].NoExt
		            ,  noInterior : datos[i].NoInterior
		            ,  mexExtr : datos[i].MexExtr
		            ,  cp : datos[i].Cp
		            ,  estado : datos[i].Estado
		            ,  delMpo : datos[i].DelMpo
		            ,  ciudad : datos[i].Ciudad
		            ,  colonia : datos[i].Colonia
		            ,  correspondencia : datos[i].Correspondencia
		            ,  rfc : datos[i].Rfc
		            ,  curp : datos[i].Curp
		            ,  fecNac : datos[i].FecNac
		            ,  escolaridad : datos[i].Escolaridad
		            ,  edoCivil : datos[i].EdoCivil
		            ,  sexo : datos[i].Sexo
		            ,  tipoVivienda : datos[i].TipoVivienda
		            ,  calidadMigratoria : datos[i].CalidadMigratoria
		            ,  paisResidencia : datos[i].PaisResidencia
		            ,  nacionalidad : datos[i].Nacionalidad
		            ,  paisNac : datos[i].PaisNac
		            ,  edoNac : datos[i].EdoNac
		            ,  empleadoGroFinBanamex : datos[i].EmpleadoGroFinBanamex
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
"Nombre"
	    	, "Actividad"
	    	, "NoClienteBanamex"
	    	, "Inst"
	    	, "NoCta"
	    	, "Suc"
	    	, "Clabe"
	    	, "Calle"
	    	, "NoExt"
	    	, "NoInterior"
	    	, "MexExtr"
	    	, "Cp"
	    	, "Estado"
	    	, "DelMpo"
	    	, "Ciudad"
	    	, "Colonia"
	    	, "Correspondencia"
	    	, "Rfc"
	    	, "Curp"
	    	, "FecNac"
	    	, "Escolaridad"
	    	, "EdoCivil"
	    	, "Sexo"
	    	, "TipoVivienda"
	    	, "CalidadMigratoria"
	    	, "PaisResidencia"
	    	, "Nacionalidad"
	    	, "PaisNac"
	    	, "EdoNac"
	    	, "EmpleadoGroFinBanamex"
	  ];
	  var url = this.LOAD;
	  var name = "TitularContrato"; 
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
{ header: "Nombre", field: "nombre" }
     	    	
, { header: "Actividad", field: "actividad" }
     	    	
, { header: "NoClienteBanamex", field: "noClienteBanamex" }
     	    	
, { header: "Inst", field: "inst" }
     	    	
, { header: "NoCta", field: "noCta" }
     	    	
, { header: "Suc", field: "suc" }
     	    	
, { header: "Clabe", field: "clabe" }
     	    	
, { header: "Calle", field: "calle" }
     	    	
, { header: "NoExt", field: "noExt" }
     	    	
, { header: "NoInterior", field: "noInterior" }
     	    	
, { header: "MexExtr", field: "mexExtr" }
     	    	
, { header: "Cp", field: "cp" }
     	    	
, { header: "Estado", field: "estado" }
     	    	
, { header: "DelMpo", field: "delMpo" }
     	    	
, { header: "Ciudad", field: "ciudad" }
     	    	
, { header: "Colonia", field: "colonia" }
     	    	
, { header: "Correspondencia", field: "correspondencia" }
     	    	
, { header: "Rfc", field: "rfc" }
     	    	
, { header: "Curp", field: "curp" }
     	    	
, { header: "FecNac", field: "fecNac" }
     	    	
, { header: "Escolaridad", field: "escolaridad" }
     	    	
, { header: "EdoCivil", field: "edoCivil" }
     	    	
, { header: "Sexo", field: "sexo" }
     	    	
, { header: "TipoVivienda", field: "tipoVivienda" }
     	    	
, { header: "CalidadMigratoria", field: "calidadMigratoria" }
     	    	
, { header: "PaisResidencia", field: "paisResidencia" }
     	    	
, { header: "Nacionalidad", field: "nacionalidad" }
     	    	
, { header: "PaisNac", field: "paisNac" }
     	    	
, { header: "EdoNac", field: "edoNac" }
     	    	
, { header: "EmpleadoGroFinBanamex", field: "empleadoGroFinBanamex" }
     	    	
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
		   !_that.validator.isEmpty($('#nombre').val())
		   
		   || !_that.validator.isEmpty($('#actividad').val())
		   
		   || !_that.validator.isEmpty($('#noClienteBanamex').val())
		   
		   || !_that.validator.isEmpty($('#inst').val())
		   
		   || !_that.validator.isEmpty($('#noCta').val())
		   
		   || !_that.validator.isEmpty($('#suc').val())
		   
		   || !_that.validator.isEmpty($('#clabe').val())
		   
		   || !_that.validator.isEmpty($('#calle').val())
		   
		   || !_that.validator.isEmpty($('#noExt').val())
		   
		   || !_that.validator.isEmpty($('#noInterior').val())
		   
		   || !_that.validator.isEmpty($('#mexExtr').val())
		   
		   || !_that.validator.isEmpty($('#cp').val())
		   
		   || !_that.validator.isEmpty($('#estado').val())
		   
		   || !_that.validator.isEmpty($('#delMpo').val())
		   
		   || !_that.validator.isEmpty($('#ciudad').val())
		   
		   || !_that.validator.isEmpty($('#colonia').val())
		   
		   || !_that.validator.isEmpty($('#correspondencia').val())
		   
		   || !_that.validator.isEmpty($('#rfc').val())
		   
		   || !_that.validator.isEmpty($('#curp').val())
		   
		   || !_that.validator.isEmpty($('#fecNac').val())
		   
		   || !_that.validator.isEmpty($('#escolaridad').val())
		   
		   || !_that.validator.isEmpty($('#edoCivil').val())
		   
		   || !_that.validator.isEmpty($('#sexo').val())
		   
		   || !_that.validator.isEmpty($('#tipoVivienda').val())
		   
		   || !_that.validator.isEmpty($('#calidadMigratoria').val())
		   
		   || !_that.validator.isEmpty($('#paisResidencia').val())
		   
		   || !_that.validator.isEmpty($('#nacionalidad').val())
		   
		   || !_that.validator.isEmpty($('#paisNac').val())
		   
		   || !_that.validator.isEmpty($('#edoNac').val())
		   
		   || !_that.validator.isEmpty($('#empleadoGroFinBanamex').val())
		   
		 ){
		
			$('#nombre').val('');
			$('#actividad').val('');
			$('#noClienteBanamex').val('');
			$('#inst').val('');
			$('#noCta').val('');
			$('#suc').val('');
			$('#clabe').val('');
			$('#calle').val('');
			$('#noExt').val('');
			$('#noInterior').val('');
			$('#mexextr').val('');
			$('#cp').val('');
			$('#estado').val('');
			$('#delMpo').val('');
			$('#ciudad').val('');
			$('#colonia').val('');
			$('#correspondencia').val('');
			$('#rfc').val('');
			$('#curp').val('');
			$('#fecNac').val('');
			$('#escolaridad').val('');
			$('#edocivil').val('');
			$('#sexo').val('');
			$('#tipovivienda').val('');
			$('#calidadmigratoria').val('');
			$('#paisresidencia').val('');
			$('#nacionalidad').val('');
			$('#paisnac').val('');
			$('#edonac').val('');
			$('#empleadogrofinbanamex').val('');
			_that.init();
		}
	}
	
	$(document).ready(function () {
	  myModule = new Catalogo();
	  myModule.init();
	  
	});

