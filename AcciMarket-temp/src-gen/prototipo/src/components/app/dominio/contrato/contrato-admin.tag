<contrato-admin>
	<page id="contrato-admin" title="Administrar Contrato">
		<searchpanel add="/dominio/contrato/contrato-add">
			<searchcriteria viewsearch="true" typesearch="Simple" viewadd="true">
				<contrato-form />
			</searchcriteria>

			<searchresults id="contrato-results" edit="/dominio/contrato/contrato-edit" delete="/dominio/contrato/contrato-delete" pagination="true">
			</searchresults>
		</searchpanel>
	</page>
</contrato-admin>
