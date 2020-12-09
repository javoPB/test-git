/* PSG  DistribucionInstrucciones Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Distribucioninstrucciones } from './distribucioninstrucciones.psg.model';

@Injectable()
export class DistribucioninstruccionesService {
  private env: any = environment;
  private token: string;
  distribucioninstrucciones = new Distribucioninstrucciones();

  constructor(private http: Http) {}

  postGuardaDistribucioninstrucciones(distribucioninstrucciones) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/distribucioninstrucciones`, distribucioninstrucciones, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaDistribucioninstrucciones() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/distribucioninstrucciones`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaDistribucioninstruccionesPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/distribucioninstrucciones/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteDistribucioninstrucciones(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/distribucioninstrucciones/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaDistribucioninstrucciones(distribucioninstrucciones, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/distribucioninstrucciones/` + id, distribucioninstrucciones, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaDistribucioninstruccionesPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaDistribucioninstruccionesPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/distribucioninstrucciones?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetDistribucioninstrucciones(): Distribucioninstrucciones {
    this.clear();
    return this.distribucioninstrucciones;
  }

  getDistribucioninstrucciones(): Distribucioninstrucciones {
    var distribucioninstrucciones: Distribucioninstrucciones = {
  		opcdistrinstrucciones: this.distribucioninstrucciones.opcdistrinstrucciones	,
  		opcdistrinstruccionesItem: this.distribucioninstrucciones.opcdistrinstruccionesItem,
  		capturados: this.distribucioninstrucciones.capturados,
  		capturadosAux: this.distribucioninstrucciones.capturadosAux,
  		contrato: this.distribucioninstrucciones.contrato,
  		foliomov: this.distribucioninstrucciones.foliomov,
  		digito: this.distribucioninstrucciones.digito,
  		importeneto: this.distribucioninstrucciones.importeneto,
  		depositos: this.distribucioninstrucciones.depositos,
  		depositosAux: this.distribucioninstrucciones.depositosAux,
  		retiros: this.distribucioninstrucciones.retiros,
  		retirosAux: this.distribucioninstrucciones.retirosAux,
  		dummy: this.distribucioninstrucciones.dummy	,
  		dummyItem: this.distribucioninstrucciones.dummyItem,
    };
    return distribucioninstrucciones;
  }

  setDistribucioninstrucciones(distribucioninstrucciones: Distribucioninstrucciones) {
  		this.distribucioninstrucciones.opcdistrinstrucciones = distribucioninstrucciones.opcdistrinstrucciones;
  		this.distribucioninstrucciones.opcdistrinstruccionesItem = distribucioninstrucciones.opcdistrinstruccionesItem;
  		this.distribucioninstrucciones.capturados = distribucioninstrucciones.capturados;
  		this.distribucioninstrucciones.capturadosAux = distribucioninstrucciones.capturadosAux;
  		this.distribucioninstrucciones.contrato = distribucioninstrucciones.contrato;
  		this.distribucioninstrucciones.foliomov = distribucioninstrucciones.foliomov;
  		this.distribucioninstrucciones.digito = distribucioninstrucciones.digito;
  		this.distribucioninstrucciones.importeneto = distribucioninstrucciones.importeneto;
  		this.distribucioninstrucciones.depositos = distribucioninstrucciones.depositos;
  		this.distribucioninstrucciones.depositosAux = distribucioninstrucciones.depositosAux;
  		this.distribucioninstrucciones.retiros = distribucioninstrucciones.retiros;
  		this.distribucioninstrucciones.retirosAux = distribucioninstrucciones.retirosAux;
  		this.distribucioninstrucciones.dummy = distribucioninstrucciones.dummy;
  		this.distribucioninstrucciones.dummyItem = distribucioninstrucciones.dummyItem;
  }

  clear() {
this.distribucioninstrucciones.opcdistrinstrucciones = null;
this.distribucioninstrucciones.opcdistrinstruccionesItem = null;
this.distribucioninstrucciones.capturados = null;
this.distribucioninstrucciones.capturadosAux = null;
this.distribucioninstrucciones.contrato = null;
this.distribucioninstrucciones.foliomov = null;
this.distribucioninstrucciones.digito = null;
this.distribucioninstrucciones.importeneto = null;
this.distribucioninstrucciones.depositos = null;
this.distribucioninstrucciones.depositosAux = null;
this.distribucioninstrucciones.retiros = null;
this.distribucioninstrucciones.retirosAux = null;
this.distribucioninstrucciones.dummy = null;
this.distribucioninstrucciones.dummyItem = null;
  }
}
