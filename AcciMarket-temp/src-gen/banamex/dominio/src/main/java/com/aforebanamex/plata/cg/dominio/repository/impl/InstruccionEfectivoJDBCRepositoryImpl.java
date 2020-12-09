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
import com.aforebanamex.plata.base.helper.InstruccionEfectivoConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.InstruccionEfectivoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.InstruccionEfectivoJDBCRepository;
import com.aforebanamex.plata.comunes.model.InstruccionEfectivo;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class InstruccionEfectivoJDBCRepositoryImpl extends BaseRepository implements InstruccionEfectivoJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	






}	
