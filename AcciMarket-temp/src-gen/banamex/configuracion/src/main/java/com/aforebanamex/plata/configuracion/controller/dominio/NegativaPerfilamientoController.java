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
import com.aforebanamex.plata.cg.dominio.exception.EliminarNegativaPerfilamientoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.NegativaPerfilamientoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.NegativaPerfilamientoService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.NegativaPerfilamientoHelper;

@Controller
public class NegativaPerfilamientoController extends BaseController {
	
	@Autowired
	private NegativaPerfilamientoHelper helper;		
	
	@Autowired
	private NegativaPerfilamientoService negativaPerfilamientoService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/negativaPerfilamientos")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Nombre,Perfil Actual,Seleccione la persona que desea perfilar,% (Liquidez),Monto $ (Liquidez),% (Corto Plazo),Monto $ (Corto Plazo),% (Largo Plazo),Monto $ (Largo Plazo),% (Patrimonio líquido total 100%),Monto $ (Patrimonio líquido total 100%),1.1 Intervalo de Edad,1.2 Nivel de Estudios,1.3 Ocupación,1.4 Actividad Profesional ¿Anterior?,Actividad Profesional ¿Actual?,Relacionada con Inversiones,1.5 Estrategia de inversión del Cliente generalmente utilizada,1.6 El Cliente ha usado asesoría para la toma de decisiones de inversión,2.1 Instrumentos de Deuda Gubernamental,Frecuencia,Plazo,Volumen,2.2 Instrumentos de Deuda Corporativa,Frecuencia,Plazo,Volumen,2.3 Sociedades de Inversión,Frecuencia,Plazo,Volumen,2.4 Valores Estructurados,Frecuencia,Plazo,Volumen,2.5 Certificados Bursátiles Fiduciarios (Cerubes, Cedevis) y Fideicomisos Privados,Frecuencia,Plazo,Volumen,2.6 Títulos Opcionales (Warrant),Frecuencia,Plazo,Volumen,2.7 Acciones,Frecuencia,Plazo,Volumen,2.8 Valores Extranjeros,Frecuencia,Plazo,Volumen,2.9 Trackers TRACs o ETFs,Frecuencia,Plazo,Volumen,2.5 Certificados de Capital de Desarrollo (CKDs),Frecuencia,Plazo,Volumen,Seleccionar el Propósito de Inversión del Cliente (Estrategia),Seleccionar la Torelancia al Riesgo del Cliente,Seleccionar el Horizonte de Inversión del Cliente,1. El Cliente tiene alguna limitante y/o restricción para invertir,6.1 Porcentaje total del Patrimonio que el Cliente designa a invertir en productos de inversión (diferentes de bienes raíces, etc.),6.2 Porcentaje del ingreso anual que el Cliente destina a invertir en instrumentos de inversión,6.3 Porcentaje de las inversiones del Cliente que mantendrá en esta institución,Perfil,Inconsistencias");	
		model.addAttribute("origenDatos", 
				"idNegativaPerfilamiento,contrato.nocontrato,nombre,perfilActual,dummy.descripcion,porcentajeLiquidez,montoLiquidez,porcentajeCortoPlazo,montoCortoPlazo,porcentajeLargoPlazo,montoLargoPlazo,porcentajePatrimonioLiquidoTotal,montoPatrimonioLiquidoTotal,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,noSi.descripcion,dummy.descripcion,dummy.descripcion,conocimientoExperiencia.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,conocimientoExperiencia.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,noSi.descripcion,situacionFinancieraActual.descripcion,situacionFinancieraActual.descripcion,situacionFinancieraActual.descripcion,perfil,inconsistencias");
		return "dominio/negativaPerfilamientos";
	}
	



}	
