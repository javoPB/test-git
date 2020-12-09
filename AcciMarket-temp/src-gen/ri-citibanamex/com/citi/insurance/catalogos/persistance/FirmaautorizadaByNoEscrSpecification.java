package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Firmaautorizada;
import com.citi.insurance.catalogos.entity.Firmaautorizada_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class FirmaautorizadaByNoEscrSpecification extends BaseSpecification<Firmaautorizada> {

  private final String name;

  public FirmaautorizadaByNoEscrSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Firmaautorizada> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Firmaautorizada_.noescr), "%"+this.name+"%");
  }

}
