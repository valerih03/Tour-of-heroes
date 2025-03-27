import { Component } from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, CommonModule],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
