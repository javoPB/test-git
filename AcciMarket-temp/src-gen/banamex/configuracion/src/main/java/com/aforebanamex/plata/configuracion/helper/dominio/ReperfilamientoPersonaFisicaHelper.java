package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.ReperfilamientoPersonaFisicaConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.ReperfilamientoPersonaFisica;
//import com.aforebanamex.plata.comunes.model.Modulos;

import com.aforebanamex.plata.cg.dominio.service.ContratoServices;
import com.aforebanamex.plata.comunes.model.Contrato;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.NoSiServices;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.ConocimientoExperienciaServices;
import com.aforebanamex.plata.comunes.model.ConocimientoExperiencia;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.NoSiServices;
import com.aforebanamex.plata.comunes.model.NoSi;
import com.aforebanamex.plata.cg.dominio.service.SituacionFinancieraActualServices;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.cg.dominio.service.SituacionFinancieraActualServices;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;
import com.aforebanamex.plata.cg.dominio.service.SituacionFinancieraActualServices;
import com.aforebanamex.plata.comunes.model.SituacionFinancieraActual;

@Component
public class ReperfilamientoPersonaFisicaHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	
@Autowired
private ContratoServices contratoServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private NoSiServices noSiServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private ConocimientoExperienciaServices conocimientoExperienciaServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private NoSiServices noSiServices;	
@Autowired
private SituacionFinancieraActualServices situacionFinancieraActualServices;	
@Autowired
private SituacionFinancieraActualServices situacionFinancieraActualServices;	
@Autowired
private SituacionFinancieraActualServices situacionFinancieraActualServices;	

	public void cargarFormularios(Model model) {
		
List<Contrato> listaContrato = contratoServices.consultarCatalogoContrato();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<NoSi> listaNoSi= noSiServices.consultarCatalogoNoSi();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<ConocimientoExperiencia> listaConocimientoExperiencia= conocimientoExperienciaServices.consultarCatalogoConocimientoExperiencia();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<NoSi> listaNoSi= noSiServices.consultarCatalogoNoSi();
List<SituacionFinancieraActual> listaSituacionFinancieraActual= situacionFinancieraActualServices.consultarCatalogoSituacionFinancieraActual();
List<SituacionFinancieraActual> listaSituacionFinancieraActual= situacionFinancieraActualServices.consultarCatalogoSituacionFinancieraActual();
List<SituacionFinancieraActual> listaSituacionFinancieraActual= situacionFinancieraActualServices.consultarCatalogoSituacionFinancieraActual();

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("reperfilamientoPersonaFisica", new ReperfilamientoPersonaFisica());
		model.addAttribute("reperfilamientoPersonaFisicaUpd", new ReperfilamientoPersonaFisica());
model.addAttribute("listaContrato", listaContrato);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaNoSi", listaNoSi);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaConocimientoExperiencia", listaConocimientoExperiencia);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaNoSi", listaNoSi);
model.addAttribute("listaSituacionFinancieraActual", listaSituacionFinancieraActual);
model.addAttribute("listaSituacionFinancieraActual", listaSituacionFinancieraActual);
model.addAttribute("listaSituacionFinancieraActual", listaSituacionFinancieraActual);
		
		model.addAttribute(ReperfilamientoPersonaFisicaConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
