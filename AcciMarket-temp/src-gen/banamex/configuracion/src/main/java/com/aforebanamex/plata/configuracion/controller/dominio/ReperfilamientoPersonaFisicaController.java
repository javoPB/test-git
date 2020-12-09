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
import com.aforebanamex.plata.cg.dominio.exception.EliminarReperfilamientoPersonaFisicaInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.ReperfilamientoPersonaFisicaDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.ReperfilamientoPersonaFisicaService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.ReperfilamientoPersonaFisicaHelper;

@Controller
public class ReperfilamientoPersonaFisicaController extends BaseController {
	
	@Autowired
	private ReperfilamientoPersonaFisicaHelper helper;		
	
	@Autowired
	private ReperfilamientoPersonaFisicaService reperfilamientoPersonaFisicaService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/reperfilamientoPersonaFisicas")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Nombre,Perfil Actual,Seleccione a la persona a perfilar,% (Liquidez),Monto $ (Liquidez),% (Corto Plazo),Monto $ (Corto Plazo),% (Largo Plazo),Monto $ (Largo Plazo),% (Patrimonio líquido total 100%),Monto $ (Patrimonio líquido total 100%),1.1 Intervalo de Edad,1.2 Nivel de Estudios,1.3 Ocupación,1.4 Actividad Profesional ¿Anterior?,Actividad Profesional ¿Actual?,Relacionada con Inversiones,1.5 Estrategia de inversión del Cliente generalmente utilizada,1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión,2.1 Instrumentos de Deuda Gubernamental,Frecuencia,Plazo,Volumen,2.2 Instrumentos de Deuda Corporativa,Frecuencia,Plazo,Volumen,2.3 Sociedades de Inversión,Frecuencia,Plazo,Volumen,2.4 Valores Estructurados,Frecuencia,Plazo,Volumen,2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados,Frecuencia,Plazo,Volumen,1. El Cliente tiene alguna limitante y/o restricción para invertir,6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.),6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión,6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución,Perfil");	
		model.addAttribute("origenDatos", 
				"idReperfilamientoPersonaFisica,contrato.nocontrato,nombre,perfilActual,dummy.descripcion,porcentajeLiquidez,montoLiquidez,porcentajeCortoPlazo,montoCortoPlazo,porcentajeLargoPlazo,montoLargoPlazo,porcentajePatrimonioLiquidoTotal,montoPatrimonioLiquidoTotal,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,noSi.descripcion,dummy.descripcion,dummy.descripcion,conocimientoExperiencia.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,conocimientoExperiencia.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,noSi.descripcion,situacionFinancieraActual.descripcion,situacionFinancieraActual.descripcion,situacionFinancieraActual.descripcion,perfil");
		return "dominio/reperfilamientoPersonaFisicas";
	}
	

	@PostMapping("/registrarReperfilamientoPersonaFisica")
	public @ResponseBody Message agregar(@RequestBody ReperfilamientoPersonaFisica data) {
	
		Message message = new Message();
	
		try {
			reperfilamientoPersonaFisicaService.agregar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se agrego el reperfilamientoPersonaFisica correctamente");
		} catch (ReperfilamientoPersonaFisicaDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de reperfilamientoPersonaFisica duplicada");
		} catch (PlantillaNoExisteException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("No existe la plantilla especificada en el servidor");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar guardar - " + e.getMessage());
		}
	
		return message;
	}

	@PostMapping(value = "/actualizarReperfilamientoPersonaFisica", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message actualizar(@RequestBody ReperfilamientoPersonaFisica data) {
	
		Message message = new Message();
	
		try {
			reperfilamientoPersonaFisicaService.actualizar(data);
			message.setCodigoEstatus(200);
			message.setMensaje("Se actualizo el reperfilamientoPersonaFisica correctamente");
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar actualizar - " + e.getMessage());
		} catch (ReperfilamientoPersonaFisicaDuplicadoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Configuracion de reperfilamientoPersonaFisica duplicada");
		}
	
		return message;
	}

	@PostMapping(value = "/eliminarReperfilamientoPersonaFisica/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Message eliminar(@PathVariable Long id) {
	
		Message message = new Message();
	
		try {
			reperfilamientoPersonaFisicaService.eliminar(id);
			message.setCodigoEstatus(200);
			message.setMensaje("Se elimino el reperfilamientoPersonaFisica correctamente");
		} catch (EliminarReperfilamientoPersonaFisicaInactivoException e) {
			message.setCodigoEstatus(400);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		} catch (InsfraestructuraException e) {
			message.setCodigoEstatus(404);
			message.setMensaje("Ocurrio un error al intentar eliminar - " + e.getMessage());
		}
	
		return message;
	}
}	
