// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HomeComponent } from './shared/layout/home/home.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full' },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'contenido1', component: Contenido1Component },
  { path: 'contenido2', component: Contenido2Component },
  { path: 'aplicaciones', component: HomeComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);