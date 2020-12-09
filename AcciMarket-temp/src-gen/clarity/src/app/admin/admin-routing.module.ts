/** PSG Routing **/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AuthGuard } from '../_guards';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
         
          { // Administracion
            path: 'administracion',
            loadChildren: 'src/app/admin/administracion/administracion.psg.module#AdministracionDemoModule',
          },
          {
            path: 'user',
            loadChildren: 'src/app/admin/user/user.psg.module#UserDemoModule',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}


