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

import com.citi.insurance.catalogos.domain.LimitanteBean;
import com.citi.insurance.catalogos.service.LimitanteService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/limitante")
public class LimitanteController extends BaseController {

  @Autowired
  LimitanteService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewLimitante";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<LimitanteBean> save(@RequestBody LimitanteBean domain) {
    LimitanteBean saved = service.save(domain);
    return new ResponseEntity<LimitanteBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<LimitanteBean> delete(@RequestBody LimitanteBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<LimitanteBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<LimitanteBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<LimitanteBean> pageRequest) {
    Page<LimitanteBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<LimitanteBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<LimitanteBean> saveList(@RequestBody List<LimitanteBean> domain) {
	LimitanteBean upload =  service.saveList(domain);
    return new ResponseEntity<LimitanteBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<LimitanteBean>> load() {
	List<LimitanteBean> load =  service.load();
    return new ResponseEntity<List<LimitanteBean>>(load, HttpStatus.OK);
  }
}
