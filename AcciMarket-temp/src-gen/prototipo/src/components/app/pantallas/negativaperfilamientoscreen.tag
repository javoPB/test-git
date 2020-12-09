<negativaperfilamientoscreen>
	<page id="negativaperfilamientoscreen" title="Negativa de Perfilamiento">
		<formbox id="negativaperfilamientoform-98" title="">
			<div class="row">
				<div class="col-md-3 ">
					<select-box id="contrato" type="select" placeholder="">
						<option-box id="Qb1JLNyj" label="Sapiente doloribus cum at hic beatae earum." />
						<option-box id="oSR7dLHg" label="Rerum eos qui." />
						<option-box id="u9rueVif" label="Molestiae sed cupiditate tempora ea." />
						<option-box id="y6lpbhA7" label="Aut possimus sequi autem in." />
						<option-box id="7XZNtT0v" label="Magni repellat autem reprehenderit nulla dicta." />
					</select-box>
				</div>
				<div class="col-md-6 ">
					<inputbox id="nombre" type="text" label="Nombre" value="" placeholder="Nombre" required=true disabled=false />
				</div>
				<div class="col-md-3 ">
					<inputbox id="perfilactual" type="text" label="Perfil Actual" value="" placeholder="Perfil Actual" required=true disabled=false />
				</div>
			</div>
			<select-box id="personaperfilar" type="select" placeholder="Seleccione la persona que desea perfilar" required=true>
				<option-box id="personaperfilar-DUMMY1" label="Dummy 1" />
				<option-box id="personaperfilar-DUMMY2" label="Dummy 2" />
				<option-box id="personaperfilar-DUMMY3" label="Dummy 3" />
			</select-box>
			<panel label="Mapa de Liquidez">
				<div class="row">
					<div class="col-md-2 ">
						<inputbox id="porcentajeliquidez" type="text" label="% (Liquidez)" value="" placeholder="% (Liquidez)" required=true disabled=false />
						<inputbox id="porcentajecortoplazo" type="text" label="% (Corto Plazo)" value="" placeholder="% (Corto Plazo)" required=true disabled=false />
						<inputbox id="porcentajelargoplazo" type="text" label="% (Largo Plazo)" value="" placeholder="% (Largo Plazo)" required=true disabled=false />
						<inputbox id="porcentajepatrimonioliquidototal" type="text" label="% (Patrimonio l�quido total 100%)" value="" placeholder="% (Patrimonio l�quido total 100%)" required=true disabled=false />
					</div>
					<div class="col-md-2 ">
						<date-picker id="montoliquidez" type="date" label="Monto $ (Liquidez)" value="" placeholder="Monto $ (Liquidez)" required=true disabled=false format="yyyy/mm/dd" mindate="1900-01-01" maxdate="2200-12-31" />
						<inputbox id="montocortoplazo" type="currency" label="Monto $ (Corto Plazo)" value=""  placeholder="Monto $ (Corto Plazo)" required=true disabled=false min=0.00 max=1000000.00 />
						<inputbox id="montolargoplazo" type="currency" label="Monto $ (Largo Plazo)" value=""  placeholder="Monto $ (Largo Plazo)" required=true disabled=false min=0.00 max=1000000.00 />
						<inputbox id="montopatrimonioliquidototal" type="currency" label="Monto $ (Patrimonio l�quido total 100%)" value=""  placeholder="Monto $ (Patrimonio l�quido total 100%)" required=true disabled=false min=0.00 max=1000000.00 />
					</div>
				</div>
			</panel>
			<select-box id="intervaloedad" type="select" placeholder="1.1 Intervalo de Edad" required=true>
				<option-box id="intervaloedad-DUMMY1" label="Dummy 1" />
				<option-box id="intervaloedad-DUMMY2" label="Dummy 2" />
				<option-box id="intervaloedad-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="nivelestudios" type="select" placeholder="1.2 Nivel de Estudios" required=true>
				<option-box id="nivelestudios-DUMMY1" label="Dummy 1" />
				<option-box id="nivelestudios-DUMMY2" label="Dummy 2" />
				<option-box id="nivelestudios-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="ocupacion" type="select" placeholder="1.3 Ocupaci�n" required=true>
				<option-box id="ocupacion-DUMMY1" label="Dummy 1" />
				<option-box id="ocupacion-DUMMY2" label="Dummy 2" />
				<option-box id="ocupacion-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="actividadprofesionalanterior" type="select" placeholder="1.4 Actividad Profesional �Anterior?" required=true>
				<option-box id="actividadprofesionalanterior-DUMMY1" label="Dummy 1" />
				<option-box id="actividadprofesionalanterior-DUMMY2" label="Dummy 2" />
				<option-box id="actividadprofesionalanterior-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="actividadprofesionalactual" type="select" placeholder="Actividad Profesional �Actual?" required=true>
				<option-box id="actividadprofesionalactual-DUMMY1" label="Dummy 1" />
				<option-box id="actividadprofesionalactual-DUMMY2" label="Dummy 2" />
				<option-box id="actividadprofesionalactual-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="actividadrelacionadainversiones" type="option" placeholder="Relacionada con Inversiones" required=true>
				<option-box id="actividadrelacionadainversiones-NO" label="No" />
				<option-box id="actividadrelacionadainversiones-SI" label="Si" />
			</select-box>
			<select-box id="estrategiacliente" type="select" placeholder="1.5 Estrategia de inversi�n del Cliente generalmente utilizada" required=true>
				<option-box id="estrategiacliente-DUMMY1" label="Dummy 1" />
				<option-box id="estrategiacliente-DUMMY2" label="Dummy 2" />
				<option-box id="estrategiacliente-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="clienteasesoria" type="select" placeholder="1.6 El Cliente ha usado asesor�a para la toma de decisiones de inversi�n" required=true>
				<option-box id="clienteasesoria-DUMMY1" label="Dummy 1" />
				<option-box id="clienteasesoria-DUMMY2" label="Dummy 2" />
				<option-box id="clienteasesoria-DUMMY3" label="Dummy 3" />
			</select-box>
			<div class="row">
				<div class="col-md-3 ">
					<select-box id="experienciadeudagub" type="select" placeholder="2.1 Instrumentos de Deuda Gubernamental" required=true>
						<option-box id="experienciadeudagub-NOCONOCE" label="No conoce ni ha intervenido" />
						<option-box id="experienciadeudagub-SOLOCONOCE" label="S�lo conoce" />
						<option-box id="experienciadeudagub-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
					</select-box>
					<select-box id="expdeudacorp" type="select" placeholder="2.2 Instrumentos de Deuda Corporativa" required=true>
						<option-box id="expdeudacorp-NOCONOCE" label="No conoce ni ha intervenido" />
						<option-box id="expdeudacorp-SOLOCONOCE" label="S�lo conoce" />
						<option-box id="expdeudacorp-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
					</select-box>
					<select-box id="expsociedadesinv" type="select" placeholder="2.3 Sociedades de Inversi�n" required=true>
						<option-box id="expsociedadesinv-DUMMY1" label="Dummy 1" />
						<option-box id="expsociedadesinv-DUMMY2" label="Dummy 2" />
						<option-box id="expsociedadesinv-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="expvaloresest" type="select" placeholder="2.4 Valores Estructurados" required=true>
						<option-box id="expvaloresest-DUMMY1" label="Dummy 1" />
						<option-box id="expvaloresest-DUMMY2" label="Dummy 2" />
						<option-box id="expvaloresest-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="expcertificadosbur" type="select" placeholder="2.5 Certificados Burs�tiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados" required=true>
						<option-box id="expcertificadosbur-DUMMY1" label="Dummy 1" />
						<option-box id="expcertificadosbur-DUMMY2" label="Dummy 2" />
						<option-box id="expcertificadosbur-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="exptitulosopc" type="select" placeholder="2.6 T�tulos Opcionales (Warrant)" required=true>
						<option-box id="exptitulosopc-DUMMY1" label="Dummy 1" />
						<option-box id="exptitulosopc-DUMMY2" label="Dummy 2" />
						<option-box id="exptitulosopc-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="expacciones" type="select" placeholder="2.7 Acciones" required=true>
						<option-box id="expacciones-DUMMY1" label="Dummy 1" />
						<option-box id="expacciones-DUMMY2" label="Dummy 2" />
						<option-box id="expacciones-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="expvaloresext" type="select" placeholder="2.8 Valores Extranjeros" required=true>
						<option-box id="expvaloresext-DUMMY1" label="Dummy 1" />
						<option-box id="expvaloresext-DUMMY2" label="Dummy 2" />
						<option-box id="expvaloresext-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="exptrackers" type="select" placeholder="2.9 Trackers TRACs o ETFs" required=true>
						<option-box id="exptrackers-DUMMY1" label="Dummy 1" />
						<option-box id="exptrackers-DUMMY2" label="Dummy 2" />
						<option-box id="exptrackers-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="expcertificadoscap" type="select" placeholder="2.5 Certificados de Capital de Desarrollo (CKDs)" required=true>
						<option-box id="expcertificadoscap-DUMMY1" label="Dummy 1" />
						<option-box id="expcertificadoscap-DUMMY2" label="Dummy 2" />
						<option-box id="expcertificadoscap-DUMMY3" label="Dummy 3" />
					</select-box>
				</div>
				<div class="col-md-3 ">
					<select-box id="frecuenciadeudagub" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciadeudagub-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciadeudagub-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciadeudagub-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciadeudacorp" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciadeudacorp-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciadeudacorp-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciadeudacorp-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciasociedadesinv" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciasociedadesinv-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciasociedadesinv-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciasociedadesinv-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciavaloresest" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciavaloresest-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciavaloresest-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciavaloresest-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciacertificadosbur" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciacertificadosbur-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciacertificadosbur-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciacertificadosbur-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciatitulosopc" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciatitulosopc-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciatitulosopc-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciatitulosopc-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciaacciones" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciaacciones-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciaacciones-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciaacciones-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciavaloresext" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciavaloresext-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciavaloresext-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciavaloresext-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciatrackers" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciatrackers-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciatrackers-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciatrackers-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="frecuenciacertificadoscap" type="select" placeholder="Frecuencia" required=true>
						<option-box id="frecuenciacertificadoscap-DUMMY1" label="Dummy 1" />
						<option-box id="frecuenciacertificadoscap-DUMMY2" label="Dummy 2" />
						<option-box id="frecuenciacertificadoscap-DUMMY3" label="Dummy 3" />
					</select-box>
				</div>
				<div class="col-md-3 ">
					<select-box id="plazodeudagub" type="select" placeholder="Plazo" required=true>
						<option-box id="plazodeudagub-DUMMY1" label="Dummy 1" />
						<option-box id="plazodeudagub-DUMMY2" label="Dummy 2" />
						<option-box id="plazodeudagub-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazodeudacorp" type="select" placeholder="Plazo" required=true>
						<option-box id="plazodeudacorp-DUMMY1" label="Dummy 1" />
						<option-box id="plazodeudacorp-DUMMY2" label="Dummy 2" />
						<option-box id="plazodeudacorp-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazosociedadesinv" type="select" placeholder="Plazo" required=true>
						<option-box id="plazosociedadesinv-DUMMY1" label="Dummy 1" />
						<option-box id="plazosociedadesinv-DUMMY2" label="Dummy 2" />
						<option-box id="plazosociedadesinv-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazovaloresest" type="select" placeholder="Plazo" required=true>
						<option-box id="plazovaloresest-DUMMY1" label="Dummy 1" />
						<option-box id="plazovaloresest-DUMMY2" label="Dummy 2" />
						<option-box id="plazovaloresest-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazocertificadosbur" type="select" placeholder="Plazo" required=true>
						<option-box id="plazocertificadosbur-DUMMY1" label="Dummy 1" />
						<option-box id="plazocertificadosbur-DUMMY2" label="Dummy 2" />
						<option-box id="plazocertificadosbur-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazotitulosopc" type="select" placeholder="Plazo" required=true>
						<option-box id="plazotitulosopc-DUMMY1" label="Dummy 1" />
						<option-box id="plazotitulosopc-DUMMY2" label="Dummy 2" />
						<option-box id="plazotitulosopc-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazoacciones" type="select" placeholder="Plazo" required=true>
						<option-box id="plazoacciones-DUMMY1" label="Dummy 1" />
						<option-box id="plazoacciones-DUMMY2" label="Dummy 2" />
						<option-box id="plazoacciones-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazovaloresext" type="select" placeholder="Plazo" required=true>
						<option-box id="plazovaloresext-DUMMY1" label="Dummy 1" />
						<option-box id="plazovaloresext-DUMMY2" label="Dummy 2" />
						<option-box id="plazovaloresext-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazotrackers" type="select" placeholder="Plazo" required=true>
						<option-box id="plazotrackers-DUMMY1" label="Dummy 1" />
						<option-box id="plazotrackers-DUMMY2" label="Dummy 2" />
						<option-box id="plazotrackers-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="plazocertificadoscap" type="select" placeholder="Plazo" required=true>
						<option-box id="plazocertificadoscap-DUMMY1" label="Dummy 1" />
						<option-box id="plazocertificadoscap-DUMMY2" label="Dummy 2" />
						<option-box id="plazocertificadoscap-DUMMY3" label="Dummy 3" />
					</select-box>
				</div>
				<div class="col-md-3 ">
					<select-box id="volumendeudagub" type="select" placeholder="Volumen" required=true>
						<option-box id="volumendeudagub-DUMMY1" label="Dummy 1" />
						<option-box id="volumendeudagub-DUMMY2" label="Dummy 2" />
						<option-box id="volumendeudagub-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumendeudacorp" type="select" placeholder="Volumen" required=true>
						<option-box id="volumendeudacorp-DUMMY1" label="Dummy 1" />
						<option-box id="volumendeudacorp-DUMMY2" label="Dummy 2" />
						<option-box id="volumendeudacorp-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumensociedadesinv" type="select" placeholder="Volumen" required=true>
						<option-box id="volumensociedadesinv-DUMMY1" label="Dummy 1" />
						<option-box id="volumensociedadesinv-DUMMY2" label="Dummy 2" />
						<option-box id="volumensociedadesinv-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumenvaloresest" type="select" placeholder="Volumen" required=true>
						<option-box id="volumenvaloresest-DUMMY1" label="Dummy 1" />
						<option-box id="volumenvaloresest-DUMMY2" label="Dummy 2" />
						<option-box id="volumenvaloresest-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumencertificadosbur" type="select" placeholder="Volumen" required=true>
						<option-box id="volumencertificadosbur-DUMMY1" label="Dummy 1" />
						<option-box id="volumencertificadosbur-DUMMY2" label="Dummy 2" />
						<option-box id="volumencertificadosbur-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumentitulosopc" type="select" placeholder="Volumen" required=true>
						<option-box id="volumentitulosopc-DUMMY1" label="Dummy 1" />
						<option-box id="volumentitulosopc-DUMMY2" label="Dummy 2" />
						<option-box id="volumentitulosopc-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumenacciones" type="select" placeholder="Volumen" required=true>
						<option-box id="volumenacciones-DUMMY1" label="Dummy 1" />
						<option-box id="volumenacciones-DUMMY2" label="Dummy 2" />
						<option-box id="volumenacciones-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumenvaloresext" type="select" placeholder="Volumen" required=true>
						<option-box id="volumenvaloresext-DUMMY1" label="Dummy 1" />
						<option-box id="volumenvaloresext-DUMMY2" label="Dummy 2" />
						<option-box id="volumenvaloresext-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumentrackers" type="select" placeholder="Volumen" required=true>
						<option-box id="volumentrackers-DUMMY1" label="Dummy 1" />
						<option-box id="volumentrackers-DUMMY2" label="Dummy 2" />
						<option-box id="volumentrackers-DUMMY3" label="Dummy 3" />
					</select-box>
					<select-box id="volumencertificadoscap" type="select" placeholder="Volumen" required=true>
						<option-box id="volumencertificadoscap-DUMMY1" label="Dummy 1" />
						<option-box id="volumencertificadoscap-DUMMY2" label="Dummy 2" />
						<option-box id="volumencertificadoscap-DUMMY3" label="Dummy 3" />
					</select-box>
				</div>
			</div>
			<select-box id="propositoinversion" type="select" placeholder="Seleccionar el Prop�sito de Inversi�n del Cliente (Estrategia)" required=true>
				<option-box id="propositoinversion-DUMMY1" label="Dummy 1" />
				<option-box id="propositoinversion-DUMMY2" label="Dummy 2" />
				<option-box id="propositoinversion-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="toleranciariesgo" type="select" placeholder="Seleccionar la Torelancia al Riesgo del Cliente" required=true>
				<option-box id="toleranciariesgo-DUMMY1" label="Dummy 1" />
				<option-box id="toleranciariesgo-DUMMY2" label="Dummy 2" />
				<option-box id="toleranciariesgo-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="horizonteinversion" type="select" placeholder="Seleccionar el Horizonte de Inversi�n del Cliente" required=true>
				<option-box id="horizonteinversion-DUMMY1" label="Dummy 1" />
				<option-box id="horizonteinversion-DUMMY2" label="Dummy 2" />
				<option-box id="horizonteinversion-DUMMY3" label="Dummy 3" />
			</select-box>
			<select-box id="tienelimitante" type="select" placeholder="1. El Cliente tiene alguna limitante y/o restricci�n para invertir" required=true>
				<option-box id="tienelimitante-NO" label="No" />
				<option-box id="tienelimitante-SI" label="Si" />
			</select-box>
			<select-box id="porcentajetotalpatrimonio" type="select" placeholder="6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversi�n (diferentes de bienes ra�ces, etc.)" required=true>
				<option-box id="porcentajetotalpatrimonio-DE0A20" label="0-20%" />
				<option-box id="porcentajetotalpatrimonio-DE20A40" label="20-40%" />
				<option-box id="porcentajetotalpatrimonio-DE40A60" label="40-60%" />
				<option-box id="porcentajetotalpatrimonio-DE60A80" label="60-80%" />
				<option-box id="porcentajetotalpatrimonio-DE80A100" label="80-100%" />
			</select-box>
			<select-box id="porcentajeingresoanual" type="select" placeholder="6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversi�n" required=true>
				<option-box id="porcentajeingresoanual-DE0A20" label="0-20%" />
				<option-box id="porcentajeingresoanual-DE20A40" label="20-40%" />
				<option-box id="porcentajeingresoanual-DE40A60" label="40-60%" />
				<option-box id="porcentajeingresoanual-DE60A80" label="60-80%" />
				<option-box id="porcentajeingresoanual-DE80A100" label="80-100%" />
			</select-box>
			<select-box id="porcentajeinversiones" type="select" placeholder="6.3 Porcentaje de las inversiones del Cliente que mantendr� en esta instituci�n" required=true>
				<option-box id="porcentajeinversiones-DE0A20" label="0-20%" />
				<option-box id="porcentajeinversiones-DE20A40" label="20-40%" />
				<option-box id="porcentajeinversiones-DE40A60" label="40-60%" />
				<option-box id="porcentajeinversiones-DE60A80" label="60-80%" />
				<option-box id="porcentajeinversiones-DE80A100" label="80-100%" />
			</select-box>
			<select-box id="origeningresos" type="check" placeholder="6.4 Seleccionar el origen de los ingresos del Cliente destinados a invertir" required=true>
				<option-box id="origeningresos-DE0A20" label="0-20%" />
				<option-box id="origeningresos-DE20A40" label="20-40%" />
				<option-box id="origeningresos-DE40A60" label="40-60%" />
				<option-box id="origeningresos-DE60A80" label="60-80%" />
				<option-box id="origeningresos-DE80A100" label="80-100%" />
			</select-box>
			<attach-photo id="perfil" label="Perfil" height="200" width="400" maxsizemb="2" filetypes="doc, docx, pdf" required=true />
			<inputbox id="inconsistencias" type="text" label="Inconsistencias" value="" placeholder="Inconsistencias" required=true disabled=false />
			<div class="ln_solid"></div>
			<submit-button id="enviarnegativaperfilamientocommand" to="/pantallas/negativaperfilamientoscreen/" action="custom" icon="fa fa-check" caption="Enviar" type="normal" state="primary" ></submit-button>
		</formbox>
		<div class="ln_solid"></div>
	</page>
</negativaperfilamientoscreen>
