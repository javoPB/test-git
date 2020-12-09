package com.aforebanamex.plata.configuracion.helper.dominio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import com.aforebanamex.plata.base.helper.BaseHelper;
import com.aforebanamex.plata.base.helper.BeneficiarioConstantesHelper;
//import com.aforebanamex.plata.cg.cao.service.ModuloService;
import com.aforebanamex.plata.comunes.model.Beneficiario;
//import com.aforebanamex.plata.comunes.model.Modulos;


@Component
public class BeneficiarioHelper extends BaseHelper {

	private List<String> listaMensajes;
	
	//@Autowired
	//private ModuloService moduloService;
	

	public void cargarFormularios(Model model) {
		

		listaMensajes = new ArrayList<String>();
		// List<Modulos> modulos = moduloService.consultarModulos().getPayloades();
		// model.addAttribute("modulo", modulos);
		
		model.addAttribute("beneficiario", new Beneficiario());
		model.addAttribute("beneficiarioUpd", new Beneficiario());
		
		model.addAttribute(BeneficiarioConstantesHelper.LISTA_MENSAJES, listaMensajes);

	}

	public List<String> getListaMensajes() {
		return listaMensajes;
	}

	public void setListaMensajes(List<String> listaMensajes) {
		this.listaMensajes = listaMensajes;
	}

}
