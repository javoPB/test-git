package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Titularcontrato;
import com.citi.insurance.catalogos.entity.Titularcontrato_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class TitularcontratoByEmpleadoGroFinBanamexSpecification extends BaseSpecification<Titularcontrato> {

  private final String name;

  public TitularcontratoByEmpleadoGroFinBanamexSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Titularcontrato> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Titularcontrato_.empleadogrofinbanamex), "%"+this.name+"%");
  }

}
