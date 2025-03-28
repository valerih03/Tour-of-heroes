import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {MessageService} from './message.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  //metodo para enviar un mensaje
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes'); //of crea un observable a partir de un array
    return heroes;
  }
}
