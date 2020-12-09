package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Reperfilamientopersonafisica;
import com.citi.insurance.catalogos.entity.Reperfilamientopersonafisica_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class ReperfilamientopersonafisicaByPersonaPerfilarSpecification extends BaseSpecification<Reperfilamientopersonafisica> {

  private final String name;

  public ReperfilamientopersonafisicaByPersonaPerfilarSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Reperfilamientopersonafisica> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Reperfilamientopersonafisica_.personaperfilar), "%"+this.name+"%");
  }

}
