import { Component } from '@angular/core';
import { HeroesComponent } from "./heroes/heroes.component";
import { CommonModule } from '@angular/common';
import { MessagesComponent } from "./messages/messages.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, CommonModule, MessagesComponent, FormsModule],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
