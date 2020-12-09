package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Contrato;
import com.citi.insurance.catalogos.entity.Contrato_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class ContratoByCartaEjecucion2Specification extends BaseSpecification<Contrato> {

  private final String name;

  public ContratoByCartaEjecucion2Specification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Contrato> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Contrato_.cartaejecucion2), "%"+this.name+"%");
  }

}
