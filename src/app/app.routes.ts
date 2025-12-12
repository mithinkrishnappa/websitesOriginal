import { Routes } from '@angular/router';
import { App } from '../app/app';
import { WelcomePage } from '../pages/welcomepage/welcomepage';

export const routes: Routes = [
  {
    path: '',
    component: App, // or whatever your default component is
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('../pages/welcomepage/welcomepage').then((m) => m.WelcomePage),
  },
];
