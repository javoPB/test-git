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

import com.citi.insurance.catalogos.domain.NegativaPerfilamientoBean;
import com.citi.insurance.catalogos.service.NegativaPerfilamientoService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/negativaPerfilamiento")
public class NegativaPerfilamientoController extends BaseController {

  @Autowired
  NegativaPerfilamientoService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewNegativaPerfilamiento";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<NegativaPerfilamientoBean> save(@RequestBody NegativaPerfilamientoBean domain) {
    NegativaPerfilamientoBean saved = service.save(domain);
    return new ResponseEntity<NegativaPerfilamientoBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<NegativaPerfilamientoBean> delete(@RequestBody NegativaPerfilamientoBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<NegativaPerfilamientoBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<NegativaPerfilamientoBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<NegativaPerfilamientoBean> pageRequest) {
    Page<NegativaPerfilamientoBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<NegativaPerfilamientoBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<NegativaPerfilamientoBean> saveList(@RequestBody List<NegativaPerfilamientoBean> domain) {
	NegativaPerfilamientoBean upload =  service.saveList(domain);
    return new ResponseEntity<NegativaPerfilamientoBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<NegativaPerfilamientoBean>> load() {
	List<NegativaPerfilamientoBean> load =  service.load();
    return new ResponseEntity<List<NegativaPerfilamientoBean>>(load, HttpStatus.OK);
  }
}
