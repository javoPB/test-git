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

import com.citi.insurance.catalogos.domain.BeneficiarioBean;
import com.citi.insurance.catalogos.service.BeneficiarioService;
import com.citi.insurance.catalogos.support.controller.BaseController;
import com.citi.insurance.catalogos.support.domain.PageRequestModel;

/**
 *
 * @author 
 */
@Controller
@RequestMapping(value = "/beneficiario")
public class BeneficiarioController extends BaseController {

  @Autowired
  BeneficiarioService service;

  @RequestMapping(value = "/init",
          method = { RequestMethod.GET, RequestMethod.POST })
  public String init(HttpSession session, Model model,
          HttpServletRequest request, HttpServletResponse response) {
    return "viewBeneficiario";
  }

  @RequestMapping(value = "/save",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<BeneficiarioBean> save(@RequestBody BeneficiarioBean domain) {
    BeneficiarioBean saved = service.save(domain);
    return new ResponseEntity<BeneficiarioBean>(saved, HttpStatus.OK);
  }

  @RequestMapping(value = "/delete",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<BeneficiarioBean> delete(@RequestBody BeneficiarioBean domain) {
    service.delete(domain.getId());
    return new ResponseEntity<BeneficiarioBean>(domain, HttpStatus.OK);
  }

  @RequestMapping(value = "/fetch",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<Page<BeneficiarioBean>> fetch(HttpSession session,
          @RequestBody PageRequestModel<BeneficiarioBean> pageRequest) {
    Page<BeneficiarioBean> page = service.fetch(pageRequest);
    return new ResponseEntity<Page<BeneficiarioBean>>(page, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/upload",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<BeneficiarioBean> saveList(@RequestBody List<BeneficiarioBean> domain) {
	BeneficiarioBean upload =  service.saveList(domain);
    return new ResponseEntity<BeneficiarioBean>(upload, HttpStatus.OK);
  }
  
  @RequestMapping(value = "/load",
          method = { RequestMethod.GET, RequestMethod.POST })
  @ResponseBody
  public ResponseEntity<List<BeneficiarioBean>> load() {
	List<BeneficiarioBean> load =  service.load();
    return new ResponseEntity<List<BeneficiarioBean>>(load, HttpStatus.OK);
  }
}
