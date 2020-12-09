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

import com.citi.insurance.catalogos.domain.ContratoBean;
import com.citi.insurance.catalogos.service.ContratoService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/contrato")
public class ContratoController extends BaseController {

  @Autowired
  ContratoService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewContrato";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ContratoBean> save(@RequestBody ContratoBean domain) {
    ContratoBean saved = service.save(domain);
    return new ResponseEntity<ContratoBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ContratoBean> delete(@RequestBody ContratoBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<ContratoBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<ContratoBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<ContratoBean> pageRequest) {
    Page<ContratoBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<ContratoBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ContratoBean> saveList(@RequestBody List<ContratoBean> domain) {
	ContratoBean upload =  service.saveList(domain);
    return new ResponseEntity<ContratoBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<ContratoBean>> load() {
	List<ContratoBean> load =  service.load();
    return new ResponseEntity<List<ContratoBean>>(load, HttpStatus.OK);
  }
}
