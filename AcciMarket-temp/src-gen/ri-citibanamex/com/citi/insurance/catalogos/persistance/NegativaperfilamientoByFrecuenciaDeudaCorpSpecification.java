package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Negativaperfilamiento;
import com.citi.insurance.catalogos.entity.Negativaperfilamiento_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class NegativaperfilamientoByFrecuenciaDeudaCorpSpecification extends BaseSpecification<Negativaperfilamiento> {

  private final String name;

  public NegativaperfilamientoByFrecuenciaDeudaCorpSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Negativaperfilamiento> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Negativaperfilamiento_.frecuenciadeudacorp), "%"+this.name+"%");
  }

}
