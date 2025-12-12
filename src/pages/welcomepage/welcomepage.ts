import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true, // required for loadComponent
  template: `
    <h1>Welcome to Angular!</h1>
    <p>This is your welcome page.</p>
  `,
})
export class WelcomePage {}