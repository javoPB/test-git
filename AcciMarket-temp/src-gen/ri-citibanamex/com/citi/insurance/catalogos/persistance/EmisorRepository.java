package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Emisor;
import com.citi.insurance.catalogos.entity.EmisorPk;

public interface  EmisorRepository  extends JpaRepository<Emisor, EmisorPk>,
JpaSpecificationExecutor<Emisor> {

}
