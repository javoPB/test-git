package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Reperfilamientopersonafisica;
import com.citi.insurance.catalogos.entity.ReperfilamientopersonafisicaPk;

public interface  ReperfilamientopersonafisicaRepository  extends JpaRepository<Reperfilamientopersonafisica, ReperfilamientopersonafisicaPk>,
JpaSpecificationExecutor<Reperfilamientopersonafisica> {

}
