// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Contenido1Component } from './contenido1/contenido1.component';
import { Contenido2Component } from './contenido2/contenido2.component';

// Route Configuration
export const routes: Routes = [
  { path: 'contenido1', component: Contenido1Component },
  { path: 'contenido2', component: Contenido2Component }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);