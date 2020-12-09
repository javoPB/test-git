<distribucioninstruccionesscreen>
	<page id="distribucioninstruccionesscreen" title="Distribución de Instrucciones">
		<formbox id="distribucioninstruccionesform-98" title="">
			<div class="row">
				<div class="col-md-2 ">
					<select-box id="opcdistrinstrucciones" type="option" placeholder="NOMBRE" required=true>
						<option-box id="opcdistrinstrucciones-INTRADIA" label="Intradía" />
						<option-box id="opcdistrinstrucciones-PROGRAMADOS" label="Programados" />
						<option-box id="opcdistrinstrucciones-HISTORICOS" label="Históricos" />
					</select-box>
				</div>
				<div class="col-md-2 ">
					<inputbox id="contrato" type="text" label="Contrato" value="" placeholder="Contrato" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="foliomov" type="text" label="Folio Mov." value="" placeholder="Folio Mov." required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="digito" type="text" label="Dígito" value="" placeholder="Dígito" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="importeneto" type="text" label="Importe Neto" value="" placeholder="Importe Neto" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<input id="depositos" type="checkbox" class="js-switch" name="Depósitos" value=""> Depósitos<font color="red"> *</font><br>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 ">
					<input id="capturados" type="checkbox" class="js-switch" name="Capturados" value=""> Capturados<font color="red"> *</font><br>
				</div>
				<div class="col-md-2 col-md-offset-8 ">
					<input id="retiros" type="checkbox" class="js-switch" name="Retiros" value=""> Retiros<font color="red"> *</font><br>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-md-offset-10 ">
					<select-box id="sucursal" type="select" placeholder="Sucursal" required=true>
						<option-box id="sucursal-DUMMY1" label="Dummy 1" />
						<option-box id="sucursal-DUMMY2" label="Dummy 2" />
						<option-box id="sucursal-DUMMY3" label="Dummy 3" />
					</select-box>
				</div>
			</div>
			<div class="ln_solid"></div>
		</formbox>
		<div class="ln_solid"></div>
	</page>
</distribucioninstruccionesscreen>
