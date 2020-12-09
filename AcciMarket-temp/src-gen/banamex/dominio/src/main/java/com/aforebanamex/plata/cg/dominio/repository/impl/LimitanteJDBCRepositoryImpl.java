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
import com.aforebanamex.plata.base.helper.LimitanteConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.LimitanteDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.LimitanteJDBCRepository;
import com.aforebanamex.plata.comunes.model.Limitante;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class LimitanteJDBCRepositoryImpl extends BaseRepository implements LimitanteJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	






}	
