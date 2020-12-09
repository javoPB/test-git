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
import com.aforebanamex.plata.cg.dominio.exception.EliminarInstruccionEfectivoInactivoException;
import com.aforebanamex.plata.cg.dominio.exception.InstruccionEfectivoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.exception.PlantillaNoExisteException;
import com.aforebanamex.plata.cg.dominio.service.InstruccionEfectivoService;
import com.aforebanamex.plata.comunes.model.ConsultaSalidaInformacion;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Proceso;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.model.SubProceso;
import com.aforebanamex.plata.comunes.model.SubprocesoConsulta;
import com.aforebanamex.plata.configuracion.helper.dominio.InstruccionEfectivoHelper;

@Controller
public class InstruccionEfectivoController extends BaseController {
	
	@Autowired
	private InstruccionEfectivoHelper helper;		
	
	@Autowired
	private InstruccionEfectivoService instruccionEfectivoService;
	
	//@Autowired
	//private ProcesosService procesoService;
	
	//@Autowired
	//private SubProcesoService subProcesoService;		
	
	@GetMapping(value = "/instruccionEfectivos")
	public String pagina(Model model) {
		helper.cargarFormularios(model);
		
		model.addAttribute("cabeceras", "Seleccione,Sucursal,Operación,Tipo Operación,Med. Liquidación,Contrato,Subtipo de Portafolio,Dígito,Titular,Saldo,Contrato,Dígito,Saldo Inicial,Saldo Calculado,Contrato,Dígito,Saldo Inicial,Saldo Calculado,Importe");	
		model.addAttribute("origenDatos", 
				"idInstruccionEfectivo,dummy.descripcion,dummy.descripcion,dummy.descripcion,dummy.descripcion,contrato,subtipoPortafolio,digito,titular,saldo,contratoEgreso,digitoEgreso,saldoInicialEgreso,saldoCalculadoEgreso,contratoIngreso,digitoIngreso,saldoInicialIngreso,saldoCalculadoIngreso,importeIngreso");
		return "dominio/instruccionEfectivos";
	}
	



}	
