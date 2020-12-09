/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.citi.insurance.catalogos.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.citi.insurance.catalogos.domain.InstruccionEfectivoBean;
import com.citi.insurance.catalogos.service.InstruccionEfectivoService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/instruccionEfectivo")
public class InstruccionEfectivoController extends BaseController {

  @Autowired
  InstruccionEfectivoService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewInstruccionEfectivo";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<InstruccionEfectivoBean> save(@RequestBody InstruccionEfectivoBean domain) {
    InstruccionEfectivoBean saved = service.save(domain);
    return new ResponseEntity<InstruccionEfectivoBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<InstruccionEfectivoBean> delete(@RequestBody InstruccionEfectivoBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<InstruccionEfectivoBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<InstruccionEfectivoBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<InstruccionEfectivoBean> pageRequest) {
    Page<InstruccionEfectivoBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<InstruccionEfectivoBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<InstruccionEfectivoBean> saveList(@RequestBody List<InstruccionEfectivoBean> domain) {
	InstruccionEfectivoBean upload =  service.saveList(domain);
    return new ResponseEntity<InstruccionEfectivoBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<InstruccionEfectivoBean>> load() {
	List<InstruccionEfectivoBean> load =  service.load();
    return new ResponseEntity<List<InstruccionEfectivoBean>>(load, HttpStatus.OK);
  }
}
