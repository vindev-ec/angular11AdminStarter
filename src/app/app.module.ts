import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrincipalComponent } from './components/dashboard/principal/principal.component';
import { PerfilComponent } from './components/dashboard/perfil/perfil.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PrincipalComponent, PerfilComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
