package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Titularcontrato;
import com.citi.insurance.catalogos.entity.TitularcontratoPk;

public interface  TitularcontratoRepository  extends JpaRepository<Titularcontrato, TitularcontratoPk>,
JpaSpecificationExecutor<Titularcontrato> {

}
