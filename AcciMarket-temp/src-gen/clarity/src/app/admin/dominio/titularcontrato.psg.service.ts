/* PSG  TitularContrato Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Titularcontrato } from './titularcontrato.psg.model';

@Injectable()
export class TitularcontratoService {
  private env: any = environment;
  private token: string;
  titularcontrato = new Titularcontrato();

  constructor(private http: Http) {}

  postGuardaTitularcontrato(titularcontrato) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/titularcontrato`, titularcontrato, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaTitularcontrato() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/titularcontrato`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaTitularcontratoPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/titularcontrato/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteTitularcontrato(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/titularcontrato/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaTitularcontrato(titularcontrato, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/titularcontrato/` + id, titularcontrato, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaTitularcontratoPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaTitularcontratoPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/titularcontrato?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetTitularcontrato(): Titularcontrato {
    this.clear();
    return this.titularcontrato;
  }

  getTitularcontrato(): Titularcontrato {
    var titularcontrato: Titularcontrato = {
  		nombre: this.titularcontrato.nombre,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		noclientebanamex: this.titularcontrato.noclientebanamex,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		nocta: this.titularcontrato.nocta,
  		suc: this.titularcontrato.suc,
  		clabe: this.titularcontrato.clabe,
  		calle: this.titularcontrato.calle,
  		noext: this.titularcontrato.noext,
  		nointerior: this.titularcontrato.nointerior,
  		mexicoextrajero: this.titularcontrato.mexicoextrajero	,
  		mexicoextrajeroItem: this.titularcontrato.mexicoextrajeroItem,
  		cp: this.titularcontrato.cp,
  		estado: this.titularcontrato.estado,
  		delmpo: this.titularcontrato.delmpo,
  		ciudad: this.titularcontrato.ciudad,
  		colonia: this.titularcontrato.colonia,
  		nosi: this.titularcontrato.nosi	,
  		nosiItem: this.titularcontrato.nosiItem,
  		rfc: this.titularcontrato.rfc,
  		curp: this.titularcontrato.curp,
  		fecnac: this.titularcontrato.fecnac,
  		fecnacAux: this.titularcontrato.fecnacAux,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		dummy: this.titularcontrato.dummy	,
  		dummyItem: this.titularcontrato.dummyItem,
  		nosi: this.titularcontrato.nosi	,
  		nosiItem: this.titularcontrato.nosiItem,
    };
    return titularcontrato;
  }

  setTitularcontrato(titularcontrato: Titularcontrato) {
  		this.titularcontrato.nombre = titularcontrato.nombre;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.noclientebanamex = titularcontrato.noclientebanamex;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.nocta = titularcontrato.nocta;
  		this.titularcontrato.suc = titularcontrato.suc;
  		this.titularcontrato.clabe = titularcontrato.clabe;
  		this.titularcontrato.calle = titularcontrato.calle;
  		this.titularcontrato.noext = titularcontrato.noext;
  		this.titularcontrato.nointerior = titularcontrato.nointerior;
  		this.titularcontrato.mexicoextrajero = titularcontrato.mexicoextrajero;
  		this.titularcontrato.mexicoextrajeroItem = titularcontrato.mexicoextrajeroItem;
  		this.titularcontrato.cp = titularcontrato.cp;
  		this.titularcontrato.estado = titularcontrato.estado;
  		this.titularcontrato.delmpo = titularcontrato.delmpo;
  		this.titularcontrato.ciudad = titularcontrato.ciudad;
  		this.titularcontrato.colonia = titularcontrato.colonia;
  		this.titularcontrato.nosi = titularcontrato.nosi;
  		this.titularcontrato.nosiItem = titularcontrato.nosiItem;
  		this.titularcontrato.rfc = titularcontrato.rfc;
  		this.titularcontrato.curp = titularcontrato.curp;
  		this.titularcontrato.fecnac = titularcontrato.fecnac;
  		this.titularcontrato.fecnacAux = titularcontrato.fecnacAux;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.dummy = titularcontrato.dummy;
  		this.titularcontrato.dummyItem = titularcontrato.dummyItem;
  		this.titularcontrato.nosi = titularcontrato.nosi;
  		this.titularcontrato.nosiItem = titularcontrato.nosiItem;
  }

  clear() {
this.titularcontrato.nombre = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.noclientebanamex = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.nocta = null;
this.titularcontrato.suc = null;
this.titularcontrato.clabe = null;
this.titularcontrato.calle = null;
this.titularcontrato.noext = null;
this.titularcontrato.nointerior = null;
this.titularcontrato.mexicoextrajero = null;
this.titularcontrato.mexicoextrajeroItem = null;
this.titularcontrato.cp = null;
this.titularcontrato.estado = null;
this.titularcontrato.delmpo = null;
this.titularcontrato.ciudad = null;
this.titularcontrato.colonia = null;
this.titularcontrato.nosi = null;
this.titularcontrato.nosiItem = null;
this.titularcontrato.rfc = null;
this.titularcontrato.curp = null;
this.titularcontrato.fecnac = null;
this.titularcontrato.fecnacAux = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.dummy = null;
this.titularcontrato.dummyItem = null;
this.titularcontrato.nosi = null;
this.titularcontrato.nosiItem = null;
  }
}
