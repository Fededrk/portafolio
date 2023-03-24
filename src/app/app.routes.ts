import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { LoginComponent } from './components/index.paginas';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
