<%@page contentType="text/html" pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>


<c:set var="contextpath" value="<%=request.getContextPath()%>" />

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta property="gobmxhelper" content="no plugins">
    <title>Editor</title>

    <script type="text/javascript" > var myModule = {}; var contextpath = "${contextpath}";</script>
    <script type="text/javascript" src="${contextpath}/static/resources/js/lib/jquery-1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="${contextpath}/static/resources/js/lib/jquery-1.11.3/jquery-ui-1.10.4.custom.js"></script>
    <script type="text/javascript" src="${contextpath}/static/resources/js/lib/jquery-1.11.3/jquery.validate.js"></script> 
    <script type="text/javascript" src="${contextpath}/static/resources/js/lib/sheetjs/xlsx.full.min.js"></script>
     <script type="text/javascript" charset="utf-8" src="${contextpath}/static/resources/js/modules/MyValidator.js"></script>
     <script type="text/javascript" charset="utf-8" src="${contextpath}/static/resources/js/modules/Limitante.js"></script>
     <link href="${contextpath}/static/resources/css/tableStyle.css" rel="stylesheet">
    
  </head>

  <body>
    <!-- Contenido -->
    <main class="page">
      <div class="container-fluid">
        <ol class="breadcrumb">
          <li><a href="#"><i class="icon icon-home"></i></a></li>
          <li><a id="top" name="top" href="#">Inicio</a></li>
          <li class="active">Limitante</li>
        </ol>
        <div id="workingArea"></div>
        <div id="editorDiv"></div>
      </div>
      <div id="modals"></div>      
    </main>
    
   	<!-- Modal -->
		  <div class=" genericModal modal" id="dialog" style="display: none;text-align: center;background-color: #e4eaf1;">
		      <div class="content">
		        <div class="headerModal">Seguros</div>
		        <div class="bodyModal">
		          <p id="contentModal">Agregar contenido</p>
		          <div class="row-button" style="padding-bottom: 15px;">
			          	<a class="btnModal" id="btnAceptar" style="display:none">Aceptar</a>
			          	<a class="btnModal btn-info btn-sm" id="btnCancelar" style="display:none" rel="modal:close">Cancelar</a>
		          </div>
		        </div>
		      </div>
		  </div>

  </body>
</html>

