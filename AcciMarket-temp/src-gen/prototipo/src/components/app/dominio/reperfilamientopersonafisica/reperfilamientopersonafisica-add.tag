
<reperfilamientopersonafisica-add>
	<page id="reperfilamientopersonafisica-add" title="Agregar Reperfilamiento de personas físicas">
		<formbox title="Datos de Reperfilamiento de personas físicas" icon="fa fa-check-circle-o" action="create" return="/dominio/reperfilamientopersonafisica/reperfilamientoPersonaFisica-admin">
			<div class="row">
				
				<div class="col-md-6">
				<label class="control-label"><font color="red"> *</font></label>
				 <div class="form-group">
				 <!-- Modal -->
				<search-box id="searchboxsample" link="Contratomodal" caption="Contrato" placeholder="" />
				<modal-box id="Contratomodal"  data="contrato-results" title="Seleccionar Contrato " action="select-one" pagination="true"/>
				 </div>
					        </div>
			
			<p hidden>1</p>
				<div class="col-md-6">	
				
				<inputbox id="Nombre" type="text" label="Nombre" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>2</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="PerfilActual" type="text" label="Perfil Actual" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>3</p>
				
					      <div class="col-md-6">
					      
				<select-box id="PersonaPerfilar" type="select" placeholder="Seleccione a la persona a perfilar" required=false>
				
				<option-box id="PersonaPerfilar-DUMMY1" label="Dummy 1" />
				<option-box id="PersonaPerfilar-DUMMY2" label="Dummy 2" />
				<option-box id="PersonaPerfilar-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>4</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="PorcentajeLiquidez" type="text" label="% (Liquidez)" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>5</p>
				<div class="col-md-6">
				<date-picker id="MontoLiquidez" type= "date" label="Monto $ (Liquidez)" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>6</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="PorcentajeCortoPlazo" type="text" label="% (Corto Plazo)" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>7</p>
				<div class="col-md-6">
				
				<!-- Con la variable "pantallaVisible" se VALIDA SI SE TRATA DE LA SECCION CRITERIOS DE BUSQUEDA, en cuyo caso los campos no son obligatorios -->
				<inputbox id="MontoCortoPlazo" type="currency" label="Monto $ (Corto Plazo)" value="" precision=2 placeholder="" required=true disabled=false min=1.00 max=1000000.00 />
				</div>
			</div>
			
			<p hidden>8</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="PorcentajeLargoPlazo" type="text" label="% (Largo Plazo)" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>9</p>
				<div class="col-md-6">
				
				<!-- Con la variable "pantallaVisible" se VALIDA SI SE TRATA DE LA SECCION CRITERIOS DE BUSQUEDA, en cuyo caso los campos no son obligatorios -->
				<inputbox id="MontoLargoPlazo" type="currency" label="Monto $ (Largo Plazo)" value="" precision=2 placeholder="" required=true disabled=false min=1.00 max=1000000.00 />
				</div>
			</div>
			
			<p hidden>10</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="PorcentajePatrimonioLiquidoTotal" type="text" label="% (Patrimonio líquido total 100%)" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>11</p>
				<div class="col-md-6">
				
				<!-- Con la variable "pantallaVisible" se VALIDA SI SE TRATA DE LA SECCION CRITERIOS DE BUSQUEDA, en cuyo caso los campos no son obligatorios -->
				<inputbox id="MontoPatrimonioLiquidoTotal" type="currency" label="Monto $ (Patrimonio líquido total 100%)" value="" precision=2 placeholder="" required=true disabled=false min=1.00 max=1000000.00 />
				</div>
			</div>
			
			<p hidden>12</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="IntervaloEdad" type="select" placeholder="1.1 Intervalo de Edad" required=false>
				
				<option-box id="IntervaloEdad-DUMMY1" label="Dummy 1" />
				<option-box id="IntervaloEdad-DUMMY2" label="Dummy 2" />
				<option-box id="IntervaloEdad-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>13</p>
				
					      <div class="col-md-6">
					      
				<select-box id="NivelEstudios" type="select" placeholder="1.2 Nivel de Estudios" required=false>
				
				<option-box id="NivelEstudios-DUMMY1" label="Dummy 1" />
				<option-box id="NivelEstudios-DUMMY2" label="Dummy 2" />
				<option-box id="NivelEstudios-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>14</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Ocupacion" type="select" placeholder="1.3 Ocupación" required=false>
				
				<option-box id="Ocupacion-DUMMY1" label="Dummy 1" />
				<option-box id="Ocupacion-DUMMY2" label="Dummy 2" />
				<option-box id="Ocupacion-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>15</p>
				
					      <div class="col-md-6">
					      
				<select-box id="ActividadProfesionalAnterior" type="select" placeholder="1.4 Actividad Profesional ¿Anterior?" required=false>
				
				<option-box id="ActividadProfesionalAnterior-DUMMY1" label="Dummy 1" />
				<option-box id="ActividadProfesionalAnterior-DUMMY2" label="Dummy 2" />
				<option-box id="ActividadProfesionalAnterior-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>16</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ActividadProfesionalActual" type="select" placeholder="Actividad Profesional ¿Actual?" required=false>
				
				<option-box id="ActividadProfesionalActual-DUMMY1" label="Dummy 1" />
				<option-box id="ActividadProfesionalActual-DUMMY2" label="Dummy 2" />
				<option-box id="ActividadProfesionalActual-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>17</p>
				
					      <div class="col-md-6">
					      
				<select-box id="ActividadRelacionadaInversiones" type="option" placeholder="Relacionada con Inversiones" required=false>
				
				<option-box id="ActividadRelacionadaInversiones-NO" label="No" />
				<option-box id="ActividadRelacionadaInversiones-SI" label="Si" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>18</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="EstrategiaCliente" type="select" placeholder="1.5 Estrategia de inversión del Cliente generalmente utilizada" required=false>
				
				<option-box id="EstrategiaCliente-DUMMY1" label="Dummy 1" />
				<option-box id="EstrategiaCliente-DUMMY2" label="Dummy 2" />
				<option-box id="EstrategiaCliente-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>19</p>
				
					      <div class="col-md-6">
					      
				<select-box id="ClienteAsesoria" type="select" placeholder="1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión" required=false>
				
				<option-box id="ClienteAsesoria-DUMMY1" label="Dummy 1" />
				<option-box id="ClienteAsesoria-DUMMY2" label="Dummy 2" />
				<option-box id="ClienteAsesoria-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>20</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ExperienciaDeudaGub" type="select" placeholder="2.1 Instrumentos de Deuda Gubernamental" required=false>
				
				<option-box id="ExperienciaDeudaGub-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="ExperienciaDeudaGub-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="ExperienciaDeudaGub-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>21</p>
				
					      <div class="col-md-6">
					      
				<select-box id="FrecuenciaDeudaGub" type="select" placeholder="Frecuencia" required=false>
				
				<option-box id="FrecuenciaDeudaGub-DUMMY1" label="Dummy 1" />
				<option-box id="FrecuenciaDeudaGub-DUMMY2" label="Dummy 2" />
				<option-box id="FrecuenciaDeudaGub-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>22</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PlazoDeudaGub" type="select" placeholder="Plazo" required=false>
				
				<option-box id="PlazoDeudaGub-DUMMY1" label="Dummy 1" />
				<option-box id="PlazoDeudaGub-DUMMY2" label="Dummy 2" />
				<option-box id="PlazoDeudaGub-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>23</p>
				
					      <div class="col-md-6">
					      
				<select-box id="VolumenDeudaGub" type="select" placeholder="Volumen" required=false>
				
				<option-box id="VolumenDeudaGub-DUMMY1" label="Dummy 1" />
				<option-box id="VolumenDeudaGub-DUMMY2" label="Dummy 2" />
				<option-box id="VolumenDeudaGub-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>24</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ExpDeudaCorp" type="select" placeholder="2.2 Instrumentos de Deuda Corporativa" required=false>
				
				<option-box id="ExpDeudaCorp-NOCONOCE" label="No conoce ni ha intervenido" />
				<option-box id="ExpDeudaCorp-SOLOCONOCE" label="Sólo conoce" />
				<option-box id="ExpDeudaCorp-CONOCEINTERVENIDO" label="Conoce y ha intervenido" />
						  	</select-box>
				</div>
			
			<p hidden>25</p>
				
					      <div class="col-md-6">
					      
				<select-box id="FrecuenciaDeudaCorp" type="select" placeholder="Frecuencia" required=false>
				
				<option-box id="FrecuenciaDeudaCorp-DUMMY1" label="Dummy 1" />
				<option-box id="FrecuenciaDeudaCorp-DUMMY2" label="Dummy 2" />
				<option-box id="FrecuenciaDeudaCorp-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>26</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PlazoDeudaCorp" type="select" placeholder="Plazo" required=false>
				
				<option-box id="PlazoDeudaCorp-DUMMY1" label="Dummy 1" />
				<option-box id="PlazoDeudaCorp-DUMMY2" label="Dummy 2" />
				<option-box id="PlazoDeudaCorp-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>27</p>
				
					      <div class="col-md-6">
					      
				<select-box id="VolumenDeudaCorp" type="select" placeholder="Volumen" required=false>
				
				<option-box id="VolumenDeudaCorp-DUMMY1" label="Dummy 1" />
				<option-box id="VolumenDeudaCorp-DUMMY2" label="Dummy 2" />
				<option-box id="VolumenDeudaCorp-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>28</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ExpSociedadesInv" type="select" placeholder="2.3 Sociedades de Inversión" required=false>
				
				<option-box id="ExpSociedadesInv-DUMMY1" label="Dummy 1" />
				<option-box id="ExpSociedadesInv-DUMMY2" label="Dummy 2" />
				<option-box id="ExpSociedadesInv-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>29</p>
				
					      <div class="col-md-6">
					      
				<select-box id="FrecuenciaSociedadesInv" type="select" placeholder="Frecuencia" required=false>
				
				<option-box id="FrecuenciaSociedadesInv-DUMMY1" label="Dummy 1" />
				<option-box id="FrecuenciaSociedadesInv-DUMMY2" label="Dummy 2" />
				<option-box id="FrecuenciaSociedadesInv-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>30</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PlazoSociedadesInv" type="select" placeholder="Plazo" required=false>
				
				<option-box id="PlazoSociedadesInv-DUMMY1" label="Dummy 1" />
				<option-box id="PlazoSociedadesInv-DUMMY2" label="Dummy 2" />
				<option-box id="PlazoSociedadesInv-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>31</p>
				
					      <div class="col-md-6">
					      
				<select-box id="VolumenSociedadesInv" type="select" placeholder="Volumen" required=false>
				
				<option-box id="VolumenSociedadesInv-DUMMY1" label="Dummy 1" />
				<option-box id="VolumenSociedadesInv-DUMMY2" label="Dummy 2" />
				<option-box id="VolumenSociedadesInv-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>32</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ExpValoresEst" type="select" placeholder="2.4 Valores Estructurados" required=false>
				
				<option-box id="ExpValoresEst-DUMMY1" label="Dummy 1" />
				<option-box id="ExpValoresEst-DUMMY2" label="Dummy 2" />
				<option-box id="ExpValoresEst-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>33</p>
				
					      <div class="col-md-6">
					      
				<select-box id="FrecuenciaValoresEst" type="select" placeholder="Frecuencia" required=false>
				
				<option-box id="FrecuenciaValoresEst-DUMMY1" label="Dummy 1" />
				<option-box id="FrecuenciaValoresEst-DUMMY2" label="Dummy 2" />
				<option-box id="FrecuenciaValoresEst-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>34</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PlazoValoresEst" type="select" placeholder="Plazo" required=false>
				
				<option-box id="PlazoValoresEst-DUMMY1" label="Dummy 1" />
				<option-box id="PlazoValoresEst-DUMMY2" label="Dummy 2" />
				<option-box id="PlazoValoresEst-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>35</p>
				
					      <div class="col-md-6">
					      
				<select-box id="VolumenValoresEst" type="select" placeholder="Volumen" required=false>
				
				<option-box id="VolumenValoresEst-DUMMY1" label="Dummy 1" />
				<option-box id="VolumenValoresEst-DUMMY2" label="Dummy 2" />
				<option-box id="VolumenValoresEst-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>36</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="ExpCertificadosBur" type="select" placeholder="2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados" required=false>
				
				<option-box id="ExpCertificadosBur-DUMMY1" label="Dummy 1" />
				<option-box id="ExpCertificadosBur-DUMMY2" label="Dummy 2" />
				<option-box id="ExpCertificadosBur-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>37</p>
				
					      <div class="col-md-6">
					      
				<select-box id="FrecuenciaCertificadosBur" type="select" placeholder="Frecuencia" required=false>
				
				<option-box id="FrecuenciaCertificadosBur-DUMMY1" label="Dummy 1" />
				<option-box id="FrecuenciaCertificadosBur-DUMMY2" label="Dummy 2" />
				<option-box id="FrecuenciaCertificadosBur-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>38</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PlazoCertificadosBur" type="select" placeholder="Plazo" required=false>
				
				<option-box id="PlazoCertificadosBur-DUMMY1" label="Dummy 1" />
				<option-box id="PlazoCertificadosBur-DUMMY2" label="Dummy 2" />
				<option-box id="PlazoCertificadosBur-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>39</p>
				
					      <div class="col-md-6">
					      
				<select-box id="VolumenCertificadosBur" type="select" placeholder="Volumen" required=false>
				
				<option-box id="VolumenCertificadosBur-DUMMY1" label="Dummy 1" />
				<option-box id="VolumenCertificadosBur-DUMMY2" label="Dummy 2" />
				<option-box id="VolumenCertificadosBur-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>40</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="TieneLimitante" type="select" placeholder="1. El Cliente tiene alguna limitante y/o restricción para invertir" required=false>
				
				<option-box id="TieneLimitante-NO" label="No" />
				<option-box id="TieneLimitante-SI" label="Si" />
						  	</select-box>
				</div>
			
			<p hidden>41</p>
				
					      <div class="col-md-6">
					      
				<select-box id="PorcentajeTotalPatrimonio" type="select" placeholder="6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.)" required=false>
				
				<option-box id="PorcentajeTotalPatrimonio-DE0A20" label="0-20%" />
				<option-box id="PorcentajeTotalPatrimonio-DE20A40" label="20-40%" />
				<option-box id="PorcentajeTotalPatrimonio-DE40A60" label="40-60%" />
				<option-box id="PorcentajeTotalPatrimonio-DE60A80" label="60-80%" />
				<option-box id="PorcentajeTotalPatrimonio-DE80A100" label="80-100%" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>42</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="PorcentajeIngresoAnual" type="select" placeholder="6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión" required=false>
				
				<option-box id="PorcentajeIngresoAnual-DE0A20" label="0-20%" />
				<option-box id="PorcentajeIngresoAnual-DE20A40" label="20-40%" />
				<option-box id="PorcentajeIngresoAnual-DE40A60" label="40-60%" />
				<option-box id="PorcentajeIngresoAnual-DE60A80" label="60-80%" />
				<option-box id="PorcentajeIngresoAnual-DE80A100" label="80-100%" />
						  	</select-box>
				</div>
			
			<p hidden>43</p>
				
					      <div class="col-md-6">
					      
				<select-box id="PorcentajeInversiones" type="select" placeholder="6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución" required=false>
				
				<option-box id="PorcentajeInversiones-DE0A20" label="0-20%" />
				<option-box id="PorcentajeInversiones-DE20A40" label="20-40%" />
				<option-box id="PorcentajeInversiones-DE40A60" label="40-60%" />
				<option-box id="PorcentajeInversiones-DE60A80" label="60-80%" />
				<option-box id="PorcentajeInversiones-DE80A100" label="80-100%" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>44</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="OrigenIngresos" type="check" placeholder="6.4 Seleccionar el origen de los ingresos del Cliente destinados a invertir" required=false>
				
				<option-box id="OrigenIngresos-DE0A20" label="0-20%" />
				<option-box id="OrigenIngresos-DE20A40" label="20-40%" />
				<option-box id="OrigenIngresos-DE40A60" label="40-60%" />
				<option-box id="OrigenIngresos-DE60A80" label="60-80%" />
				<option-box id="OrigenIngresos-DE80A100" label="80-100%" />
						  	</select-box>
				</div>
			
			<p hidden>45</p>
				<div class="col-md-6">
				<attach-photo id="Perfil" label="Perfil" height="200" width="400" maxsizemb="7" filetypes="docx, pdf, txt" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>46</p>
		</formbox>
	</page>
</reperfilamientopersonafisica-add>	
