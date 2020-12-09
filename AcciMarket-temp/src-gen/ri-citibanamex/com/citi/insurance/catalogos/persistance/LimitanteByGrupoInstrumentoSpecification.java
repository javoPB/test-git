package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Limitante;
import com.citi.insurance.catalogos.entity.Limitante_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class LimitanteByGrupoInstrumentoSpecification extends BaseSpecification<Limitante> {

  private final String name;

  public LimitanteByGrupoInstrumentoSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Limitante> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Limitante_.grupoinstrumento), "%"+this.name+"%");
  }

}
