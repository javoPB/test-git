package com.citi.insurance.catalogos.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.citi.insurance.catalogos.entity.Distribucioninstrucciones;
import com.citi.insurance.catalogos.entity.DistribucioninstruccionesPk;

public interface  DistribucioninstruccionesRepository  extends JpaRepository<Distribucioninstrucciones, DistribucioninstruccionesPk>,
JpaSpecificationExecutor<Distribucioninstrucciones> {

}
