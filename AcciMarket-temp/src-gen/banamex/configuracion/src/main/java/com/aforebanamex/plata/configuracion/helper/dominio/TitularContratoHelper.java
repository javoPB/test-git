package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.TitularContratoConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.TitularContrato;
//import com.aforebanamex.plata.comunes.model.Modulos;

import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;
import com.aforebanamex.plata.cg.dominio.service.MexicoExtrajeroServices;
import com.aforebanamex.plata.comunes.model.MexicoExtrajero;
import com.aforebanamex.plata.cg.dominio.service.NoSiServices;
import com.aforebanamex.plata.comunes.model.NoSi;
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

@Component
public class TitularContratoHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	
@Autowired
private DummyServices dummyServices;	
@Autowired
private DummyServices dummyServices;	
@Autowired
private MexicoExtrajeroServices mexicoExtrajeroServices;	
@Autowired
private NoSiServices noSiServices;	
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

	public void cargarFormularios(Model model) {
		
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();
List<MexicoExtrajero> listaMexicoExtrajero= mexicoExtrajeroServices.consultarCatalogoMexicoExtrajero();
List<NoSi> listaNoSi= noSiServices.consultarCatalogoNoSi();
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

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("titularContrato", new TitularContrato());
		model.addAttribute("titularContratoUpd", new TitularContrato());
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaDummy", listaDummy);
model.addAttribute("listaMexicoExtrajero", listaMexicoExtrajero);
model.addAttribute("listaNoSi", listaNoSi);
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
		
		model.addAttribute(TitularContratoConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
