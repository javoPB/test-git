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
			+'						<legend>Distribución de Instrucciones</legend>'
			
		  
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="opcDistrInstrucciones" class="control-label">NOMBRE</label>'
		  +'							<div class="controls">'
		  +'								<input id="opcDistrInstrucciones" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="opcDistrInstrucciones">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="capturados" class="control-label">Capturados</label>'
		  +'							<div class="controls">'
		  +'								<input id="capturados" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="capturados">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="contrato" class="control-label">Contrato</label>'
		  +'							<div class="controls">'
		  +'								<input id="contrato" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="contrato">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="folioMov" class="control-label">Folio Mov.</label>'
		  +'							<div class="controls">'
		  +'								<input id="folioMov" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="folioMov">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="digito" class="control-label">Dígito</label>'
		  +'							<div class="controls">'
		  +'								<input id="digito" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="digito">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="importeNeto" class="control-label">Importe Neto</label>'
		  +'							<div class="controls">'
		  +'								<input id="importeNeto" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="importeNeto">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="depositos" class="control-label">Depósitos</label>'
		  +'							<div class="controls">'
		  +'								<input id="depositos" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="depositos">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="retiros" class="control-label">Retiros</label>'
		  +'							<div class="controls">'
		  +'								<input id="retiros" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="retiros">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
		  +'							</div>'
		  +'						<div class="row">'
		  
		  +'					<div class="column">'
		  +'						<div class="control-group">'
		  +'							<label for="sucursal" class="control-label">Sucursal</label>'
		  +'							<div class="controls">'
		  +'								<input id="sucursal" class="form-control" data-type = "varchar" maxlength="0" data-length="0" name="sucursal">'
		  +'								<br><span class ="textError" style="display: none;">Error</span>'
		  +'							</div>'
		  +'						</div>'
		  +'					</div>'
		  
+'							</div>'
+'						</div>'
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
			//+'		<fieldset class="fieldset"><legend>Distribución de Instrucciones</legend>'
			+'				<div class="row" style="display:  inline-flex;">'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="opcDistrInstrucciones" class="control-label">NOMBRE</label>'
			+'								<div class="controls">'
			+'									<input id="opcDistrInstrucciones" class="form-control" data-type = "number" maxlength="0" data-length="0" name="opcDistrInstrucciones">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="capturados" class="control-label">Capturados</label>'
			+'								<div class="controls">'
			+'									<input id="capturados" class="form-control" data-type = "number" maxlength="0" data-length="0" name="capturados">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="contrato" class="control-label">Contrato</label>'
			+'								<div class="controls">'
			+'									<input id="contrato" class="form-control" data-type = "number" maxlength="0" data-length="0" name="contrato">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="folioMov" class="control-label">Folio Mov.</label>'
			+'								<div class="controls">'
			+'									<input id="folioMov" class="form-control" data-type = "number" maxlength="0" data-length="0" name="folioMov">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="digito" class="control-label">Dígito</label>'
			+'								<div class="controls">'
			+'									<input id="digito" class="form-control" data-type = "number" maxlength="0" data-length="0" name="digito">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="importeNeto" class="control-label">Importe Neto</label>'
			+'								<div class="controls">'
			+'									<input id="importeNeto" class="form-control" data-type = "number" maxlength="0" data-length="0" name="importeNeto">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="depositos" class="control-label">Depósitos</label>'
			+'								<div class="controls">'
			+'									<input id="depositos" class="form-control" data-type = "number" maxlength="0" data-length="0" name="depositos">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="retiros" class="control-label">Retiros</label>'
			+'								<div class="controls">'
			+'									<input id="retiros" class="form-control" data-type = "number" maxlength="0" data-length="0" name="retiros">'
			+'									<br><span class ="textError" style="display: none;">Error</span>'
			+'								</div>'
			+'							</div>'
			+'						</div>'
			+'						<div class="column">'
			+'							<div class="control-group">'
			+'								<label for="sucursal" class="control-label">Sucursal</label>'
			+'								<div class="controls">'
			+'									<input id="sucursal" class="form-control" data-type = "number" maxlength="0" data-length="0" name="sucursal">'
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
{ header: "NOMBRE", field: "opcDistrInstrucciones" }
	    	
, { header: "Capturados", field: "capturados" }
	    	
, { header: "Contrato", field: "contrato" }
	    	
, { header: "Folio Mov.", field: "folioMov" }
	    	
, { header: "Dígito", field: "digito" }
	    	
, { header: "Importe Neto", field: "importeNeto" }
	    	
, { header: "Depósitos", field: "depositos" }
	    	
, { header: "Retiros", field: "retiros" }
	    	
, { header: "Sucursal", field: "sucursal" }
	    	
	        ];
	    var i,j;
	    var html = "";
	    
	    html +="<h2>Distribución de Instrucciones</h2>";
	    
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
	    $("#opcDistrInstrucciones").prop('disabled', true);
	    $("#capturados").prop('disabled', true);
	    $("#contrato").prop('disabled', true);
	    $("#folioMov").prop('disabled', true);
	    $("#digito").prop('disabled', true);
	    $("#importeNeto").prop('disabled', true);
	    $("#depositos").prop('disabled', true);
	    $("#retiros").prop('disabled', true);
	    $("#sucursal").prop('disabled', true);
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
case 'OpcDistrInstrucciones':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Capturados':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Contrato':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'FolioMov':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Digito':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'ImporteNeto':
	/******CAMPO x**/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
	item[key] = campo;
break;
case 'Depositos':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Retiros':
	/*****CAMPO x***/
	error =_that.validator.alphaNumericFile(campo);
	if(!error)
		error =_that.validator.validateLengthFile(campo, 0);
break;		
case 'Sucursal':
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
		            ,  opcDistrInstrucciones : datos[i].OpcDistrInstrucciones
		            ,  capturados : datos[i].Capturados
		            ,  contrato : datos[i].Contrato
		            ,  folioMov : datos[i].FolioMov
		            ,  digito : datos[i].Digito
		            ,  importeNeto : datos[i].ImporteNeto
		            ,  depositos : datos[i].Depositos
		            ,  retiros : datos[i].Retiros
		            ,  sucursal : datos[i].Sucursal
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
"OpcDistrInstrucciones"
	    	, "Capturados"
	    	, "Contrato"
	    	, "FolioMov"
	    	, "Digito"
	    	, "ImporteNeto"
	    	, "Depositos"
	    	, "Retiros"
	    	, "Sucursal"
	  ];
	  var url = this.LOAD;
	  var name = "DistribucionInstrucciones"; 
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
{ header: "OpcDistrInstrucciones", field: "opcDistrInstrucciones" }
     	    	
, { header: "Capturados", field: "capturados" }
     	    	
, { header: "Contrato", field: "contrato" }
     	    	
, { header: "FolioMov", field: "folioMov" }
     	    	
, { header: "Digito", field: "digito" }
     	    	
, { header: "ImporteNeto", field: "importeNeto" }
     	    	
, { header: "Depositos", field: "depositos" }
     	    	
, { header: "Retiros", field: "retiros" }
     	    	
, { header: "Sucursal", field: "sucursal" }
     	    	
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
		   !_that.validator.isEmpty($('#opcDistrInstrucciones').val())
		   
		   || !_that.validator.isEmpty($('#capturados').val())
		   
		   || !_that.validator.isEmpty($('#contrato').val())
		   
		   || !_that.validator.isEmpty($('#folioMov').val())
		   
		   || !_that.validator.isEmpty($('#digito').val())
		   
		   || !_that.validator.isEmpty($('#importeNeto').val())
		   
		   || !_that.validator.isEmpty($('#depositos').val())
		   
		   || !_that.validator.isEmpty($('#retiros').val())
		   
		   || !_that.validator.isEmpty($('#sucursal').val())
		   
		 ){
		
			$('#opcdistrinstrucciones').val('');
			$('#capturados').val('');
			$('#contrato').val('');
			$('#folioMov').val('');
			$('#digito').val('');
			$('#importeNeto').val('');
			$('#depositos').val('');
			$('#retiros').val('');
			$('#sucursal').val('');
			_that.init();
		}
	}
	
	$(document).ready(function () {
	  myModule = new Catalogo();
	  myModule.init();
	  
	});

