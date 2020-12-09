package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Beneficiario;
import com.citi.insurance.catalogos.entity.Beneficiario_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class BeneficiarioByApMaternoSpecification extends BaseSpecification<Beneficiario> {

  private final String name;

  public BeneficiarioByApMaternoSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Beneficiario> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Beneficiario_.apmaterno), "%"+this.name+"%");
  }

}
