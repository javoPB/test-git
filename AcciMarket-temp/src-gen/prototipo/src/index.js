/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
'use strict'

if (module.hot) {
  module.hot.accept()
}

import riot from 'riot'

// Hoja de estilos
import './styles/index.scss'

// Applicación
import './components/app/app.tag'

// Componentes comunes
import './components/common/layout/page.tag'
import './components/common/layout/content.tag'
import './components/common/layout/tablist.tag'
import './components/common/layout/footer/footerbar.tag'
import './components/common/layout/header/topbar.tag'
import './components/common/layout/sidebar/menu-item.tag'
import './components/common/layout/sidebar/menu-section.tag'
import './components/common/layout/sidebar/side-menu.tag'
import './components/common/layout/sidebar/sidebar-menu.tag'
import './components/common/layout/sidebar/sidebar-profile.tag'
import './components/common/layout/sidebar/sidebar.tag'
import './components/common/form/raw.tag'
import './components/common/form/formbox.tag'
import './components/common/form/date-picker.tag'
import './components/common/form/select-auto.tag'
import './components/common/form/inputbox.tag'
import './components/common/form/option-box.tag'
import './components/common/form/search.tag'
import './components/common/form/panel.tag'
import './components/common/form/select-box.tag'
import './components/common/form/attach-photo.tag'
import './components/common/form/outputtext.tag'
import './components/common/form/progress-bar.tag'
import './components/common/form/note.tag'
import './components/common/form/login.tag'
import './components/common/form/pagination-bar.tag'
import './components/common/form/actions.tag'
import './components/common/form/action-group.tag'
import './components/common/form/action-button.tag'
import './components/common/grid/row.tag'
import './components/common/grid/column.tag'

// Patrones Funcionales
import './components/patterns/crud/searchpanel.tag'
import './components/patterns/crud/edit-button.tag'
import './components/patterns/crud/delete-button.tag'
import './components/patterns/crud/submit-button.tag'
import './components/patterns/crud/table-results.tag'
import './components/patterns/crud/simple-admin.tag'
import './components/patterns/crud/select-list.tag'
import './components/patterns/crud/modal-box.tag'
import './components/patterns/wizard/form-wizard.tag'
import './components/patterns/wizard/step-wizard.tag'

// Componentes generados
import './components/app/dominio/contrato/contrato-admin.tag'
 import './components/app/dominio/contrato/contrato-form.tag'
 import './components/app/dominio/contrato/contrato-add.tag'
 import './components/app/dominio/contrato/contrato-edit.tag'
 import './components/app/dominio/contrato/contrato-delete.tag'
import './components/app/dominio/titularcontrato/titularcontrato-admin.tag'
 import './components/app/dominio/titularcontrato/titularcontrato-add.tag'
 import './components/app/dominio/titularcontrato/titularcontrato-edit.tag'
import './components/app/dominio/emisor/emisor-admin.tag'
 import './components/app/dominio/emisor/emisor-form.tag'
import './components/app/dominio/firmaautorizada/firmaautorizada-admin.tag'
 import './components/app/dominio/firmaautorizada/firmaautorizada-delete.tag'
import './components/app/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-admin.tag'
 import './components/app/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-add.tag'
 import './components/app/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-edit.tag'
 import './components/app/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-delete.tag'
import './components/app/pantallas/datosgeneralesscreen.tag'
import './components/app/pantallas/operacionesefectivoscreen.tag'
import './components/app/pantallas/distribucioninstruccionesscreen.tag'
import './components/app/pantallas/aperturacontratoscreen.tag'
import './components/app/pantallas/reperfilamientopersonafisicascreen.tag'
import './components/app/pantallas/negativaperfilamientoscreen.tag'
import './components/app/pantallas/firmaautorizadascreen.tag'
import './components/app/pantallas/errorscreen.tag'

const msgs = require('json-loader!./default-messages.json')
var msgJSON = JSON.stringify(msgs)
localStorage.setItem('messages', msgJSON)

const config = require('json-loader!./config.json')
var precision = '2' // 2 is the default value
for (var k = 0; k < config.keys.length; k++) {
  var ks = config.keys[k]
  if (ks.key === 'precision') {
    precision = ks.value
    break
  }
}

localStorage.setItem('precision', precision)

const json = require('./tabledata.js')
var filenames = []
for (var j = 0; j < json.files.length; j++) {
  filenames[j] = (json.files[j].path)
  for (var c = 0; c < filenames[j].ids.length; c++) {
    localStorage.setItem('rows_' + filenames[j].ids[c].id, JSON.stringify(filenames[j].ids[c].rows))
    localStorage.setItem('header_' + filenames[j].ids[c].id, JSON.stringify(filenames[j].ids[c].headers))
    if (filenames[j].ids[c].actions !== 'undefined') {
      localStorage.setItem('actions_' + filenames[j].ids[c].id, JSON.stringify(filenames[j].ids[c].actions))
    }
  }
}

require('riot-routehandler')
var routes = [
  { route: '/', tag: 'datosgeneralesscreen' },
  { route: '/login/', tag: 'login' },
  { route: '/home/', tag: 'app' },
  
		   { route: '/dominio/contrato/contrato-admin/', tag: 'contrato-admin' },
{ route: '/dominio/contrato/contrato-add/', tag: 'contrato-add' },
{ route: '/dominio/contrato/contrato-edit/', tag: 'contrato-edit' },
{ route: '/dominio/contrato/contrato-delete/', tag: 'contrato-delete' },

		   { route: '/dominio/titularcontrato/titularcontrato-admin/', tag: 'titularcontrato-admin' },
{ route: '/dominio/titularcontrato/titularcontrato-add/', tag: 'titularcontrato-add' },
{ route: '/dominio/titularcontrato/titularcontrato-edit/', tag: 'titularcontrato-edit' },

		   { route: '/dominio/beneficiario/beneficiario-admin/', tag: 'beneficiario-admin' },

		   { route: '/dominio/limitante/limitante-admin/', tag: 'limitante-admin' },

		   { route: '/dominio/emisor/emisor-admin/', tag: 'emisor-admin' },

		   { route: '/dominio/firmaautorizada/firmaautorizada-admin/', tag: 'firmaautorizada-admin' },
{ route: '/dominio/firmaautorizada/firmaautorizada-delete/', tag: 'firmaautorizada-delete' },

		   { route: '/dominio/instruccionefectivo/instruccionefectivo-admin/', tag: 'instruccionefectivo-admin' },

		   { route: '/dominio/distribucioninstrucciones/distribucioninstrucciones-admin/', tag: 'distribucioninstrucciones-admin' },

		   { route: '/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-admin/', tag: 'reperfilamientopersonafisica-admin' },
{ route: '/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-add/', tag: 'reperfilamientopersonafisica-add' },
{ route: '/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-edit/', tag: 'reperfilamientopersonafisica-edit' },
{ route: '/dominio/reperfilamientopersonafisica/reperfilamientopersonafisica-delete/', tag: 'reperfilamientopersonafisica-delete' },

		   { route: '/dominio/negativaperfilamiento/negativaperfilamiento-admin/', tag: 'negativaperfilamiento-admin' },

  { route: '/pantallas/datosgeneralesscreen', tag: 'datosgeneralesscreen' },
  { route: '/pantallas/operacionesefectivoscreen', tag: 'operacionesefectivoscreen' },
  { route: '/pantallas/distribucioninstruccionesscreen', tag: 'distribucioninstruccionesscreen' },
  { route: '/pantallas/aperturacontratoscreen', tag: 'aperturacontratoscreen' },
  { route: '/pantallas/reperfilamientopersonafisicascreen', tag: 'reperfilamientopersonafisicascreen' },
  { route: '/pantallas/negativaperfilamientoscreen', tag: 'negativaperfilamientoscreen' },
  { route: '/pantallas/firmaautorizadascreen', tag: 'firmaautorizadascreen' },
  { route: '/pantallas/errorscreen', tag: 'errorscreen' },
  
]
riot.mount('*', { routes: routes, options: { hashbang: true, params: { title: 'Login', username: 'Usuario', password: 'Contraseña', link: '//' } } })
