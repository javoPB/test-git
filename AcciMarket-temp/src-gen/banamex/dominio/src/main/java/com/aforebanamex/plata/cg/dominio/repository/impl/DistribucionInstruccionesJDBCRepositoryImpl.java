package com.aforebanamex.plata.cg.dominio.repository.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;

import com.aforebanamex.plata.base.exception.InsfraestructuraException;
import com.aforebanamex.plata.base.helper.DistribucionInstruccionesConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.DistribucionInstruccionesDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.DistribucionInstruccionesJDBCRepository;
import com.aforebanamex.plata.comunes.model.DistribucionInstrucciones;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class DistribucionInstruccionesJDBCRepositoryImpl extends BaseRepository implements DistribucionInstruccionesJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	






}	
