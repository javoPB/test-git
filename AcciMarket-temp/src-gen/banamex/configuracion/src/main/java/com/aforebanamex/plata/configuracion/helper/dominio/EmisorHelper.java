package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.EmisorConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.Emisor;
//import com.aforebanamex.plata.comunes.model.Modulos;

import com.aforebanamex.plata.cg.dominio.service.RelacionServices;
import com.aforebanamex.plata.comunes.model.Relacion;

@Component
public class EmisorHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	
@Autowired
private RelacionServices relacionServices;	

	public void cargarFormularios(Model model) {
		
List<Relacion> listaRelacion= relacionServices.consultarCatalogoRelacion();

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("emisor", new Emisor());
		model.addAttribute("emisorUpd", new Emisor());
model.addAttribute("listaRelacion", listaRelacion);
		
		model.addAttribute(EmisorConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
