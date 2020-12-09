/* PSG  Beneficiario Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Beneficiario } from './beneficiario.psg.model';

@Injectable()
export class BeneficiarioService {
  private env: any = environment;
  private token: string;
  beneficiario = new Beneficiario();

  constructor(private http: Http) {}

  postGuardaBeneficiario(beneficiario) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/beneficiario`, beneficiario, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaBeneficiario() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/beneficiario`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaBeneficiarioPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/beneficiario/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteBeneficiario(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/beneficiario/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaBeneficiario(beneficiario, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/beneficiario/` + id, beneficiario, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaBeneficiarioPorContrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?contratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaBeneficiarioPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/beneficiario?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetBeneficiario(): Beneficiario {
    this.clear();
    return this.beneficiario;
  }

  getBeneficiario(): Beneficiario {
    var beneficiario: Beneficiario = {
  		nombre: this.beneficiario.nombre,
  		appaterno: this.beneficiario.appaterno,
  		apmaterno: this.beneficiario.apmaterno,
  		porcentaje: this.beneficiario.porcentaje,
    };
    return beneficiario;
  }

  setBeneficiario(beneficiario: Beneficiario) {
  		this.beneficiario.nombre = beneficiario.nombre;
  		this.beneficiario.appaterno = beneficiario.appaterno;
  		this.beneficiario.apmaterno = beneficiario.apmaterno;
  		this.beneficiario.porcentaje = beneficiario.porcentaje;
  }

  clear() {
this.beneficiario.nombre = null;
this.beneficiario.appaterno = null;
this.beneficiario.apmaterno = null;
this.beneficiario.porcentaje = null;
  }
}
