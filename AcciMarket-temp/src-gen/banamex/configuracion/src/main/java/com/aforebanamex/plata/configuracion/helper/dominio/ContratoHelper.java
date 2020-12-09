package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.ContratoConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.Contrato;
//import com.aforebanamex.plata.comunes.model.Modulos;

import com.aforebanamex.plata.cg.dominio.service.SofisticadoServices;
import com.aforebanamex.plata.comunes.model.Sofisticado;
import com.aforebanamex.plata.cg.dominio.service.ElegibleServices;
import com.aforebanamex.plata.comunes.model.Elegible;
import com.aforebanamex.plata.cg.dominio.service.CalificadoServices;
import com.aforebanamex.plata.comunes.model.Calificado;
import com.aforebanamex.plata.cg.dominio.service.DiscrecionalServices;
import com.aforebanamex.plata.comunes.model.Discrecional;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;

@Component
public class ContratoHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	
@Autowired
private SofisticadoServices sofisticadoServices;	
@Autowired
private ElegibleServices elegibleServices;	
@Autowired
private CalificadoServices calificadoServices;	
@Autowired
private DiscrecionalServices discrecionalServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	

	public void cargarFormularios(Model model) {
		
List<Sofisticado> listaSofisticado= sofisticadoServices.consultarCatalogoSofisticado();
List<Elegible> listaElegible= elegibleServices.consultarCatalogoElegible();
List<Calificado> listaCalificado= calificadoServices.consultarCatalogoCalificado();
List<Discrecional> listaDiscrecional= discrecionalServices.consultarCatalogoDiscrecional();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("contrato", new Contrato());
		model.addAttribute("contratoUpd", new Contrato());
model.addAttribute("listaSofisticado", listaSofisticado);
model.addAttribute("listaElegible", listaElegible);
model.addAttribute("listaCalificado", listaCalificado);
model.addAttribute("listaDiscrecional", listaDiscrecional);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
		
		model.addAttribute(ContratoConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
