package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Limitante;
import com.citi.insurance.catalogos.entity.LimitantePk;

public interface  LimitanteRepository  extends JpaRepository<Limitante, LimitantePk>,
JpaSpecificationExecutor<Limitante> {

}
