<operacionesefectivoscreen>
	<page id="operacionesefectivoscreen" title="Instrucciones de Efectivo">
		<formbox id="instruccionefectivoform-98" title="">
			<panel label="Captura de Efectivo">
				<div class="row">
					<div class="col-md-2 col-md-offset-4 ">
						<select-box id="sucursal" type="select" placeholder="Sucursal" required=true>
							<option-box id="sucursal-DUMMY1" label="Dummy 1" />
							<option-box id="sucursal-DUMMY2" label="Dummy 2" />
							<option-box id="sucursal-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 ">
						<select-box id="operacion" type="select" placeholder="Operación" required=true>
							<option-box id="operacion-DUMMY1" label="Dummy 1" />
							<option-box id="operacion-DUMMY2" label="Dummy 2" />
							<option-box id="operacion-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
					<div class="col-md-4 ">
						<select-box id="tipo" type="select" placeholder="Tipo Operación" required=true>
							<option-box id="tipo-DUMMY1" label="Dummy 1" />
							<option-box id="tipo-DUMMY2" label="Dummy 2" />
							<option-box id="tipo-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 ">
						<select-box id="medliq" type="select" placeholder="Med. Liquidación" required=true>
							<option-box id="medliq-DUMMY1" label="Dummy 1" />
							<option-box id="medliq-DUMMY2" label="Dummy 2" />
							<option-box id="medliq-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 ">
						<inputbox id="contrato" type="text" label="Contrato" value="" placeholder="Contrato" required=true disabled=false />
					</div>
					<div class="col-md-6 ">
						<inputbox id="subtipoportafolio" type="text" label="Subtipo de Portafolio" value="" placeholder="Subtipo de Portafolio" required=true disabled=false />
					</div>
					<div class="col-md-2 ">
						<inputbox id="digito" type="text" label="Dígito" value="" placeholder="Dígito" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 ">
						<inputbox id="titular" type="text" label="Titular" value="" placeholder="Titular" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-8 ">
						<inputbox id="saldo" type="currency" label="Saldo" value=""  placeholder="Saldo" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
				</div>
			</panel>
			<panel label="Captura de Traspasos de Efectivo">
				<div class="row">
					<div class="col-md-3 ">
						<inputbox id="contratoegreso" type="text" label="Contrato" value="" placeholder="Contrato" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<inputbox id="digitoegreso" type="text" label="Dígito" value="" placeholder="Dígito" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<inputbox id="saldoinicialegreso" type="currency" label="Saldo Inicial" value=""  placeholder="Saldo Inicial" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
					<div class="col-md-3 ">
						<inputbox id="saldocalculadoegreso" type="currency" label="Saldo Calculado" value=""  placeholder="Saldo Calculado" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 ">
						<select-box id="benefegreso" type="select" placeholder="Benef.">
							<option-box id="Thzs99ge" label="Odit recusandae quo sapiente placeat." />
							<option-box id="xGwdRoB8" label="Numquam odit est provident consequatur mollitia." />
							<option-box id="7QDnhcvv" label="Quo quam facere sint." />
							<option-box id="e9KSMAae" label="Itaque mollitia est." />
							<option-box id="OnEJ6X0E" label="Est ex voluptatem sit assumenda velit aperiam." />
						</select-box>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 ">
						<inputbox id="contratoingreso" type="text" label="Contrato" value="" placeholder="Contrato" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<inputbox id="digitoingreso" type="text" label="Dígito" value="" placeholder="Dígito" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<inputbox id="saldoinicialingreso" type="currency" label="Saldo Inicial" value=""  placeholder="Saldo Inicial" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
					<div class="col-md-3 ">
						<inputbox id="saldocalculadoingreso" type="currency" label="Saldo Calculado" value=""  placeholder="Saldo Calculado" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 ">
						<select-box id="benefingreso" type="select" placeholder="Benef. --">
							<option-box id="LlbEGs1b" label="Rem qui voluptas delectus." />
							<option-box id="mWsyGfYn" label="Est voluptas atque et aut ut et." />
							<option-box id="AS08FGLy" label="Cum voluptatibus consequatur cum non et." />
							<option-box id="zxQt6mWW" label="Quia velit labore." />
							<option-box id="ARjOV1xj" label="Voluptatibus atque consectetur." />
						</select-box>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 ">
						<inputbox id="importeingreso" type="currency" label="Importe" value=""  placeholder="Importe" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
				</div>
			</panel>
			<div class="ln_solid"></div>
			<submit-button id="procesartraspasosefectivocommand" to="/pantallas/operacionesefectivoscreen/" action="custom" icon="?" caption="Procesar" type="normal" state="primary" ></submit-button>
			<submit-button id="cancelartraspasosefectivoflow" to="/pantallas/operacionesefectivoscreen/" action="custom" icon="fa fa-check" caption="Cancelar" type="outlined" state="primary" ></submit-button>
		</formbox>
		<div class="ln_solid"></div>
	</page>
</operacionesefectivoscreen>
