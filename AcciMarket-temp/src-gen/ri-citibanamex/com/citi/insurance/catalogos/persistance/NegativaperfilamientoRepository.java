package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Negativaperfilamiento;
import com.citi.insurance.catalogos.entity.NegativaperfilamientoPk;

public interface  NegativaperfilamientoRepository  extends JpaRepository<Negativaperfilamiento, NegativaperfilamientoPk>,
JpaSpecificationExecutor<Negativaperfilamiento> {

}
