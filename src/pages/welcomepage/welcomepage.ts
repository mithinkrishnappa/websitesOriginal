import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true, // required for loadComponent
  templateUrl: './welcomepage.html',
  styleUrls: ['./welcomepage.css']
})
export class WelcomePage {

  constructor(private router: Router) {}

  openAbout(): void {
    this.router.navigate(['/about']);
  }
}