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
import com.aforebanamex.plata.cg.dominio.exception.EliminarContratoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ContratoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.ContratoService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.ContratoHelper;

@Controller
public class ContratoController extends BaseController {
	
	@Autowired
	private ContratoHelper helper;		
	
	@Autowired
	private ContratoService contratoService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/contratos")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Contrato,Dígito,DV,Estatus,Perfil,Portafolio,CLABE,STipo Port,Libro,Asesor de Inversión,Tipo de Manifiesto,Servicio de Inversión,Carta Ejecución,Fecha,Carta Ejecución,Fecha,Justificación,Fecha,Sofisticado/No sofisticaso,Justificación,Fecha,Elegible/No Elegible,Justificación,Fecha,Calificado/No Calificado,Justificación,Fecha,Discrecional/No Discrecional,Justificación,Fecha,Instrumetos de Deuda Gubernamental,Instrumentos de Deuda Corporativa,Sociedades de Inversión,Valores Estructurados,Certificados Bursátiles Fiduciarios (Cebures,Cedevis) y Fideicomisos Privados,Titulos Opcionales (Warrants),Acciones,Valores Extranjeros");	
		model.addAttribute("origenDatos", 
				"idContrato,noContrato,digito,dv,estatus,perfil,portafolio,cLABE,sTipoPort,libro,asesorInversion,tipoManifiesto,servicioInversion,cartaEjecucion1,fechaCartaEjecucion1,cartaEjecucion2,fechaCartaEjecucion2,justificacionInstitucional,fechaInstitucional,sofisticado.descripcion,justificacionSofisticado,fechaSofisticado,elegible.descripcion,justificacionElegible,fechaElegible,calificado.descripcion,justificacionCalificado,fechaCalificado,discrecional.descripcion,justificacionDiscrecional,fechaDiscrecional,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion,conocimientoExperiencia.descripcion");
		return "dominio/contratos";
	}
	
	@PostMapping(value = "/obtenerContratos", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponsePlata<Contrato> obtenerContratos(
			@RequestBody RequestPlata<Contrato> data, Model model) {
		ResponsePlata<Contrato> response = contratoService.consultarContratosParametros(data);
		helper.cargarFormularios(model);
		return response;
	}

	@PostMapping("/registrarContrato")
	public @ResponseBody Message agregar(@RequestBody Contrato data) {
	
		Message message = new Message();
	
		try {
			contratoService.agregar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se agrego el contrato correctamente");
		} catch (ContratoDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de contrato duplicada");
		} catch (PlantillaNoExisteException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("No existe la plantilla especificada en el servidor");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar guardar - " + e.getMessage());
		}
	
		return message;
	}

	@PostMapping(value = "/actualizarContrato", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message actualizar(@RequestBody Contrato data) {
	
		Message message = new Message();
	
		try {
			contratoService.actualizar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se actualizo el contrato correctamente");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar actualizar - " + e.getMessage());
		} catch (ContratoDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de contrato duplicada");
		}
	
		return message;
	}

	@PostMapping(value = "/eliminarContrato/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message eliminar(@PathVariable Long id) {
	
		Message message = new Message();
	
		try {
			contratoService.eliminar(id);
			message.setCodigoEstatus(200);
			message.setMensaje("Se elimino el contrato correctamente");
		} catch (EliminarContratoInactivoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		}
	
		return message;
	}
}	
