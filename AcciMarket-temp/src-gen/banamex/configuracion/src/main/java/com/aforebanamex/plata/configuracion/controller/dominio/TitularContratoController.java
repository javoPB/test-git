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
import com.aforebanamex.plata.cg.dominio.exception.EliminarTitularContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.TitularContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.TitularContratoService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.TitularContrato;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.TitularContratoHelper;

@Controller
public class TitularContratoController extends BaseController {
	
	@Autowired
	private TitularContratoHelper helper;		
	
	@Autowired
	private TitularContratoService titularContratoService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/titularContratos")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Nombre,Actividad,No. Cliente Banamex,No. Cta,Suc.,CLABE,Calle,No. Exterior,No. Interior,CLABE,C.P.,Estado,Del/Mpo,Ciudad,Colonia,¿Quieres que la correspondencia llegue al domicilio anterior?,R.F.C.(Con Homoclave),CURP,Fecha Nac.,Escolaridad,Edo. Civil,Sexo,Tipo Vivienda,C. Migratoria,P. Residencia,Nacionalidad,País Nac.,Edo. Nac.,¿El cliente es empleado del Grupo Financiero Banamex?");	
		model.addAttribute("origenDatos", 
				"idTitularContrato,nombre,dummy.descripcion,noClienteBanamex,noCta,suc,clabe,calle,noExt,noInterior,mexicoExtrajero.descripcion,cp,estado,delMpo,ciudad,colonia,noSi.descripcion,rfc,curp,fecNac,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,noSi.descripcion");
		return "dominio/titularContratos";
	}
	

	@PostMapping("/registrarTitularContrato")
	public @ResponseBody Message agregar(@RequestBody TitularContrato data) {
	
		Message message = new Message();
	
		try {
			titularContratoService.agregar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se agrego el titularContrato correctamente");
		} catch (TitularContratoDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de titularContrato duplicada");
		} catch (PlantillaNoExisteException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("No existe la plantilla especificada en el servidor");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar guardar - " + e.getMessage());
		}
	
		return message;
	}

	@PostMapping(value = "/actualizarTitularContrato", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message actualizar(@RequestBody TitularContrato data) {
	
		Message message = new Message();
	
		try {
			titularContratoService.actualizar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se actualizo el titularContrato correctamente");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar actualizar - " + e.getMessage());
		} catch (TitularContratoDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de titularContrato duplicada");
		}
	
		return message;
	}

}	
