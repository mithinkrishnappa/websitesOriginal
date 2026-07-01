import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about-component/about-component';
import { WelcomePage } from '../pages/welcomepage/welcomepage';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/welcomepage/welcomepage').then((m) => m.WelcomePage),
  },
  { path: 'about', component: AboutComponent },
];
