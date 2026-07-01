import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/welcomepage/welcomepage').then((m) => m.WelcomePage),
  },
  {
    path: 'experience',
    loadComponent: () => import('../pages/hr/hr').then((m) => m.HrPage),
  },
  {
    path: 'projects',
    loadComponent: () => import('../pages/projects/projects').then((m) => m.ProjectsPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('../pages/support/support').then((m) => m.SupportPage),
  },
];
