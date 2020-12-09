package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Instruccionefectivo;
import com.citi.insurance.catalogos.entity.Instruccionefectivo_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class InstruccionefectivoByOperacionSpecification extends BaseSpecification<Instruccionefectivo> {

  private final String name;

  public InstruccionefectivoByOperacionSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Instruccionefectivo> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Instruccionefectivo_.operacion), "%"+this.name+"%");
  }

}
