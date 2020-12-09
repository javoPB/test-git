
<titularcontrato-add>
	<page id="titularcontrato-add" title="Agregar Titular">
		<formbox title="Datos de Titular" icon="fa fa-check-circle-o" action="create" return="/dominio/titularcontrato/titularContrato-admin">
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Nombre" type="text" label="Nombre" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>1</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Actividad" type="select" placeholder="Actividad" required=false>
				
				<option-box id="Actividad-DUMMY1" label="Dummy 1" />
				<option-box id="Actividad-DUMMY2" label="Dummy 2" />
				<option-box id="Actividad-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>2</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="NoClienteBanamex" type="text" label="No. Cliente Banamex" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>3</p>
				
					      <div class="col-md-6">
					      
				<select-box id="Inst" type="select" placeholder="Inst" required=false>
				
				<option-box id="Inst-DUMMY1" label="Dummy 1" />
				<option-box id="Inst-DUMMY2" label="Dummy 2" />
				<option-box id="Inst-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>4</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="NoCta" type="text" label="No. Cta" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>5</p>
				<div class="col-md-6">	
				
				<inputbox id="Suc" type="text" label="Suc." value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>6</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Clabe" type="text" label="CLABE" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>7</p>
				<div class="col-md-6">	
				
				<inputbox id="Calle" type="text" label="Calle" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>8</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="NoExt" type="text" label="No. Exterior" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>9</p>
				<div class="col-md-6">	
				
				<inputbox id="NoInterior" type="text" label="No. Interior" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>10</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="MexExtr" type="option" placeholder="CLABE" required=false>
				
				<option-box id="MexExtr-MEXICO" label="México" />
				<option-box id="MexExtr-EXTRANJERO" label="Extranjero" />
						  	</select-box>
				</div>
			
			<p hidden>11</p>
				<div class="col-md-6">	
				
				<inputbox id="Cp" type="text" label="C.P." value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>12</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Estado" type="text" label="Estado" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>13</p>
				<div class="col-md-6">	
				
				<inputbox id="DelMpo" type="text" label="Del/Mpo" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>14</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Ciudad" type="text" label="Ciudad" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>15</p>
				<div class="col-md-6">	
				
				<inputbox id="Colonia" type="text" label="Colonia" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>16</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Correspondencia" type="option" placeholder="¿Quieres que la correspondencia llegue al domicilio anterior?" required=false>
				
				<option-box id="Correspondencia-NO" label="No" />
				<option-box id="Correspondencia-SI" label="Si" />
						  	</select-box>
				</div>
			
			<p hidden>17</p>
				<div class="col-md-6">	
				
				<inputbox id="Rfc" type="text" label="R.F.C.(Con Homoclave)" value="" placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>18</p>
			<div class="row">
				<div class="col-md-6">	
				
				<inputbox id="Curp" type="text" label="CURP" value="" placeholder="" required=true disabled=false />
				</div>
			
			<p hidden>19</p>
				<div class="col-md-6">
				<date-picker id="FecNac" type= "date" label="Fecha Nac." placeholder="" required=true disabled=false />
				</div>
			</div>
			
			<p hidden>20</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Escolaridad" type="select" placeholder="Escolaridad" required=false>
				
				<option-box id="Escolaridad-DUMMY1" label="Dummy 1" />
				<option-box id="Escolaridad-DUMMY2" label="Dummy 2" />
				<option-box id="Escolaridad-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>21</p>
				
					      <div class="col-md-6">
					      
				<select-box id="EdoCivil" type="select" placeholder="Edo. Civil" required=false>
				
				<option-box id="EdoCivil-DUMMY1" label="Dummy 1" />
				<option-box id="EdoCivil-DUMMY2" label="Dummy 2" />
				<option-box id="EdoCivil-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>22</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Sexo" type="select" placeholder="Sexo" required=false>
				
				<option-box id="Sexo-DUMMY1" label="Dummy 1" />
				<option-box id="Sexo-DUMMY2" label="Dummy 2" />
				<option-box id="Sexo-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>23</p>
				
					      <div class="col-md-6">
					      
				<select-box id="TipoVivienda" type="select" placeholder="Tipo Vivienda" required=false>
				
				<option-box id="TipoVivienda-DUMMY1" label="Dummy 1" />
				<option-box id="TipoVivienda-DUMMY2" label="Dummy 2" />
				<option-box id="TipoVivienda-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>24</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="CalidadMigratoria" type="select" placeholder="C. Migratoria" required=false>
				
				<option-box id="CalidadMigratoria-DUMMY1" label="Dummy 1" />
				<option-box id="CalidadMigratoria-DUMMY2" label="Dummy 2" />
				<option-box id="CalidadMigratoria-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>25</p>
				
					      <div class="col-md-6">
					      
				<select-box id="PaisResidencia" type="select" placeholder="P. Residencia" required=false>
				
				<option-box id="PaisResidencia-DUMMY1" label="Dummy 1" />
				<option-box id="PaisResidencia-DUMMY2" label="Dummy 2" />
				<option-box id="PaisResidencia-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>26</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="Nacionalidad" type="select" placeholder="Nacionalidad" required=false>
				
				<option-box id="Nacionalidad-DUMMY1" label="Dummy 1" />
				<option-box id="Nacionalidad-DUMMY2" label="Dummy 2" />
				<option-box id="Nacionalidad-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>27</p>
				
					      <div class="col-md-6">
					      
				<select-box id="PaisNac" type="select" placeholder="País Nac." required=false>
				
				<option-box id="PaisNac-DUMMY1" label="Dummy 1" />
				<option-box id="PaisNac-DUMMY2" label="Dummy 2" />
				<option-box id="PaisNac-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>28</p>
			<div class="row">
				
					      <div class="col-md-6">
					      
				<select-box id="EdoNac" type="select" placeholder="Edo. Nac." required=false>
				
				<option-box id="EdoNac-DUMMY1" label="Dummy 1" />
				<option-box id="EdoNac-DUMMY2" label="Dummy 2" />
				<option-box id="EdoNac-DUMMY3" label="Dummy 3" />
						  	</select-box>
				</div>
			
			<p hidden>29</p>
				
					      <div class="col-md-6">
					      
				<select-box id="EmpleadoGroFinBanamex" type="option" placeholder="¿El cliente es empleado del Grupo Financiero Banamex?" required=false>
				
				<option-box id="EmpleadoGroFinBanamex-NO" label="No" />
				<option-box id="EmpleadoGroFinBanamex-SI" label="Si" />
						  	</select-box>
				</div>
			</div>
			
			<p hidden>30</p>
		</formbox>
	</page>
</titularcontrato-add>	
