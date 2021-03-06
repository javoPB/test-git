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
import com.aforebanamex.plata.cg.dominio.exception.EliminarDistribucionInstruccionesInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.DistribucionInstruccionesDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.DistribucionInstruccionesService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.DistribucionInstruccionesHelper;

@Controller
public class DistribucionInstruccionesController extends BaseController {
	
	@Autowired
	private DistribucionInstruccionesHelper helper;		
	
	@Autowired
	private DistribucionInstruccionesService distribucionInstruccionesService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/distribucionInstruccioness")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,NOMBRE,Capturados,Contrato,Folio Mov.,Dígito,Importe Neto,Depósitos,Retiros,Sucursal");	
		model.addAttribute("origenDatos", 
				"idDistribucionInstrucciones,opcDistrInstrucciones.descripcion,capturados,contrato,folioMov,digito,importeNeto,depositos,retiros,dummy.descripcion");
		return "dominio/distribucionInstruccioness";
	}
	



}	
