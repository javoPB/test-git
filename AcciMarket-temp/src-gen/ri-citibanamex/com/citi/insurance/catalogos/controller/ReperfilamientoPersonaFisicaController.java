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

import com.citi.insurance.catalogos.domain.ReperfilamientoPersonaFisicaBean;
import com.citi.insurance.catalogos.service.ReperfilamientoPersonaFisicaService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/reperfilamientoPersonaFisica")
public class ReperfilamientoPersonaFisicaController extends BaseController {

  @Autowired
  ReperfilamientoPersonaFisicaService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewReperfilamientoPersonaFisica";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ReperfilamientoPersonaFisicaBean> save(@RequestBody ReperfilamientoPersonaFisicaBean domain) {
    ReperfilamientoPersonaFisicaBean saved = service.save(domain);
    return new ResponseEntity<ReperfilamientoPersonaFisicaBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ReperfilamientoPersonaFisicaBean> delete(@RequestBody ReperfilamientoPersonaFisicaBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<ReperfilamientoPersonaFisicaBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<ReperfilamientoPersonaFisicaBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<ReperfilamientoPersonaFisicaBean> pageRequest) {
    Page<ReperfilamientoPersonaFisicaBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<ReperfilamientoPersonaFisicaBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<ReperfilamientoPersonaFisicaBean> saveList(@RequestBody List<ReperfilamientoPersonaFisicaBean> domain) {
	ReperfilamientoPersonaFisicaBean upload =  service.saveList(domain);
    return new ResponseEntity<ReperfilamientoPersonaFisicaBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<ReperfilamientoPersonaFisicaBean>> load() {
	List<ReperfilamientoPersonaFisicaBean> load =  service.load();
    return new ResponseEntity<List<ReperfilamientoPersonaFisicaBean>>(load, HttpStatus.OK);
  }
}
