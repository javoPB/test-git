/* PSG  InstruccionEfectivo Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Instruccionefectivo } from './instruccionefectivo.psg.model';

@Injectable()
export class InstruccionefectivoService {
  private env: any = environment;
  private token: string;
  instruccionefectivo = new Instruccionefectivo();

  constructor(private http: Http) {}

  postGuardaInstruccionefectivo(instruccionefectivo) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/instruccionefectivo`, instruccionefectivo, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaInstruccionefectivo() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/instruccionefectivo`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaInstruccionefectivoPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/instruccionefectivo/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteInstruccionefectivo(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/instruccionefectivo/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaInstruccionefectivo(instruccionefectivo, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/instruccionefectivo/` + id, instruccionefectivo, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaInstruccionefectivoPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaInstruccionefectivoPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/instruccionefectivo?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetInstruccionefectivo(): Instruccionefectivo {
    this.clear();
    return this.instruccionefectivo;
  }

  getInstruccionefectivo(): Instruccionefectivo {
    var instruccionefectivo: Instruccionefectivo = {
  		dummy: this.instruccionefectivo.dummy	,
  		dummyItem: this.instruccionefectivo.dummyItem,
  		dummy: this.instruccionefectivo.dummy	,
  		dummyItem: this.instruccionefectivo.dummyItem,
  		dummy: this.instruccionefectivo.dummy	,
  		dummyItem: this.instruccionefectivo.dummyItem,
  		dummy: this.instruccionefectivo.dummy	,
  		dummyItem: this.instruccionefectivo.dummyItem,
  		contrato: this.instruccionefectivo.contrato,
  		subtipoportafolio: this.instruccionefectivo.subtipoportafolio,
  		digito: this.instruccionefectivo.digito,
  		titular: this.instruccionefectivo.titular,
  		saldo: this.instruccionefectivo.saldo,
  		contratoegreso: this.instruccionefectivo.contratoegreso,
  		digitoegreso: this.instruccionefectivo.digitoegreso,
  		saldoinicialegreso: this.instruccionefectivo.saldoinicialegreso,
  		saldocalculadoegreso: this.instruccionefectivo.saldocalculadoegreso,
  		contratoingreso: this.instruccionefectivo.contratoingreso,
  		digitoingreso: this.instruccionefectivo.digitoingreso,
  		saldoinicialingreso: this.instruccionefectivo.saldoinicialingreso,
  		saldocalculadoingreso: this.instruccionefectivo.saldocalculadoingreso,
  		importeingreso: this.instruccionefectivo.importeingreso,
    };
    return instruccionefectivo;
  }

  setInstruccionefectivo(instruccionefectivo: Instruccionefectivo) {
  		this.instruccionefectivo.dummy = instruccionefectivo.dummy;
  		this.instruccionefectivo.dummyItem = instruccionefectivo.dummyItem;
  		this.instruccionefectivo.dummy = instruccionefectivo.dummy;
  		this.instruccionefectivo.dummyItem = instruccionefectivo.dummyItem;
  		this.instruccionefectivo.dummy = instruccionefectivo.dummy;
  		this.instruccionefectivo.dummyItem = instruccionefectivo.dummyItem;
  		this.instruccionefectivo.dummy = instruccionefectivo.dummy;
  		this.instruccionefectivo.dummyItem = instruccionefectivo.dummyItem;
  		this.instruccionefectivo.contrato = instruccionefectivo.contrato;
  		this.instruccionefectivo.subtipoportafolio = instruccionefectivo.subtipoportafolio;
  		this.instruccionefectivo.digito = instruccionefectivo.digito;
  		this.instruccionefectivo.titular = instruccionefectivo.titular;
  		this.instruccionefectivo.saldo = instruccionefectivo.saldo;
  		this.instruccionefectivo.contratoegreso = instruccionefectivo.contratoegreso;
  		this.instruccionefectivo.digitoegreso = instruccionefectivo.digitoegreso;
  		this.instruccionefectivo.saldoinicialegreso = instruccionefectivo.saldoinicialegreso;
  		this.instruccionefectivo.saldocalculadoegreso = instruccionefectivo.saldocalculadoegreso;
  		this.instruccionefectivo.contratoingreso = instruccionefectivo.contratoingreso;
  		this.instruccionefectivo.digitoingreso = instruccionefectivo.digitoingreso;
  		this.instruccionefectivo.saldoinicialingreso = instruccionefectivo.saldoinicialingreso;
  		this.instruccionefectivo.saldocalculadoingreso = instruccionefectivo.saldocalculadoingreso;
  		this.instruccionefectivo.importeingreso = instruccionefectivo.importeingreso;
  }

  clear() {
this.instruccionefectivo.dummy = null;
this.instruccionefectivo.dummyItem = null;
this.instruccionefectivo.dummy = null;
this.instruccionefectivo.dummyItem = null;
this.instruccionefectivo.dummy = null;
this.instruccionefectivo.dummyItem = null;
this.instruccionefectivo.dummy = null;
this.instruccionefectivo.dummyItem = null;
this.instruccionefectivo.contrato = null;
this.instruccionefectivo.subtipoportafolio = null;
this.instruccionefectivo.digito = null;
this.instruccionefectivo.titular = null;
this.instruccionefectivo.saldo = null;
this.instruccionefectivo.contratoegreso = null;
this.instruccionefectivo.digitoegreso = null;
this.instruccionefectivo.saldoinicialegreso = null;
this.instruccionefectivo.saldocalculadoegreso = null;
this.instruccionefectivo.contratoingreso = null;
this.instruccionefectivo.digitoingreso = null;
this.instruccionefectivo.saldoinicialingreso = null;
this.instruccionefectivo.saldocalculadoingreso = null;
this.instruccionefectivo.importeingreso = null;
  }
}
