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
import com.aforebanamex.plata.cg.dominio.exception.EliminarFirmaAutorizadaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.FirmaAutorizadaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.FirmaAutorizadaService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.FirmaAutorizada;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.FirmaAutorizadaHelper;

@Controller
public class FirmaAutorizadaController extends BaseController {
	
	@Autowired
	private FirmaAutorizadaHelper helper;		
	
	@Autowired
	private FirmaAutorizadaService firmaAutorizadaService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/firmaAutorizadas")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Nombre,Apellido Paterno,Apellido Materno,No Escr,No Not");	
		model.addAttribute("origenDatos", 
				"idFirmaAutorizada,nombre,apPaterno,apMaterno,noEscr,noNot");
		return "dominio/firmaAutorizadas";
	}
	



	@PostMapping(value = "/eliminarFirmaAutorizada/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message eliminar(@PathVariable Long id) {
	
		Message message = new Message();
	
		try {
			firmaAutorizadaService.eliminar(id);
			message.setCodigoEstatus(200);
			message.setMensaje("Se elimino el firmaAutorizada correctamente");
		} catch (EliminarFirmaAutorizadaInactivoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		}
	
		return message;
	}
}	
