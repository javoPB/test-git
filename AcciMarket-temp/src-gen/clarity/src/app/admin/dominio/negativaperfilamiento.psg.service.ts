/* PSG  NegativaPerfilamiento Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Negativaperfilamiento } from './negativaperfilamiento.psg.model';

@Injectable()
export class NegativaperfilamientoService {
  private env: any = environment;
  private token: string;
  negativaperfilamiento = new Negativaperfilamiento();

  constructor(private http: Http) {}

  postGuardaNegativaperfilamiento(negativaperfilamiento) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/negativaperfilamiento`, negativaperfilamiento, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaNegativaperfilamiento() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/negativaperfilamiento`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaNegativaperfilamientoPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/negativaperfilamiento/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteNegativaperfilamiento(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/negativaperfilamiento/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaNegativaperfilamiento(negativaperfilamiento, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/negativaperfilamiento/` + id, negativaperfilamiento, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaNegativaperfilamientoPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaNegativaperfilamientoPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/negativaperfilamiento?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetNegativaperfilamiento(): Negativaperfilamiento {
    this.clear();
    return this.negativaperfilamiento;
  }

  getNegativaperfilamiento(): Negativaperfilamiento {
    var negativaperfilamiento: Negativaperfilamiento = {
  		contratoId: this.negativaperfilamiento.contratoId,
  		contratoItem: this.negativaperfilamiento.contratoItem,
  		nombre: this.negativaperfilamiento.nombre,
  		perfilactual: this.negativaperfilamiento.perfilactual,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		porcentajeliquidez: this.negativaperfilamiento.porcentajeliquidez,
  		montoliquidez: this.negativaperfilamiento.montoliquidez,
  		montoliquidezAux: this.negativaperfilamiento.montoliquidezAux,
  		porcentajecortoplazo: this.negativaperfilamiento.porcentajecortoplazo,
  		montocortoplazo: this.negativaperfilamiento.montocortoplazo,
  		porcentajelargoplazo: this.negativaperfilamiento.porcentajelargoplazo,
  		montolargoplazo: this.negativaperfilamiento.montolargoplazo,
  		porcentajepatrimonioliquidototal: this.negativaperfilamiento.porcentajepatrimonioliquidototal,
  		montopatrimonioliquidototal: this.negativaperfilamiento.montopatrimonioliquidototal,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		nosi: this.negativaperfilamiento.nosi	,
  		nosiItem: this.negativaperfilamiento.nosiItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		conocimientoexperiencia: this.negativaperfilamiento.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.negativaperfilamiento.conocimientoexperienciaItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		conocimientoexperiencia: this.negativaperfilamiento.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.negativaperfilamiento.conocimientoexperienciaItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		dummy: this.negativaperfilamiento.dummy	,
  		dummyItem: this.negativaperfilamiento.dummyItem,
  		nosi: this.negativaperfilamiento.nosi	,
  		nosiItem: this.negativaperfilamiento.nosiItem,
  		situacionfinancieraactual: this.negativaperfilamiento.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.negativaperfilamiento.situacionfinancieraactualItem,
  		situacionfinancieraactual: this.negativaperfilamiento.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.negativaperfilamiento.situacionfinancieraactualItem,
  		situacionfinancieraactual: this.negativaperfilamiento.situacionfinancieraactual	,
  		situacionfinancieraactualItem: this.negativaperfilamiento.situacionfinancieraactualItem,
  		perfil: this.negativaperfilamiento.perfil,
  		inconsistencias: this.negativaperfilamiento.inconsistencias,
    };
    return negativaperfilamiento;
  }

  setNegativaperfilamiento(negativaperfilamiento: Negativaperfilamiento) {
  		this.negativaperfilamiento.contratoId = negativaperfilamiento.contratoId;
  		this.negativaperfilamiento.contratoItem = negativaperfilamiento.contratoItem;
  		this.negativaperfilamiento.nombre = negativaperfilamiento.nombre;
  		this.negativaperfilamiento.perfilactual = negativaperfilamiento.perfilactual;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.porcentajeliquidez = negativaperfilamiento.porcentajeliquidez;
  		this.negativaperfilamiento.montoliquidez = negativaperfilamiento.montoliquidez;
  		this.negativaperfilamiento.montoliquidezAux = negativaperfilamiento.montoliquidezAux;
  		this.negativaperfilamiento.porcentajecortoplazo = negativaperfilamiento.porcentajecortoplazo;
  		this.negativaperfilamiento.montocortoplazo = negativaperfilamiento.montocortoplazo;
  		this.negativaperfilamiento.porcentajelargoplazo = negativaperfilamiento.porcentajelargoplazo;
  		this.negativaperfilamiento.montolargoplazo = negativaperfilamiento.montolargoplazo;
  		this.negativaperfilamiento.porcentajepatrimonioliquidototal = negativaperfilamiento.porcentajepatrimonioliquidototal;
  		this.negativaperfilamiento.montopatrimonioliquidototal = negativaperfilamiento.montopatrimonioliquidototal;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.nosi = negativaperfilamiento.nosi;
  		this.negativaperfilamiento.nosiItem = negativaperfilamiento.nosiItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.conocimientoexperiencia = negativaperfilamiento.conocimientoexperiencia;
  		this.negativaperfilamiento.conocimientoexperienciaItem = negativaperfilamiento.conocimientoexperienciaItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.conocimientoexperiencia = negativaperfilamiento.conocimientoexperiencia;
  		this.negativaperfilamiento.conocimientoexperienciaItem = negativaperfilamiento.conocimientoexperienciaItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.dummy = negativaperfilamiento.dummy;
  		this.negativaperfilamiento.dummyItem = negativaperfilamiento.dummyItem;
  		this.negativaperfilamiento.nosi = negativaperfilamiento.nosi;
  		this.negativaperfilamiento.nosiItem = negativaperfilamiento.nosiItem;
  		this.negativaperfilamiento.situacionfinancieraactual = negativaperfilamiento.situacionfinancieraactual;
  		this.negativaperfilamiento.situacionfinancieraactualItem = negativaperfilamiento.situacionfinancieraactualItem;
  		this.negativaperfilamiento.situacionfinancieraactual = negativaperfilamiento.situacionfinancieraactual;
  		this.negativaperfilamiento.situacionfinancieraactualItem = negativaperfilamiento.situacionfinancieraactualItem;
  		this.negativaperfilamiento.situacionfinancieraactual = negativaperfilamiento.situacionfinancieraactual;
  		this.negativaperfilamiento.situacionfinancieraactualItem = negativaperfilamiento.situacionfinancieraactualItem;
  		this.negativaperfilamiento.perfil = negativaperfilamiento.perfil;
  		this.negativaperfilamiento.inconsistencias = negativaperfilamiento.inconsistencias;
  }

  clear() {
this.negativaperfilamiento.contratoId = null;
this.negativaperfilamiento.contratoItem = null;
this.negativaperfilamiento.nombre = null;
this.negativaperfilamiento.perfilactual = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.porcentajeliquidez = null;
this.negativaperfilamiento.montoliquidez = null;
this.negativaperfilamiento.montoliquidezAux = null;
this.negativaperfilamiento.porcentajecortoplazo = null;
this.negativaperfilamiento.montocortoplazo = null;
this.negativaperfilamiento.porcentajelargoplazo = null;
this.negativaperfilamiento.montolargoplazo = null;
this.negativaperfilamiento.porcentajepatrimonioliquidototal = null;
this.negativaperfilamiento.montopatrimonioliquidototal = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.nosi = null;
this.negativaperfilamiento.nosiItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.conocimientoexperiencia = null;
this.negativaperfilamiento.conocimientoexperienciaItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.conocimientoexperiencia = null;
this.negativaperfilamiento.conocimientoexperienciaItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.dummy = null;
this.negativaperfilamiento.dummyItem = null;
this.negativaperfilamiento.nosi = null;
this.negativaperfilamiento.nosiItem = null;
this.negativaperfilamiento.situacionfinancieraactual = null;
this.negativaperfilamiento.situacionfinancieraactualItem = null;
this.negativaperfilamiento.situacionfinancieraactual = null;
this.negativaperfilamiento.situacionfinancieraactualItem = null;
this.negativaperfilamiento.situacionfinancieraactual = null;
this.negativaperfilamiento.situacionfinancieraactualItem = null;
this.negativaperfilamiento.perfil = null;
this.negativaperfilamiento.inconsistencias = null;
  }
}
