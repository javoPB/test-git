package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Firmaautorizada;
import com.citi.insurance.catalogos.entity.FirmaautorizadaPk;

public interface  FirmaautorizadaRepository  extends JpaRepository<Firmaautorizada, FirmaautorizadaPk>,
JpaSpecificationExecutor<Firmaautorizada> {

}
