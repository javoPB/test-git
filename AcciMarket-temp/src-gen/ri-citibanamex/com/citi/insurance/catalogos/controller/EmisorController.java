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

import com.citi.insurance.catalogos.domain.EmisorBean;
import com.citi.insurance.catalogos.service.EmisorService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/emisor")
public class EmisorController extends BaseController {

  @Autowired
  EmisorService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewEmisor";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<EmisorBean> save(@RequestBody EmisorBean domain) {
    EmisorBean saved = service.save(domain);
    return new ResponseEntity<EmisorBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<EmisorBean> delete(@RequestBody EmisorBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<EmisorBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<EmisorBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<EmisorBean> pageRequest) {
    Page<EmisorBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<EmisorBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<EmisorBean> saveList(@RequestBody List<EmisorBean> domain) {
	EmisorBean upload =  service.saveList(domain);
    return new ResponseEntity<EmisorBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<EmisorBean>> load() {
	List<EmisorBean> load =  service.load();
    return new ResponseEntity<List<EmisorBean>>(load, HttpStatus.OK);
  }
}
