package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Contrato;
import com.citi.insurance.catalogos.entity.ContratoPk;

public interface  ContratoRepository  extends JpaRepository<Contrato, ContratoPk>,
JpaSpecificationExecutor<Contrato> {

}
