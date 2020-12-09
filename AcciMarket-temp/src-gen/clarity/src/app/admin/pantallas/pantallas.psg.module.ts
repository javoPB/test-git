/* PSG  Pantallas Module */
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ValidationService } from '../../_validation/validation.service';
import { HttpModule } from '@angular/http';

import { PantallasDemo } from './pantallas.psg';	
import { Datosgeneralesscreen } from './datosgeneralesscreen/datosgeneralesscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Operacionesefectivoscreen } from './operacionesefectivoscreen/operacionesefectivoscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Distribucioninstruccionesscreen } from './distribucioninstruccionesscreen/distribucioninstruccionesscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Aperturacontratoscreen } from './aperturacontratoscreen/aperturacontratoscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Reperfilamientopersonafisicascreen } from './reperfilamientopersonafisicascreen/reperfilamientopersonafisicascreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Negativaperfilamientoscreen } from './negativaperfilamientoscreen/negativaperfilamientoscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Firmaautorizadascreen } from './firmaautorizadascreen/firmaautorizadascreen.psg';
import { ROUTING } from './Pantallas.psg.routing';
import { Errorscreen } from './errorscreen/errorscreen.psg';
import { ROUTING } from './Pantallas.psg.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING, HttpModule, ReactiveFormsModule, FormsModule],
  declarations: [
    	Datosgeneralesscreen,
    	Operacionesefectivoscreen,
    	Distribucioninstruccionesscreen,
    	Aperturacontratoscreen,
    	Reperfilamientopersonafisicascreen,
    	Negativaperfilamientoscreen,
    	Firmaautorizadascreen,
    	Errorscreen,
    	PantallasDemo
  ],
  exports: [
    	Datosgeneralesscreen,
    	Operacionesefectivoscreen,
    	Distribucioninstruccionesscreen,
    	Aperturacontratoscreen,
    	Reperfilamientopersonafisicascreen,
    	Negativaperfilamientoscreen,
    	Firmaautorizadascreen,
    	Errorscreen,
    	PantallasDemo
  ],
  providers: [ValidationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PantallasDemoModule {}
