/* PSG  Contrato Service */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpModule, Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Contrato } from './contrato.psg.model';

@Injectable()
export class ContratoService {
  private env: any = environment;
  private token: string;
  contrato = new Contrato();

  constructor(private http: Http) {}

  postGuardaContrato(contrato) {
     var obj = JSON.parse(localStorage.getItem('currentUser'));
     this.token = obj['token'];
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer ' + this.token);
     let opts = new RequestOptions({ headers: headers });
     return this.http
       .post(`${environment.apiUrl}/bookstore/contrato`, contrato, opts)
       .pipe(map(res => res, catchError(error => error)));
   }
   
  getRecuperaContrato() {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/contrato`, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  getRecuperaContratoPorId(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .get(`${environment.apiUrl}/bookstore/contrato/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }

  deleteContrato(id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .delete(`${environment.apiUrl}/bookstore/contrato/` + id, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
  updateEditaContrato(contrato, id) {
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    this.token = obj['token'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    let opts = new RequestOptions({ headers: headers });
    return this.http
      .put(`${environment.apiUrl}/bookstore/contrato/` + id, contrato, opts)
      .pipe(map(res => res, catchError(error => error)));
  }
  
getRecuperaContratoPorTitularcontrato(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?titularcontratoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorBeneficiario(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?beneficiarioId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorLimitante(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?limitanteId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorEmisor(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?emisorId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorFirmaautorizada(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?firmaautorizadaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorInstruccionefectivo(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?instruccionefectivoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorDistribucioninstrucciones(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?distribucioninstruccionesId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorReperfilamientopersonafisica(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?reperfilamientopersonafisicaId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		
getRecuperaContratoPorNegativaperfilamiento(id){
	var obj = JSON.parse(localStorage.getItem('currentUser'));
	this.token = obj['token'];
	let headers = new Headers;
	headers.append('Content-Type','application/json');
	headers.append('Authorization', 'Bearer ' + this.token);
	let opts = new RequestOptions({ headers: headers });
	return this.http.get(`${environment.apiUrl}/dominio/contrato?negativaperfilamientoId=`+ id, opts)
	.pipe(map((res => res),catchError(error => error)));  
	}		

  resetContrato(): Contrato {
    this.clear();
    return this.contrato;
  }

  getContrato(): Contrato {
    var contrato: Contrato = {
  		nocontrato: this.contrato.nocontrato,
  		digito: this.contrato.digito,
  		dv: this.contrato.dv,
  		estatus: this.contrato.estatus,
  		perfil: this.contrato.perfil,
  		portafolio: this.contrato.portafolio,
  		clabe: this.contrato.clabe,
  		stipoport: this.contrato.stipoport,
  		libro: this.contrato.libro,
  		asesorinversion: this.contrato.asesorinversion,
  		tipomanifiesto: this.contrato.tipomanifiesto,
  		servicioinversion: this.contrato.servicioinversion,
  		cartaejecucion1: this.contrato.cartaejecucion1,
  		fechacartaejecucion1: this.contrato.fechacartaejecucion1,
  		cartaejecucion2: this.contrato.cartaejecucion2,
  		fechacartaejecucion2: this.contrato.fechacartaejecucion2,
  		justificacioninstitucional: this.contrato.justificacioninstitucional,
  		fechainstitucional: this.contrato.fechainstitucional,
  		sofisticado: this.contrato.sofisticado	,
  		sofisticadoItem: this.contrato.sofisticadoItem,
  		justificacionsofisticado: this.contrato.justificacionsofisticado,
  		fechasofisticado: this.contrato.fechasofisticado,
  		elegible: this.contrato.elegible	,
  		elegibleItem: this.contrato.elegibleItem,
  		justificacionelegible: this.contrato.justificacionelegible,
  		fechaelegible: this.contrato.fechaelegible,
  		calificado: this.contrato.calificado	,
  		calificadoItem: this.contrato.calificadoItem,
  		justificacioncalificado: this.contrato.justificacioncalificado,
  		fechacalificado: this.contrato.fechacalificado,
  		discrecional: this.contrato.discrecional	,
  		discrecionalItem: this.contrato.discrecionalItem,
  		justificaciondiscrecional: this.contrato.justificaciondiscrecional,
  		fechadiscrecional: this.contrato.fechadiscrecional,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
  		conocimientoexperiencia: this.contrato.conocimientoexperiencia	,
  		conocimientoexperienciaItem: this.contrato.conocimientoexperienciaItem,
    };
    return contrato;
  }

  setContrato(contrato: Contrato) {
  		this.contrato.nocontrato = contrato.nocontrato;
  		this.contrato.digito = contrato.digito;
  		this.contrato.dv = contrato.dv;
  		this.contrato.estatus = contrato.estatus;
  		this.contrato.perfil = contrato.perfil;
  		this.contrato.portafolio = contrato.portafolio;
  		this.contrato.clabe = contrato.clabe;
  		this.contrato.stipoport = contrato.stipoport;
  		this.contrato.libro = contrato.libro;
  		this.contrato.asesorinversion = contrato.asesorinversion;
  		this.contrato.tipomanifiesto = contrato.tipomanifiesto;
  		this.contrato.servicioinversion = contrato.servicioinversion;
  		this.contrato.cartaejecucion1 = contrato.cartaejecucion1;
  		this.contrato.fechacartaejecucion1 = contrato.fechacartaejecucion1;
  		this.contrato.cartaejecucion2 = contrato.cartaejecucion2;
  		this.contrato.fechacartaejecucion2 = contrato.fechacartaejecucion2;
  		this.contrato.justificacioninstitucional = contrato.justificacioninstitucional;
  		this.contrato.fechainstitucional = contrato.fechainstitucional;
  		this.contrato.sofisticado = contrato.sofisticado;
  		this.contrato.sofisticadoItem = contrato.sofisticadoItem;
  		this.contrato.justificacionsofisticado = contrato.justificacionsofisticado;
  		this.contrato.fechasofisticado = contrato.fechasofisticado;
  		this.contrato.elegible = contrato.elegible;
  		this.contrato.elegibleItem = contrato.elegibleItem;
  		this.contrato.justificacionelegible = contrato.justificacionelegible;
  		this.contrato.fechaelegible = contrato.fechaelegible;
  		this.contrato.calificado = contrato.calificado;
  		this.contrato.calificadoItem = contrato.calificadoItem;
  		this.contrato.justificacioncalificado = contrato.justificacioncalificado;
  		this.contrato.fechacalificado = contrato.fechacalificado;
  		this.contrato.discrecional = contrato.discrecional;
  		this.contrato.discrecionalItem = contrato.discrecionalItem;
  		this.contrato.justificaciondiscrecional = contrato.justificaciondiscrecional;
  		this.contrato.fechadiscrecional = contrato.fechadiscrecional;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  		this.contrato.conocimientoexperiencia = contrato.conocimientoexperiencia;
  		this.contrato.conocimientoexperienciaItem = contrato.conocimientoexperienciaItem;
  }

  clear() {
this.contrato.nocontrato = null;
this.contrato.digito = null;
this.contrato.dv = null;
this.contrato.estatus = null;
this.contrato.perfil = null;
this.contrato.portafolio = null;
this.contrato.clabe = null;
this.contrato.stipoport = null;
this.contrato.libro = null;
this.contrato.asesorinversion = null;
this.contrato.tipomanifiesto = null;
this.contrato.servicioinversion = null;
this.contrato.cartaejecucion1 = null;
this.contrato.fechacartaejecucion1 = null;
this.contrato.cartaejecucion2 = null;
this.contrato.fechacartaejecucion2 = null;
this.contrato.justificacioninstitucional = null;
this.contrato.fechainstitucional = null;
this.contrato.sofisticado = null;
this.contrato.sofisticadoItem = null;
this.contrato.justificacionsofisticado = null;
this.contrato.fechasofisticado = null;
this.contrato.elegible = null;
this.contrato.elegibleItem = null;
this.contrato.justificacionelegible = null;
this.contrato.fechaelegible = null;
this.contrato.calificado = null;
this.contrato.calificadoItem = null;
this.contrato.justificacioncalificado = null;
this.contrato.fechacalificado = null;
this.contrato.discrecional = null;
this.contrato.discrecionalItem = null;
this.contrato.justificaciondiscrecional = null;
this.contrato.fechadiscrecional = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
this.contrato.conocimientoexperiencia = null;
this.contrato.conocimientoexperienciaItem = null;
  }
}
