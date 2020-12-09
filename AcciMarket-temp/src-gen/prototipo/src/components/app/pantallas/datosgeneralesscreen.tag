<datosgeneralesscreen>
	<page id="datosgeneralesscreen" title="Datos Generales">
		<formbox id="busquedacontratoform-98" title="">
			<div class="row">
				<div class="col-md-2 ">
					<inputbox id="nocontrato" type="text" label="Contrato" value="" placeholder="Contrato" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="digito" type="text" label="Dígito" value="" placeholder="Dígito" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="dv" type="text" label="DV" value="" placeholder="DV" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="estatus" type="text" label="Estatus" value="" placeholder="Estatus" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="perfil" type="text" label="Perfil" value="" placeholder="Perfil" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="portafolio" type="text" label="Portafolio" value="" placeholder="Portafolio" required=true disabled=false />
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 ">
					<inputbox id="clabe" type="text" label="CLABE" value="" placeholder="CLABE" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="stipoport" type="text" label="STipo Port" value="" placeholder="STipo Port" required=true disabled=false />
				</div>
				<div class="col-md-2 ">
					<inputbox id="libro" type="text" label="Libro" value="" placeholder="Libro" required=true disabled=false />
				</div>
			</div>
			<div class="ln_solid"></div>
			<submit-button id="consultarcontratoquery" to="/pantallas/datosgeneralesscreen/" action="custom" icon="fa fa-search" caption="Consultar" type="normal" state="primary" ></submit-button>
		</formbox>
		<formbox id="datoscontratoform-98" title="">
			<panel label="Persona Física Nacional">
				<div class="row">
					<div class="col-md-6 ">
						<inputbox id="nombre" type="text" label="Nombre" value="" placeholder="Nombre" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<select-box id="actividad" type="select" placeholder="Actividad" required=true>
							<option-box id="actividad-DUMMY1" label="Dummy 1" />
							<option-box id="actividad-DUMMY2" label="Dummy 2" />
							<option-box id="actividad-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
					<div class="col-md-3 ">
						<inputbox id="rfc" type="text" label="R.F.C.(Con Homoclave)" value="" placeholder="R.F.C.(Con Homoclave)" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 ">
						<select-box id="sexo" type="select" placeholder="Sexo" required=true>
							<option-box id="sexo-DUMMY1" label="Dummy 1" />
							<option-box id="sexo-DUMMY2" label="Dummy 2" />
							<option-box id="sexo-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
					<div class="col-md-3 ">
						<inputbox id="curp" type="text" label="CURP" value="" placeholder="CURP" required=true disabled=false />
					</div>
					<div class="col-md-3 ">
						<date-picker id="fecnac" type="date" label="Fecha Nac." value="" placeholder="Fecha Nac." required=true disabled=false format="yyyy/mm/dd" mindate="1900-01-01" maxdate="2200-12-31" />
					</div>
					<div class="col-md-3 ">
						<inputbox id="noclientebanamex" type="text" label="No. Cliente Banamex" value="" placeholder="No. Cliente Banamex" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-3 ">
						<select-box id="nacionalidad" type="select" placeholder="Nacionalidad" required=true>
							<option-box id="nacionalidad-DUMMY1" label="Dummy 1" />
							<option-box id="nacionalidad-DUMMY2" label="Dummy 2" />
							<option-box id="nacionalidad-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
					<div class="col-md-3 ">
						<select-box id="calidadmigratoria" type="select" placeholder="C. Migratoria" required=true>
							<option-box id="calidadmigratoria-DUMMY1" label="Dummy 1" />
							<option-box id="calidadmigratoria-DUMMY2" label="Dummy 2" />
							<option-box id="calidadmigratoria-DUMMY3" label="Dummy 3" />
						</select-box>
					</div>
				</div>
			</panel>
			<panel label="Clasificación Contrato">
				<div class="row">
					<div class="col-md-12 ">
						<inputbox id="asesorinversion" type="text" label="Asesor de Inversión" value="" placeholder="Asesor de Inversión" required=true disabled=false />
						<inputbox id="tipomanifiesto" type="text" label="Tipo de Manifiesto" value="" placeholder="Tipo de Manifiesto" required=true disabled=false />
						<inputbox id="servicioinversion" type="text" label="Servicio de Inversión" value="" placeholder="Servicio de Inversión" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-8 ">
						<inputbox id="cartaejecucion1" type="text" label="Carta Ejecución" value="" placeholder="Carta Ejecución" required=true disabled=false />
						<inputbox id="cartaejecucion2" type="text" label="Carta Ejecución" value="" placeholder="Carta Ejecución" required=true disabled=false />
					</div>
					<div class="col-md-4 ">
						<inputbox id="fechacartaejecucion1" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
						<inputbox id="fechacartaejecucion2" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 ">
						<select-box id="institucional" type="select" placeholder="Institucional/Intitucional Pract. Vta." required=true>
							<option-box id="institucional-INSTITUCIONAL" label="INSTITUCIONAL" />
							<option-box id="institucional-INSTITUCIONALPRACT" label="INSTITUCIONAL PRACT. VTA." />
						</select-box>
						<select-box id="sofisticado" type="select" placeholder="Sofisticado/No sofisticaso" required=true>
							<option-box id="sofisticado-SOFISTICADO" label="SOFISTICADO" />
							<option-box id="sofisticado-NOSOFISTICADO" label="NO SOFISTICADO" />
						</select-box>
						<select-box id="elegible" type="select" placeholder="Elegible/No Elegible" required=true>
							<option-box id="elegible-ELEGIBLE" label="ELEGIBLE" />
							<option-box id="elegible-NOELEGIBLE" label="NO ELEGIBLE" />
						</select-box>
						<select-box id="calificado" type="select" placeholder="Calificado/No Calificado" required=true>
							<option-box id="calificado-CALIFICADO" label="CALIFICADO" />
							<option-box id="calificado-NOCALIFICADO" label="NO CALIFICADO" />
						</select-box>
						<select-box id="discrecional" type="select" placeholder="Discrecional/No Discrecional" required=true>
							<option-box id="discrecional-DISCRECIONAL" label="DISCRECIONAL" />
							<option-box id="discrecional-NODISCRECIONAL" label="NO DISCRECIONAL" />
						</select-box>
					</div>
					<div class="col-md-4 ">
						<inputbox id="justificacioninstitucional" type="text" label="Justificación" value="" placeholder="Justificación" required=true disabled=false />
						<inputbox id="justificacionsofisticado" type="text" label="Justificación" value="" placeholder="Justificación" required=true disabled=false />
						<inputbox id="justificacionelegible" type="text" label="Justificación" value="" placeholder="Justificación" required=true disabled=false />
						<inputbox id="justificacioncalificado" type="text" label="Justificación" value="" placeholder="Justificación" required=true disabled=false />
						<inputbox id="justificaciondiscrecional" type="text" label="Justificación" value="" placeholder="Justificación" required=true disabled=false />
					</div>
					<div class="col-md-4 ">
						<inputbox id="fechainstitucional" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
						<inputbox id="fechasofisticado" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
						<inputbox id="fechaelegible" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
						<inputbox id="fechacalificado" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
						<inputbox id="fechadiscrecional" type="text" label="Fecha" value="" placeholder="Fecha" required=true disabled=false />
					</div>
				</div>
			</panel>
			<panel label="Conocimiento y Experiencia">
				<select-auto id="instrdeudagub" placeholder="Instrumetos de Deuda Gubernamental" required=true disabled=false>
					<option id="NOCONOCE" label="No conoce ni ha intervenido»" />
					<option id="SOLOCONOCE" label="Sólo conoce»" />
					<option id="CONOCEINTERVENIDO" label="Conoce y ha intervenido»" />
				</select-auto>
				<select-box id="instrdeudacorp" type="select" placeholder="Instrumentos de Deuda Corporativa" required=true>
					<option-box id="instrdeudacorp-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="instrdeudacorp-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="instrdeudacorp-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="sociedadesinver" type="option" placeholder="Sociedades de Inversión" required=true>
					<option-box id="sociedadesinver-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="sociedadesinver-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="sociedadesinver-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="valoresestruc" type="option" placeholder="Valores Estructurados" required=true>
					<option-box id="valoresestruc-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="valoresestruc-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="valoresestruc-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="certburfideicomisos" type="option" placeholder="Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados" required=true>
					<option-box id="certburfideicomisos-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="certburfideicomisos-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="certburfideicomisos-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="titulosopcionales" type="option" placeholder="Titulos Opcionales (Warrants)" required=true>
					<option-box id="titulosopcionales-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="titulosopcionales-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="titulosopcionales-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="acciones" type="option" placeholder="Acciones" required=true>
					<option-box id="acciones-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="acciones-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="acciones-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="valoresextr" type="option" placeholder="Valores Extranjeros" required=true>
					<option-box id="valoresextr-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="valoresextr-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="valoresextr-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
				<select-box id="trackers" type="check" placeholder="Trackers TRACs o ETFs" required=true>
					<option-box id="trackers-NOCONOCE" label="No conoce ni ha intervenido" />
					<option-box id="trackers-SOLOCONOCE" label="Sólo conoce" />
					<option-box id="trackers-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
				</select-box>
			</panel>
			<panel label="Limitantes a Intervenir">
				<select-box id="limitantes" type="select" placeholder="Limitantes a Intervenir">
					<option-box id="PLNfOe5S" label="Nihil aut aperiam ut doloribus." />
					<option-box id="cl0JFBi2" label="Voluptas modi quas vel ut asperiores." />
					<option-box id="YAGBd7pu" label="Occaecati soluta laborum." />
					<option-box id="HqUWA5Kn" label="Natus aut alias minima consequatur tempora repudiandae." />
					<option-box id="rYrTpNeB" label="Assumenda enim vel." />
				</select-box>
			</panel>
			<panel label="Relación Emisor">
				<select-box id="emisor" type="select" placeholder="Relación Emisor">
					<option-box id="3W2FbjIN" label="Vero voluptates repellendus saepe." />
					<option-box id="7RTBbCZy" label="Similique quisquam ipsa ratione." />
					<option-box id="N5luTTxF" label="Quibusdam repellendus necessitatibus enim consequatur temporibus." />
					<option-box id="kefqFOjT" label="Voluptatem omnis praesentium rerum quia cumque." />
					<option-box id="7NoCy1VW" label="Optio quibusdam dicta earum incidunt et." />
				</select-box>
			</panel>
			<panel label="Firmas Autorizadas">
				<select-box id="firmasautorizadas" type="select" placeholder="Firmas Autorizadas">
					<option-box id="62x9GdmQ" label="Dummy 2" />
					<option-box id="Ay6ld9XX" label="Dummy 2" />
					<option-box id="EyTYPdxi" label="Dummy 3" />
					<option-box id="BYRNrpIo" label="Dummy 2" />
					<option-box id="xvcrmzuB" label="Dummy 1" />
				</select-box>
			</panel>
			<div class="ln_solid"></div>
		</formbox>
		<div class="ln_solid"></div>
	</page>
</datosgeneralesscreen>
