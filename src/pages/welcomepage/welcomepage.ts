import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Router, RouterLink } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './welcomepage.html',
  styleUrls: ['./welcomepage.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms 200ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WelcomePage {

  constructor(private router: Router) {}

  openAbout(): void {
    this.router.navigate(['/about']);
  }
}