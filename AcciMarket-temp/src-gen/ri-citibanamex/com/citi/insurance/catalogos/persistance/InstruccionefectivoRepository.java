package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Instruccionefectivo;
import com.citi.insurance.catalogos.entity.InstruccionefectivoPk;

public interface  InstruccionefectivoRepository  extends JpaRepository<Instruccionefectivo, InstruccionefectivoPk>,
JpaSpecificationExecutor<Instruccionefectivo> {

}
