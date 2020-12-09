package com.aforebanamex.plata.configuracion.controller.dominio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.aforebanamex.plata.base.controller.BaseController;
import com.aforebanamex.plata.base.exception.InsfraestructuraException;
//	import com.aforebanamex.plata.cg.cao.service.ProcesosService;
//	import com.aforebanamex.plata.cg.cao.service.SubProcesoService;
import com.aforebanamex.plata.cg.dominio.exception.EliminarEmisorInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.EmisorDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.EmisorService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.Emisor;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.EmisorHelper;

@Controller
public class EmisorController extends BaseController {
	
	@Autowired
	private EmisorHelper helper;		
	
	@Autowired
	private EmisorService emisorService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/emisors")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Emisor,Relación");	
		model.addAttribute("origenDatos", 
				"idEmisor,emisor,relacion.descripcion");
		return "dominio/emisors";
	}
	
	@PostMapping(value = "/obtenerEmisors", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponsePlata<Emisor> obtenerEmisors(
			@RequestBody RequestPlata<Emisor> data, Model model) {
		ResponsePlata<Emisor> response = emisorService.consultarEmisorsParametros(data);
		helper.cargarFormularios(model);
		return response;
	}



}	
