import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrincipalComponent } from './components/dashboard/principal/principal.component';
import { PerfilComponent } from './components/dashboard/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/principal', pathMatch: 'full' },
      {
        path: 'principal',
        component: PrincipalComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
