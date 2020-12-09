package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Beneficiario;
import com.citi.insurance.catalogos.entity.BeneficiarioPk;

public interface  BeneficiarioRepository  extends JpaRepository<Beneficiario, BeneficiarioPk>,
JpaSpecificationExecutor<Beneficiario> {

}
