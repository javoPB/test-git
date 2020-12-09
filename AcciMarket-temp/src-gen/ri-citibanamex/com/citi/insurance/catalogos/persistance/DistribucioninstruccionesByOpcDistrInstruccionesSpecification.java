package com.citi.insurance.catalogos.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.citi.insurance.catalogos.entity.Distribucioninstrucciones;
import com.citi.insurance.catalogos.entity.Distribucioninstrucciones_;
import com.citi.insurance.catalogos.support.persistence.BaseSpecification;

public class DistribucioninstruccionesByOpcDistrInstruccionesSpecification extends BaseSpecification<Distribucioninstrucciones> {

  private final String name;

  public DistribucioninstruccionesByOpcDistrInstruccionesSpecification(String name) {	  
	  this.name = name;
  }

  @Override
  public Predicate toPredicate(Root<Distribucioninstrucciones> root, CriteriaQuery<?> cq,
          CriteriaBuilder cb) {
    return cb.like(root.get(Distribucioninstrucciones_.opcdistrinstrucciones), "%"+this.name+"%");
  }

}
