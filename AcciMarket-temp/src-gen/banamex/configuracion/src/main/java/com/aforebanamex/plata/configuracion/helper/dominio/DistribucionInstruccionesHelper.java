package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.DistribucionInstruccionesConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;
//import com.aforebanamex.plata.comunes.model.Modulos;

import com.aforebanamex.plata.cg.dominio.service.OpcDistrInstruccionesServices;
import com.aforebanamex.plata.comunes.model.OpcDistrInstrucciones;
import com.aforebanamex.plata.cg.dominio.service.DummyServices;
import com.aforebanamex.plata.comunes.model.Dummy;

@Component
public class DistribucionInstruccionesHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	
@Autowired
private OpcDistrInstruccionesServices opcDistrInstruccionesServices;	
@Autowired
private DummyServices dummyServices;	

	public void cargarFormularios(Model model) {
		
List<OpcDistrInstrucciones> listaOpcDistrInstrucciones= opcDistrInstruccionesServices.consultarCatalogoOpcDistrInstrucciones();
List<Dummy> listaDummy= dummyServices.consultarCatalogoDummy();

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("distribucionInstrucciones", new DistribucionInstrucciones());
		model.addAttribute("distribucionInstruccionesUpd", new DistribucionInstrucciones());
model.addAttribute("listaOpcDistrInstrucciones", listaOpcDistrInstrucciones);
model.addAttribute("listaDummy", listaDummy);
		
		model.addAttribute(DistribucionInstruccionesConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
