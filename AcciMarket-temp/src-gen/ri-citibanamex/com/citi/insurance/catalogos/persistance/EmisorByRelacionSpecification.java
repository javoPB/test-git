package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Emisor;
import com.citi.insurance.catalogos.entity.Emisor_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class EmisorByRelacionSpecification extends BaseSpecification<Emisor> {

  private final String name;

  public EmisorByRelacionSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Emisor> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Emisor_.relacion), "%"+this.name+"%");
  }

}
