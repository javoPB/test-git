/* PSG  Pantallas Routing */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';	
import { PantallasDemo } from './pantallas.psg';  	
import { Datosgeneralesscreen } from './datosgeneralesscreen/datosgeneralesscreen.psg';
import { Operacionesefectivoscreen } from './operacionesefectivoscreen/operacionesefectivoscreen.psg';
import { Distribucioninstruccionesscreen } from './distribucioninstruccionesscreen/distribucioninstruccionesscreen.psg';
import { Aperturacontratoscreen } from './aperturacontratoscreen/aperturacontratoscreen.psg';
import { Reperfilamientopersonafisicascreen } from './reperfilamientopersonafisicascreen/reperfilamientopersonafisicascreen.psg';
import { Negativaperfilamientoscreen } from './negativaperfilamientoscreen/negativaperfilamientoscreen.psg';
import { Firmaautorizadascreen } from './firmaautorizadascreen/firmaautorizadascreen.psg';
import { Errorscreen } from './errorscreen/errorscreen.psg';
  	
const ROUTES: Routes = [
  {
    path: '',
    component: PantallasDemo,
    children: [
	{ path: '', redirectTo: 'datosgeneralesscreen', component: PantallasDemo },
	{ path: '', redirectTo: 'operacionesefectivoscreen', component: PantallasDemo },
	{ path: '', redirectTo: 'distribucioninstruccionesscreen', component: PantallasDemo },
	{ path: '', redirectTo: 'aperturacontratoscreen', component: PantallasDemo },
	{ path: '', redirectTo: 'reperfilamientopersonafisicascreen', component: PantallasDemo },
	{ path: '', redirectTo: 'negativaperfilamientoscreen', component: PantallasDemo },
	{ path: '', redirectTo: 'firmaautorizadascreen', component: PantallasDemo },
{
	path: 'datosgeneralesscreen',
  			component: Datosgeneralesscreen,
  		},
{
	path: 'operacionesefectivoscreen',
  			component: Operacionesefectivoscreen,
  		},
{
	path: 'distribucioninstruccionesscreen',
  			component: Distribucioninstruccionesscreen,
  		},
{
	path: 'aperturacontratoscreen',
  			component: Aperturacontratoscreen,
  		},
{
	path: 'reperfilamientopersonafisicascreen',
  			component: Reperfilamientopersonafisicascreen,
  		},
{
	path: 'negativaperfilamientoscreen',
  			component: Negativaperfilamientoscreen,
  		},
{
	path: 'firmaautorizadascreen',
  			component: Firmaautorizadascreen,
  		},
{
	path: 'errorscreen',
  			component: Errorscreen,
  		},
    ],
  },
];
  	

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
