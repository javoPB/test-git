
<contrato-add>
	<page id="contrato-add" title="Agregar Contrato">
		<formbox title="Datos de Contrato" icon="fa fa-check-circle-o" action="create" return="/dominio/contrato/contrato-admin">
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="NoContrato" type="text" label="Contrato" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>1</p>
				<div class="col-md-6">	
				
				<inputbox id="Digito" type="text" label="Dígito" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>2</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Dv" type="text" label="DV" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>3</p>
				<div class="col-md-6">	
				
				<inputbox id="Estatus" type="text" label="Estatus" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>4</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Perfil" type="text" label="Perfil" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>5</p>
				<div class="col-md-6">	
				
				<inputbox id="Portafolio" type="text" label="Portafolio" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>6</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="CLABE" type="text" label="CLABE" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>7</p>
				<div class="col-md-6">	
				
				<inputbox id="STipoPort" type="text" label="STipo Port" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>8</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Libro" type="text" label="Libro" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>9</p>
				
				<div class="col-md-6">
				 <div class="form-group">
				 <!-- Modal -->
				
				 </div>
					        </div>
			</div>
			
			<p hidden>10</p>
			<div class="row">
				
				<div class="col-md-6">
				<label class="control-label">Beneficiarios<font color="red"> *</font></label>
				 <div class="form-group">
				 <!-- Modal -->
				<search-box id="searchboxsample" link="Beneficiariosmodal" caption="Beneficiario" placeholder="" />
				<modal-box id="Beneficiariosmodal"  data="beneficiario-results" title="Seleccionar Beneficiario " action="select-one" pagination="true"/>
				 </div>
					        </div>
			
			<p hidden>11</p>
				<div class="col-md-6">	
				
				<inputbox id="AsesorInversion" type="text" label="Asesor de Inversión" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>12</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="TipoManifiesto" type="text" label="Tipo de Manifiesto" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>13</p>
				<div class="col-md-6">	
				
				<inputbox id="ServicioInversion" type="text" label="Servicio de Inversión" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>14</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="CartaEjecucion1" type="text" label="Carta Ejecución" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>15</p>
				<div class="col-md-6">	
				
				<inputbox id="FechaCartaEjecucion1" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>16</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="CartaEjecucion2" type="text" label="Carta Ejecución" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>17</p>
				<div class="col-md-6">	
				
				<inputbox id="FechaCartaEjecucion2" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>18</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Institucional" type="check" placeholder="Institucional/Intitucional Pract. Vta." required=false>
				
				<option-box id="Institucional-INSTITUCIONAL" label="INSTITUCIONAL" />
				<option-box id="Institucional-INSTITUCIONALPRACT" label="INSTITUCIONAL PRACT. VTA." />
						  	</select-box>
				</div>
			
			<p hidden>19</p>
				<div class="col-md-6">	
				
				<inputbox id="JustificacionInstitucional" type="text" label="Justificación" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>20</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="FechaInstitucional" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>21</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Sofisticado" type="select" placeholder="Sofisticado/No sofisticaso" required=false>
				
				<option-box id="Sofisticado-SOFISTICADO" label="SOFISTICADO" />
				<option-box id="Sofisticado-NOSOFISTICADO" label="NO SOFISTICADO" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>22</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="JustificacionSofisticado" type="text" label="Justificación" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>23</p>
				<div class="col-md-6">	
				
				<inputbox id="FechaSofisticado" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>24</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Elegible" type="select" placeholder="Elegible/No Elegible" required=false>
				
				<option-box id="Elegible-ELEGIBLE" label="ELEGIBLE" />
				<option-box id="Elegible-NOELEGIBLE" label="NO ELEGIBLE" />
						  	</select-box>
				</div>
			
			<p hidden>25</p>
				<div class="col-md-6">	
				
				<inputbox id="JustificacionElegible" type="text" label="Justificación" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>26</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="FechaElegible" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>27</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Calificado" type="select" placeholder="Calificado/No Calificado" required=false>
				
				<option-box id="Calificado-CALIFICADO" label="CALIFICADO" />
				<option-box id="Calificado-NOCALIFICADO" label="NO CALIFICADO" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>28</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="JustificacionCalificado" type="text" label="Justificación" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>29</p>
				<div class="col-md-6">	
				
				<inputbox id="FechaCalificado" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>30</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Discrecional" type="select" placeholder="Discrecional/No Discrecional" required=false>
				
				<option-box id="Discrecional-DISCRECIONAL" label="DISCRECIONAL" />
				<option-box id="Discrecional-NODISCRECIONAL" label="NO DISCRECIONAL" />
						  	</select-box>
				</div>
			
			<p hidden>31</p>
				<div class="col-md-6">	
				
				<inputbox id="JustificacionDiscrecional" type="text" label="Justificación" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>32</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="FechaDiscrecional" type="text" label="Fecha" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>33</p>
				
					      <div class="col-md-6">
					      
				<select-auto id="instrdeudagub" placeholder="Instrumetos de Deuda Gubernamental" required=true disabled=false>
					<option id="3ge8lGA8" label="Eveniet et voluptate incidunt ut corrupti doloribus est." />
					<option id="Jm2j5cop" label="Minus ex quaerat ut voluptatem iusto magnam." />
					<option id="BKMDFOo6" label="Laudantium voluptatem laborum." />
					<option id="1kjgfxeJ" label="Recusandae iusto debitis nam deserunt eos deleniti autem." />
					<option id="PhkJ4rkP" label="Eius nesciunt ullam dicta enim delectus aut." />
				</select-auto>
				</div>
			</div>
			
			<p hidden>34</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="InstrDeudaCorp" type="select" placeholder="Instrumentos de Deuda Corporativa" required=false>
				
				<option-box id="InstrDeudaCorp-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="InstrDeudaCorp-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="InstrDeudaCorp-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>35</p>
				
					      <div class="col-md-6">
					      
				<select-box id="SociedadesInver" type="option" placeholder="Sociedades de Inversión" required=false>
				
				<option-box id="SociedadesInver-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="SociedadesInver-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="SociedadesInver-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>36</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ValoresEstruc" type="option" placeholder="Valores Estructurados" required=false>
				
				<option-box id="ValoresEstruc-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="ValoresEstruc-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="ValoresEstruc-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>37</p>
				
					      <div class="col-md-6">
					      
				<select-box id="CertBurFideicomisos" type="option" placeholder="Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados" required=false>
				
				<option-box id="CertBurFideicomisos-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="CertBurFideicomisos-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="CertBurFideicomisos-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>38</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="TitulosOpcionales" type="option" placeholder="Titulos Opcionales (Warrants)" required=false>
				
				<option-box id="TitulosOpcionales-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="TitulosOpcionales-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="TitulosOpcionales-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>39</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Acciones" type="option" placeholder="Acciones" required=false>
				
				<option-box id="Acciones-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="Acciones-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="Acciones-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>40</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ValoresExtr" type="option" placeholder="Valores Extranjeros" required=false>
				
				<option-box id="ValoresExtr-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="ValoresExtr-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="ValoresExtr-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>41</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Trackers" type="check" placeholder="Trackers TRACs o ETFs" required=false>
				
				<option-box id="Trackers-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="Trackers-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="Trackers-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>42</p>
			<div class="row">
				
				<div class="col-md-6">
				<label class="control-label">Limitantes a Intervenir<font color="red"> *</font></label>
				 <div class="form-group">
				 <!-- Modal -->
				<search-box id="searchboxsample" link="Limitantesmodal" caption="Limitante" placeholder="" />
				<modal-box id="Limitantesmodal"  data="limitante-results" title="Seleccionar Limitante " action="select-one" pagination="true"/>
				 </div>
					        </div>
			
			<p hidden>43</p>
				
				<div class="col-md-6">
				<label class="control-label">Relación Emisor<font color="red"> *</font></label>
				 <div class="form-group">
				 <!-- Modal -->
				<search-box id="searchboxsample" link="Emisormodal" caption="Emisor" placeholder="" />
				<modal-box id="Emisormodal"  data="emisor-results" title="Seleccionar Emisor " action="select-one" pagination="true"/>
				 </div>
					        </div>
			</div>
			
			<p hidden>44</p>
			<div class="row">
				
				<div class="col-md-6">
				<label class="control-label">Firmas Autorizadas<font color="red"> *</font></label>
				 <div class="form-group">
				 <!-- Modal -->
				<search-box id="searchboxsample" link="FirmasAutorizadasmodal" caption="FirmaAutorizada" placeholder="" />
				<modal-box id="FirmasAutorizadasmodal"  data="firmaautorizada-results" title="Seleccionar FirmaAutorizada " action="select-one" pagination="true"/>
				 </div>
					        </div>
			</div>
			
			<p hidden>45</p>
		</formbox>
	</page>
</contrato-add>	
