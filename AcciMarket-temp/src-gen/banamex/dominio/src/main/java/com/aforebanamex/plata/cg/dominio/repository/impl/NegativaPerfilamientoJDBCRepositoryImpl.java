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
import com.aforebanamex.plata.base.helper.NegativaPerfilamientoConstantesHelper;
import com.aforebanamex.plata.base.repository.BaseRepository;
import com.aforebanamex.plata.cg.dominio.exception.NegativaPerfilamientoDuplicadoException;
import com.aforebanamex.plata.cg.dominio.repository.NegativaPerfilamientoJDBCRepository;
import com.aforebanamex.plata.comunes.model.NegativaPerfilamiento;
import com.aforebanamex.plata.comunes.model.Message;
import com.aforebanamex.plata.comunes.model.Paginado;
import com.aforebanamex.plata.comunes.model.RequestPlata;
import com.aforebanamex.plata.comunes.model.ResponsePlata;
import com.aforebanamex.plata.comunes.helper.FechaHelper;


@Repository
public class NegativaPerfilamientoJDBCRepositoryImpl extends BaseRepository implements NegativaPerfilamientoJDBCRepository {
	
	@Autowired
	private FechaHelper fechasHelper;	






}	
