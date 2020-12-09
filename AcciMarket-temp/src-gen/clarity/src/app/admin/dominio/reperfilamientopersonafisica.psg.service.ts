/* PSG  ReperfilamientoPersonaFisica Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Reperfilamientopersonafisica } from './reperfilamientopersonafisica.psg.model';

@Injectable()
export class ReperfilamientopersonafisicaService {
  private env: any = environment;
  private token: string;
  reperfilamientopersonafisica = new Reperfilamientopersonafisica();

  constructor(private http: Http) {}

  postGuardaReperfilamientopersonafisica(reperfilamientopersonafisica) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/reperfilamientopersonafisica`, reperfilamientopersonafisica, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaReperfilamientopersonafisica() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/reperfilamientopersonafisica`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaReperfilamientopersonafisicaPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/reperfilamientopersonafisica/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteReperfilamientopersonafisica(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/reperfilamientopersonafisica/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaReperfilamientopersonafisica(reperfilamientopersonafisica, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/reperfilamientopersonafisica/` + id, reperfilamientopersonafisica, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaReperfilamientopersonafisicaPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaReperfilamientopersonafisicaPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/reperfilamientopersonafisica?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetReperfilamientopersonafisica(): Reperfilamientopersonafisica {
    this.clear();
    return this.reperfilamientopersonafisica;
  }

  getReperfilamientopersonafisica(): Reperfilamientopersonafisica {
    var reperfilamientopersonafisica: Reperfilamientopersonafisica = {
  		contratoId: this.reperfilamientopersonafisica.contratoId,
  		contratoItem: this.reperfilamientopersonafisica.contratoItem,
  		nombre: this.reperfilamientopersonafisica.nombre,
  		perfilactual: this.reperfilamientopersonafisica.perfilactual,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		porcentajeliquidez: this.reperfilamientopersonafisica.porcentajeliquidez,
  		montoliquidez: this.reperfilamientopersonafisica.montoliquidez,
  		montoliquidezAux: this.reperfilamientopersonafisica.montoliquidezAux,
  		porcentajecortoplazo: this.reperfilamientopersonafisica.porcentajecortoplazo,
  		montocortoplazo: this.reperfilamientopersonafisica.montocortoplazo,
  		porcentajelargoplazo: this.reperfilamientopersonafisica.porcentajelargoplazo,
  		montolargoplazo: this.reperfilamientopersonafisica.montolargoplazo,
  		porcentajepatrimonioliquidototal: this.reperfilamientopersonafisica.porcentajepatrimonioliquidototal,
  		montopatrimonioliquidototal: this.reperfilamientopersonafisica.montopatrimonioliquidototal,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		nosi: this.reperfilamientopersonafisica.nosi	,
  		nosiItem: this.reperfilamientopersonafisica.nosiItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		conocimientoexperiencia: this.reperfilamientopersonafisica.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.reperfilamientopersonafisica.conocimientoexperienciaItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		conocimientoexperiencia: this.reperfilamientopersonafisica.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.reperfilamientopersonafisica.conocimientoexperienciaItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		dummy: this.reperfilamientopersonafisica.dummy	,
  		dummyItem: this.reperfilamientopersonafisica.dummyItem,
  		nosi: this.reperfilamientopersonafisica.nosi	,
  		nosiItem: this.reperfilamientopersonafisica.nosiItem,
  		situacionfinancieraactual: this.reperfilamientopersonafisica.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.reperfilamientopersonafisica.situacionfinancieraactualItem,
  		situacionfinancieraactual: this.reperfilamientopersonafisica.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.reperfilamientopersonafisica.situacionfinancieraactualItem,
  		situacionfinancieraactual: this.reperfilamientopersonafisica.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.reperfilamientopersonafisica.situacionfinancieraactualItem,
  		perfil: this.reperfilamientopersonafisica.perfil,
    };
    return reperfilamientopersonafisica;
  }

  setReperfilamientopersonafisica(reperfilamientopersonafisica: Reperfilamientopersonafisica) {
  		this.reperfilamientopersonafisica.contratoId = reperfilamientopersonafisica.contratoId;
  		this.reperfilamientopersonafisica.contratoItem = reperfilamientopersonafisica.contratoItem;
  		this.reperfilamientopersonafisica.nombre = reperfilamientopersonafisica.nombre;
  		this.reperfilamientopersonafisica.perfilactual = reperfilamientopersonafisica.perfilactual;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.porcentajeliquidez = reperfilamientopersonafisica.porcentajeliquidez;
  		this.reperfilamientopersonafisica.montoliquidez = reperfilamientopersonafisica.montoliquidez;
  		this.reperfilamientopersonafisica.montoliquidezAux = reperfilamientopersonafisica.montoliquidezAux;
  		this.reperfilamientopersonafisica.porcentajecortoplazo = reperfilamientopersonafisica.porcentajecortoplazo;
  		this.reperfilamientopersonafisica.montocortoplazo = reperfilamientopersonafisica.montocortoplazo;
  		this.reperfilamientopersonafisica.porcentajelargoplazo = reperfilamientopersonafisica.porcentajelargoplazo;
  		this.reperfilamientopersonafisica.montolargoplazo = reperfilamientopersonafisica.montolargoplazo;
  		this.reperfilamientopersonafisica.porcentajepatrimonioliquidototal = reperfilamientopersonafisica.porcentajepatrimonioliquidototal;
  		this.reperfilamientopersonafisica.montopatrimonioliquidototal = reperfilamientopersonafisica.montopatrimonioliquidototal;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.nosi = reperfilamientopersonafisica.nosi;
  		this.reperfilamientopersonafisica.nosiItem = reperfilamientopersonafisica.nosiItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.conocimientoexperiencia = reperfilamientopersonafisica.conocimientoexperiencia;
  		this.reperfilamientopersonafisica.conocimientoexperienciaItem = reperfilamientopersonafisica.conocimientoexperienciaItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.conocimientoexperiencia = reperfilamientopersonafisica.conocimientoexperiencia;
  		this.reperfilamientopersonafisica.conocimientoexperienciaItem = reperfilamientopersonafisica.conocimientoexperienciaItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.dummy = reperfilamientopersonafisica.dummy;
  		this.reperfilamientopersonafisica.dummyItem = reperfilamientopersonafisica.dummyItem;
  		this.reperfilamientopersonafisica.nosi = reperfilamientopersonafisica.nosi;
  		this.reperfilamientopersonafisica.nosiItem = reperfilamientopersonafisica.nosiItem;
  		this.reperfilamientopersonafisica.situacionfinancieraactual = reperfilamientopersonafisica.situacionfinancieraactual;
  		this.reperfilamientopersonafisica.situacionfinancieraactualItem = reperfilamientopersonafisica.situacionfinancieraactualItem;
  		this.reperfilamientopersonafisica.situacionfinancieraactual = reperfilamientopersonafisica.situacionfinancieraactual;
  		this.reperfilamientopersonafisica.situacionfinancieraactualItem = reperfilamientopersonafisica.situacionfinancieraactualItem;
  		this.reperfilamientopersonafisica.situacionfinancieraactual = reperfilamientopersonafisica.situacionfinancieraactual;
  		this.reperfilamientopersonafisica.situacionfinancieraactualItem = reperfilamientopersonafisica.situacionfinancieraactualItem;
  		this.reperfilamientopersonafisica.perfil = reperfilamientopersonafisica.perfil;
  }

  clear() {
this.reperfilamientopersonafisica.contratoId = null;
this.reperfilamientopersonafisica.contratoItem = null;
this.reperfilamientopersonafisica.nombre = null;
this.reperfilamientopersonafisica.perfilactual = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.porcentajeliquidez = null;
this.reperfilamientopersonafisica.montoliquidez = null;
this.reperfilamientopersonafisica.montoliquidezAux = null;
this.reperfilamientopersonafisica.porcentajecortoplazo = null;
this.reperfilamientopersonafisica.montocortoplazo = null;
this.reperfilamientopersonafisica.porcentajelargoplazo = null;
this.reperfilamientopersonafisica.montolargoplazo = null;
this.reperfilamientopersonafisica.porcentajepatrimonioliquidototal = null;
this.reperfilamientopersonafisica.montopatrimonioliquidototal = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.nosi = null;
this.reperfilamientopersonafisica.nosiItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.conocimientoexperiencia = null;
this.reperfilamientopersonafisica.conocimientoexperienciaItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.conocimientoexperiencia = null;
this.reperfilamientopersonafisica.conocimientoexperienciaItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.dummy = null;
this.reperfilamientopersonafisica.dummyItem = null;
this.reperfilamientopersonafisica.nosi = null;
this.reperfilamientopersonafisica.nosiItem = null;
this.reperfilamientopersonafisica.situacionfinancieraactual = null;
this.reperfilamientopersonafisica.situacionfinancieraactualItem = null;
this.reperfilamientopersonafisica.situacionfinancieraactual = null;
this.reperfilamientopersonafisica.situacionfinancieraactualItem = null;
this.reperfilamientopersonafisica.situacionfinancieraactual = null;
this.reperfilamientopersonafisica.situacionfinancieraactualItem = null;
this.reperfilamientopersonafisica.perfil = null;
  }
}
