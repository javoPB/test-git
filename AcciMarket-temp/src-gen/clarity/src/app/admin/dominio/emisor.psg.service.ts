/* PSG  Emisor Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Emisor } from './emisor.psg.model';

@Injectable()
export class EmisorService {
  private env: any = environment;
  private token: string;
  emisor = new Emisor();

  constructor(private http: Http) {}

  postGuardaEmisor(emisor) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/emisor`, emisor, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaEmisor() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/emisor`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaEmisorPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/emisor/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteEmisor(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/emisor/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaEmisor(emisor, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/emisor/` + id, emisor, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaEmisorPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaEmisorPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/emisor?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetEmisor(): Emisor {
    this.clear();
    return this.emisor;
  }

  getEmisor(): Emisor {
    var emisor: Emisor = {
  		emisor: this.emisor.emisor,
  		relacion: this.emisor.relacion	,
  		relacionItem: this.emisor.relacionItem,
    };
    return emisor;
  }

  setEmisor(emisor: Emisor) {
  		this.emisor.emisor = emisor.emisor;
  		this.emisor.relacion = emisor.relacion;
  		this.emisor.relacionItem = emisor.relacionItem;
  }

  clear() {
this.emisor.emisor = null;
this.emisor.relacion = null;
this.emisor.relacionItem = null;
  }
}
