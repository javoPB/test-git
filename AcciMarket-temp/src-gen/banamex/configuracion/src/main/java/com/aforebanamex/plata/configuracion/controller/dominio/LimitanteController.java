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
import com.aforebanamex.plata.cg.dominio.exception.EliminarLimitanteInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.LimitanteDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.LimitanteService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.Limitante;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.LimitanteHelper;

@Controller
public class LimitanteController extends BaseController {
	
	@Autowired
	private LimitanteHelper helper;		
	
	@Autowired
	private LimitanteService limitanteService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/limitantes")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Grupo Instrumento,Tipo Valor,Emisoras,Tipo Valor Emisora");	
		model.addAttribute("origenDatos", 
				"idLimitante,grupoInstrumento,tipoValor,emisoras,tipoValorEmisora");
		return "dominio/limitantes";
	}
	



}	
