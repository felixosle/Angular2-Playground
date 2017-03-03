import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { PieComponent } from './shared/layout/pie/pie.component';
import { CabeceraComponent } from './shared/layout/cabecera/cabecera.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

import {AplicacionService} from './aplicacion.service';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    CabeceraComponent,
    MenuComponent,
    HomeComponent,
    Contenido1Component,
    Contenido2Component,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AplicacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
