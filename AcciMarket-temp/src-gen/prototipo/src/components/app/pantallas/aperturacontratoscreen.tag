<aperturacontratoscreen>
	<page id="aperturacontratoscreen" title="Apertura de Contrato">
		<formbox id="aperturacontratoform-98" title="">
			<panel label="Wizzard de Apertura de Contrato">
				<panel label="Datos del Titular">
					<panel label="Medio de Liquidación">
						<div class="row">
							<div class="col-md-3 ">
								<inputbox id="noclientebanamex" type="text" label="No. Cliente Banamex" value="" placeholder="No. Cliente Banamex" required=true disabled=false />
							</div>
							<div class="col-md-3 ">
								<select-box id="inst" type="select" placeholder="Inst" required=true>
									<option-box id="inst-DUMMY1" label="Dummy 1" />
									<option-box id="inst-DUMMY2" label="Dummy 2" />
									<option-box id="inst-DUMMY3" label="Dummy 3" />
								</select-box>
							</div>
							<div class="col-md-2 ">
								<inputbox id="nocta" type="text" label="No. Cta" value="" placeholder="No. Cta" required=true disabled=false />
							</div>
							<div class="col-md-2 ">
								<inputbox id="suc" type="text" label="Suc." value="" placeholder="Suc." required=true disabled=false />
							</div>
							<div class="col-md-2 ">
								<inputbox id="clabe" type="text" label="CLABE" value="" placeholder="CLABE" required=true disabled=false />
							</div>
						</div>
					</panel>
					<panel label="Domicilio Fiscal">
						<div class="row">
							<div class="col-md-4 ">
								<inputbox id="calle" type="text" label="Calle" value="" placeholder="Calle" required=true disabled=false />
								<inputbox id="cp" type="text" label="C.P." value="" placeholder="C.P." required=true disabled=false />
								<select-box id="mexextr" type="option" placeholder="CLABE" required=true>
									<option-box id="mexextr-MEXICO" label="México" />
									<option-box id="mexextr-EXTRANJERO" label="Extranjero" />
								</select-box>
							</div>
							<div class="col-md-4 ">
								<inputbox id="noext" type="text" label="No. Exterior" value="" placeholder="No. Exterior" required=true disabled=false />
								<inputbox id="estado" type="text" label="Estado" value="" placeholder="Estado" required=true disabled=false />
								<inputbox id="ciudad" type="text" label="Ciudad" value="" placeholder="Ciudad" required=true disabled=false />
							</div>
							<div class="col-md-4 ">
								<inputbox id="nointerior" type="text" label="No. Interior" value="" placeholder="No. Interior" required=true disabled=false />
								<inputbox id="delmpo" type="text" label="Del/Mpo" value="" placeholder="Del/Mpo" required=true disabled=false />
								<inputbox id="colonia" type="text" label="Colonia" value="" placeholder="Colonia" required=true disabled=false />
							</div>
						</div>
						<select-box id="correspondencia" type="option" placeholder="¿Quieres que la correspondencia llegue al domicilio anterior?" required=true>
							<option-box id="correspondencia-NO" label="No" />
							<option-box id="correspondencia-SI" label="Si" />
						</select-box>
					</panel>
					<panel label="Datos Generales">
						<div class="row">
							<div class="col-md-4 ">
								<inputbox id="rfc" type="text" label="R.F.C.(Con Homoclave)" value="" placeholder="R.F.C.(Con Homoclave)" required=true disabled=false />
								<select-box id="escolaridad" type="select" placeholder="Escolaridad" required=true>
									<option-box id="escolaridad-DUMMY1" label="Dummy 1" />
									<option-box id="escolaridad-DUMMY2" label="Dummy 2" />
									<option-box id="escolaridad-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="tipovivienda" type="select" placeholder="Tipo Vivienda" required=true>
									<option-box id="tipovivienda-DUMMY1" label="Dummy 1" />
									<option-box id="tipovivienda-DUMMY2" label="Dummy 2" />
									<option-box id="tipovivienda-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="nacionalidad" type="select" placeholder="Nacionalidad" required=true>
									<option-box id="nacionalidad-DUMMY1" label="Dummy 1" />
									<option-box id="nacionalidad-DUMMY2" label="Dummy 2" />
									<option-box id="nacionalidad-DUMMY3" label="Dummy 3" />
								</select-box>
							</div>
							<div class="col-md-4 ">
								<inputbox id="curp" type="text" label="CURP" value="" placeholder="CURP" required=true disabled=false />
								<select-box id="edocivil" type="select" placeholder="Edo. Civil" required=true>
									<option-box id="edocivil-DUMMY1" label="Dummy 1" />
									<option-box id="edocivil-DUMMY2" label="Dummy 2" />
									<option-box id="edocivil-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="calidadmigratoria" type="select" placeholder="C. Migratoria" required=true>
									<option-box id="calidadmigratoria-DUMMY1" label="Dummy 1" />
									<option-box id="calidadmigratoria-DUMMY2" label="Dummy 2" />
									<option-box id="calidadmigratoria-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="paisnac" type="select" placeholder="País Nac." required=true>
									<option-box id="paisnac-DUMMY1" label="Dummy 1" />
									<option-box id="paisnac-DUMMY2" label="Dummy 2" />
									<option-box id="paisnac-DUMMY3" label="Dummy 3" />
								</select-box>
							</div>
							<div class="col-md-4 ">
								<date-picker id="fecnac" type="date" label="Fecha Nac." value="" placeholder="Fecha Nac." required=true disabled=false format="yyyy/mm/dd" mindate="1900-01-01" maxdate="2200-12-31" />
								<select-box id="sexo" type="select" placeholder="Sexo" required=true>
									<option-box id="sexo-DUMMY1" label="Dummy 1" />
									<option-box id="sexo-DUMMY2" label="Dummy 2" />
									<option-box id="sexo-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="paisresidencia" type="select" placeholder="P. Residencia" required=true>
									<option-box id="paisresidencia-DUMMY1" label="Dummy 1" />
									<option-box id="paisresidencia-DUMMY2" label="Dummy 2" />
									<option-box id="paisresidencia-DUMMY3" label="Dummy 3" />
								</select-box>
								<select-box id="edonac" type="select" placeholder="Edo. Nac." required=true>
									<option-box id="edonac-DUMMY1" label="Dummy 1" />
									<option-box id="edonac-DUMMY2" label="Dummy 2" />
									<option-box id="edonac-DUMMY3" label="Dummy 3" />
								</select-box>
							</div>
						</div>
						<select-box id="empleadogrofinbanamex" type="option" placeholder="¿El cliente es empleado del Grupo Financiero Banamex?" required=true>
							<option-box id="empleadogrofinbanamex-NO" label="No" />
							<option-box id="empleadogrofinbanamex-SI" label="Si" />
						</select-box>
					</panel>
				</panel>
			</panel>
			<div class="ln_solid"></div>
		</formbox>
		<div class="ln_solid"></div>
	</page>
</aperturacontratoscreen>
