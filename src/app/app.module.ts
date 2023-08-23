import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/pages/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/pages/home/home.component';
import { AdicionarServicoComponent } from './core/pages/adicionar-servico/adicionar-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AdicionarServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
